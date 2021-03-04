import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import{useState} from 'react';

const ViewTags = (props) => {

   const [focus,setFocused] = useState(false);


   function focusHandeller(){
       setFocused(true);
   }

   function unFocusHandeller(){
       setFocused(false)
   }

   return <div className="tag-container">

        <div className="tag-div">
            <span><EmojiObjectsOutlinedIcon /></span>
            <span value="all" onClick={props.allNotes}>Notes</span>
        </div>
        { props.tags.length>0 ? (
                props.tags.map((tag,i)=>(
                    <div className="tag-div" key={tag.id} >
                        
                            {(tag.name!=='')&&(<span onClick={()=>props.editTag(tag)}
                            >{focus&&(<EditOutlinedIcon />)}</span>)}

                            <div className="tag-name"
                            onMouseEnter={focusHandeller}
                            onMouseLeave={unFocusHandeller}
                            onClick={()=>props.filterTag(i)}
                            >{!focus&&(tag.name!=='')&&(<LabelOutlinedIcon />)}{tag.name}</div>
  
                        
                    </div>
                ))
            ):(
                <div className="no-small-cards">
                    <h2>No Tags</h2>
                </div>
            )
       
        }
    </div>

}



export default ViewTags;