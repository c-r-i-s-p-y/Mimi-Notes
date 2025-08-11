import React, { useState } from "react";
import { getDatabase, ref, update } from "firebase/database";
import { app } from "../utils/firebase";
import "../styles/settings.css";

export default function Settings({ themeSettings, setThemeSettings, onClose }) {
  const [activeTab, setActiveTab] = useState("password");
  const [newPassword, setNewPassword] = useState("");

  async function handleThemeChange(mode) {
    const isDark = mode === "dark";
    document.documentElement.style.setProperty("--theme-bg", isDark ? "#000000" : "#ffffff");
    document.documentElement.style.setProperty("--theme-text", isDark ? "#ffffffff" : "#000000");
    document.documentElement.style.setProperty("--theme-primary", isDark ? "#ffb6c1" : "#ff6fb5");
    document.documentElement.style.setProperty("--theme-secondary", isDark ? "#ffe4e1" : "#ffc8dd");

    setThemeSettings({ ...themeSettings, mode });

    try {
      const db = getDatabase(app);
      await update(ref(db), { mode });
      console.log("✅ Theme saved to Firebase");
    } catch (error) {
      console.error("❌ Error saving theme:", error);
    }
  }

  async function savePasswordToFirebase() {
    if (!newPassword.trim()) {
      alert("⚠️ Please enter a password before saving!");
      return;
    }

    try {
      const db = getDatabase(app);
      await update(ref(db), { password: newPassword });
      alert("✅ Password saved successfully! 🕊");
      setNewPassword("");
    } catch (error) {
      console.error("❌ Error saving password:", error);
      alert(`Error: ${error.message}`);
    }
  }

  return (
    <div className="settings-modal">
      <div className="settings-modal-content">
        {/* Sidebar */}
        <div className="settings-sidebar">
          <button
            className={activeTab === "password" ? "active" : ""}
            onClick={() => setActiveTab("password")}
          >
            Change Password
          </button>
          <button
            className={activeTab === "theme" ? "active" : ""}
            onClick={() => setActiveTab("theme")}
          >
            Theme
          </button>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>

        {/* Content */}
        <div className="settings-content">
          {activeTab === "password" && (
            <div>
              <h4>Change Password</h4>
              <input
                class="password"
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button onClick={savePasswordToFirebase}>Save Password</button>
            </div>
          )}

          {activeTab === "theme" && (
            <div className="theme-tab">
              <h4>Theme Mode</h4>
              <div className="dark-mode-toggle">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={themeSettings.mode === "dark"}
                    onChange={(e) =>
                      handleThemeChange(e.target.checked ? "dark" : "light")
                    }
                  />
                  <span className="slider"></span>
                </label>
                <span className="mode-label light">Light</span>
                <span className="mode-label dark">Dark</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
