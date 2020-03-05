const express = require('express');

const db = require('./database');

// Initialize a router
const router = express.Router();

router.get('/', (request, response) => {
    db.query('SELECT * FROM avis', (error, result) => {
        if (error) {
            return response.status(500).send({
                message:
                    error.message || 'Some error occurred while retrieving avis.'
            });
        }
        return response.send(result);
    });
});

router.post('/', (request, response) => {
   if(!request.body) {
       return response.status(400).send('erreur de contenu');
   }

   db.query('INSERT INTO avis set ?', request.body, (err,dbResult) => {
       if(err){
           return response.status(500).send('Erreur de serveur')
       }
       return response.status(201).send('Création réussie');
   })
});

module.exports = router;
