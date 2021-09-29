import React from 'react'

const ServicesWid = () => {
    return (
        <div>
            <section className="ls s-pt-60 s-pb-0 s-pt-md-55 s-pb-md-45 s-pt-lg-145 s-pb-lg-115 c-mb-55 c-mb-md-0 text-center text-md-left side-section">
                <div className="divider-5 d-none d-mb-block" />
                <div className="cover-image s-cover-left" />
                {/* half image background element */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="images/side-image01.jpg" alt="" />
                        </div>
                        <div className="col-md-6 animate" data-animation="moveFromRight">
                            <div className="item-content content-left-padding">
                                <h3 className="special-heading">
                                    Get<span className="text-gradient">Appointment</span>
                                </h3>
                                <p>
                                    Pro inimicus sapientem an, ad cibo velit mollis mei, ne vim adhuc
                                    gubergren. Vis no intellegebat voluptatibus, vim an partem admodum
                                    copiosae, has ei mutat maluisset comprehensam.
                                </p>
                                <ul className="list1">
                                    <li>Fully Responsive</li>
                                    <li>Retina Ready</li>
                                    <li>Extremely Customizable</li>
                                    <li>WP 4.1+ Ready</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="ls s-pt-3 s-pb-0 s-pt-md-55 s-pb-md-45 s-pt-lg-145 s-pb-lg-115 c-mb-55 c-mb-md-0 text-center text-md-left side-section"
                id="contacts"
            >
                <div className="divider-5 d-none d-mb-block" />
                <div className="cover-image s-cover-right" />
                {/* half image background element */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-1 order-md-2">
                            <img src="images/side-image02.jpg" alt="" />
                        </div>
                        <div
                            className="col-md-6 order-2 order-md-1 animate"
                            data-animation="moveFromLeft"
                        >
                            <div className="item-content content-right-padding">
                                <h3 className="special-heading">
                                    About<span className="text-gradient">Service</span> Center
                                </h3>
                                <p>
                                    Pro inimicus sapientem an, ad cibo velit mollis mei, ne vim adhuc
                                    gubergren. Vis no intellegebat voluptatibus, vim an partem admodum
                                    copiosae, has ei mutat maluisset comprehensam.
                                </p>
                                <ul className="list1">
                                    <li>Fully Responsive</li>
                                    <li>Retina Ready</li>
                                    <li>Extremely Customizable</li>
                                    <li>WP 4.1+ Ready</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider-3 d-block d-mb-none" />
            </section>
        </div>
    );
}

export default ServicesWid;