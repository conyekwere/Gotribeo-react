import React, { Fragment } from 'react';
import cash from '../images/cash.svg';
import fingerprint from '../images/finger-print.svg';
import logistics from '../images/logistics.svg';

export class ServiceContent extends React.Component {
    render() {
        return (
            <Fragment>
                <div className=" about">
                    <div className="container">
                        <div className="row">
                            <div className=" col-md-12">
                                <div className="ptb-50">
                                    <h2 className="text-left text-capitalize section-title">At&nbsp; 
                                        <div className=" font-weight-bold text-dark d-inline-block "> Go
                                                <span style={{ color: '#0095da' }}>t</span>
                                                <span style={{ color: '#e7808e' }}>r</span>
                                                <span style={{ color: '#1dd1a1' }}>i</span>
                                                <span style={{ color: '#0095da' }}>b</span>
                                                <span style={{ color: '#e7808e' }}>e</span>
                                                <span style={{ color: '#feca57' }}>o</span>
                                        </div>
                                        &nbsp;we believe in ..
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="service card ">
                                    <div className="service-figure">
                                        <img className="cash-img mx-auto d-block" src={cash} alt="cash" />
                                        <hr/>
                                        <h4 className=" text-left service-title">Funding</h4>
                                        <h6 className="text-left">
                                            Find and invest in various organizations across the developing countries, make a difference and earn.
                                            Seek funds for your organizations and grow further.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="service card">
                                    <div className="top_line security"></div>
                                    <div className="service-figure ">

                                        <img className="mx-auto d-block fingerprint-img" src={fingerprint} alt="fingerprint" />
                                        <hr/> </div>
                                    <h4 className="service-title text-left">Security
                                        </h4>
                                    <h6 className="text-left ">Our infrastructure lies in Amazon Web Services serverless, providing maximum security against security
                                        breaches. Your organization data is stored and secured from unauthorized access.
                                        </h6>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="service card">
                                    <div className="top_line management"></div>
                                    <div className="service-figure figure-padding">
                                        <img className="logistics-img  mx-auto d-block" src={logistics} alt="logistics" />
                                        <hr/>
                                        </div>
                                    <h4 className=" text-left service-title">Management</h4>
                                    <h6 className="text-left ">Track your organizations’ resources and activities. Visualize and analyze your performance stats over
                                        time. Get organization insights from analyzed data using artificial intelligence.
                                         </h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}