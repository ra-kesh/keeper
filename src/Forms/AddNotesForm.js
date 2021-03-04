
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
        if (!note.body) {
            return
        } 
        props.addNote(note);
        setNote(initialState);

    }

    return (
      <form className="flex-form" onSubmit={submitHandeller}>
        <input type="text" name="title" value={note.title} onChange={changeHandeller} className="form-items form-input" placeholder="Title"/>
        <textarea type="text" name="body" value={note.body} onChange={changeHandeller} className="form-items form-textarea" placeholder="Take a note..."/>
        
        <div className="form-items-secondary">
          <select name="tag" value={note.tag} onChange={changeHandeller}>
            <option hidden></option>
            {props.tags.map((tag)=>(
              <option>{tag.name}</option>
            ))}
            
          </select>
          <button>close</button>
        </div>
      </form>
    )
  }
  
  export default AddNotesForm;