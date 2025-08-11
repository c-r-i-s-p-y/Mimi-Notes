import React from "react";
import "../styles/Modal.css";

export default function NoteModal({ note, onChange, onSave, onCancel, onDelete }) {
  if (!note) return null;

  return (
    <div className="note-modal">
      <div className="note-modal-content">
        <h3>{note.id ? "Edit Note" : "New Note"}</h3>
        <input
          type="text"
          placeholder="Note name"
          value={note.name}
          onChange={e => onChange({ ...note, name: e.target.value })}
        />
        <textarea
          rows="6"
          placeholder="Text here..."
          value={note.content}
          onChange={e => onChange({ ...note, content: e.target.value })}
        />
        <div className="modal-actions">
          <button onClick={onSave}>Save</button>
          {note.id && <button className="delete-btn" onClick={onDelete}>Delete</button>}
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
