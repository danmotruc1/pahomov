import React, { useEffect, useState } from 'react'
import GalleryItem from '../GalleryItem'

import './style.css'



const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [dataIsReturned, setDataIsReturned] = useState(false)

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        const url = 'http://localhost:8000/api/photos';

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then(result => {
                console.log('jvc')
                setPhotos(result)
                setDataIsReturned(true)
            })
            .catch(e => console.log(e));

    }, []);

    if (dataIsReturned) {
        const script = document.createElement("script");
        script.src = "./js/main.js";
        script.async = true;
        document.body.appendChild(script);

        return (
            <section className="ls s-pt-50 s-pb-60 s-pt-lg-90 s-pb-lg-100 s-pt-xl-140 s-pb-xl-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="row isotope-wrapper masonry-layout c-mb-10 c-gutter-10"
                                data-filters=".gallery-filters"
                            >

                                {photos.map((photo, index) => {
                                    return (
                                        <div key={index} className="col-xl-4 col-sm-6 d-flex align-self-stretch">
                                            <div className="vertical-item item-gallery content-absolute text-center ds content">
                                                <div className="item-media imag">
                                                    <img className="imag" src={photo.img} alt={photo.description} />
                                                    <div className="media-links">
                                                        <div className="links-wrap">
                                                            <a
                                                                className=" photoswipe-link"
                                                                href={photo.img}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-content gradientdarken-background">
                                                    <h6>
                                                        {photo.description}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* .isotope-wrapper*/}
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <a href="#" className="btn btn-outline-maincolor">
                                        Load More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return <h1>load</h1>;
    }


}

export default Gallery;