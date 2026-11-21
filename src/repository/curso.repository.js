import db from '../config/database.js';

db.run(`
CREATE TABLE IF NOT EXISTS curso (
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    nome  TEXT NOT NULL,
    area TEXT NOT NULL,
    nivel TEXT NOT NULL,
    modalidade TEXT NOT NULL
);`);

function createCursoRepository(novoCurso) {
    return new Promise((resolve, reject) => {
        const { 
            nome, 
            area, 
            nivel,
            modalidade 
        } = novoCurso;
        db.run(
            `INSERT INTO Curso (nome, area, nivel, modalidade)
            VALUES (?, ?, ?, ?)`,
            [ nome, area, nivel, modalidade],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ 
                        id: this.lastID 
                    });
                }
            }
        );
    });
}

export default {
    createCursoRepository,
};  