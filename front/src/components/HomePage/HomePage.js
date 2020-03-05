import React from 'react';
import './HomePage.css';
import NavBar from '../NavBar/NavBar';


const HomePage = () => {
    return (
        <div>
            <div id="generalBigTitle">HAKUNA MATATA</div>
            <NavBar/>

            <div className="container">

                <div className="slider">
                    <div className="slides">
                        <div className="slide1"></div>
                        <div className="slide2"></div>
                        <div className="slide3"></div>
                    </div>
                </div>

            </div>
            <div>
                <div className="separate1">
                    <h1 className="generalTitle">Vers un monde "Zéro Déchet"</h1>
                </div>
            </div>

            <p>
                Aujourd'hui, la question de l'environnement est au cœur du changement. La transition vers le «
                Zéro déchet » fait partie des solutions pour nous aider à vivre en harmonie avec la Nature. Sur
                le site de My Little Cabane, on vous propose les produits de la vie courante les plus durables,
                réutilisables et économiques afin de vous rendre la vie plus facile.

                Vous voulez vous passer des emballages plastiques et diminuer votre impact sur l'environnement ?
                Consultez notre sélection de produits compostables et biodégradables pour la maison, l'hygiène,
                les enfants et le bureau.

                Pourquoi passer au zéro déchet ?

                Passer au « Zéro déchet » est une démarche bienveillante envers notre planète. C'est prendre
                conscience que nos choix ont un impact sur l'environnement. Le « Zéro déchet » est un mode de
                vie qui nous amène à nous questionner sur nos réels besoins et les choses essentielles de la
                vie. Contrairement aux idées reçues, choisir des produits écologiques, durables et réutilisables
                est économique.

                Quelles économies allez-vous réaliser ?

                En réfléchissant à nos habitudes de consommation, on identifie nos besoins superflus et ceux qui
                sont essentiels. Cela nous invite consciemment à ne pas surconsommer et nous permet de faire des
                économies. Le recyclage et le compostage s'inscrivent également dans la démarche « Zéro déchet
                ». On réutilise et on répare pour offrir une seconde vie aux objets. Ainsi nous arrêtons
                d'acheter du neuf quand cela n'est pas utile.

                Le « Zéro déchet » c'est tout simplement la fin du gaspillage pour une meilleure protection de
                la planète.

            </p>


            <div className="elem">

                <div className="divElem">
                    <a href="https://www.joliessence.com/?gclid=CjwKCAiA44LzBRB-EiwA-jJipLyRunKJB6ykpezQ7rD_v-lxGMMCo8T9Hir-UtUOMIXpW7Y7C4y9yRoCc5gQAvD_BwE">
                        <img
                            className="element"
                            src={require('../../assets/pdb.jpg')}
                            alt="element"
                        /></a>

                </div>
                <div>
                    <a href="https://www.joliessence.com/?gclid=CjwKCAiA44LzBRB-EiwA-jJipLyRunKJB6ykpezQ7rD_v-lxGMMCo8T9Hir-UtUOMIXpW7Y7C4y9yRoCc5gQAvD_BwE">
                        <img
                            className="element"
                            src={require('../../assets/zdm2.jpg')}
                            alt="element"
                        /></a>
                </div>
                <div>
                    <a href="https://www.joliessence.com/?gclid=CjwKCAiA44LzBRB-EiwA-jJipLyRunKJB6ykpezQ7rD_v-lxGMMCo8T9Hir-UtUOMIXpW7Y7C4y9yRoCc5gQAvD_BwE">
                        <img
                            className="element"
                            src={require('../../assets/zdm.jpg')}
                            alt="element"
                        /></a>
                </div>
                <div>
                    <a href="https://www.joliessence.com/?gclid=CjwKCAiA44LzBRB-EiwA-jJipLyRunKJB6ykpezQ7rD_v-lxGMMCo8T9Hir-UtUOMIXpW7Y7C4y9yRoCc5gQAvD_BwE">
                        <img
                            className="element"
                            src={require('../../assets/unn2.jpg')}
                            alt="element"
                        /></a>
                </div>
                <div>
                    <a href="https://www.joliessence.com/?gclid=CjwKCAiA44LzBRB-EiwA-jJipLyRunKJB6ykpezQ7rD_v-lxGMMCo8T9Hir-UtUOMIXpW7Y7C4y9yRoCc5gQAvD_BwE">
                        <img
                            className="element"
                            src={require('../../assets/un1.jpg')}
                            alt="element"
                        /></a>
                </div>
                <div>
                    <a href="https://www.joliessence.com/?gclid=CjwKCAiA44LzBRB-EiwA-jJipLyRunKJB6ykpezQ7rD_v-lxGMMCo8T9Hir-UtUOMIXpW7Y7C4y9yRoCc5gQAvD_BwE">
                        <img
                            className="element"
                            src={require('../../assets/tawa1.jpg')}
                            alt="element"
                        /></a>
                </div>

            </div>
        </div>


    )
        ;
};

export default HomePage;
