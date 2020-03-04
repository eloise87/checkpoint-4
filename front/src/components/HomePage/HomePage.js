import React from 'react';
import './HomePage.css';
import NavBar from '../NavBar/NavBar';


const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="slider">
                    <div id="titre">HAKUNA MATATA</div>
                    <div className="slides">
                        <div className="slide1"></div>
                        <div className="slide2"></div>
                        <div className="slide3"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
