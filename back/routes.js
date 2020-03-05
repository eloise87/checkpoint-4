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

module.exports = router;
