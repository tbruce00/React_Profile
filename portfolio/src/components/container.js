import React, { useState } from 'react';
import Navbar from './navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';






export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderHomepage = () => {
        if ( currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    }

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div className='portfolio'>
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderHomepage()}
        </div>
    </div>
);
}

