import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage'
import Footer from "./components/Footer/Footer";
import Avis from "./components/Avis/Avis";

function App() {
    return (
        <div className="App">
            <HomePage />
            <Avis/>
            <Footer/>
        </div>

    );
}

export default App;
