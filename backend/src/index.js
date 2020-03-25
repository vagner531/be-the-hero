const express = require('express');
const cors = require('cors'); // ** Segurança que permite as pessoas certas de usar o sistmas npm install cors ** //
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);