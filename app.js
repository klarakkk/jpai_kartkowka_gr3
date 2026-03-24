const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pl">
      <head>
        <meta charset="utf-8">
        <title>Kolokwium Docker + Node.js</title>
      </head>
      <body>
        <h1>Kolokwium z Dockera</h1>
        <p>Student: [Klara Kornaga]</p>
        <p>Obraz: kolokwium-nodejs:latest</p>
        <p>Status: OK</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Serwer Node.js nasłuchuje na porcie ${port}`);
});
