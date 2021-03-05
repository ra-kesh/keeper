import {useState,useEffect} from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const EditTagsForm = (props) => {

   const [ tag, setTag ] = useState(props.currentTag);

    useEffect(() => {
        setTag(props.currentTag)
      }, [props])
	
    function changeHandeller (event){
        const { name, value } = event.target
		    setTag({ ...tag, [name]: value })
    }

    function submitHandeller(event){
        event.preventDefault()
        if (!tag.name) {
           return
        } 
        props.updateTag(tag.id, tag)

    }

    return (

      <form onSubmit={submitHandeller}>
        <input type="text" name="name" value={tag.name} onChange={changeHandeller} placeholder="Update existing label.." className="tag-form edit-form"/>
        <span onClick={()=>props.deleteTag(tag.id)} className="tag-close"><DeleteOutlinedIcon fontSize="small"/></span>
        <button className="tag-close"><CloseOutlinedIcon fontSize="small"/></button>
      </form>
      
    )
  }
  
  export default EditTagsForm;