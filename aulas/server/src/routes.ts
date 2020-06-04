import express from 'express';

import PointController from './controllers/PointsController';
import ItemController from './controllers/itemsController';

const routes = express.Router();
const pointController = new PointController();
const itemController = new ItemController();

routes.get('/items', itemController.index);

routes.post('/points', pointController.create);
routes.get('/points/', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;