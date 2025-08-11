// src/App.jsx
import React, { useEffect, useState } from "react";
import { applyTheme } from "./utils/theme";
import Login from "./components/Login";
import NotesDashboard from "./components/NotesDashboard";
import { getSession } from "./utils/session";

function App() {
  const [loggedIn, setLoggedIn] = useState(getSession());
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      await applyTheme();
      setThemeLoaded(true);
    };
    loadTheme();
  }, []);

  if (!themeLoaded) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div className="dove-loader">
          🕊
        </div>
        <p style={{ marginTop: "20px", fontSize: "1.2rem", color: "#888" }}>
          Fluffing feathers for your notes...
        </p>
        <style>{`
          .dove-loader {
            font-size: 3rem;
            animation: fly 2s ease-in-out infinite;
          }
          @keyframes fly {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-10px) rotate(-10deg);
            }
            50% {
              transform: translateY(0) rotate(0deg);
            }
            75% {
              transform: translateY(-10px) rotate(10deg);
            }
          }
        `}</style>
      </div>
    );
  }


  return loggedIn ? (
    <NotesDashboard setLoggedIn={setLoggedIn} />
  ) : (
    <Login setLoggedIn={setLoggedIn} />
  );
}

export default App;
