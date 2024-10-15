// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

// Crea el servidor HTTP
const server = http.createServer((req, res) => {
  // Lee el archivo HTML y envíalo como respuesta
  fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error: No se pudo cargar el archivo');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
