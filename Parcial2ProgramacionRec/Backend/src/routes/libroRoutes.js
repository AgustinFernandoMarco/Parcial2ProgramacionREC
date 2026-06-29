const express = require('express');
const router = express.Router();
const { obtenerLibros, registrarLibro } = require('./libroController');

router.get('/libros', obtenerLibros);
router.post('/libros', registrarLibro);

module.exports = router;