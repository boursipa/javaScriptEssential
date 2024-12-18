const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/health_article.json', (req, res) => {
  res.sendFile(__dirname + '/health_article.json');
});

let port = 3000;
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));