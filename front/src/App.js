import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/HomePage/HomePage';
import Maison from './components/Maison/Maison';


function App() {
    return (
        <div>
            <Switch>
                <Route path="/Maison" component={Maison}/>
                <Route path="/" exact component={Homepage}/>

            </Switch>
        </div>
    );
}

export default App;
