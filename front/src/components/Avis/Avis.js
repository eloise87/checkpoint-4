import React, {useState, useEffect} from "react";
import './Avis.css';

const Avis = () => {

    const [allAvis, setAllAvis] = useState([]);

    const [firstname, setFirstname] = useState("");
    const [MESSAGE, setMESSAGE] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            body: JSON.stringify({firstname, MESSAGE})
        });
    };

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
                <h1 className="generalTitle2">Avis</h1>
            </div>
            <div className="style">
                <div className="title">
                    <div className="containers">

                        <form id="testimony" onSubmit={handleSubmit}>
                            <label htmlFor="firstname">
                                Entrez votre prénom ici
                                <input
                                    id="firstname"
                                    placeholder="Prénom"
                                    type="text"
                                    required
                                    value={firstname}
                                    onChange={e=>setFirstname(e.target.value)}
                                />
                            </label>
                            <label htmlFor="message">
                                Entrez votre message ici
                                <textarea
                                    id="message"
                                    placeholder="Entrez votre message ici...."
                                    required
                                    value={MESSAGE}
                                    onChange={e => setMESSAGE(e.target.value)}
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
