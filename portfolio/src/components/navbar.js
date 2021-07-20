import React from 'react';
import { FaAsterisk } from 'react-icons/fa';
// import nav style sheet
import { GrInstagram } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";


function Navbar({ currentPage, handlePageChange}) {
    return (
        <div className= "navBar">
        <span className="navIcon">
        <FaAsterisk />
        </span>
        <ul className="nav navLinks justify-content-center">
            <li className="nav-item">
                <a href="#about" onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "nav-link-active" : "nav-link"}>
                
                about
                
                </a>
            </li>
            <li className="nav-item">
                <a href="#portfolio" onClick={() => handlePageChange("Projects")}
                className={currentPage === "Projects" ? "nav-link-active" : "nav-link"}>
                
                projects    
                
                </a>
            </li>
            <li className="nav-item">
                <a href="#contact" onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "nav-link-active" : "nav-link"}>

                contact
                
                </a>
            </li>
        </ul>
        <div className="socialMedia">
            <span>
                <GrInstagram />
            </span>
            <span>
                <GrFacebook />
            </span>
            <span>
                <GrTwitter />
            </span>
        </div>

        </div>
    )
}


export default Navbar;
