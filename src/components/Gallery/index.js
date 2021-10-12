import React, { useEffect, useState } from 'react'
import GalleryItem from '../GalleryItem'

import './style.css'



const Gallery = props => {
    return (
        <section className="ls s-pt-50 s-pb-60 s-pt-lg-90 s-pb-lg-100 s-pt-xl-140 s-pb-xl-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="row isotope-wrapper masonry-layout c-mb-10 c-gutter-10"
                        >

                            {props.items.map((photo, index) => {
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
                    </div>
                </div>
            </div>
        </section>
    );


}

export default Gallery;