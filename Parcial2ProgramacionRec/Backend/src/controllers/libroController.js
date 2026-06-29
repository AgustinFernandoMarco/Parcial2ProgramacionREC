const { sql } = require('./db'); 

const obtenerLibros = async (req, res) => {
    try {
        const resultado = await sql.query('SELECT * FROM Libros');
        res.json(resultado.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST /api/libros
const registrarLibro = async (req, res) => {
    try {
        const { Titulo, Autor, Disponible } = req.body;
        await sql.query`INSERT INTO Libros (Titulo, Autor, Disponible) 
                        VALUES (${Titulo}, ${Autor}, ${Disponible})`;
        res.status(201).json({ mensaje: "Libro registrado con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { obtenerLibros, registrarLibro };