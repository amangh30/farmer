import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import '../style/Navbar.css';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../assets/logo.PNG" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products" />
        <button> <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> </button>
      </div>
      <div className="options">
        <div className="login">
        <FontAwesomeIcon icon="fa-solid fa-user" />
          <span>Login</span>
        </div>
        <div className="cart">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          <span>Cart</span>
        </div>
        <div className="become-seller">
        <FontAwesomeIcon icon={faStore} />
          <span>Become a Seller</span>
        </div>
        <div className="more-options">
        <button><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
