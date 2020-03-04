const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
const cors = require('cors');

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: 'http://localhost:3000' }));

// pour pouvoir aller chercher les images ave react
app.use('/static', express.static('public'));

const api = require('./routes');

// pour séparer les cotes API et déclarer les routes dans l'index de ./routes .
app.use('/api', api);

app.listen(port || 8000, () => {
    // eslint-disable-next-line no-console
    console.log(`Serveur is running on port : ${port} `);
});
