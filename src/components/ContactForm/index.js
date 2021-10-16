import React, { useEffect, useState } from 'react'
import ContactMap from '../ContactMap'
import ReactDOM from 'react-dom'

const ContactForm = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [contact, setContact] = useState([]);
    const [reqStatus, setReqStatus] = useState();
    const [reqResponse, setReqResponse] = useState([]);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message })
    };

    useEffect(() => {
        const url = 'http://admin.testmoc.com/api/contact-info';

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => setContact(result))
            .catch(e => console.log(e));

    }, []);

    //<div className="alert alert-danger" role="alert">
    // {element[1]}
    // </div>

    const submit = e => {
        fetch('http://admin.testmoc.com/api/send-message', requestOptions)
            .then(response => response.json())
            .then(result => {
                
                const alert = [];
                let error = false;
                let type = 'danger';

                if (result[0] === true) {

                    Object.entries(result[1]).forEach(element => {
                        console.log(element[1][0])
                        alert.push(<><b>&#8811;</b> {element[1][0]} <br /></>)
                        error = true;
                    });
                } else {
                    type = 'success';
                    alert.push('Message sent');
                }

                const readyAlert = (
                    <div className="row">
                        <div className={`w-auto alert alert-${type}`} role="alert">
                            {alert}
                        </div>
                    </div>
                );

                ReactDOM.render(readyAlert, document.getElementById('alert'));
                // const alertRender = (
                //     <div className="row">
                //         <div className="alert alert-danger" role="alert">
                //             {element[1]}
                //         </div>
                //     </div>
                // );
                // setReqStatus(true);
                setReqResponse(result);
            })
            .catch(e => console.log(e));
        e.preventDefault();
    }

    const formChangeHandler = event => {
        const valName = event.target.name;
        const value = event.target.value;

        switch (valName) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
        }
    }


    return (
        <>
            <section className="s-pt-60 s-pb-15 s-py-lg-90 ls ms">
                <div className="container">
                    <div className="row c-mb-40 c-mb-lg-0">
                        <div className="col-md-6 col-lg-3">
                            <div className="media contact-icon">
                                <div className="icon-styled color-main fs-40">
                                    <i className="ico-map" />
                                </div>
                                <div className="media-body">
                                    <h6>Adress</h6>
                                    <p>{contact.adress}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="media contact-icon">
                                <div className="icon-styled color-main fs-40">
                                    <i className="ico-call" />
                                </div>
                                <div className="media-body">
                                    <h6>Phone</h6>
                                    <p>{contact.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="media contact-icon">
                                <div className="icon-styled color-main fs-40">
                                    <i className="ico-email" />
                                </div>
                                <div className="media-body">
                                    <h6>Email</h6>
                                    <p>{contact.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" >
                            <div className="media contact-icon">
                                <div className="icon-styled color-main fs-40">
                                    <i className="ico-clock" />
                                </div>
                                <div className="media-body">
                                    <h6>Our Hours</h6>
                                    <ul>
                                        <li>Mn-Fr: <b>{contact.shedule_mn_fr}</b></li>
                                        <li>Sat: <b>{contact.shedule_sat}</b></li>
                                        <li>Sun: <b>{contact.shedule_sun}</b></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ls map-left container-px-0">
                <div className="container-fluid">
                    <div className="row align-items-center c-gutter-85">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                            <ContactMap />
                            {/*.col-* */}
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5 col-12">
                            <div className="contact-item animate" data-animation="scaleAppear">
                                <h3 className="special-heading">
                                    Contact<span className="text-gradient">Us</span>
                                </h3>
                                <div className="divider-35" />
                                <form className="contact-form c-mb-30 c-gutter-20" onSubmit={submit}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group has-placeholder">
                                                <label htmlFor="name">Name </label>
                                                <input
                                                    type="text"
                                                    size={30}
                                                    defaultValue={""}
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    onChange={formChangeHandler}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group has-placeholder">
                                                <label htmlFor="phone">Phone </label>
                                                <input
                                                    type="text"
                                                    aria-required="false"
                                                    size={30}
                                                    defaultValue={""}
                                                    name="phone"
                                                    id="phone"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    onChange={formChangeHandler}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group has-placeholder">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    aria-required="false"
                                                    size={30}
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    onChange={formChangeHandler}
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group has-placeholder textarea">
                                                <label htmlFor="message">Message</label>
                                                <textarea
                                                    aria-required="false"
                                                    rows={4}
                                                    cols={45}
                                                    name="message"
                                                    id="message"
                                                    className="form-control"
                                                    placeholder="Message"
                                                    defaultValue={""}
                                                    onChange={formChangeHandler}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 mt-20">
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    id="contact_form_submit"
                                                    name="contact_submit"
                                                    className="btn btn-small btn-outline-maincolor"
                                                >
                                                    <span>Contact Us</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" id='alert'>

                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*.col-* */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactForm;