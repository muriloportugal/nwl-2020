import express from 'express';
import multer from 'multer';
import { celebrate, Joi } from 'celebrate';

import PointController from './controllers/PointsController';
import ItemController from './controllers/itemsController';

import multerConfig from './config/multer';

const routes = express.Router();
const pointController = new PointController();
const itemController = new ItemController();
const upload = multer(multerConfig);

routes.get('/items', itemController.index);

routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    //Validação dos dados enviado por FormData 
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false
  }),
  pointController.create
);
routes.get('/points/', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;