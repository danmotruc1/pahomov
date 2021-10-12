import React from 'react'

import Navbar from '../../components/Navbar';
import PageSlider from '../../components/PageSlider';
import PricesContainer from '../../components/PricesContainer';
import WorkMeth from '../../components/WorkMeth';
import WorkServices from '../../components/WorkServices';
import TeamSection from '../../components/TeamSection';
import LastBlog from '../../components/LastBlog';
import ServicesWid from '../../components/ServicesWid';
import ContactWid from '../../components/ContactWid';
import Partners from '../../components/Partners';
import Footer from '../../components/Footer';
import Rights from '../../components/Rights';
import Cookies from 'react-cookie';

const Homepage = () => {

    return (
        <div id="canvas">
            <div id="box_wrapper">

                <Navbar />
                <PageSlider />
                <PricesContainer />
                <WorkMeth />
                <WorkServices />
                {/* <TeamSection /> */}
                {/* <LastBlog /> */}
                <ServicesWid />
                <ContactWid />
                <Partners />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default Homepage