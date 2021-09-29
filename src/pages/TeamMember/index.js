import React from 'react'

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import Rights from '../../components/Rights';
import TeamSection from '../../components/TeamSection';
import MemberInfo from '../../components/MemberInfo';

const TeamMember = () => {
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <div className="header_absolute s-parallax ds bs s-overlay">
                    <Navbar />
                    <Navi page='Member Name' />
                </div>
                <MemberInfo />
                {/* <TeamSection /> */}
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default TeamMember;