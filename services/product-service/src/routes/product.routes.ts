import {Router, type Router as ExpressRouter} from 'express'

import {createProductController,getAllProductController} from '../controllers/product.controller.js'

const router : ExpressRouter = Router();

router.post('/',createProductController);
router.get('/',getAllProductController);


export default router