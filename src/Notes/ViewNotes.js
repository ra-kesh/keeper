

const ViewNotes = (props) => (

    <div className="cards">
        { props.notes.length>0 ? (
                props.notes.map((note)=>(
                    <div className="card" key={note.id}>
                        <h3>{note.title}</h3>
                        <h5>{note.body}</h5>

                        <button onClick={()=>
                        props.editNote(note)}
                        >edit</button>

                        <button  onClick={() => 
                        props.deleteNote(note.id)}>
                        delete</button>
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