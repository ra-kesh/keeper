import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

const Header = ()=>{
    return  <div className="header-item">
                <span className="nav-menu"><MenuOutlinedIcon/></span>
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "/>
                <span className="nav-brand">Keep</span>
             </div>
}

export default Header;