import React, { useEffect, useState } from 'react'
import TeamSingle from '../TeamSingle'

import './style.css'

const MyTeam = () => {
    const [type, setType] = useState('react');
    const [members, setMembers] = useState([]);
    const [timsing, setTimsing] = useState([]);

    

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type })
        };
        const url = 'http://admin.testmoc.com/api/members';

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => setMembers(result))
            .catch(e => console.log(e));

    }, []);

    return (
        <section className="ls s-pt-60 s-pb-20 s-pb-md-0 s-pt-lg-100 s-pb-lg-40 s-pt-xl-150 s-pb-xl-90 c-mb-10 c-mb-md-30 c-gutter-60">
            <div className="container">
                <div className="row">
                    {members.map((member, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex align-self-stretch">
                                <div className="vertical-item content-padding text-center overflow-hidden">
                                    <div className="item-media">
                                        <img className="memb" src={member['image-url']} alt={member.nachname} />
                                        {/* <div className="content-hover team-btn">
                                            <a href="#" className="btn btn-small btn-maincolor">
                                                Mail me
                                            </a>
                                        </div> */}
                                    </div>
                                    <div className="item-content">
                                        <h6 className="team-name fw-700">
                                            <a href="team-single.html">{ member.vorname } { member.nachname }</a>
                                        </h6>
                                        <p>AutoDoc Manager</p>
                                        <p className="social-icons with-border">
                                            <span>
                                                <a
                                                    href="#"
                                                    className="fa fa-facebook border-icon rounded-icon"
                                                    title="facebook"
                                                />
                                            </span>
                                            <span>
                                                <a
                                                    href="#"
                                                    className="fa fa-paper-plane border-icon rounded-icon"
                                                    title="telegram"
                                                />
                                            </span>
                                            <span>
                                                <a
                                                    href="#"
                                                    className="fa fa-instagram border-icon rounded-icon"
                                                    title="instagram"
                                                />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>)
                    })}


                    <div className="divider-2" />
                </div>
            </div>
        </section>)


}

export default MyTeam;