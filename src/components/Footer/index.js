import React, { useEffect, useState } from 'react'

const Footer = () => {

    const [contact, setContact] = useState([]);

    useEffect(() => {
        const url = 'http://admin.testmoc.com/api/contact-info';

        fetch(url)
            .then(response => response.json())
            .then(result => setContact(result))
            .catch(e => console.log(e));

    }, []);

    return (<footer className="page_footer text-center text-md-left ds ms s-pt-65 s-pt-lg-125 s-pb-lg-35 c-gutter-40 main-footer">
        <div className="container">
            <div className="row">
                <div className="divider-20 d-none d-lg-block" />
                <div className="col-md-6 col-lg-3 animate" data-animation="fadeInUp">
                    <div className="widget widget_icons_list">
                        <a href="/" className="logo">
                            <img src="images/logo.png" alt="Logo" />
                            <span className="logo-text fw-500">
                                Pahomov<span className="fw-200">Transporte</span>
                            </span>
                        </a>
                        <div className="media side-icon-box">
                            <div className="icon-styled color-main">
                                <i className="fa fa-map-marker" />
                            </div>
                            <p className="media-body color-grey">
                                {contact.adress}
                            </p>
                        </div>
                        <div className="media side-icon-box">
                            <div className="icon-styled color-main">
                                <i className="fa fa-phone" />
                            </div>
                            <p className="media-body color-grey">{contact.phone}</p>
                        </div>
                        <div className="media side-icon-box">
                            <div className="icon-styled color-main">
                                <i className="fa fa-envelope" />
                            </div>
                            <p className="media-body color-grey">
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-4 col-lg-3 animate order-md-3 order-lg-5"
                    data-animation="fadeInUp"
                >
                    <div className="widget widget_page_links">
                        <h3>Useful Pages</h3>
                        <ul>
                            <li>
                                <a href="/">
                                    <i className="ico-check-circle" />
                                    Contact Us
                                </a>
                            </li>
                            {/* <li>
                                <a href="/">
                                    <i className="ico-check-circle" />
                                    Blog post
                                </a>
                            </li> */}
                            <li>
                                <a href="/">
                                    <i className="ico-check-circle" />
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="ico-check-circle" />
                                    Services
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="col-md-6 col-lg-3 animate order-md-4 order-lg-3"
                    data-animation="fadeInUp"
                />
                <div
                    className="col-md-6 col-lg-3 c-gutter-10 animate order-lg-4"
                    data-animation="fadeInUp"
                >
                    <div className="widget widget_working_hours">
                        <h3>Our Hours</h3>
                        <ul>
                            <li className="row">
                                <div className="color-grey col-3">Mn-Fr</div>
                                <div className="col-md-9 col-5">
                                    <span className="color-darkgrey">
                                        {contact.shedule_mn_fr}
                                    </span>
                                </div>
                            </li>
                            <li className="row">
                                <div className="color-grey col-3">Sat</div>
                                <div className="col-md-9 col-5">
                                    <span className="color-darkgrey">
                                        {contact.shedule_sat}
                                    </span>
                                </div>
                            </li>
                            <li className="row">
                                <div className="color-grey col-3">Sun</div>
                                <div className="col-md-9 col-5">
                                    {contact.shedule_sun}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;