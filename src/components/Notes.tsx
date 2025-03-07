import React, { useState } from 'react';
import styles from '../styles/Notes.module.css';

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [note, setNote] = useState('');

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  return (
    <div className={styles.notes}>
      <h2>Notes / Reminders</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note or reminder..."
      />
      <button onClick={addNote}>Add</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;