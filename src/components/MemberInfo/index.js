import React from 'react'

const MemberInfo = () => {
    return (
        <section className="ls s-pt-60 s-pt-lg-100 s-pt-xl-150 team-single">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row align-items-center text-center text-lg-left c-gutter-70">
                            <div className="col-lg-6">
                                <img src="images/team/07.jpg" alt />
                                <div className="divider-30 d-block d-lg-none" />
                            </div>
                            <div className="left-content col-lg-6 text-center text-lg-left">
                                <h4>
                                    Stephen S.<span className="text-gradient">Hendrick</span>
                                </h4>
                                <p className="fs-20 color-dark position">
                                    The Car Repair Appointment Founder
                                </p>
                                <div className="divider-60 d-none d-xl-block" />
                                <p>
                                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                                    esse molestie consequat, vel illum dolore eu feugiat nulla
                                    facilisis at vero eros et accumsan et iusto odio dignissim qui
                                    blandit praesent luptatum zzril delenit augue dui.
                                </p>
                                <p>
                                    Nam liber tempor cum soluta nobis eleifend option congue nihil
                                    imperdiet doming id quod mazim placerat facer possim assum.
                                </p>
                                <p>
                                    Investigationes demonstraverunt lectores legere me lius quod ii
                                    legunt saepius.
                                </p>
                                <div className="divider-90 d-none d-xl-block" />
                                <p className="social-icons text-center with-border overflow-hidden">
                                    <span>
                                        <a
                                            href="#"
                                            className="fa fa-facebook border-icon rounded-icon"
                                            title="facebook"
                                        />
                                    </span>
                                    <span>
                                        <a
                                            href="#"
                                            className="fa fa-paper-plane border-icon rounded-icon"
                                            title="telegram"
                                        />
                                    </span>
                                    <span>
                                        <a
                                            href="#"
                                            className="fa fa-instagram border-icon rounded-icon"
                                            title="instagram"
                                        />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MemberInfo;