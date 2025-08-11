import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";

const FOLDER_ID = "YOUR_GOOGLE_DRIVE_FOLDER_ID"; // ← Replace with your real folder ID
const SCRIPT_BASE_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; // ← Replace with your Apps Script URL

export default function Note() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await fetch(`${SCRIPT_BASE_URL}?folderId=${FOLDER_ID}`);
        const fileList = await res.json();

        const fetchedNotes = await Promise.all(
          fileList.map(async (file) => {
            const noteRes = await fetch(`${SCRIPT_BASE_URL}?fileId=${file.id}`);
            const content = await noteRes.text();
            return { id: file.id, name: file.name, content };
          })
        );

        localStorage.setItem("mimi_notes", JSON.stringify(fetchedNotes));
        setNotes(fetchedNotes);
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    }

    fetchNotes();
  }, []);

  return (
    <div>
      <h2>📝 Your Notes</h2>
      <div className="note-list">
        {notes.map((note) => (
          <NoteCard key={note.id} title={note.name} content={note.content} />
        ))}
      </div>
    </div>
  );
}
