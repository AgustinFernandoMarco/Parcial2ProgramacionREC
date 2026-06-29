const express = require('express');
const cors = require('cors');
const { conectarDB } = require('./db'); 
const libroRoutes = require('./libroRoutes'); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

conectarDB();

app.use('/api', libroRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});