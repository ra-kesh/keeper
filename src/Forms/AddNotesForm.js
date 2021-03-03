
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
        <select name="tag" value={note.tag} onChange={changeHandeller}>
          <option hidden></option>
          {props.tags.map((tag)=>(
            <option>{tag.name}</option>
          ))}
          
        </select>
        <button>close</button>
      </form>
    )
  }
  
  export default AddNotesForm;