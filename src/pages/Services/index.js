import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import Rights from '../../components/Rights';
import ServicesSection from '../../components/ServicesSection';

const ServicesPage = () => {
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <Navbar page="Services" />
                <ServicesSection />
                <ServicesSection />
                <ServicesSection />
                <ServicesSection />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default ServicesPage;