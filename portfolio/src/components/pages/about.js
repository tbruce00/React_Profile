import React from 'react';
import '../../assets/about.css';
import profpic from '../../images/ProfilePic.png';

export default function About() {
    return (
        <div className="container">
        <div className="about mx-auto p-auto">
            <h1>Trevor Bruce's Portfolio</h1>
            <h2>about me</h2>
            <img src={profpic} alt="Super Cool Pic of Me" />
            <br />
            <div className="aboutMe">
                <p>

                </p>
            </div>
        </div>
        </div>

    );
}