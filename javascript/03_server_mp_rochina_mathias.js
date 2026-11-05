// server.mjs

import { createServer } from 'node:http';

const server = createServer((req, res) => {
  // Configuramos la cabecera para que siempre responda con HTML y soporte acentos
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // Estructura de rutas (Enrutamiento básico)
  if (req.url === '/' || req.url === '/home') {
    res.end('<h1>Plataforma E-learning</h1><p>¡Bienvenido a nuestra plataforma de cursos virtuales!</p>');
  }
  else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1><p>Escríbenos a elearning@ejemplo.com</p>');
  }
  else if (req.url === '/cursos') {
    res.end('<h1>Nuestros Cursos</h1><p>Ofrecemos cursos de programación, inglés y diseño web.</p>');
  }
  else {
    // Si la ruta no existe, cambiamos el código de estado a 404 (No encontrado)
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Error 404</h1><p>Lo sentimos, la página que buscas no existe.</p>');
  }
});

// Arranca el servidor HTTP local en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000');
});
