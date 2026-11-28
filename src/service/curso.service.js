import cursoRepository from "../repository/curso.repository.js";

async function createCursoService(novoCurso) {
    const curso = await cursoRepository.createCursoRepository(novoCurso);
    if (!curso) {
        throw new Error('Erro na criação do curso!');
    }
    return curso;
}

async function readAllCursoService() {
    const cursos = await cursoRepository.readAllCursoRepository();
    
    return cursos;
}

export default {
    createCursoService,
    readAllCursoService
};