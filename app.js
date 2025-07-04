require('dotenv').config(); // Cargar variables de entorno primero

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Base de datos simulada con más datos
let datos = {
  id: 1,
  nombre: 'Fernando',
  profesion: 'Desarrollador',
  edad: 28,
  correo: 'fernando@example.com',
  telefono: '+50688889999',
  direccion: 'San José, Costa Rica',
  habilidades: ['JavaScript', 'Node.js', 'React'],
  experiencia: 5, // años
  idiomas: ['Español', 'Inglés'],
  disponible: true,
  github: 'https://github.com/fernandoDev',
  linkedin: 'https://linkedin.com/in/fernandoDev'
};

// Ruta raíz para confirmar que la API funciona
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// GET - Obtener los datos
app.get('/api/datos', (req, res) => {
  res.json(datos);
});

// PUT - Actualizar los datos
app.put('/api/datos', (req, res) => {
  // Permitir actualización parcial
  Object.assign(datos, req.body);

  res.json({
    mensaje: 'Datos actualizados correctamente',
    datos
  });
});

// DELETE - Eliminar los datos
app.delete('/api/datos', (req, res) => {
  datos = {};
  res.json({ mensaje: 'Datos eliminados correctamente' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
