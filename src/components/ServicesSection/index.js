import React from 'react'

const ServicesSection = () => {
    return (
        <>
            <section className="ls ms s-pt-55 s-pb-3 s-pt-md-50 s-pb-md-45 s-py-lg-140 c-mb-40 c-mb-md-0 side-section text-center text-md-left">
                <div className="divider-5" />
                <div className="cover-image s-cover-left" />
                {/* half image background element */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="images/service/01.jpg" alt />
                        </div>
                        <div className="col-md-6">
                            <div className="service-content content-left-padding">
                                <h3 className="special-heading">
                                    Car<span className="text-gradient">Towing</span>
                                </h3>
                                <p>
                                    Times are changing…cars are changing. One of the biggest changes
                                    in today’s automotive industry is the perception of a “tune-up.”
                                    Ask 10 vehicle owners their definition of a tune-up and chances
                                    are there’ll be 10 different answers.
                                </p>
                                <p className="excerpt-service color-dark">
                                    As part of the 21st Century Tune-up on today’s modern vehicles,
                                    the following systems should be inspected:
                                </p>
                                <ul className="list1">
                                    <li>Battery, charging and starting</li>
                                    <li>Engine mechanical</li>
                                    <li>Powertrain control (including onboard diagnostic)</li>
                                    <li>Fuel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ls ms s-pt-0 s-pb-3 s-pt-md-50 s-pb-md-55 s-pt-lg-140 s-pb-lg-125 c-mb-40 c-mb-md-0 side-section text-center text-md-left">
                <div className="divider-5" />
                <div className="cover-image s-cover-right" />
                {/* half image background element */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-1 order-md-2">
                            <img src="images/service/02.jpg" alt />
                        </div>
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="service-content content-right-padding">
                                <h3 className="special-heading">
                                    Hail<span className="text-gradient">Damage</span>
                                </h3>
                                <p>
                                    Deductibles are determined at the time you purchase car insurance
                                    on your vehicle. Many insurance companies require a deductible on
                                    comprehensive, but sometimes a zero deductible can be offered at
                                    an additional cost. If you have hail damage
                                </p>
                                <h6 className="fw-300">Fixing Hail Damage</h6>
                                <p>
                                    Lucky you! Many insurance policies will only send you a check once
                                    the repairs have been made, but some will simply send you the
                                    amount of the estimated repair cost minus your deductible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesSection;