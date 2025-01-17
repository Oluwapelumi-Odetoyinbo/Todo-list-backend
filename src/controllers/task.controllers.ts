import { RequestHandler } from 'express';
import Task from '../models/task.model';

export const createTask: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ message: 'name is required' });
      return;  
    }

    const task = await Task.create({ name });
    res.status(201).json(task);
  } catch (error: any) {
    console.error('Error creating task:', error.message || error);
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};


//task to delete
export const deleteTask: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
 
    if (!id) {
      res.status(400).json({ message: 'Task ID is required' });
      return;
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      res.status(404).json({ message: 'Task not found' });
      return;  
    }

    res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
  } catch (error: any) {
    console.error('Error deleting task:', error.message || error);
    res.status(500).json({ message: 'Error deleting task', error: error.message });
  }
};


export const getTasks: RequestHandler = async (_req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks); // Send tasks as the response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' }); // Handle error properly
  }
};
