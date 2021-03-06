import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SearchIcon from '@material-ui/icons/Search';
import {useState,useEffect} from 'react';

const Header = (props)=>{

    const [searchField, setSearchField] = useState("");
    const [notes,setNotes] = useState(props.notes);

    useEffect(() => {
       setNotes(props.notes);
    }, [props])
  

    function changeHandeller(event){
        setSearchField(event.target.value);
    }

    function clickHandeller(){
        setSearchField('');
    }


    const searchedNotes = notes.filter(
        note => { return (note.title.toLowerCase().includes(searchField.toLowerCase()) || note.body.toLowerCase().includes(searchField.toLowerCase()))
        }
      );
    

    function submitHandeller(event){
        event.preventDefault();
        if (searchField===''){
            return
        }
        props.setSearching(true);
        props.setSearchedNotes(searchedNotes)
        setSearchField('');
    }
    

    return  <>
            <div className="header-item" >
                <span className="nav-menu"><MenuOutlinedIcon/></span>
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "/>
                <span className="nav-brand">Keep</span>
             </div>
             <div className="header-item">
                <form onSubmit={submitHandeller} className="flex-form search-form" autoComplete="off">
                <button className="search-icon"><SearchIcon/></button>
                <input type="text" name="search" value={searchField} onChange={changeHandeller} className="search-input" placeholder="Search"/>
                <button className="search-icon close-icon" onClick={clickHandeller}><CloseOutlinedIcon/></button>

                </form>

             </div>
             </>
}

export default Header;

