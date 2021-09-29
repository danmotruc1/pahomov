import React from 'react'

const BlogArticleMin = () => {
    return (
        <article className="vertical-item post type-post status-publish format-standard has-post-thumbnail">
            <div className="item-media post-thumbnail">
                <img src="images/blog/01.jpg" alt />
                <div className="media-links">
                    <a className="abs-link" title href="/blog/12" />
                </div>
            </div>
            {/* .post-thumbnail */}
            <div className="item-content">
                <header className="entry-header mb-15">
                    <h3 className="entry-title">
                        <a href="/blog/12" rel="bookmark">
                            How often do I need to get my vehicle’s oil changed?
                        </a>
                    </h3>
                </header>
                {/* .entry-header */}
                <div className="entry-content">
                    <p>
                        When one of these lights comes on, it means that one of the
                        sensors or computerized components that monitor your vehicle’s
                        engine system is indicating something. Though nothing may seem
                        wrong with the car, we suggest that you bring the car in for an
                        inspection.
                    </p>
                </div>
                {/* .entry-content */}
                <div className="more-button">
                    <a href="#" className="btn btn-small btn-outline-maincolor">
                        Read more
                    </a>
                </div>
            </div>
            {/* .item-content */}
        </article>
    );
}

export default BlogArticleMin;