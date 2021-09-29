import React from 'react'
import Navbar from '../../components/Navbar';
import NotFoundSection from '../../components/NotFoundSection';
import Rights from '../../components/Rights';

const NotFound = () => {
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <Navbar />
                <NotFoundSection />
                <Rights />
            </div>
        </div>
    );
}

export default NotFound;