import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@material-ui/icons/TurnedInOutlined';
import {useState} from 'react';

const AddNotesForm = (props) => {
    const initialState = { id: null, title: '', body: '' ,tag:'',isPinned:false,color:""}

	  const [ note, setNote ] = useState(initialState);
    const [expanded,setExpanded]=useState(false);
    const [pin,setPin]=useState(false);
    const [color,setColor]=useState('')

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
        props.addNote(note);
        setNote(initialState);
        setPin(false)
        setColor('')
    }

    return (
      <form className="flex-form" onSubmit={submitHandeller} style={{backgroundColor:color}} autoComplete="off">
      
        {expanded &&(
          <input type="text" name="title" value={note.title} onChange={changeHandeller} className="form-items form-input" placeholder="Title"style={{backgroundColor:color}}/>)}
          <textarea type="text" name="body" value={note.body} onChange={changeHandeller} onClick={clickHandeller} className="form-items form-textarea" rows={expanded?3:1} placeholder="Take a note..."style={{backgroundColor:color}}/>

        {expanded && (
          <div className="form-items-secondary">
            <div className="form-group">
                <select name="tag" value={note.tag} onChange={changeHandeller} className="form-select">
                  <option hidden>Add Label..</option>
                  {props.tags.map((tag)=>(
                    <option key={tag.id}  >{tag.name}</option>
                  ))}
                </select>
                <input name="color" type="color" value={color===''?"#7e7777":color} onChange={colorHandeller} className="form-color"/>  
            </div>
            <button className='form-button' onClick={closeHandeller}>Close</button>
         </div>    
        )}
        {expanded && (<button className="form-mark" onClick={pinHandeller} style={{backgroundColor:color}}>{pin?<TurnedInOutlinedIcon/>:
        <TurnedInNotOutlinedIcon/>}</button>)}
      </form>
    )
  }
  
  export default AddNotesForm;