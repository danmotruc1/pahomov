import React from 'react'

const WorkServices = () => {
    return (
        <section
            className="ls s-pt-55 s-pt-md-50 s-pb-5 s-pt-lg-140 s-pb-lg-145 service-section text-center text-lg-left c-gutter-0"
            id="service">
            <div className="container">
                <div className=" col-12 mb-50 text-center">
                    <h4>
                        Our<span className="text-gradient">Services</span>
                    </h4>
                    <p className="fs-20 color-dark">The Car Repair Appointment</p>
                    <div className="divider-60 d-none d-xl-block" />
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4 col-xl-3">
                        <div className="media">
                            <div className="icon-styled color-main fs-40">
                                <i className="ico-tow-truck" />
                            </div>
                            <div className="media-body">
                                <h6>Car Towing</h6>
                                <p>Drumstick leberkas tenderloin swine laborum cupim bacon.</p>
                            </div>
                        </div>
                        <div className="divider-130 d-none d-lg-block" />
                        <div className="media">
                            <div className="icon-styled color-main fs-40">
                                <i className="ico-car" />
                            </div>
                            <div className="media-body">
                                <h6>Flood Insurance</h6>
                                <p>Drumstick leberkas tenderloin swine laborum cupim bacon.</p>
                            </div>
                        </div>
                        <div className="divider-130 d-none d-lg-block" />
                        <div className="media">
                            <div className="icon-styled color-main fs-40">
                                <i className="ico-car-alt" />
                            </div>
                            <div className="media-body">
                                <h6>Fire Insurance</h6>
                                <p>Drumstick leberkas tenderloin swine laborum cupim bacon.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-6">
                        <img src="images/02.png" alt="" />
                    </div>
                    <div className="col-lg-4 col-xl-3">
                        <div className="media">
                            <div className="icon-styled color-main fs-40">
                                <i className="ico-breakdown" />
                            </div>
                            <div className="media-body">
                                <h6>Hail Damage</h6>
                                <p>Drumstick leberkas tenderloin swine laborum cupim bacon.</p>
                            </div>
                        </div>
                        <div className="divider-130 d-none d-lg-block" />
                        <div className="media">
                            <div className="icon-styled color-main fs-40">
                                <i className="ico-accident" />
                            </div>
                            <div className="media-body">
                                <h6>Accident Insurance</h6>
                                <p>Drumstick leberkas tenderloin swine laborum cupim bacon.</p>
                            </div>
                        </div>
                        <div className="divider-130 d-none d-lg-block" />
                        <div className="media">
                            <div className="icon-styled color-main fs-40">
                                <i className="ico-motorcycle" />
                            </div>
                            <div className="media-body">
                                <h6>Motorcycle Towing</h6>
                                <p>Drumstick leberkas tenderloin swine laborum cupim bacon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default WorkServices;