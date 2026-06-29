const express = require('express');
const router = express.Router();
const { obtenerLibros, registrarLibro } = require('./libroController'); // IMPORTANTE: El './' busca en la misma carpeta

router.get('/libros', obtenerLibros);
router.post('/libros', registrarLibro);

module.exports = router;