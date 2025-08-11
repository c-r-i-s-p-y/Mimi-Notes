import React, { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import NoteModal from "./NoteModal";
import Settings from "./Settings";
import { clearSession } from "../utils/session";
import { getDatabase, ref, onValue, push, update, get, remove } from "firebase/database";
import { app } from "../utils/firebase";
import "../styles/dashboard.css";

export default function NotesDashboard({ setLoggedIn }) {
  const [mode, setMode] = useState("light");
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [loading, setLoading] = useState(true);
  const [themeSettings, setThemeSettings] = useState({
    primaryColor: getComputedStyle(document.documentElement).getPropertyValue("--theme-primary"),
    secondaryColor: getComputedStyle(document.documentElement).getPropertyValue("--theme-secondary"),
    mode: "light", // default until fetched
  });

  // Fetch theme mode from Firebase on mount
  useEffect(() => {
    const db = getDatabase(app);

    async function fetchMode() {
      try {
        const snapshot = await get(ref(db, "/"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          if (data.mode) {
            setMode(data.mode);
            setThemeSettings((ts) => ({ ...ts, mode: data.mode }));
          } else {
            console.error("Mode is missing in database");
          }
        } else {
          console.error("No data found in Firebase");
        }
      } catch (error) {
        console.error("Error fetching mode:", error);
      }
    }

    fetchMode();
  }, []);

  // Fetch notes from Firebase with live updates
  useEffect(() => {
    const db = getDatabase(app);
    const notesRef = ref(db, "notes");

    setLoading(true);
    const unsubscribe = onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedNotes = Object.entries(data).map(([id, note]) => ({
          id,
          ...note,
          date: note.date ? new Date(note.date) : new Date(),
        }));
        setNotes(loadedNotes);
      } else {
        setNotes([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSaveNote = async () => {
    if (!selectedNote.name.trim() && !selectedNote.content.trim()) {
      alert("⚠️ Please enter some content for your note!");
      return;
    }

    const db = getDatabase(app);
    const noteData = {
      name: selectedNote.name || new Date().toLocaleString(),
      content: selectedNote.content,
      date: new Date().toISOString(),
    };

    try {
      if (selectedNote.id) {
        // Update existing note
        await update(ref(db, `notes/${selectedNote.id}`), noteData);
      } else {
        // Create new note
        await push(ref(db, "notes"), noteData);
      }
    } catch (error) {
      console.error("❌ Error saving note:", error);
    }

    setSelectedNote(null);
  };

  const handleDeleteNote = async () => {
    if (!selectedNote?.id) return;

    const db = getDatabase(app);
    try {
      // Deleting by setting value to null
      await remove(ref(db, `notes/${selectedNote.id}`));
      setSelectedNote(null);
    } catch (error) {
      console.error("❌ Error deleting note:", error);
    }
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="nav-title">MimiNotes</div>
        <div className="nav-links">
          <button>My Notes</button>
          <button onClick={() => setShowSettings(true)}>Settings</button>
          <button
            onClick={() => {
              setLoggedIn(false);
              clearSession();
            }}
          >
            GoodBye 🕊
          </button>
        </div>
      </nav>

      <div className="quote">✨ "A short note is better than a long memory." ✨</div>

      <div className="notes-grid">
  {loading ? (
    <div className="center-message">Loading notes...</div>
  ) : notes.length === 0 ? (
    <div className="center-message">No notes available.</div>
  ) : (
    notes.map((note) => (
      <NoteCard key={note.id} note={note} onClick={() => setSelectedNote(note)} />
    ))
  )}
</div>


      <button className="add-btn" onClick={() => setSelectedNote({ name: "", content: "" })}>
        ＋
      </button>

      <NoteModal
        note={selectedNote}
        onChange={setSelectedNote}
        onSave={handleSaveNote}
        onCancel={() => setSelectedNote(null)}
        onDelete={handleDeleteNote}
      />

      {showSettings && (
        <div className="modal">
          <div className="modal-content large">
            <Settings
              themeSettings={themeSettings}
              setThemeSettings={setThemeSettings}
              onClose={() => setShowSettings(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
