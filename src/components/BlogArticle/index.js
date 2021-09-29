import React from 'react'

const BlogArticle = () => {
    return (
        <section className="ls s-py-60 s-py-lg-100 s-py-xl-150 c-gutter-70">
            <div className="container">
                <div className="row">
                    <main className="offset-lg-1 col-lg-10">
                        <article className="vertical-item post single-post type-post status-publish format-standard has-post-thumbnail">
                            {/* .post-thumbnail */}
                            <div className="item-media post-thumbnail">
                                <img src="images/blog/01.jpg" alt />
                            </div>
                            <div className="item-content">
                                <div className="entry-content">
                                    <p>
                                        Times are changing…cars are changing. One of the biggest changes
                                        in today’s automotive industry is the perception of a “tune-up.”
                                        Ask 10 vehicle owners their definition of a tune-up and chances
                                        are there’ll be 10 different answers. The classic “tune-up” was
                                        once the heart of the automotive business and contrary to some
                                        beliefs; today’s modern vehicles still need tune-ups to keep.
                                    </p>
                                    <p>
                                        The tune-up was historically associated with the routine
                                        replacement of key ignition system parts like spark plugs and
                                        ignition points, along with some basic adjustments to help
                                        “tune” the engine. Mounting pressure for increased fuel economy
                                        and lower emissions drove the car manufacturers to adopt
                                        electronics and to do away with ignition points in the ’70s,
                                        along with the carburetor in the middle ’80s. This eliminated
                                        the need for the replacement and adjustment of a growing number.
                                    </p>
                                    <p>
                                        As the pace of technology quickened, the procedures required to
                                        perform a traditional tune-up changed dramatically. Highly
                                        sophisticated ignition and fuel systems are now the norm, using
                                        one or more onboard computers to control critical engine and
                                        transmission management functions. Things that were once handled
                                        mechanically are now controlled electronically through the
                                        widespread use.
                                    </p>
                                    <div className="media">
                                        <div>
                                            <img src="images/author.png" alt />
                                        </div>
                                        <div className="media-body">
                                            <p>
                                                <img className="quote-image" alt src="images/quote.png" />
                                                Sem justo facilisi, pulvinar feugiat sed cursus donec
                                                vestibulum, rutrum mauris montes felis, quam metus sed in.
                                                In curabitur, ut in auctor ut, egestas nunc elit lectus sed
                                                sed.
                                            </p>
                                            <h6 className="fw-700">
                                                Brett Connor{" "}
                                                <span className="fs-16 color-grey fw-300 position">
                                                    AutoDoc Manager
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                    <p>
                                        Because vehicles have changed so much over the years, the Car
                                        Care Council has introduced the 21st Century Tune-up. This
                                        program is designed to help re-define and educate motorists as
                                        to what a tune-up should consist of on today’s modern vehicles.
                                    </p>
                                    <p>
                                        “There is a misconception that today’s modern vehicles don’t
                                        need tune-ups because they never break down, but that simply is
                                        not true,” said Rich White, executive director of the Car Care
                                        Council. “If you’re at work and your computer goes down, you
                                        can’t get any more work done. It’s the same with your vehicle.
                                        If the vehicle isn’t being properly maintained, you’re not going
                                        to get where you want to go.”
                                    </p>
                                </div>
                                {/* .entry-content */}
                                <footer className="entry-footer">
                                    <div className="entry-meta">
                                        <span className="posted-on">
                                            <a href="#">
                                                <i className="fs-14 color-main ico-clock-alt" />2 min ago
                                            </a>
                                        </span>
                                    </div>
                                    {/* .entry-meta */}
                                </footer>
                                {/* .entry-footer */}
                                <hr />
                            </div>
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
                        </article>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default BlogArticle;