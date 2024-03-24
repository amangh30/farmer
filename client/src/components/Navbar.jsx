import '../style/Navbar.css';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        Icon
      </div>
      <div className="search">
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
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
      <div className="login">
        <AgricultureOutlinedIcon style={{fontSize:'25px'}}/>
          Login as Farmer
      </div>
      <div className="cart"> 
      <ShoppingCartOutlinedIcon style={{fontSize:'25px'}} />
          Cart
      </div>
      <div className="seller">
      <StorefrontOutlinedIcon style={{fontSize:'25px'}} />
          Become A Seller
      </div>
      <div className="option">
      <AccountBoxOutlinedIcon style={{fontSize:'25px'}}/>
          Profile
      </div>
    </nav>
  );
}

export default Navbar;
