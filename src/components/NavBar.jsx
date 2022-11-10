import React, { useEffect, useState } from "react";
import "../styles/components/NavBar.css";
import { Link as LinkRouter, useLocation } from "react-router-dom";

export default function Navbar() {
  const [hideNav, setHideNav] = useState(true);
  const [hideUser, setHideUser] = useState(true);
  const [isHome, setIsHome] = useState(true);
  let location = useLocation();
  useEffect(() => {
    if(location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location])

  const toggleHideUser = () => {
    setHideNav(true);
    setHideUser(!hideUser);
  };

  const toggleHideNav = () => {
    setHideUser(true);
    setHideNav(!hideNav);
  };
  return (
    <nav className={`NavBar ${!isHome ? "bg-navbar" : ""}`}>
      <div className="NavBar-navigation">
        <LinkRouter to="/">
          <img className="NavBar-logo" alt="logo" src="/logo192.png" />
        </LinkRouter>
        <button className="NavBar-menuButton" onClick={toggleHideNav}>
          <img src="/img/bx-menu.svg" alt="Menu Icon" />
        </button>
        <div className={`NavBar-dropdown ${hideNav ? "NavBar-hide" : ""}`}>
          <LinkRouter to="/cities">
            <button className="NavBar-link border-bottom-md-white border-round-md-top">Cities</button>
          </LinkRouter>
          <LinkRouter to="/hotels">
            <button className="NavBar-link border-round-md-bottom">Hotels</button>
          </LinkRouter>
        </div>
      </div>
      <div className="NavBar-user">
        <button className="user-button" onClick={toggleHideUser}>
          <img src="/img/bx-user-circle.svg" className="user-icon" alt="user icon" />
        </button>
        {!hideUser && (
          <div className="user-buttons">
            <LinkRouter to="/signin">
              <button className="user-link border-bottom-white border-round-top">Sign in</button>
            </LinkRouter>
            <LinkRouter to="/signup">
              <button className="user-link border-bottom-white">Sign up</button>
            </LinkRouter>
            <LinkRouter to="/newcity">
              <button className="user-link border-bottom-white">New City</button>
            </LinkRouter>
            <LinkRouter to="/newhotel">
              <button className="user-link border-round-bottom">New Hotel</button>
            </LinkRouter>

          </div>
        )}
      </div>
    </nav>
  );
}
