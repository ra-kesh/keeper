import React from 'react'
import {useState,useEffect} from "react"
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import RestoreFromTrashOutlinedIcon from '@material-ui/icons/RestoreFromTrashOutlined';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';


export default function VIewTrashNotes({notes,trashDelete,trashRestore}) {

    const [noteList, setNoteList] = useState(notes);

    useEffect(() => {
        setNoteList(notes)
      }, [notes])
  
    return (
        <>
        <div className="cards">
        {noteList.length>0&&(<h2>{noteList.length} Notes Found..</h2>)}
        
         <div className="card-group">
                
                {noteList.length>0 &&(
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
                    )
            
                }
          </div>
            
        </div>
        
        {!noteList.length&&(<div className="no-cards">
        <div className="nonote-img"><DeleteSweepOutlinedIcon fontSize="inherit"/></div>
        <div className="nonote-text">No Notes in Trash</div>
        </div>)}
        </>
    )
}
