import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav id="NavBar">
                <ul>
                    <li>Accueil</li>
                    <li>Maison</li>
                    <li>Santé</li>
                    <li>Déco</li>
                    <li>Hygiène & Bien-être</li>
                    <li>Produits</li>
                    <li>Zen</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
