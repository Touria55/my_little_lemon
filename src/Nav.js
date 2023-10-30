import "./App.css";
import logo from "./assets/logo.png" ;
import {useState} from "react";


function Nav(){
    const[MenuOpen,setMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setMenuOpen(!MenuOpen)
    }
    return(
         <nav className={`navbar ${MenuOpen ? "open":""}`}>
            <a href="/" className="logo"> <img style={{width:"200px"}} alt="logo" src={logo} /> </a>

            <div className="menu-icon" onClick={toggleMenu} >
            <div className="bar" ></div>
            <div className="bar" ></div>
            <div className="bar" ></div>
            </div>

            <ul className={`nav-links ${MenuOpen ? "visible":""}`} >
                <li> <a href="/"> Home </a> </li>
                <li> <a href="/about"> About </a> </li>
                <li> <a href="/services"> Services </a> </li>
                <li> <a href="/menu"> Menu </a> </li>
                <li> <a href="/reservations"> Reservations </a> </li>
                <li> <a href="/order"> Order Online </a> </li>
                <li> <a href="/login"> Login </a> </li>
            </ul>
            
           
         </nav>
    )
}

export default Nav;