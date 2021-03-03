
import {useState,useEffect} from 'react';

const EditNotesForm = (props) => {

   const [ note, setNote ] = useState(props.currentNote);

    useEffect(() => {
        setNote(props.currentNote)
      }, [props])
	
    function changeHandeller (event){
        const { name, value } = event.target
		    setNote({ ...note, [name]: value })
    }

    function submitHandeller(event){
        event.preventDefault()
        if (!note.title || !note.body) {
            return
        } 
        props.updateNote(note.id, note)

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
        <button>update note</button>
        
        <button
        onClick={() =>
         props.setEditing(false)}
      >
        Cancel
      </button>
      </form>
    )
  }
  
  export default EditNotesForm;