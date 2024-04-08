import React from 'react';
import SearchIcon from '@mui/icons-material/Search'; 
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-titles">
      <MenuIcon style={{ color:'gray' }} />
      <div className="navbar-title">TIME</div>
      </div>
      <div className='search'>
        <SearchIcon style={{ marginRight: '5px', color:'gray' }}  /> 
        <input type="text" placeholder="Search..." className="navbar-input" />
      </div>
    </div>
  );
}

export default Navbar;
