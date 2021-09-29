import React, { useEffect, useState } from 'react'
import ContactMap from '../ContactMap'

const ContactWid = () => {

    const [contact, setContact] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8000/api/contact-info';

        fetch(url)
            .then(response => response.json())
            .then(result => setContact(result))
            .catch(e => console.log(e));

    }, []);

    return (
        <section className="ls ms contact-section text-center text-md-left">
            <div className="row align-items-center c-gutter-0">
                <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                    <ContactMap />
                    {/*.col-* */}
                </div>
                <div
                    className="col-xl-3 col-md-6 col-10 animate"
                    data-animation="moveFromRight"
                >
                    <div className="divider-55 d-md-none" />
                    <div className="item-content content-left-padding">
                        <h3 className="special-heading">
                            Find<span className="text-gradient">Us</span>
                        </h3>
                        <p>
                            Pro inimicus sapientem an, ad cibo velit mollis mei, ne vim adhuc
                            gubergren.
                        </p>
                        <h6 className="fw-700">Dauchingen</h6>
                        <div className="media side-icon-box">
                            <div className="icon-styled color-main">
                                <i className="fa fa-map-marker" />
                            </div>
                            <p className="media-body">
                                {contact.adress}
                            </p>
                        </div>
                        <div className="media side-icon-box">
                            <div className="icon-styled color-main">
                                <i className="fa fa-phone" />
                            </div>
                            <p className="media-body links-grey">
                                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                            </p>
                        </div>
                        <div className="media side-icon-box">
                            <div className="icon-styled color-main fs-14">
                                <i className="fa fa-envelope" />
                            </div>
                            <p className="media-body links-grey">
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </p>
                        </div>
                        <a href="contact.html" className="btn btn-small btn-outline-maincolor">
                            Contact us
                        </a>
                    </div>
                    <div className="divider-60 d-md-none" />
                </div>
                {/*.col-* */}
            </div>
        </section>

    );
}

export default ContactWid;