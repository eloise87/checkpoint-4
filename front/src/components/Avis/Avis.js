import React, {useState, useEffect} from "react";
import './Avis.css';

/*
const testimony = require('../api/testimonials');

const Testimony = () => {
    const [testimonials, setTestimonials] = useState([]);

    const [firstname, setFirstname] = useState('');
    const [text, setText] = useState('');

    const [response, setResponse] = useState('');

    useEffect(() => {
        (async () => {
            const data = await testimony.getValidTestimony();
            setTestimonials(data);
        })();
    }, []);

    const sendTestimony = async e => {
        e.preventDefault();
        const responseApi = await testimony.createTestimony(firstname, text);
        setResponse(responseApi);
    };
}
*/
const Avis = () => {

    const [allAvis, setAllAvis] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:8000/api/`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000'
                }
            });
            setAllAvis(await response.json());
        })();
    }, []);

    return (
        <div>
            <div className="separate">
                <h1 className="generalTitle">Avis</h1>
            </div>
            <div className="style">
                <div className="title">
                    <div className="containers">

                        <form id="testimony">
                            <label htmlFor="firstname">
                                Entrez votre prénom ici
                                <input
                                    id="firstname"
                                    placeholder="Prénom"
                                    type="text"
                                    required
                                />
                            </label>
                            <label htmlFor="message">
                                Entrez votre message ici
                                <textarea
                                    id="message"
                                    placeholder="Entrez votre message ici...."
                                    required
                                />
                            </label>
                            <button name="submit" type="submit">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    {allAvis.map(avis => {
                        return <div className="bonNom">
                            <div className="message">{avis.MESSAGE}</div>
                            <div className="name">{avis.firstname}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Avis;
