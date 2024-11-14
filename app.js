require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ratingRoutes = require('./routes/ratingRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/backend', ratingRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
