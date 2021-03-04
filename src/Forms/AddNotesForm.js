
import {useState} from 'react';

const AddNotesForm = (props) => {
    const initialState = { id: null, title: '', body: '' ,tag:''}

	  const [ note, setNote ] = useState(initialState);
    const [expanded,setExpanded]=useState(false);

    function changeHandeller (event){
        const { name, value } = event.target
		    setNote({ ...note, [name]: value })
    }

    function clickHandeller(){
      setExpanded(true)
    }

    function closeHandeller(){
      if(!note.title&&!note.body){
        setExpanded(false)
      }
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

        {expanded &&
        (<input type="text" name="title" value={note.title} onChange={changeHandeller} className="form-items form-input" placeholder="Title"/>)}

        <textarea type="text" name="body" value={note.body} onChange={changeHandeller} onClick={clickHandeller} className="form-items form-textarea" rows={expanded?3:1} placeholder="Take a note..."/>

        {expanded && (
          <div className="form-items-secondary">
          <select name="tag" value={note.tag} onChange={changeHandeller} className="form-select">
            <option hidden>Add Label..</option>
            {props.tags.map((tag)=>(
              <option key={tag.id}  >{tag.name}</option>
            ))}
            
          </select>
          <button className='form-button' onClick={closeHandeller}>Close</button>
         </div>
        )}
      </form>
    )
  }
  
  export default AddNotesForm;