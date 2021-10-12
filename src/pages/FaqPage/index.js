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
                <Navbar page="FAQ" />
                <FaqComp />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default FaqPage;