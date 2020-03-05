import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/HomePage/HomePage';
import Maison from './components/Maison/Maison';
import Avis from "./components/Avis/Avis";
import Deco from "./components/Deco/Deco";
import Sante from "./components/Sante/Sante";

function App() {
    return <div>
        <Switch>
            <Route path="/Maison" component={Maison}/>
            <Route path="/Avis" component={Avis}/>
            <Route path="/Deco" component={Deco}/>
            <Route path="/Sante" component={Sante}/>
            <Route exact path="/" component={Homepage}/>


        </Switch>
    </div>;
}

export default App;
