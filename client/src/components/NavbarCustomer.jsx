import '../style/Navbar.css';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useEffect, useRef, useState } from 'react';
import { Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../GlobalContext';
import axios from 'axios';

const NavbarCustomer = ({ sendDataToParent }) => {
  const { access2, setAccess2 } = useGlobal();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [originalSuggestions, setOriginalSuggestions] = useState([]);
  
  const suggestionRef = useRef(null);

  useEffect(() => {
    fetchSuggestions();
    // Add event listener to handle clicks outside of the suggestion box
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Remove event listener when the component is unmounted
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fetchSuggestions = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/product/`);
      const data = response.data;
      const uniqueNames = Array.from(new Set(data.map(item => item.name.toLowerCase())));
      setSuggestions(uniqueNames);
      setOriginalSuggestions(uniqueNames);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };


  const LogOut =()=>{
    setAccess2(false)
  }
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

  const handleInputChange = (event) => {
    const newQuery = event.target.value.toLowerCase(); // Convert query to lowercase
    setQuery(newQuery);
    if (newQuery.trim() === '') {
      setSuggestions(originalSuggestions); // Revert to original list when query is empty
    } else {
      const filteredNames = originalSuggestions.filter(name =>
        name.includes(newQuery)
      ).slice(0, 5); // Limit suggestions to maximum of 5
      setSuggestions(filteredNames);
    }
  };
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    sendDataToParent(suggestion);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  const handleClickOutside = (event) => {
    if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
      // Click is outside of the suggestion box, so close it
      setSuggestions([]);
    }
  };


  return (
    <div>
    {access2?(<div>{isMobile?(
        <nav className={hamburgerOpen?"nav-mob":"nav"}>
        <div className="logo">
        Icon
      </div>
        <Drawer  onClose={handleClose} open={open} sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          gap:2,
          padding:'7px'
      }}}>
     <div className="logo">
        Icon
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
          Login as Farmer
      </div>
      <div className={hamburgerOpen?"cart2-mob":"cart2"}> 
      <ShoppingCartOutlinedIcon style={{fontSize:'25px'}} />
          Cart
      </div>
      <div className={hamburgerOpen?"seller-mob":"seller"}>
      <StorefrontOutlinedIcon style={{fontSize:'25px'}} />
          Become A Seller
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
        Icon
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
        value={query}
        onChange={handleInputChange}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
      <ul ref={suggestionRef} className={`suggestion-list ${suggestions.length === 0 ? 'hidden' : ''}`}>
        {suggestions.map((suggestion, index) => (
          <li className='suju' key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
        ))}
      </ul>
    </div>
    <div className={hamburgerOpen?"cart2-mob":"cart2"}> 
    <ShoppingCartOutlinedIcon style={{fontSize:'25px'}} />
        Cart
    </div>
    <div onClick={LogOut} className={hamburgerOpen?"seller-mob":"seller"}>
    <StorefrontOutlinedIcon style={{fontSize:'25px'}} />
        Logout
    </div>
    <div className={hamburgerOpen?"option-mob":"option"}>
    <AccountBoxOutlinedIcon style={{fontSize:'25px'}}/>
        Profile
    </div>
  <div class="hamburger" onClick={handleNav}>
    <MenuOutlinedIcon />
    </div>
  </nav>)}</div>
):navigate('/login')}

  </div>
   );
}

export default NavbarCustomer;
