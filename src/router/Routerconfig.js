import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContent from '../components/HomeContent';
import ContactContent from '../components/ContactContent';
import PageHomeHeader from '../components/PageHomeHeader';
import PageContactHeader from './../components/PageContactHeader';
class Routerconfig extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" render={() =>
                        <div>
                            <PageHomeHeader />
                            <HomeContent />
                        </div>
                    } />
                    <Route exact path="/:slug.:id" render={(id) =>
                        <div>
                            <PageContactHeader />
                            <ContactContent id={id}/>
                        </div>
                    } />
                </div>
        );
    }
}

export default Routerconfig;