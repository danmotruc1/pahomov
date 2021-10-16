import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import Rights from '../../components/Rights';

const GalleryHome = () => {
    const [photos, setPhotos] = useState([]);
    const [dataIsReturned, setDataIsReturned] = useState(false)

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        const url = 'http://admin.testmoc.com/api/photos';

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then(result => {
                console.log('jvcc')
                setPhotos(result)
                setDataIsReturned(true)
            })
            .catch(e => console.log(e));

    }, []);

    if (dataIsReturned) {
        return (
            <div id="canvas">
                <div id="box_wrapper">
                    {/* <div className="header_absolute s-parallax ds bs s-overlay">
                        <Navbar />
                        <Navi page='Gallery' />
                    </div> */}
                    <Navbar page="Gallery" />
                    <Gallery items={photos} />
                    <Footer />
                    <Rights />
                </div>
            </div>
        );
    } else {
        return (
            <div className="preloader">
                <div className="preloader_image"></div>
            </div>
        );
    }
}

export default GalleryHome;