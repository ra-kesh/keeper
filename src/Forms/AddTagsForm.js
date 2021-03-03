import {useState} from 'react';

const AddTagsForm = (props) => {
    const initialState = { id: null, name: ''}

	  const [ tag, setTag ] = useState(initialState)

    function changeHandeller (event){
        const { name, value } = event.target
		setTag({ ...tag, [name]: value })
    }

    function submitHandeller(event){
        event.preventDefault()
        if (!tag.name) {
            return
        } 
        props.addTag(tag);
        setTag(initialState);

    }

    return (
      <form onSubmit={submitHandeller}>
        <input type="text" name="name" value={tag.name} onChange={changeHandeller}/>
      </form>
    )
  }
  
  export default AddTagsForm;