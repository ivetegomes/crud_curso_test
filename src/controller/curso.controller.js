import cursoService from '../service/curso.service.js';
import { response } from 'express';

async function createCursoController(request, response) {
    const novoCurso = request.body;
    try {
        const curso = await cursoService.createCursoService(novoCurso);
        response.status(201).send(curso);
    } catch (error) {
        response.status(404).send(error.message);
    }
}

export default {
    createCursoController
}