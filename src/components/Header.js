import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const auth = localStorage.getItem('users');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };

  return (
    <div>
      <section className="header">
        <img src="/images/logo.jpeg" alt="GlamAura Logo" className="logo" style={{ height: "50px", width: "50px" }} />  
        <Link to ="/" class="logo"> GlamAura </Link>
        <nav className="navbar" style={{ justifyContent: "end" }}>
          <div id="close-navbar" className="fas fa-times"></div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/staff">Staff</Link>
          {/* <Link to="/contact">Contact Us</Link> */}
          {auth ?
            (<Link to="/logout" onClick={logout}> LogOut </Link>) :
            (<Link to="/register">Register</Link>)}
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>

      </section>
    </div>
  );
};

export default Header;
