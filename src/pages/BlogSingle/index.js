import React from 'react'
import BlogArticle from '../../components/BlogArticle';
import Footer from '../../components/Footer';
import LastBlog from '../../components/LastBlog';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import Rights from '../../components/Rights';

const BlogSingle = () => {
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <div className="header_absolute s-parallax ds bs s-overlay">
                    <Navbar />
                    <Navi page='Blog' />
                </div>
                <BlogArticle />
                <LastBlog />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default BlogSingle;