

const ViewTags = (props) => {

   return <div className="small-cards">

        <div className="small-card">
            <h3 value="all" onClick={props.allNotes}>Notes</h3>
        </div>
        { props.tags.length>0 ? (
                props.tags.map((tag,i)=>(
                    <div className="small-card" key={tag.id}>

                        <div>
                            <h3 
                            onClick={()=>props.filterTag(i)}
                            >{tag.name}</h3>
                            
                        </div>
                        <button onClick={()=>props.editTag(tag)}
                        >edit</button>
                        
                       
                       
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