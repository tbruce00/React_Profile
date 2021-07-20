import React from 'react';
import '../../assets/about.css';
import profpic from '../../images/ProfilePic.png';

export default function About() {
    return (
        <div className="container">
        <div className="about mx-auto p-auto">
            <h1 className="text-center">Trevor Bruce's Portfolio</h1>
            <br />
            <h2>about me</h2>
            <img className="profPic" src={profpic} alt="Super Cool Pic of Me" />
            <br />
            <div className="aboutMe">
                <p>
                Life Long Learner. Adventurer. Coder In Progress.
                </p>
                <br/>
                <p>
                Full Stack Web Developer Student With A Creative Background.   
                </p>
                <br />
                <p>
                Upstate New York native turned Colorado transplant. A graduate of SUNY Brockport with a bachelor's degree in Media Production/Film Studies. 
                Spent most of my working life in the IT field and took on the coding bootcamp program in search of a change. With the intention of becoming proficient in coding languages and frameworks, translating the learning into a career in Web Development.     
                </p>
                <p>
                In my free time I enjoy spending time in the dichotomy of natural wonders and urban landscapes. I enjoy backpacking trips with friends and exploring the surroundings of my city, ruminating on reflections of life's experiences. As well as a good film or book on less adventurous evenings.     
                </p>
                <p>
                I hope you enjoy my portfolio. 
                Shoot me an e-mail.
                Lets connect.
                </p>
            </div>
        </div>
        </div>

    );
}