import './App.css';
import { useState } from 'react'
import ViewNotes from './Notes/ViewNotes'
import AddNotesForm from './Forms/AddNotesForm'
import EditNotesForm from './Forms/EditNotesForm'
import notesData from './Datas/NotesData'
import tagsData from './Datas/TagsData'
import ViewTags from './Tags/ViewTags'
import AddTagsForm from './Forms/AddTagsForm'
import EditTagsForm from './Forms/EditTagsForm';



function App() {
  
  const initialState = { id: null, title: '', body: '' ,tag:''}
  const initialTagState = {id:null,name:""}

  // state
  const [notes, setNotes] = useState(notesData);
  const [editing, setEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState(initialState);
  const [filtering,setFiltering] = useState(false);
  const [filteredNotes,setFilteredNotes] = useState([]);
  const [tags,setTags] = useState(tagsData);
  const [currentTag,setCurrentTag] = useState(initialTagState)
  const [tagEditing,setTagEditing] = useState(false);

  // crud note

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

  const allNotes = () =>{
    setFiltering(false)
    setCurrentTag('all')
  }

  // crud tag

  const filterTag = i =>{
    setFiltering(true)
    setCurrentTag(tags[i].name)
    setFilteredNotes(notes.filter(note=>note.tag === tags[i].name)); 
  }

  const addTag = (tag) => {
    tag.id = tags.length + 1
    setTags([...tags, tag])
  }

  const editTag =tag=>{
    setTagEditing(true)
    setCurrentTag({ id: tag.id, name: tag.name})
  }

  const updateTag = (id, updatedTag) => {
    setTagEditing(false)
    setTags(tags.map((tag) => (tag.id === id ? updatedTag : tag)))
  }

  const deleteTag = id => {
		setTagEditing(false)
		setTags(tags.filter(tag => tag.id !== id))
	}


  
  
  // view
  return (
    <div className="App">
      <div className="container">
          <div className="header">
              <div className="header-item">
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "/>
                <span className="nav-brand">Keep</span>
              </div>
          </div>
          <div className="flex-row">
              <div className='flex-column-secondary'>
                <ViewTags tags={tags} 
                 filterTag={filterTag}
                 currentTag={currentTag}
                 editTag={editTag}
                 allNotes={allNotes}
                 
                 />
                 {
                 tagEditing ?
                 <EditTagsForm currentTag={currentTag} 
                 updateTag={updateTag} deleteTag={deleteTag} /> :
                 <AddTagsForm addTag={addTag}/>
                 }
                 
               </div>
              <div className="flex-column">
                {
                  editing?(
                    <div>
                      <EditNotesForm
                        tags={tags}
                        setEditing={setEditing}
                        currentNote={currentNote}
                        updateNote={updateNote}
                      />
                    </div>
                  ):(
                    <div>
                      <AddNotesForm addNote={addNote} tags={tags}/>
                    </div>
                  )
                }
                <div>
                  <ViewNotes notes={filtering ? filteredNotes : notes} 
                  editNote={editNote} 
                  deleteNote={deleteNote} 
                  />
                </div> 
            </div>
         </div>
      </div>
    </div>
  );
}

export default App;