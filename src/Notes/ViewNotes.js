import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@material-ui/icons/TurnedInOutlined';
import {useState,useEffect} from "react"



const ViewNotes = ({notes,editNote,deleteNote,pinNote,archiveNote}) => {

    const [noteList, setNoteList] = useState(notes);
    const [pinnedList,setPinnedList] = useState([]);
    const [otherList,setOtherList] = useState([]);
  


    useEffect(() => {
        setNoteList(notes)
        setPinnedList(notes.filter(note=>note.isPinned))
        setOtherList(notes.filter(note=>!note.isPinned))
      }, [notes])

   

    
   return  <>

 

        <div className="cards">

            <div className="card-group">
                
                { !pinnedList.length&&noteList.length>0 ? (
                        noteList.map((note)=>(
                          <div className="card" key={note.id} style={{backgroundColor:note.color}} >
                                <span className="card-title">{note.title}</span>
                                <p className="card-body">{note.body}</p>
                                <div className="card-row">
                                    {(note.tag !==null)&&(<span className="card-tag">{note.tag}</span>)}
                                    
                                    <div>
                                        <span className="card-icon" onClick={()=>
                                        editNote(note)}
                                        ><EditOutlinedIcon fontSize="small"/></span>

                                        <span onClick={() => 
                                        deleteNote(note.id,note)}
                                        className="card-icon"
                                        ><DeleteOutlineOutlinedIcon fontSize="small"/></span>

                                    </div>                  
                                </div> 
                                <button className="card-mark" onClick={()=>pinNote(note.id)} style={{backgroundColor:note.color}}>{note.isPinnedpin?<TurnedInOutlinedIcon/>:
                                <TurnedInNotOutlinedIcon/>}</button>
                            </div>
                        
                        ))
                    ):(
                        <div className="cards">
                            {!noteList.length&&(<h2>No notes</h2>)}
                        </div>
                    )
            
                }
        </div>

        <div className="card-group">
            {pinnedList.length>0&&(
                pinnedList.map((note)=>(
                    <div className="card" key={note.id} style={{backgroundColor:note.color}}>
                        <span className="card-title">{note.title}</span>
                        <p className="card-body">{note.body}</p>
                        
                    
                        <div className="card-row">
                            {(note.tag !==null)&&(<span className="card-tag">{note.tag}</span>)}
                            
                            <div>
                                <span className="card-icon" onClick={()=>
                                editNote(note)}
                                ><EditOutlinedIcon fontSize="small"/></span>

                                <span onClick={() => 
                                deleteNote(note.id,note)}
                                className="card-icon"
                                ><DeleteOutlineOutlinedIcon fontSize="small"/></span>
                            </div>
                        
                        </div>
                        <button className="card-mark" onClick={()=>pinNote(note.id)} style={{backgroundColor:note.color}}>{!note.isPinnedpin?<TurnedInOutlinedIcon/>:
                        <TurnedInNotOutlinedIcon/>}</button>

                    </div>
                
                        ))
                    )
            }

        </div>
        
       {pinnedList.length>0&&noteList.length>1&&(<p>others</p>)}
       <div className="card-group">
            {pinnedList.length>0&&noteList.length>0&&(
                otherList.map((note)=>(
                        <>
                        <div className="card" key={note.id} style={{backgroundColor:note.color}}>
                            <span className="card-title">{note.title}</span>
                            <p className="card-body">{note.body}</p>

                            <div className="card-row">
                                {(note.tag !==null)&&(<span className="card-tag">{note.tag}</span>)}
                                
                                <div>
                                    <span className="card-icon icon-edit" onClick={()=>
                                    editNote(note)}
                                    ><EditOutlinedIcon fontSize="small"/></span>

                                    <span onClick={() => 
                                    deleteNote(note.id,note)}
                                    className="card-icon icon-delete"
                                    ><DeleteOutlineOutlinedIcon fontSize="small"/></span>
                                </div>
                            
                            </div>
                            <button className="card-mark" onClick={()=>pinNote(note.id)} style={{backgroundColor:note.color}}>{note.isPinnedpin?<TurnedInOutlinedIcon/>:
                            <TurnedInNotOutlinedIcon/>}</button>

                    </div>
                    </>
                
                ))
            )}
       </div>
    
  
            </div>
    </>
}


// const ViewNotes = (props) => {


//    return <div className="cards">
       
//         { props.notes.length>0 ? (
//                 props.notes.map((note)=>(
            
//                         <div className="card" key={note.id} style={{backgroundColor:note.color}}>
//                             <span className="card-title">{note.title}</span>
//                             <p className="card-body">{note.body}</p>
//                             <p className="card-body">{note.isPinned?"true":"false"}</p>
                    
//                             <div className="card-row">
//                                 {(note.tag !==null)&&(<span className="card-tag">{note.tag}</span>)}
                                
//                                 <div>
//                                     <span className="card-icon" onClick={()=>
//                                     props.editNote(note)}
//                                     ><EditOutlinedIcon fontSize="small"/></span>

//                                     <span onClick={() => 
//                                     props.deleteNote(note.id,note)}
//                                     className="card-icon"
//                                     ><DeleteOutlineOutlinedIcon fontSize="small"/></span>
//                                 </div>
                            
//                             </div>

//                       </div>
                
//                 ))
//             ):(
//                 <div className="no-cards">
//                     <h2>No notes</h2>
//                 </div>
//             )
       
//         }
//     </div>
// }

export default ViewNotes;