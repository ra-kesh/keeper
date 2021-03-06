import React from 'react'
import {useState,useEffect} from "react"
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import RestoreFromTrashOutlinedIcon from '@material-ui/icons/RestoreFromTrashOutlined';




export default function VIewTrashNotes({notes,trashDelete,trashRestore}) {

    const [noteList, setNoteList] = useState(notes);
    // const [pinnedList,setPinnedList] = useState([]);
    // const [otherList,setOtherList] = useState([]);
  


    useEffect(() => {
        setNoteList(notes)
        // setPinnedList(notes.filter(note=>note.isPinned))
        // setOtherList(notes.filter(note=>!note.isPinned))
      }, [notes])

   
    return (
        <div className="cards">
         <div className="card-group">
                
                {noteList.length>0 ? (
                        noteList.map((note)=>(
                          <div className="card" key={note.id} style={{backgroundColor:note.color}} >
                                <span className="card-title">{note.title}</span>
                                <p className="card-body">{note.body}</p>
                                <div className="card-row">
                                    {(note.tag !==null)&&(<span className="card-tag">{note.tag}</span>)}
                                    
                                    <div>
                                        <span className="card-icon" onClick={()=>
                                        trashRestore(note,note.id)}
                                        ><RestoreFromTrashOutlinedIcon fontSize="small"/></span>

                                        <span onClick={() => 
                                        trashDelete(note.id)}
                                        className="card-icon"
                                        ><DeleteOutlineOutlinedIcon fontSize="small"/></span>

                                    </div>                  
                                </div> 
                            </div>
                        
                        ))
                    ):(
                        <div className="cards">
                            {!noteList.length&&(<h2>No notes</h2>)}
                        </div>
                    )
            
                }
        </div>
            
        </div>
    )
}
