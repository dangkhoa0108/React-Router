import React, { Component } from 'react';
import ContentItem from './ContentItem';
import data from './../data.json';

class HomeContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {
                            data.map((value, key) => {
                                return (
                                    <ContentItem key={key}
                                        id={value.id}
                                        title={value.Title}
                                        shortDesc={value.ShortDesc}
                                        longDesc={value.LongDesc}
                                    />
                                )
                            })
                        }

                        <div className="clearfix">
                            <a className="btn btn-primary float-right" href="/">Older Posts →</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomeContent;