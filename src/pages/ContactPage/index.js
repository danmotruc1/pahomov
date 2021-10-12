import React from 'react'
import ContactForm from '../../components/ContactForm';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import Rights from '../../components/Rights';

const ContactPage = () => {
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <Navbar page="Contact" />
                <ContactForm />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default ContactPage;