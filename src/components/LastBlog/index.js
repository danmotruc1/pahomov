import React from 'react'
import BlogMin from '../BlogMin'

const LastBlog = () => {
    return (
        <section
            className="s-pt-55 s-pb-0 s-pt-lg-145 s-pb-lg-150 ls ms blog-section c-gutter-60"
            id="blog">
            <div className="container">
                <div className="col-12 mb-55">
                    <h3 className="special-heading text-center">
                        Latest<span className="text-gradient">Blog</span> Posts
                    </h3>
                    <p className="fs-20 color-dark">The Car Repair Appointment</p>
                    <div className="divider-64 d-none d-lg-block" />
                </div>
                <div className="row justify-content-center c-mb-60 c-mb-lg-0">
                    
                    <BlogMin />
                    <BlogMin />
                    <BlogMin />
                </div>
            </div>
        </section>

    );
}

export default LastBlog