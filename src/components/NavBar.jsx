import React, { useEffect, useState } from "react";
import "../styles/components/NavBar.css";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { routes, guestRoutes, userRoutes } from "../data/routes";

export default function Navbar() {
  const [hideNav, setHideNav] = useState(true);
  const [hideUser, setHideUser] = useState(true);
  const [isHome, setIsHome] = useState(true);

  let location = useLocation();
  useEffect(() => {
    setHideUser(true);
    setHideNav(true);
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

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
          {routes.map((route, index) => (
            <LinkRouter to={route.link} key={`route-${index}`}>
              <button className={route.className}>{route.name}</button>
            </LinkRouter>
          ))}
        </div>
      </div>
      <div className="NavBar-user">
        <button className="user-button" onClick={toggleHideUser}>
          <img src="/img/bx-user-circle.svg" className="user-icon" alt="user icon" />
        </button>
        {!hideUser && (
          <div className="user-buttons">
            {guestRoutes.map(route => (
              <LinkRouter to={route.link}>
                <button className={route.className}>{route.name}</button>
              </LinkRouter>
            ))}
            {userRoutes.map(route => (
              <LinkRouter to={route.link}>
                <button className={route.className}>{route.name}</button>
              </LinkRouter>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
