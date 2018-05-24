import React from 'react';
import { HomeNav } from '../Home/home-nav.js';
import { MobileBtn } from '../Home/mobile-btn.js';
import { MobileNav } from '../Home/mobile-nav.js';
import { HeaderContent } from '../Home/header-content.js';
import '../styles/home-header.css';


export class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            scrolling: false,
            visible: false
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnScroll = this.handleOnScroll.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
     
    }
 
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }


    handleOnClick(e) {
        this.toggleMenu();
        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        );
    }

    handleOnScroll(e) {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({ scrolling: false });
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
            console.log("scroll");
        }
    }


    render() {
        return (
            <section className="home-header">
                <MobileNav menuVisibility={this.state.visible} />
                <HomeNav hasScrolled={this.state.scrolling} onScroll={this.handleOnScroll} />
                <MobileBtn menuVisibility={this.state.visible} handleOnClick={this.handleOnClick} />
                <HeaderContent />
            </section>
        );
    }
}