import React from 'react';
import resume from '../../../public/resume/resume.pdf';
import { AiFillFilePdf } from 'react-icons/ai';


export default function Resume() {
    return (

        <div className="container">
            <div className="col-md-6 justify-content-center">
                <h1 className="resumeHeader">Resume</h1>
                <br />
                <br />
                <h2>Check Out My Resume:</h2>
                <a href={resume} target="_blank">
                    <AiFillFilePdf />
                </a>
            </div>
        </div>
    )
}
