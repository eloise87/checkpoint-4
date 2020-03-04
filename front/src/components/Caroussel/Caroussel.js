import React from 'react';
import './Caroussel.css';

const Caroussel = () => {
    return (
        <div className="slider">
            <div className="slide">
                <img src="http://fillmurray.com/300/300" alt="" className="img-responsive"/>
                <h1>slide 1</h1>
            </div>
            <div className="slide">
                <img src="http://fillmurray.com/300/300" alt="" className="img-responsive"/>
                <h1>slide 2</h1>
            </div>
            <div className="slide">
                <img src="http://fillmurray.com/300/300" alt="" className="img-responsive"/>
                <h1>slide 3</h1>
            </div>
            <div className="slide">
                <img src="http://fillmurray.com/300/300" alt="" className="img-responsive"/>
                <h1>slide 4</h1>
            </div>
            <div className="slide">
                <img src="http://fillmurray.com/300/300" alt="" className="img-responsive"/>
                <h1>slide 5</h1>
            </div>
        </div>
    );
};


export default Caroussel;
