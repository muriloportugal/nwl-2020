import express from 'express';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')));
// Lida com o retorno dos erros de validação do celebrate
app.use(errors());

app.listen(3333);