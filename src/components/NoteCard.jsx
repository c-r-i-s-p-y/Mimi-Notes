// src/components/NoteCard.jsx
import React from "react";
import "../styles/noteCard.css";

export default function NoteCard({ note, onClick }) {
  return (
    <div className="note-card" onClick={() => onClick(note)}>
      <div className="note-content">{note.content}</div>
      <div className="note-name">
        {note.name || note.date.toLocaleString()}
      </div>
    </div>
  );
}
