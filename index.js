import express from 'express';
import cursoRouters from './src/route/curso.routes.js';

const app = express();

app.use(express.json());
app.use(cursoRouters);

app.listen(3000, () => {
    console.log('Servidor ligado na porta 3000.');  
});
