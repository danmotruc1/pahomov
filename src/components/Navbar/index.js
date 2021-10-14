import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import mail from '../../img/mail.png'
import phone from '../../img/phone.png'
import Navi from '../Navi';
import './style.css';

const Navbar = props => {
    let location = useLocation();
    location = location.pathname;


    const [contact, setContact] = useState([]);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const url = 'http://localhost:8000/api/contact-info';

        fetch(url)
            .then(response => response.json())
            .then(result => {
                setContact(result);
                setMenu(true);
            })
            .catch(e => console.log(e));


    }, []);

    if (menu) {

        return (


            <div
                className="header_absolute s-parallax ds bs s-overlay"
                style={{ backgroundPosition: "50% 0px" }}
            >

                <>
                    <section className="page_toplogo ds s-overlay s-pt-10 s-pb-5 s-py-lg-30">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="d-lg-flex justify-content-lg-end align-items-lg-center">
                                        <div className="mr-auto">
                                            <div className="d-none d-lg-flex justify-content-center justify-content-lg-start">
                                                <a href='/' className='logo'>
                                                    <img src="images/logo.png" alt="logo" />
                                                    <span className="logo-text fw-500">
                                                        Pahomov<span className="fw-200">Transporte</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-lg-content-end align-items-center meta-icons">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h6><img src={mail} />Mail Us</h6>
                                                    <p className="fw-400">{contact.email}</p>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-body">
                                                    <h6><img src={phone} />Phone</h6>
                                                    <p className="fw-400">{contact.phone}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <header className="page_header s-py-10 s-py-lg-0 ds ms s-overlay nav-bordered justify-nav-center">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="d-lg-none col-11">
                                    <a href="/" className="logo">
                                        <img src="images/logo.png" alt="" />
                                        <span className="logo-text fw-500">
                                            Pahomov<span className="fw-200">Transporte</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-xl-12">
                                    <div className="nav-wrap">
                                        <nav className="top-nav">
                                            <ul className="nav sf-menu">
                                                <li className={location === '/' ? 'active' : ''}>
                                                    <a href="/">Home</a>
                                                </li>

                                                <li className={location.includes('/team') ? 'active' : ''}>
                                                    <a href="/team">Team</a>
                                                </li>
                                                {/* <li className={location.includes('/blog') ? 'active' : ''}>
                                                <a href="/blog">Blog</a>
                                            </li> */}
                                                <li className={location === '/gallery' ? 'active' : ''}>
                                                    <a href="/gallery">Gallery</a>
                                                </li>
                                                <li className={location === '/services' ? 'active' : ''}>
                                                    <a href="/services">Services</a>
                                                </li>
                                                <li className={location === '/about-us' ? 'active' : ''}>
                                                    <a href="about-us">About Us</a>
                                                </li>
                                                <li className={location === '/faq' ? 'active' : ''}>
                                                    <a href="/faq">FAQ</a>
                                                </li>
                                                <li className={location === '/contact' ? 'active' : ''}>
                                                    <a href="/contact">Contact</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="toggle_menu">
                            <span />
                        </span>
                    </header>
                </>
                {location !== '/' ? <Navi page={props.page} /> : ''}
            </div>
        );
    } else {
        return (
            <div className="preloader">
                <div className="preloader_image"></div>
            </div>
        )
    }


}

export default Navbar;