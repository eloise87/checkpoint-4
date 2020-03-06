import React, {useState, useEffect} from "react";
import './Sante.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Sante = () => {

        return (
            <div>
                <div id="generalBigTitle">HAKUNA MATATA</div>
                <NavBar/>

                <div className="generalTitle2">Astuces zéro déchet santé</div>

                <p>

                    Mieux vaut prévenir que guérir

                    Lavez-vous les mains quand vous rentrez de l’extérieur et après les toilettes
                    Éternuez et toussez dans votre coude pour ne pas contaminer les autres
                    Prévenez le mal avec les plantes : infusion de fenouil pour la digestion, de menthe poivrée pour le
                    rhume, de queues de cerises pour un effet diurétique, de noyau d’avocats en cas de diarrhée, de sauge si
                    vous avez des règles douloureuses…

                </p>

                <p>
                    Utilisez les huiles essentielles avec parcimonie et assurez-vous que vous n’êtes pas allergique ni ne
                    présentez de contre-indication.

                </p>

                <p>
                    Portez un bonnet et des gants pour isoler votre corps du froid.

                </p>

                <p>
                    Nettoyez les coupures et les égratignures à l’eau et au savon et laissez sécher à l’air libre (pas de
                    pansements).

                </p>

                <p>
                    Utilisez du fil dentaire : il vaut mieux ça qu’une carie !
                </p>
                <p>

                    Protégez-vous !

                    Fabriquez votre crème solaire et protégez-vous des rayons avec des vêtements lors de la randonnée ou
                    de
                    l’exposition aux heures les plus chaudes.
                    Pour du sexe (presque) zero dechet, utilisez des préservatifs véganes et des sextoys en matière
                    naturelle.

                </p>


                <p>

                    Les médicaments :

                    Faites le tri de vos médicaments.
                    Un médicament ne doit pas être jeté dans une poubelle ménagère !
                    Ramenez ceux qui sont périmés dans votre pharmacie : elle se chargera de la gestion. Ils sont
                    incinérés
                    séparément des déchets ménagers, avec les DASRI (déchets d’hôpitaux).
                    Si vous le pouvez, favorisez les médicaments dans des plaquettes en aluminium (que vous pourrez
                    mettre
                    au tri), ou dans des tubes en plastique de type /1\ ou /2\ (que vous pourrez mettre au tri).
                    Trier les boites et cartons et les notices en papier.


                </p>


                <Footer/>

            </div>

        );
    }
;

export default Sante;
