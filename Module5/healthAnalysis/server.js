// const express = require('express');
// const app = express();

// const port = 3000;

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.get('/health_contact.html', (req, res) => {
//   res.sendFile(__dirname + '/health_contact.html');
// });

// app.listen(port, () => {
//   console.log(`Serveur démarré sur le port ${port}`);
// });
const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Configurer la racine du projet comme point de stockage des fichiers statiques
app.use(express.static(path.join(__dirname, '')));

// Créer une route pour servir l'index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/health_contact.html', (req, res) => {
  res.sendFile(__dirname + '/health_contact.html');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});