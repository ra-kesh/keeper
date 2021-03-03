import {useState,useEffect} from 'react';

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
            props.deleteTag(tag.id)
        } 
        props.updateTag(tag.id, tag)

    }

    return (

      <form onSubmit={submitHandeller}>
        <input type="text" name="name" value={tag.name} onChange={changeHandeller}/>
      </form>
      
    )
  }
  
  export default EditTagsForm;