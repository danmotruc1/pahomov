import React from 'react'

const BlogMin = () => {
    return (
        <div className="col-lg-4 col-md-6">
                        <article className="vertical-item text-center content-padding post type-post status-publish format-standard has-post-thumbnail bordered ls">
                            <div className="item-media post-thumbnail">
                                <img src="images/blog/10.jpg" alt="" />
                                <div className="media-links">
                                    <a className="abs-link" title="" href="/blog/12" > </a>
                                </div>
                            </div>
                            {/* .post-thumbnail */}
                            <div className="item-content">
                                <header className="entry-header">
                                    <h4 className="entry-title">
                                        <a href="/blog/12" rel="bookmark">
                                            Life is either a great adverture
                                        </a>
                                    </h4>
                                </header>
                                {/* .entry-header */}
                                <div className="entry-content">
                                    <p>Drumstick sirloin lorem chicken swine biltong</p>
                                </div>
                                {/* .entry-content */}
                                <div className="entry-meta">
                                    <span className="byline links-grey d-flex justify-content-between">
                                        <span className="posted-on">
                                            <a href="/">
                                                <i className="fs-14 color-main ico-clock-alt" />2 min ago
                                            </a>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {/* .item-content */}
                        </article>
                        {/* #post-## */}
                    </div>
    );
}

export default BlogMin;