import React, { useState } from 'react';
import './Note.css';
import App from './App';

function Note({ saveNote }) {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleButtonClick = () => {
    saveNote(noteText);
  };

  return (
    <div className='NoteDiv'>
      <textarea
        rows='7'
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className='NoteFooter'>
        <button className='saveButton' onClick={handleButtonClick}>Save</button>
      </div>
    </div>
  );
}


export default Note;