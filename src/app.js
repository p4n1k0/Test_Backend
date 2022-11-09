const express = require('express');
const userRoutes = require('./routes/userRoutes');
const enderecoRoutes = require('./routes/enderecoRoutes');

const app = express();

app.use(express.json());

app.use('/usuarios', userRoutes);
app.use('/enderecos-usuario', enderecoRoutes);

module.exports = app;
