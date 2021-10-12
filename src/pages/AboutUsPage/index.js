import React from 'react'
import Boss from '../../components/Boss';
import ContactWid from '../../components/ContactWid';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import PricesContainer from '../../components/PricesContainer';
import Rights from '../../components/Rights';
import TeamSection from '../../components/TeamSection';
import WorkMeth from '../../components/WorkMeth';
import WorkServices from '../../components/WorkServices';

const AboutUsPage = () => {
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <Navbar page="About us" />
                <Boss />
                <PricesContainer />
                <WorkMeth />
                <WorkServices />
                {/* <TeamSection /> */}
                <ContactWid />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default AboutUsPage;