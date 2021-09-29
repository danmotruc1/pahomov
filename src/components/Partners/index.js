import React from 'react'

const Partners = () => {
    return (
        <section className="ls s-py-55 s-py-lg-75" id="partners">
            <div className="container-fluid">
                <div className="divider-3" />
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div
                            className="owl-carousel partners-carousel"
                            data-center="true"
                            data-loop="true"
                            data-responsive-lg={10}
                            data-responsive-md={6}
                            data-responsive-sm={4}
                            data-responsive-xs={3}
                        >
                            <a href="/">
                                <img src="images/partners/01.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;