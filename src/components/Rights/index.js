import React, { useEffect, useState } from 'react'

const Rights = () => {
    const [contact, setContact] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8000/api/contact-info';

        fetch(url)
            .then(response => response.json())
            .then(result => setContact(result))
            .catch(e => console.log(e));

    }, []);

    return (
        <section className="page_copyright ds ms s-pt-5 s-pb-25 s-py-lg-20">
            <div className="container">
                <div className="divider-2 d-none d-lg-block" />
                <div className="row align-items-center">
                    <div className="divider-20 d-none d-lg-block" />
                    <div className="col-md-12 text-center">
                        <p className="social-icons with-border">
                            <span>
                                <a
                                    href={contact.facebook}
                                    className="fa fa-facebook border-icon rounded-icon"
                                    title="facebook"
                                    target="_blank"
                                > </a>
                            </span>
                            <span>
                                <a
                                    href={contact.telegram}
                                    className="fa fa-paper-plane border-icon rounded-icon"
                                    title="telegram"
                                    target="_blank"
                                > </a>
                            </span>
                            <span>
                                <a
                                    href={contact.instagram}
                                    className="fa fa-instagram border-icon rounded-icon"
                                    title="instagram"
                                    target="_blank"
                                > </a>
                            </span>
                        </p>
                        <p>
                            © Pahomov <span className="copyright_year">2021</span> All Rights
                            Reserved
                        </p>
                    </div>
                    <div className="divider-20 d-none d-lg-block" />
                </div>
            </div>
        </section>
    );
}

export default Rights;