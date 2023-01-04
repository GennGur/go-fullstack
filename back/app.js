const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Initialisation du Protocole XB-2');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'Lancement du protocole XB-2'});
    next();
});

app.use((req, res) => {
    console.log('Démarage du Protocole XB-2 ON-LINE');
});

module.exports = app;