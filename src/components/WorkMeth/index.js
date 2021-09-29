import React from 'react'

const WorkMeth = () => {
    return (
        <section
            className="s-pt-55 s-pb-0 s-pt-md-50 s-pt-lg-140 s-pb-lg-145 ls ms text-center steps-section"
            id="steps"
        >
            <div className="container">
                <div className="col-12 text-center mb-55">
                    <h4>
                        How<span className="text-gradient">We Work</span>
                    </h4>
                    <p className="fs-20 color-dark">The Car Repair Appointment</p>
                    <div className="divider-60 d-none d-xl-block" />
                </div>
                <div className="row c-mb-53 c-mb-lg-0">
                    <div className="col-12 col-lg-3">
                        <div className="steps">
                            <img src="images/step01.jpg" alt="" />
                            <div className="step-content">
                                <h6 className="fw-700">Diagnostics</h6>
                                <p className="color-dark">
                                    Help extend the life of your major business investment
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="steps feature-step">
                            <img src="images/step02.jpg" alt="" />
                            <div className="step-content">
                                <h6 className="fw-700">Make a Quote</h6>
                                <p className="color-dark">
                                    Regarding our technicians, it takes 30 years of ongoing training
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="steps">
                            <img src="images/step03.jpg" alt="" />
                            <div className="step-content">
                                <h6 className="fw-700">Repair Your Car</h6>
                                <p className="color-dark">
                                    Convoy Auto Repair provides expert repairs, service
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="steps feature-step last-step">
                            <img src="images/step04.jpg" alt="" />
                            <div className="step-content">
                                <h6 className="fw-700">Joy</h6>
                                <p className="color-dark">
                                    We are proud to have earned the reputation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkMeth;