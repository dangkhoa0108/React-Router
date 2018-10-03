import React, { Component } from 'react';
import Image from './../images/contact-bg.jpg'

class PageContactHeader extends Component {
    render() {
        return (
            <header className="masthead" style={{ backgroundImage: "url("+Image+")" }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="page-heading">
                                <h1>Contact Me</h1>
                                <span className="subheading">Have questions? I have answers.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default PageContactHeader;