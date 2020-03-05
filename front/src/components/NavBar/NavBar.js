import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">

            <NavLink
                exact
                className="NavLink"
                activeClassName="active"
                to="./"
            >
                <div>Accueil</div>
            </NavLink>

            <NavLink
                className="NavLink"
                activeClassName="active"
                to="/Maison"
            >
                <div>Maison</div>
            </NavLink>
            <NavLink
                className="NavLink"
                activeClassName="active"
                to="/Santé"
            >
                <div>Santé</div>
            </NavLink> <NavLink
            className="NavLink"
            activeClassName="active"
            to="/Déco"
        >
            <div>Déco</div>
        </NavLink> <NavLink
            className="NavLink"
            activeClassName="active"
            to="/Hygiène & Bien-être"
        >
            <div>Hygiène & Bien-être</div>
        </NavLink> <NavLink
            className="NavLink"
            activeClassName="active"
            to="/Produits"
        >
            <div>Produits</div>
        </NavLink> <NavLink
            className="NavLink"
            activeClassName="active"
            to="/Zen"
        >
            <div>Zen</div>
        </NavLink>

        </div>
    );
};

export default NavBar;
