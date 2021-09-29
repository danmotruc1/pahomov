import React from 'react'

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import Rights from '../../components/Rights';
import MyTeam from '../../components/MyTeam';

const TeamPage = () => {
    
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <div className="header_absolute s-parallax ds bs s-overlay">
                    <Navbar />
                    <Navi page='Team' />
                </div>
                <MyTeam />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default TeamPage;