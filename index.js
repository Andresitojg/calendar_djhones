
// server.js
const express = require('express');
const app = express();
const port = 3000;

// Definir una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Server 3000 activated`);
});
