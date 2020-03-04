import React from 'react';
import './HomePage.css';
import NavBar from '../NavBar/NavBar';


const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <div className="slider">
                <img src={require('../../assets/slide1.jpg')} alt="poignée de main"/>
            </div>
            <div className="slider2">
                <img src={require('../../assets/slide2.jpg')} alt="poignée de main"/>
            </div>
        </div>
    );
};

export default HomePage;
