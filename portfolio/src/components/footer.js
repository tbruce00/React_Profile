import React from 'react';
import { HiMail } from "react-icons/hi";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from 'react-icons/gr';
export default function Footer() {
    return (
        <div className= "footer">
            <div className="container text-center">
            <div>
                <a className="footerIcons" href="mailto:tbnyk03@gmail.com" target="_blank">
                    <HiMail />
                </a>
                <a className="footerIcons" href="https://www.linkedin.com/in/trevor-bruce-31569120b/" target="_blank">
                    <GrLinkedinOption />
                </a>
                <a className="footerIcons" href="https://github.com/tbruce00" target="_blank">
                    <GrGithub />
                </a>
                <span className="footerName">&#8482 No Methods Just Madness</span>  
            </div>    
            </div>


        </div>
    );
}
