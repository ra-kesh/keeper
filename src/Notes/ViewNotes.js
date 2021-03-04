import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const ViewNotes = (props) => (

    <div className="cards">
       
        { props.notes.length>0 ? (
                props.notes.map((note)=>(
                    <div className="card" key={note.id}>
                        <span className="card-title">{note.title}</span>
                        <p className="card-body">{note.body}</p>

                        <div className="card-row">
                            {(note.tag !==null)&&(<span className="card-tag">{note.tag}</span>)}
                            
                            <div>
                                <span onClick={()=>
                                props.editNote(note)}
                                ><EditOutlinedIcon fontSize="small"/></span>

                                <span  onClick={() => 
                                props.deleteNote(note.id)}
                                className="card-icon"
                                ><DeleteOutlineOutlinedIcon fontSize="small"/></span>
                            </div>
                           
                        </div>

                       
                    </div>
                ))
            ):(
                <div className="no-cards">
                    <h2>No notes</h2>
                </div>
            )
       
        }
    </div>
)

export default ViewNotes;