import React from 'react'

const Navi = (props) => {
    return (
        <section className="page_title ds s-pt-105 s-pb-50 s-pt-lg-115 s-pb-lg-60">
            <div className="divider-3 d-none d-lg-block" > </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="bold text-center text-lg-left">{props.page}</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Pages</a>
                            </li>
                            <li className="breadcrumb-item active">{props.page}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navi;