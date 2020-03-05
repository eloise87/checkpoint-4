import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="cont">
                <div>
                    <div className="address">
                        10 rue du pot pourri 45000 Orléans
                    </div>
                    <div className="num">
                        Tel : 02.38.02.01.00
                    </div>
                </div>
            </div>
            <div className="imageFooter">
                <img
                    className="element3"
                    src={require('../../assets/slide2.jpg')}
                    alt="element"/>
            </div>
            <div className="mentions">Mentions légales</div>

        </div>
    );
};

export default Footer;
