import express, { Router } from 'express';
import { getTasks, createTask, deleteTask } from '../controllers/task.controllers';

const router: Router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);

export default router;
