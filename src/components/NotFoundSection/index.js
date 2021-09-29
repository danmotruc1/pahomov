import React from 'react'

const NotFoundSection = () => {
    return (
        <section className="ls s-py-60 s-py-lg-120 s-parallax s-overlay error-404 not-found page_404">
            <div className="container">
                <div className="divider-5" />
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <header className="page-header">
                            <img src="img/404.png" alt />
                            <p className="fw-900">
                                <span className="color-main">Oh, no!</span>{" "}
                                <span className="color-dark">Really?</span>
                            </p>
                        </header>
                        {/* .page-header */}
                        <div className="page-content">
                            <div className="mt-40">
                                <a href="/" className="btn btn-small btn-maincolor">
                                    Go home page
                                </a>{" "}
                            </div>
                        </div>
                        {/* .page-content */}
                    </div>
                </div>
                <div className="divider-7" />
            </div>
        </section>
    );
}

export default NotFoundSection;