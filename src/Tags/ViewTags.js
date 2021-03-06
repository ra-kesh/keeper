
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import{useState,useEffect} from 'react';

const ViewTags = (props) => {

    const [currentTag,setCurrentTag] = useState(props.currentTag);

    useEffect(()=>{
        setCurrentTag(props.currentTag)
    },[props])


   return <div className="tag-container">
        <div className={currentTag==="all"?"tag-div-active":"tag-div"} onClick={props.allNotes}>
            <span className="tag-icon"><EmojiObjectsOutlinedIcon /></span>
            <div value="all" className="tag-name">Notes</div>
        </div>
        { props.tags.length>0 && (
                props.tags.map((tag,i)=>((tag.name!=='')&&

                    <div className={tag.name===currentTag?"tag-div-active":"tag-div"} key={tag.id} onClick={()=>props.filterTag(i)} >           
                        
                           {tag.name!==''&&tag.name===currentTag?((<span className="tag-icon edit-icon" onClick={()=>props.editTag(tag)}
                            >{(<EditOutlinedIcon fontSize="small" />)}</span>)):(<span className="tag-icon label-icon" ><LabelOutlinedIcon /></span>)}
                        
                            <div className="tag-name"> {tag.name}</div> 

                    </div>
                ))
            )

        }
        <div className={currentTag==="trash"?"tag-div-active":"tag-div"}
        onClick={()=>props.viewDeletedNotes()}
        >
            <span className="tag-icon"><DeleteOutlinedIcon /></span>
            <div className="tag-name">Trash</div>       
        </div>

    </div>

}

export default ViewTags;