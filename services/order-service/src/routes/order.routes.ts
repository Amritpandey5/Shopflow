import {Router , type Router as ExpressRouter} from 'express'

import {createOrderController} from '../controllers/order.controller.js'


export const router:ExpressRouter = Router();

router.post('/',createOrderController);