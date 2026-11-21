import cursoRepository from "../repository/curso.repository.js";

async function createCursoService(novoCurso) {
    const curso = await cursoRepository.createCursoRepository(novoCurso);
    if (!curso) {
        throw new Error('Erro na criação do curso!');
    }
    return curso;
}

export default {
    createCursoService,
};