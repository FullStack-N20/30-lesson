import express from 'express';
import * as mainController from '../controller/mainController.js';

const router = express.Router();

router.get('/tasks', mainController.getTasks);
router.post('/task', mainController.createTask);
router.get('/task/:id', mainController.getTaskById);
router.put('/task/:id', mainController.updateTask);
router.delete('/task/:id', mainController.deleteTask);
router.put('/task/:id/done', mainController.doneTask);

export default router;
