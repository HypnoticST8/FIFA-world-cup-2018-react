import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FIFAlogo from '../media/World_Cup_Russia_2018_logo.png';

class TopNavBar extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <img src={FIFAlogo} alt="FIFA World Cup 2018 logo" className="responsive-img fifa-img-logo" />
                </div>
                <div className="col s12">
                    <nav className="green">
                        <div className="nav-wrapper">
                            <ul className="green">
                                <li><NavLink to="/group1">Group A</NavLink></li>
                                <li><NavLink to="/group2">Group B</NavLink></li>
                                <li><NavLink to="/group3">Group C</NavLink></li>
                                <li><NavLink to="/group4">Group D</NavLink></li>
                                <li><NavLink to="/group5">Group E</NavLink></li>
                                <li><NavLink to="/group6">Group F</NavLink></li>
                                <li><NavLink to="/group7">Group G</NavLink></li>
                                <li><NavLink to="/group8">Group H</NavLink></li>
                                <li className="green darken-2"><NavLink to="/knockout">Knockout</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default TopNavBar;