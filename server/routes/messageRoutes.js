import express from 'express'
import protect from '../middlewere/auth';
import { imageGeneratorController, textMessageController } from '../controller/messageController.js';

const messageRouter = express.Router();

messageRouter.post('/text',protect, textMessageController )
messageRouter.post('/text',protect, imageGeneratorController )

export default messageRouter;