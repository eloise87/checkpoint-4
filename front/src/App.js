import React from 'react';
import './App.css';
import {Route, Switch, Link} from "react-router-dom";
import Homepage from './components/HomePage/HomePage';
import Maison from './components/Maison/Maison';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Avis from "./components/Avis/Avis";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/Footer" component={Footer}/>
                <Route path="/Maison" component={Maison}/>
                <Route path="/Avis" component={Avis}/>
                <Route path="/" exact component={Homepage}/>
                <Route path="/NavBar" exact component={NavBar}/>

            </Switch>
        </div>
    );
}

export default App;
