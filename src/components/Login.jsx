import React, { useState } from "react";
import { saveSession } from "../utils/session";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../utils/firebase"; // Your firebase.js config file
import "../styles/login.css";

export default function Login({ setLoggedIn }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPassword = async () => {
    try {
      const db = getDatabase(app);
      const snapshot = await get(ref(db, "/")); // root
      if (!snapshot.exists()) {
        console.error("No password found in DB");
        return null;
      }
      const data = snapshot.val();
      return data.password?.trim() || null;
    } catch (error) {
      console.error("Error fetching password:", error);
      return null;
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    const passwordFromDB = await fetchPassword();
    setLoading(false);

    if (!passwordFromDB) {
      alert("Failed to fetch password.");
      return;
    }

    if (input === passwordFromDB) {
      saveSession(true);
      setLoggedIn(true);
    } else {
      alert("❌ Oops! Wrong password.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">MimiNotes 🕊</h2>
        <p className="login-subtitle">Your dove’s diary</p>

        <input
          type="password"
          className="login-input"
          placeholder="Little dove’s code here 🕊"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="login-button"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Taking flight..." : "Flappy 🕊"}
        </button>
      </div>
    </div>
  );
}
