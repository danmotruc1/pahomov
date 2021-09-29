import React, { useEffect, useState } from 'react'

const PageSlider = () => {

  const [contact, setContact] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8000/api/contact-info';

        fetch(url)
            .then(response => response.json())
            .then(result => setContact(result))
            .catch(e => console.log(e));

    }, []);

  return (
    <section className="page_slider">
      <div className="flexslider" data-nav="false" data-dots="true">
        <ul className="slides">
          <li className="ds bs cover-image flex-slide">
            <span className="flexslider-overlay" />
            <img src="images/slide01.jpg" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="intro_layers_wrapper text-center text-xl-left">
                    <div className="intro_layers">
                      <div className="divider-20 d-none d-lg-block d-xl-none" />
                      <div className="intro_layer" data-animation="fadeInDown">
                        <h2 className="text-uppercase intro_featured_word">
                          <span className="color-main">Full</span>
                          <span className="flex-gradient">
                            <span id="typed-strings">
                              <span>Collision</span>
                              <span>Tuning</span>
                              <span>Repair</span>
                            </span>
                            <span id="typed" />
                          </span>
                        </h2>
                      </div>
                      <div className="intro_layer" data-animation="fadeInDown">
                        <h2 className="text-uppercase intro_featured_word">
                          &amp; Auto Body Services
                        </h2>
                      </div>
                      <div className="intro_layer" data-animation="fadeInDown">
                        <ul className="list1">
                          <li>Complete Restoration Available</li>
                          <li>9 Foot Tall Spray Booth</li>
                          <li>Can Paint &amp; Repair Sprinter Vans</li>
                          <li>We Work with Insurance Companies</li>
                        </ul>
                      </div>
                    </div>{" "}
                    {/* eof .intro_layers */}
                  </div>{" "}
                  {/* eof .intro_layers_wrapper */}
                </div>{" "}
                {/* eof .col-* */}
              </div>
              {/* eof .row */}
            </div>
            {/* eof .container-fluid */}
            <div className="ds social-flex d-none d-lg-block">
              <p className="social-icons with-border">
                <span>
                  <a
                    href={ contact.facebook }
                    className="fa fa-facebook border-icon rounded-icon"
                    title="facebook"
                    target="_blank"
                  > </a>
                </span>
                <span>
                  <a
                    href={ contact.telegram }
                    className="fa fa-paper-plane border-icon rounded-icon"
                    title="telegram"
                    target="_blank"
                  > </a>
                </span>
                <span>
                  <a
                    href={ contact.instagram }
                    className="fa fa-instagram border-icon rounded-icon"
                    title="instagram"
                    target="_blank"
                  > </a>
                </span>
              </p>
            </div>
          </li>
          <li className="ds bs cover-image flex-slide">
            <span className="flexslider-overlay" />
            <img src="images/slide02.jpg" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="intro_layers_wrapper justify-content-center">
                    <div className="intro_layers rotate_layers">
                      <div className="intro_layer" data-animation="fadeInRightBig">
                        <h2 className="text-uppercase intro_before_featured_word text-left">
                          All Makes &amp;
                        </h2>
                      </div>
                      <div
                        className="intro_layer gradient-layer text-center"
                        data-animation="fadeInDown"
                      >
                        <h2 className="text-uppercase">
                          <span className="text-layer">
                            <span className="color-main2">$20</span> Off Towing!
                          </span>
                        </h2>
                      </div>
                      <div
                        className="intro_layer text-right"
                        data-animation="fadeInLeftBig"
                      >
                        <h2 className="text-uppercase intro_after_featured_word">
                          Models Welcome
                        </h2>
                      </div>
                    </div>{" "}
                    {/* eof .intro_layers */}
                  </div>{" "}
                  {/* eof .intro_layers_wrapper */}
                </div>{" "}
                {/* eof .col-* */}
              </div>
              {/* eof .row */}
            </div>
            {/* eof .container-fluid */}
            <div className="ds social-flex d-none d-lg-block">
              <p className="social-icons with-border">
                <span>
                  <a
                    href="/"
                    className="fa fa-facebook border-icon rounded-icon"
                    title="facebook"
                  > </a>
                </span>
                <span>
                  <a
                    href="/"
                    className="fa fa-paper-plane border-icon rounded-icon"
                    title="telegram"
                  > </a>
                </span>
                <span>
                  <a
                    href="/"
                    className="fa fa-instagram border-icon rounded-icon"
                    title="instagram"
                  > </a>
                </span>
              </p>
            </div>
          </li>
          <li className="ds bs cover-image flex-slide">
            <span className="flexslider-overlay" />
            <img src="images/slide03.jpg" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="intro_layers_wrapper justify-content-center">
                    <div className="intro_layers rotate_layers">
                      <div className="intro_layer" data-animation="fadeInRightBig">
                        <h2 className="text-uppercase intro_before_featured_word text-left">
                          All Makes &amp;
                        </h2>
                      </div>
                      <div
                        className="intro_layer gradient-layer text-center"
                        data-animation="fadeInDown"
                      >
                        <h2 className="text-uppercase">
                          <span className="text-layer">
                            <span className="color-main2">$20</span> Off Towing!
                          </span>
                        </h2>
                      </div>
                      <div
                        className="intro_layer text-right"
                        data-animation="fadeInLeftBig"
                      >
                        <h2 className="text-uppercase intro_after_featured_word">
                          Models Welcome
                        </h2>
                      </div>
                    </div>{" "}
                    {/* eof .intro_layers */}
                  </div>{" "}
                  {/* eof .intro_layers_wrapper */}
                </div>{" "}
                {/* eof .col-* */}
              </div>
              {/* eof .row */}
            </div>
            {/* eof .container-fluid */}
            <div className="ds social-flex d-none d-lg-block">
              <p className="social-icons with-border">
                <span>
                  <a
                    href="/"
                    className="fa fa-facebook border-icon rounded-icon"
                    title="facebook"
                  > </a>
                </span>
                <span>
                  <a
                    href="/"
                    className="fa fa-paper-plane border-icon rounded-icon"
                    title="telegram"
                  > </a>
                </span>
                <span>
                  <a
                    href="/"
                    className="fa fa-instagram border-icon rounded-icon"
                    title="instagram"
                  > </a>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>{" "}
      {/* eof flexslider */}
    </section>

  );
}

export default PageSlider