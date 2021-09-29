import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BlogHome from '../BlogHome';
import BlogSingle from '../BlogSingle';

import Homepage from '../Homepage'
import TeamMember from '../TeamMember';
import TeamPage from '../TeamPage'
import GalleryHome from '../GalleryHome'
import NotFound from '../NotFound';
import ServicesPage from '../Services';
import AboutUsPage from '../AboutUsPage';
import FaqPage from '../FaqPage';
import ContactPage from '../ContactPage';

const AllRoute = () => {

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/team' component={TeamPage} />
                <Route exact path='/team/:id' component={TeamMember} />
                {/* <Route exact path='/blog' component={BlogHome} />
                <Route exact path='/blog/:id' component={BlogSingle} /> */}
                <Route exact path='/gallery' component={GalleryHome} />
                <Route exact path='/services' component={ServicesPage} />
                <Route exact path='/about-us' component={AboutUsPage} />
                <Route exact path='/faq' component={FaqPage} />
                <Route exact path='/contact' component={ContactPage} />

                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default AllRoute