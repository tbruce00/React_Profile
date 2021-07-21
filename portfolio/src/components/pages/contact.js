import React from 'react';
import Form from '../form';
import '../assets/contact.css'
import { GrDocumentPdf } from 'react-icons/gr';

export default function Contact() {
    return (
        <div className="container">
        <div className="mx-auto mt-auto p-auto">
        <h1 className="text-center">Contact Me</h1>
        <Form />
        <br />
        <br />
        <h2>View My Resume Here</h2>
        <a className="pdfIcon" href="portfolio/public/resume/Trevor Bruce Resume.pdf" target="_blank"><button className="btn btn-primary">Resume Link</button></a>
        <h2>Download My Resume Here</h2>
        <a className="pdfIcon" href="portfolio/public/resume/Trevor Bruce Resume.pdf" download="Trevor Bruce Resume"><GrDocumentPdf /></a>
        </div>
        </div>
    );
}