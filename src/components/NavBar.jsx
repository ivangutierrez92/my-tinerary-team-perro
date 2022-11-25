import React, { useEffect, useState } from "react";
import "../styles/components/NavBar.css";
import { Link as LinkRouter, useLocation } from "react-router-dom";
import { routes, adminRoutes, guestRoutes, userRoutes } from "../data/routes";
import { useDispatch, useSelector } from "react-redux";
import signInActions from "../redux/actions/signInActions";
import swal from "sweetalert";

export default function Navbar() {
  const [hideNav, setHideNav] = useState(true);
  const [hideUser, setHideUser] = useState(true);
  const [isHome, setIsHome] = useState(true);
  let user = useSelector(store => store.signIn);
  let location = useLocation();
  let dispatch = useDispatch();
  let { signout: signoutAction } = signInActions;

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

  const signout = async () => {
    try {
      let confirmation = await swal("confirmation", "¿Are you sure you want to Sign out?", {
        buttons: ["Cancel", "Yes"],
        dangerMode: true,
      });
      if (confirmation) {
        let res = await dispatch(signoutAction(user.token)).unwrap();
        if (res.success) {
          swal("success", res.message, "success");
        } else {
          swal("error", res.message, "error");
        }
      }
    } catch (error) {
      swal("error", error, "error");
    }
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
        {!hideNav && (
          <div className={`NavBar-dropdown`}>
            {routes.map((route, index) => (
              <LinkRouter to={route.link} key={`route-${index}`}>
                <button className="user-link border-bottom-white border-round-top">{route.name}</button>
              </LinkRouter>
            ))}
            {user.role === "admin" &&
              adminRoutes.map((route, index) => (
                <LinkRouter to={route.link} key={`userRoute-${index}`}>
                  <button className="user-link border-bottom-white border-round-top">{route.name}</button>
                </LinkRouter>
              ))}
            {(user.role === "user" || user.role === "admin") &&
              userRoutes.map((route, index) => (
                <LinkRouter to={route.link} key={`userRoute-${index}`}>
                  <button className="user-link border-bottom-white border-round-top">{route.name}</button>
                </LinkRouter>
              ))}
          </div>
        )}
      </div>
      <div className="NavBar-user">
        <button className="user-button" onClick={toggleHideUser}>
          <img src={user.logged ? user.photo : "/img/bx-user-circle.svg"} className="user-icon" alt="user icon" />
        </button>
        {!hideUser && (
          <div className="user-buttons">
            {user.logged ? (
              <>
                <LinkRouter>
                  <button className="user-name">{user.name}</button>
                </LinkRouter>
                <button onClick={signout} className="user-link border-round-bottom">
                  Sign out
                </button>
              </>
            ) : (
              guestRoutes.map((route, index) => (
                <LinkRouter to={route.link} key={`guestRoute-${index}`}>
                  <button className="user-link border-bottom-white border-round-top">{route.name}</button>
                </LinkRouter>
              ))
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
