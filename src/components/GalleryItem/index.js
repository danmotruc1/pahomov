import React from 'react'

const GalleryItem = () => {
    return (
        <div className="col-xl-4 col-sm-6 test diagnostic wash">
            <div className="vertical-item item-gallery content-absolute text-center ds">
                <div className="item-media">
                    <img src="images/gallery/12.jpg" alt />
                    <div className="media-links">
                        <div className="links-wrap">
                            <a
                                className="link-zoom photoswipe-link"
                                title
                                href="images/gallery/12.jpg"
                            />
                        </div>
                    </div>
                </div>
                <div className="item-content gradientdarken-background">
                    <h6>
                        Clita kasd gubergren
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default GalleryItem;