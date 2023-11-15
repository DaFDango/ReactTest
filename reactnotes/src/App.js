import React, { useState } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import './App.css';

function App() {
  const [elements, setElements] = useState([]);

  const handleButtonClick = () => {
    const newElement = <Note saveNote={save} key={elements.length} />;
    setElements([...elements, newElement]);
  };

  const save = (text) => {
    console.log(text)
  }

  return (
    <>
      <div className='Capsule'>
        {elements}
        <div className="AppDiv">
          <button className="AppButton" onClick={handleButtonClick}>Add Element</button>
        </div>
      </div>
    </>
  );
}


export default App;