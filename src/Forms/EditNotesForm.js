import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@material-ui/icons/TurnedInOutlined';
import {useState,useEffect} from 'react';

const EditNotesForm = (props) => {

   const [ note, setNote ] = useState(props.currentNote);
   const [pin,setPin]=useState(note.isPinned);
   const [color,setColor]=useState(note.color)


    useEffect(() => {
        setNote(props.currentNote)
      }, [props])
	
    function changeHandeller (event){
        const { name, value } = event.target
		    setNote({ ...note, [name]: value })
    }

    function pinHandeller(event){
      event.preventDefault()
      setNote({ ...note, isPinned: !note.isPinned })
      setPin(!pin)
    }

    function colorHandeller(event){
      setColor(event.target.value)
      setNote({...note,color:event.target.value})

    }


    function submitHandeller(event){
        event.preventDefault()
        if (!note.body) {
            return
        } 
        props.updateNote(note.id, note)

    }

    return (
      <form className="flex-form" onSubmit={submitHandeller} style={{backgroundColor:color}} autoComplete="off">
        <input type="text" name="title" value={note.title} onChange={changeHandeller} className="form-items form-input"style={{backgroundColor:color}}/>
        <textarea type="text" name="body" value={note.body} onChange={changeHandeller} className="form-items form-textarea" rows={3}style={{backgroundColor:color}}/>
        
        <div className="form-items-secondary">
            <div className="form-group">
                <select name="tag" value={note.tag} onChange={changeHandeller} className="form-select">
                  <option hidden>Add Label..</option>
                  {props.tags.map((tag)=>(
                    <option key={tag.id}>{tag.name}</option>
                  ))}
                  
                </select>
                <input name="color" type="color" value={note.color} onChange={colorHandeller} className="form-color"/>  
              </div>

          <div>
            <button className='form-button'>Update</button>
            <button onClick={() =>props.setEditing(false)} className='form-button'>Cancel</button>
          </div>

        </div>
        <button className="form-mark" onClick={pinHandeller} style={{backgroundColor:color}}>{pin?<TurnedInOutlinedIcon/>:
        <TurnedInNotOutlinedIcon/>}</button>
      </form>
    )
  }
  
  export default EditNotesForm;