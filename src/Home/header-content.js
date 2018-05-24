import React, { Fragment } from 'react';
import globe from '../images/globe.svg';
import particle from '../images/particle.svg';
import moon from '../images/moon.svg';

export class HeaderContent extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="img-wrapper">
                    <img className="globe-img" src={globe} alt="globe" />
                    <img className="particle-img" src={particle} alt="logo" />
                    <img className="moon-img" src={moon} alt="moon" />
                </div>
                <span className="header-circle">
                </span>
                <span className="header-circle">
                </span>
                <span className="header-circle">
                </span>
                <div className=" col-xs-9  col-sm-12 col-md-12 col-lg-10  header-container">
                    <div className="large">
                        <p>Join the movement
                        </p>
                    </div>
                    <div className="small">
                        <p>Gotribeo is a kickstarter for businesses, communities and people with shared goals around the world.</p>
                    </div>

                    <form action="#" method="post">
                        <input type="email" name="email" id="id_email" placeholder="name@domain.com" />
                        <button type="submit">
                            <p>Get Started</p>
                        </button>
                    </form>
                </div>
            </Fragment>
        );
    }
}