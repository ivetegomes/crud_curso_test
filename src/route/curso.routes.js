import cursoController from '../controller/curso.controller.js';
import { Router } from 'express';

const cursoRouter = Router();

cursoRouter.post('/curso', cursoController.createCursoController);

cursoRouter.get('/cursos', cursoController.readAllCursosController);

export default cursoRouter;