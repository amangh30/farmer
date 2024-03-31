import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../style/Search.css'; 

const Search = () =>{

    return (
    <div className ="bhoi">

     
     <div className="head1">
        <h1>BHARTIYA KRISHI VYAPAAR</h1>
     </div>

    <div className="search1">
    

    

    <h2> SEARCH TO SHOW ITEMS... </h2>
    
    <button type="submit"><SearchIcon style={{fontSize:'35px'}} className='icon' /></button>

    

    </div>
    </div>
    );
};


export default Search
