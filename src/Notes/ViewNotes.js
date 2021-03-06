import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@material-ui/icons/TurnedInOutlined';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
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
                
                { !pinnedList.length&&noteList.length>0 && (
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
                    )
            
                }
        </div>
        <div className="card-group group-text">
        {pinnedList.length>0&&(<span>PINNED</span>)}
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
        <div className="card-group group-text">
           {pinnedList.length>0&&otherList.length>0&&(<span>OTHERS</span>)}
        </div>
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
    
    {!noteList.length&&( <div className="no-cards no-note">
            <div className="nonote-img"><WbIncandescentOutlinedIcon fontSize="inherit"/></div>
            <div className="nonote-text">Notes you add appear here..</div>
    </div>)}

    </>
}

export default ViewNotes;