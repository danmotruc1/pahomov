import React from 'react';

import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import Rights from '../../components/Rights';

const GalleryHome = () => {
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <div className="header_absolute s-parallax ds bs s-overlay">
                    <Navbar />
                    <Navi page='Gallery' />
                </div>
                <Gallery />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default GalleryHome;