import './App.css';
import { useState } from 'react'
import {v4} from 'uuid';

import Header from './Header/Header'
import ViewNotes from './Notes/ViewNotes'
import AddNotesForm from './Forms/AddNotesForm'
import EditNotesForm from './Forms/EditNotesForm'
import notesData from './Datas/NotesData'
import tagsData from './Datas/TagsData'
import ViewTags from './Tags/ViewTags'
import AddTagsForm from './Forms/AddTagsForm'
import EditTagsForm from './Forms/EditTagsForm';
import ViewTrashNotes from './Notes/VIewTrashNotes'



function App() {
  
  const initialState = { id: null, title: '', body: '' ,tag:''}
  const initialTagState = {id:null,name:""}

  // state for notes
  const [notes, setNotes] = useState(notesData);
  const [editing, setEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState(initialState);
  const [filtering,setFiltering] = useState(false);
  const [filteredNotes,setFilteredNotes] = useState([]);
  const [deletedNotes,setDeletedNotes] = useState([]);
  const [viewTrash,setViewTrash] = useState(false);
  const [searching,setSearching] = useState(false);
  const [searchedNotes,setSearchedNotes] = useState([]);

  // state for tags
  const [tags,setTags] = useState(tagsData);
  const [currentTag,setCurrentTag] = useState(initialTagState);
  const [tagEditing,setTagEditing] = useState(false);

  // crud for note

  const addNote = (note) => {
    note.id = v4();
    setNotes([...notes, note])
  }

  const deleteNote = (id,note) => {
		setEditing(false)
    setDeletedNotes([...deletedNotes,note]);
		setNotes(notes.filter(note => note.id !== id))

	}

  const editNote = note =>{
    setEditing(true)
    setCurrentNote({ id: note.id, title: note.title, body: note.body , tag : note.tag, color:note.color,isPinned:note.isPinned})
  }

  const updateNote = (id, updatedNote) => {
    setEditing(false)
    setSearching(false)
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)))
  }

  const allNotes = () =>{
    setSearching(false);
    setFiltering(false);
    setViewTrash(false);
    setCurrentTag('all')
  }

  const pinNote =(id)=>{
    setNotes((notes)=>
    notes.map((note)=>{
      if(note.id===id){
        return {...note,isPinned:!note.isPinned}
      }
      return note;
    })
    )
  }

  const trashDelete=(id)=>{
    setDeletedNotes(deletedNotes.filter(note=>note.id!==id));
  }

  const trashRestore=(note,id)=>{
    setNotes([...notes,note])
    setDeletedNotes(deletedNotes.filter(note=>note.id!==id));

  }

  const viewDeletedNotes=()=>{
    setFiltering(false);
    setViewTrash(true);
  }

  // crud for tag

  const filterTag = i =>{
    setSearching(false)
    setViewTrash(false);
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
    setCurrentTag({ id: tag.id, name: tag.name,selected:tag.selected})
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
             <Header      
             setSearching={setSearching}
             setSearchedNotes={setSearchedNotes}
             deletedNotes={deletedNotes}
             notes={notes}/>
          </div>
          <div className="flex-row">
              <div className='flex-column-secondary'>
                <ViewTags tags={tags} 
                 filterTag={filterTag}
                 editTag={editTag}
                 allNotes={allNotes}
                 viewDeletedNotes={viewDeletedNotes}  
                 currentTag={currentTag}           
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
                  editing&&!viewTrash?(
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
                      {!viewTrash&&(<AddNotesForm addNote={addNote} tags={tags}/>)}
                    </div>
                  )
                }
              
                  {viewTrash&&(<div>
                  <ViewTrashNotes notes={deletedNotes} 
                  trashDelete={trashDelete} 
                  trashRestore={trashRestore}
                  /></div>)}

                  {filtering&&(<div>
                  <ViewNotes notes={filteredNotes} 
                  editNote={editNote} 
                  deleteNote={deleteNote} 
                  pinNote={pinNote}
                  /></div>)}
            
                  {searching&&(<div>
                  <ViewNotes notes={searchedNotes} 
                  editNote={editNote} 
                  deleteNote={deleteNote} 
                  pinNote={pinNote}
                  /></div>)}

                  {!filtering&&!viewTrash&&!searching&&(<div>
                  <ViewNotes notes={notes} 
                  editNote={editNote} 
                  deleteNote={deleteNote} 
                  pinNote={pinNote}
                  /></div>)}
            </div>
         </div>
      </div>
    </div>
  );
}

export default App;