
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
        <input type="text" name="title" value={note.title} onChange={changeHandeller} className="form-items form-input"/>
        <textarea type="text" name="body" value={note.body} onChange={changeHandeller} className="form-items form-textarea" rows={3}/>
        
        <div className="form-items-secondary">
          <select name="tag" value={note.tag} onChange={changeHandeller} className="form-select">
            <option hidden>Add Label..</option>
            {props.tags.map((tag)=>(
              <option>{tag.name}</option>
            ))}
            
          </select>

          <div>
            <button className='form-button'>Update</button>
            <button onClick={() =>props.setEditing(false)} className='form-button'>Cancel</button>
          </div>

        </div>
       
      </form>
    )
  }
  
  export default EditNotesForm;