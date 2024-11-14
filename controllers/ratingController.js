const { poolPromise } = require('../database/database');

async function guardarValoracion(req, res) {
    try {
        const { rating, comentario } = req.body;
        const pool = await poolPromise;
        await pool.request()
            .input('rating', rating)
            .input('comentario', comentario)
            .query('INSERT INTO valoraciones (rating, comentario) VALUES (@rating, @comentario)');
        
        res.status(201).json({ message: 'Valoración guardada correctamente' });
    } catch (error) {
        console.error('Error al guardar la valoración:', error);
        res.status(500).json({ error: 'Error al guardar la valoración' });
    }
}

async function obtenerValoraciones(req, res) {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM valoraciones');
        
        res.status(200).json(result.recordset);  // Devuelve las valoraciones en formato JSON
    } catch (error) {
        console.error('Error al obtener valoraciones:', error);
        res.status(500).json({ error: 'Error al obtener las valoraciones' });
    }
}

module.exports = {
    guardarValoracion,
    obtenerValoraciones
};
