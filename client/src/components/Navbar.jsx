import '../style/Navbar.css';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useEffect, useState } from 'react';
import { Drawer } from '@mui/material';
import icon from "../assets/icon.png"       

import { Link } from 'react-router-dom';
const Navbar = () => {
  const [hamburgerOpen,setHamburgerOpen] = useState(false);
  
  const [open,setOpen] = useState(false)
  const handleNav =()=>{
    setHamburgerOpen(true)
    setOpen(!open)
  }
  const handleClose=()=>{
    setOpen(false)
  }
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileQuery = window.matchMedia('(max-width: 768px)'); // Adjust the max-width according to your needs
      setIsMobile(isMobileQuery.matches);
    };

    checkIfMobile(); // Initial check

    const mediaQueryListener = () => {
      checkIfMobile(); // Check when media query matches change
    };

    window.addEventListener('resize', mediaQueryListener); // Listen for resize events

    return () => {
      window.removeEventListener('resize', mediaQueryListener); // Cleanup
    };
  }, []);
  return (
    <div>
      {isMobile?(
        <nav className={hamburgerOpen?"nav-mob":"nav"}>
        <div className="logo">
        <img style={{width:'40px'}} src={icon} alt="" />
      </div>
        <Drawer  onClose={handleClose} open={open} sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          gap:2,
          padding:'7px'
      }}}>
     <div className="logo">
      </div>
      <div className={hamburgerOpen?"search-mob":"search"}>
        <TextField
          id="search-bar"
          className="text"
          style={{width:'40vw'}}
          label="Search"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </div>
      <div className={hamburgerOpen?"login-mob":"login"}>
        <AgricultureOutlinedIcon style={{fontSize:'25px'}}/>
        <Link to='/loginf'>Login as Farmer</Link>        
      </div>
      <div className={hamburgerOpen?"cart2-mob":"cart2"}> 
      <ShoppingCartOutlinedIcon style={{fontSize:'25px'}} />
          Cart
      </div>
      <div className={hamburgerOpen?"seller-mob":"seller"}>
      <StorefrontOutlinedIcon style={{fontSize:'25px'}} />
      <Link to='/login'>Login</Link>
      </div>
      <div className={hamburgerOpen?"option-mob":"option"}>
      <AccountBoxOutlinedIcon style={{fontSize:'25px'}}/>
          Profile
      </div>
    </Drawer>
    <div class="hamburger" onClick={handleNav}>
      <MenuOutlinedIcon />
      </div>
    </nav>):(
      <nav className={hamburgerOpen?"nav-mob":"nav"}>
      <div className="logo">
      <img style={{width:'40px'}} src={icon} alt="" />
      </div>
    <div className={hamburgerOpen?"search-mob":"search"}>
      <TextField
        id="search-bar"
        className="text"
        style={{width:'40vw'}}
        label="Search"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </div>
    <div className={hamburgerOpen?"login-mob":"login"}>
      <AgricultureOutlinedIcon style={{fontSize:'25px'}}/>
        <Link to='/loginf'>Login as Farmer</Link>        
    </div>
    <div className={hamburgerOpen?"cart2-mob":"cart2"}> 
    <ShoppingCartOutlinedIcon style={{fontSize:'25px'}} />
        Cart
    </div>
    <div className={hamburgerOpen?"seller-mob":"seller"}>
    <StorefrontOutlinedIcon style={{fontSize:'25px'}} />
        <Link to='/login'>Login</Link>
    </div>
    <div className={hamburgerOpen?"option-mob":"option"}>
    <AccountBoxOutlinedIcon style={{fontSize:'25px'}}/>
        Profile
    </div>
  <div class="hamburger" onClick={handleNav}>
    <MenuOutlinedIcon />
    </div>
  </nav>)}
  </div>
   );
}

export default Navbar;
