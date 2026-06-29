const sql = require('mssql');

require('dotenv').config(); 

const config = {
    user: 'sa',
    password: 'esea', 
    server: 'localhost',
    database: 'BibliotecaDB',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const conectarDB = async () => {
    try {
        await sql.connect(config);
        console.log('📦 Base de datos conectada con éxito');
    } catch (error) {
        console.error('❌ Error de conexión:', error.message);
    }
};

module.exports = { sql, conectarDB };
