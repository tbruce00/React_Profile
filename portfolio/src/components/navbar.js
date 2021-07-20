import React from 'react';
import './../assets/nav.css';
import { FaAsterisk } from 'react-icons/fa';
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
            <a href="https://www.instagram.com/tbruce00/" target="_blank">
            <span>
                <GrInstagram />
            </span>
            </a>
            <a href="https://www.facebook.com/trevor.bruce.1428/" target="_blank">
            <span>
                <GrFacebook />
            </span>
            </a>
            <a href="https://twitter.com/tbruce03" target="_alt">
            <span>
                <GrTwitter />
            </span>
            </a>
        </div>

        </div>
    );
}


export default Navbar;
