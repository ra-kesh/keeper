import './App.css';
import { useState } from 'react'
import ViewNotes from './Notes/ViewNotes'
import AddNotesForm from './Forms/AddNotesForm'
import EditNotesForm from './Forms/EditNotesForm'


function App() {
  const notesData = [
    {
      id: 1,
      title: "something 1",
      body: "something something",
      tag: null
    },
    {
      id: 2,
      title: "something 2",
      body: "something something 2",
      tag: null
    },
    {
      id: 3,
      title: "something 3",
      body: "something something 3",
      tag: null
    }
    ,
   
  ];

  const initialState = { id: null, title: '', body: '' ,tag:''}

  // state
  const [notes, setNotes] = useState(notesData);
  const [editing, setEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState(initialState);


  // crud
  const addNote = (note) => {
    note.id = notes.length + 1
    setNotes([...notes, note])
  }

  const deleteNote = id => {
		setEditing(false)
		setNotes(notes.filter(note => note.id !== id))
	}

  const editNote = note =>{
    setEditing(true)
    setCurrentNote({ id: note.id, title: note.title, body: note.body , tag : note.tag})
  }

  const updateNote = (id, updatedNote) => {
    setEditing(false)
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)))
  }

  
  // view
  return (
    <div className="App">
      <div className="container">
          <h1>keeper</h1>
          <hr/>
          <div className="flex-row">
              <div className='flex-column-secondary'>
                <h2>tags</h2>
              </div>
              <div className="flex-column">
              {
                editing?(
                  <div>
                    <EditNotesForm
                      // editing={editing}
                      setEditing={setEditing}
                      currentNote={currentNote}
                      updateNote={updateNote}
                    />
						      </div>
                ):(
                  <div>
                     <AddNotesForm addNote={addNote}/>
                  </div>
                )
              }
                <div>
                  <ViewNotes notes={notes} editNote={editNote} deleteNote={deleteNote}/>
                </div> 
            </div>
         </div>
      </div>
    </div>
  );
}

export default App;
