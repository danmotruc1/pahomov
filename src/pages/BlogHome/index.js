import React from 'react'
import BlogBody from '../../components/BlogBody';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Navi from '../../components/Navi';
import Rights from '../../components/Rights';

const BlogHome = () => {
    return (
        <div id="canvas">
            <div id="box_wrapper">
                <div className="header_absolute s-parallax ds bs s-overlay">
                    <Navbar />
                    <Navi page='Blog' />
                </div>
                <BlogBody />
                <Footer />
                <Rights />
            </div>
        </div>
    );
}

export default BlogHome;