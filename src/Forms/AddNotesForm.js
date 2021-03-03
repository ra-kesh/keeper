
import {useState} from 'react';


const AddNotesForm = (props) => {
    const initialState = { id: null, title: '', body: '' ,tag:''}
	const [ note, setNote ] = useState(initialState)

    function changeHandeller (event){
        const { name, value } = event.target
		setNote({ ...note, [name]: value })
    }

    function submitHandeller(event){
        event.preventDefault()
        if (!note.title || !note.body) {
            return
        } 
        props.addNote(note);
        setNote(initialState);

    }

    return (
      <form className="flex-form" onSubmit={submitHandeller}>
        <input type="text" name="title" value={note.title} onChange={changeHandeller}/>
        <textarea type="text" name="body" value={note.body} onChange={changeHandeller}/>
        {/* <select onChange={changeHandeller}/> */}
        <button>Add new note</button>
      </form>
    )
  }
  
  export default AddNotesForm;