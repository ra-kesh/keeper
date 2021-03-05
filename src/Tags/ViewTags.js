
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
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

        <div className="tag-div" onClick={props.allNotes}>
            <span className="tag-icon"><EmojiObjectsOutlinedIcon /></span>
            <div value="all" className="tag-name">Notes</div>
        </div>
        { props.tags.length>0 ? (
                props.tags.map((tag,i)=>((tag.name!=='')&&
                    <div className="tag-div"                      
                      key={tag.id} 
                      onMouseEnter={focusHandeller}
                      onMouseLeave={unFocusHandeller}>
                        
                            {(tag.name!=='')&&(<span className="tag-icon" onClick={()=>props.editTag(tag)}
                            >{focus&&(<EditOutlinedIcon fontSize="small" />)}</span>)}

                            {!focus&&(tag.name!=='')&&(<span className="tag-icon"><LabelOutlinedIcon /></span>)}

                           
                            <div className="tag-name"
                            onClick={()=>props.filterTag(i)}>
                            {tag.name}</div>                       
                    </div>
                ))
            ):(
                <div className="tag-div">
                   <div className="tag-name">No label</div>           
                </div>
            )

        }
        <div className="tag-div" 
        onClick={()=>props.viewDeletedNotes()}
        >
            <span className="tag-icon"><DeleteOutlinedIcon /></span>
            <div className="tag-name">Trash</div>       
        </div>

    </div>

}


export default ViewTags;