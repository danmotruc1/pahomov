import React from 'react'

import BlogArticleMin from '../BlogArticleMin';

const BlogBody = () => {
    return (
        <section className="ls s-py-60 s-py-lg-100 s-py-xl-150">
            <div className="container">
                <div className="row c-gutter-60">
                    <main className="offset-lg-1 col-lg-10">
                        <BlogArticleMin />
                        <BlogArticleMin />
                        <BlogArticleMin />
                        <BlogArticleMin />
                        <BlogArticleMin />
                        <BlogArticleMin />
                        <BlogArticleMin />
                        <BlogArticleMin />
                        <BlogArticleMin />
                    </main>
                </div>
            </div>
        </section>
    );
}

export default BlogBody;