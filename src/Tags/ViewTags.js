
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import{useState,useEffect} from 'react';

const ViewTags = (props) => {


    const [tag,setTag] = useState(props.currentTag);

    useEffect(()=>{
        setTag(props.currentTag)
    },[props])

    // const [tags,setTags] = useState(props.tags);
    const [focus,setFocused] = useState(false);
//    const [select,setSelect] = useState('');

    // useEffect(() => {
    //    setTags(props.tags)
    // }, [props])

   function focusHandeller(id){  
       setFocused(true)
   }

   function unFocusHandeller(){
       setFocused(false)
   }



   function clickHandeller(id){
    setTag((tag.id===id)&&{...tag,selected:true})
    console.log(tag)
   }

   return <div className="tag-container">

        <div className="tag-div" onClick={props.allNotes}>
            <span className="tag-icon"><EmojiObjectsOutlinedIcon /></span>
            <div value="all" className="tag-name">Notes</div>
        </div>
        { props.tags.length>0 ? (
                props.tags.map((tag,i)=>((tag.name!=='')&&
                    <div className={tag.name===tag?"tag-div-active":"tag-div"}                 
                      key={tag.id} 
                      onClick={()=>props.filterTag(i)}
                      onMouseEnter={focusHandeller}
                      onMouseLeave={unFocusHandeller}>
                        
                            {(tag.name!=='')&&(<span className="tag-icon" onClick={()=>props.editTag(tag)}
                            >{focus&&(<EditOutlinedIcon fontSize="small" />)}</span>)}

                            {!focus&&(tag.name!=='')&&(<span className="tag-icon"><LabelOutlinedIcon /></span>)}

                           
                            <div className="tag-name"
                            onClick={()=>clickHandeller(tag.id)}
                            >
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