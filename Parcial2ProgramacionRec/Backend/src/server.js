const express = require('express');
const cors = require('cors');
const { conectarDB } = require('./db'); // Busca db.js en la misma carpeta
const libroRoutes = require('./libroRoutes'); // Busca libroRoutes.js en la misma carpeta

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conectar a SQL Server
conectarDB();

// Enlazar las rutas de la API
app.use('/api', libroRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});