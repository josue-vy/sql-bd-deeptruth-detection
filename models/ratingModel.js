const db= require('../database/database');

module.exports = {
    guardarValoracion: async function (rating, comentario) {
      try {
        const sql = 'INSERT INTO Valoraciones (rating, comentario) VALUES (?, ?)';
        const result = await db.execute(sql, [rating, comentario]);
        return result;
      } catch (error) {
        throw error;
      }
    },
  
    obtenerValoraciones: async function () {
      try {
        const sql = 'SELECT * FROM Valoraciones';
        const [rows, fields] = await db.execute(sql);
        return rows;
      } catch (error) {
        throw error;
      }
    }
  };