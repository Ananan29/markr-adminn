// Navbar.js
import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import logo from "/Users/anniemannie/Desktop/coding/mern/minorproject/Adminn/src/assets/logo.svg"; 
import logo from "./../../assets/logo-1.png"
import {useEffect} from "react"
import Authorisation from "./../Adminauth/Authorisation"

const Navbar = ({isadminauthenticated,setisadminauthenticated}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isloggedin,setisloggedin]=useState(false);
  const backendapi = import.meta.env.VITE_BACKEND_API;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const checkAdminAuthenticated = async () => {
    // console.log("response-pragya12");
    // try {
    //   // console.log("response-pragya");
    //     const response = await fetch(backendapi+"/admin/checklogin", {
    //       // `${config.API_BASE_URL}/admin/checklogin`
    //         method: "GET",
    //         headers: {
    //             "Content-Type" : "application/json",
    //         },
    //         credentials: "include"
    //     });
    //     console.log("response", response);
    //     if (response.ok) {
    //         //Admin is authenticated
    //         setisadminauthenticated(false);
    //     }
    //     else {
    //         //Admin is not authenticated
    //         setisadminauthenticated(false);
    //     }
    // }
    // catch (err) {
    //     console.error(err);
    //     setisadminauthenticated(false);
    // }
// }

useEffect(() => {
  console.log("response-pragya11", isadminauthenticated);
    // checkAdminAuthenticated();
}, []);
const [showpopup, setShowpopup] = useState(false)
  // const { theme, toggleTheme } = useTheme(false);
  useEffect(()=>{
    console.log(isadminauthenticated)
    // setisadminauthenticated(true)
  },[isadminauthenticated])
  const loggedIn =(x) =>{
    console.log("loggedIn",x)
    setisadminauthenticated(true)
  }
  const logout=()=>{
    console.log("logout")
    setisadminauthenticated(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Website Logo" className="logo" />
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {/* <li><button className="login-button">Login</button></li> */}
        <li>{
        // console.log("iisisisisisisis",isadminauthenticated) &&
        isadminauthenticated
        ? <button className="btn" onClick={logout}>Logout</button>
        : <button onClick={() => {
          setShowpopup(true)
        }}>Login</button>
      }</li>
      {
        showpopup&& 
        // <Login setShowpopup={setShowpopup} loggedIn={loggedIn}/>
        <Authorisation setShowpopup={setShowpopup} loggedIn={loggedIn} setisloggedin={setisadminauthenticated}/>
        // <h1 className="mainhead1">Login page</h1>
      }
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {/* {isOpen ? <FaTimes /> : <FaBars />} */}
      </div>
    </nav>
  );
};

export default Navbar;