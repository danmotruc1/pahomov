import React from 'react'

const FaqComp = () => {
    return (
        <section className="ls s-pt-55 s-pb-60 s-pt-lg-95 s-pb-lg-100 s-pt-xl-145 s-pb-xl-150">
            <div className="container">
                        <h3 className="special-heading">
                            <span className="text-gradient">General</span> Questions
                        </h3>
                        <div className="divider-40" />
                        <div className="accordion" id="accordion01" role="tablist">
                            <div className="card">
                                <div className="card-header" role="tab" id="collapse01_header">
                                    <h6>
                                        <a
                                            data-toggle="collapse"
                                            href="#collapse01"
                                            aria-expanded="true"
                                            aria-controls="collapse01"
                                        >
                                            What does Your Company Consulting do?
                                        </a>
                                    </h6>
                                </div>
                                <div
                                    id="collapse01"
                                    className="collapse show"
                                    role="tabpanel"
                                    aria-labelledby="collapse01_header"
                                    data-parent="#accordion01"
                                >
                                    <div className="card-body">
                                        <p>
                                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                        </p>
                                        <ul className="list1">
                                            <li>It can answer common questions</li>
                                            <li>It can demonstrate how a product or service works</li>
                                            <li>It can discuss current trends</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab" id="collapse02_header">
                                    <h6>
                                        <a
                                            className="collapsed"
                                            data-toggle="collapse"
                                            href="#collapse02"
                                            aria-expanded="false"
                                            aria-controls="collapse02"
                                        >
                                            Lorem ipsum dolor sit amet elit?
                                        </a>
                                    </h6>
                                </div>
                                <div
                                    id="collapse02"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="collapse02_header"
                                    data-parent="#accordion01"
                                >
                                    <div className="card-body">
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                        sapiente ea proident.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab" id="collapse04_header">
                                    <h6>
                                        <a
                                            className="collapsed"
                                            data-toggle="collapse"
                                            href="#collapse04"
                                            aria-expanded="false"
                                            aria-controls="collapse04"
                                        >
                                            Integer venenatis tellus et est?
                                        </a>
                                    </h6>
                                </div>
                                <div
                                    id="collapse04"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="collapse04_header"
                                    data-parent="#accordion01"
                                >
                                    <div className="card-body">
                                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                                        synth nesciunt you probably haven't heard of them accusamus
                                        labore sustainable sunt aliqua put a bird on it squid
                                        single-origin coffee shoreditch et.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab" id="collapse05_header">
                                    <h6>
                                        <a
                                            className="collapsed"
                                            data-toggle="collapse"
                                            href="#collapse05"
                                            aria-expanded="false"
                                            aria-controls="collapse05"
                                        >
                                            Maecenas vel libero ex nec sem eros?
                                        </a>
                                    </h6>
                                </div>
                                <div
                                    id="collapse05"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="collapse05_header"
                                    data-parent="#accordion01"
                                >
                                    <div className="card-body">
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                        single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                        sapiente ea proident.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab" id="collapse06_header">
                                    <h6>
                                        <a
                                            className="collapsed"
                                            data-toggle="collapse"
                                            href="#collapse06"
                                            aria-expanded="false"
                                            aria-controls="collapse06"
                                        >
                                            Etiam massa diam, malesuada ac purus?
                                        </a>
                                    </h6>
                                </div>
                                <div
                                    id="collapse06"
                                    className="collapse"
                                    role="tabpanel"
                                    aria-labelledby="collapse06_header"
                                    data-parent="#accordion01"
                                >
                                    <div className="card-body">
                                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                                        synth nesciunt you probably haven't heard of them accusamus
                                        labore sustainable sunt aliqua put a bird on it squid
                                        single-origin coffee shoreditch et.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* collapse */}
            </div>
        </section>
    );
}

export default FaqComp;