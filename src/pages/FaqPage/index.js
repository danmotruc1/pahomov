import React from 'react'

import FaqComp from '../../components/FaqComp';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import Rights from '../../components/Rights';

const FaqPage = () => {
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <div className="header_absolute s-parallax ds bs s-overlay">
                    <Navbar />
                    <Navi page='Frequently Asked Questions' />
                </div>
                <FaqComp />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default FaqPage;