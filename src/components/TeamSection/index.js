import React, { useEffect, useState } from 'react'
import TeamSingle from '../TeamSingle'
import ReactDOM from 'react-dom'

const TeamSection = () => {
    const [type, setType] = useState('react')
    const [members, setMembers] = useState([]);
    const [timsing, setTimsing] = useState([]);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type })
    };

    useEffect(() => {
        const url = 'http://localhost:8000/api/members';

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                const elem =
                    (<div id="team-single"
                        className="owl-carousel"
                        data-autoplay="false"
                        data-loop="true"
                        data-responsive-lg={3}
                        data-responsive-md={2}
                        data-responsive-sm={2}
                        data-nav="false"
                        data-dots="false"
                        data-margin={60}
                    >

                        {result.map((member, index) =>
                            <div key={index} className="vertical-item content-padding text-center overflow-hidden">
                                <div className="item-media">
                                    <img src="images/team/02.jpg" alt="" />
                                    <div className="content-hover team-btn">
                                        <a href="team/12" className="btn btn-small btn-maincolor">
                                            Mail me
                                        </a>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="team-name fw-700">
                                        <a href="/team/12">{member.vorname} {member.nachname}</a>
                                    </h6>
                                    <p>{member.function}</p>
                                    <p className="social-icons with-border">
                                        <span>
                                            <a
                                                href={member.facebook}
                                                className="fa fa-facebook border-icon rounded-icon"
                                                title="facebook"
                                            > </a>
                                        </span>
                                        <span>
                                            <a
                                                href={member.telegram}
                                                className="fa fa-paper-plane border-icon rounded-icon"
                                                title="telegram"
                                            > </a>
                                        </span>
                                        <span>
                                            <a
                                                href={member.instagram}
                                                className="fa fa-instagram border-icon rounded-icon"
                                                title="instagram"
                                            > </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>);

        ReactDOM.render(elem, document.getElementById('caruseli'));

        setMembers(result);
    })
        .catch(e => console.log(e));

}, []);





return (
    <section className="ls s-pt-55 s-pb-30 s-pt-lg-145 s-pb-lg-120" id="team">
        <div className="container">
            <div className="col-12 mb-50">
                <h3 className="special-heading text-center">
                    Meet Our<span className="text-gradient">Team</span>
                </h3>
                <p className="fs-20 color-dark">The Car Repair Appointment</p>
                <div className="divider-60 d-none d-lg-block" />
            </div>
            <div className="row">
                <div className="col-md-12" id="caruseli">
                    {/* <div id="team-single"
                            className="owl-carousel"
                            data-autoplay="false"
                            data-loop="true"
                            data-responsive-lg={3}
                            data-responsive-md={2}
                            data-responsive-sm={2}
                            data-nav="false"
                            data-dots="false"
                            data-margin={60}
                        >
                            {members.map(member => {

                                return <div className="vertical-item content-padding text-center overflow-hidden">
                                    <div className="item-media">
                                        <img src="images/team/02.jpg" alt="" />
                                        <div className="content-hover team-btn">
                                            <a href="team/12" className="btn btn-small btn-maincolor">
                                                Mail me
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6 className="team-name fw-700">
                                            <a href="/team/12">{member.vorname} {member.nachname}</a>
                                        </h6>
                                        <p>{member.function}</p>
                                        <p className="social-icons with-border">
                                            <span>
                                                <a
                                                    href={member.facebook}
                                                    className="fa fa-facebook border-icon rounded-icon"
                                                    title="facebook"
                                                > </a>
                                            </span>
                                            <span>
                                                <a
                                                    href={member.telegram}
                                                    className="fa fa-paper-plane border-icon rounded-icon"
                                                    title="telegram"
                                                > </a>
                                            </span>
                                            <span>
                                                <a
                                                    href={member.instagram}
                                                    className="fa fa-instagram border-icon rounded-icon"
                                                    title="instagram"
                                                > </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>

                            })}
                            
                        </div>
                        .team-carousel */}
                </div>
                <div className="divider-2" />
            </div>
        </div>
    </section>
);
}

export default TeamSection;