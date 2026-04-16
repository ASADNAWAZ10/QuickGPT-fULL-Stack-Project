import express from 'express'
import { getPlans, purchasePlans } from '../controller/creditsController.js';
import {protect} from '../middlewere/auth.js'

const creditRouter = express.Router();

creditRouter.get('/plan', getPlans)
creditRouter.post('/purchased',protect, purchasePlans)

export default creditRouter;

