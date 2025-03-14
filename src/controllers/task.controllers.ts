import { Request, Response } from "express";
import Task from "../models/task.model";

// Create Task
export const createTask = async (req: Request, res: Response):Promise <any> => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Task name is required" });
    }

    const task = await Task.create({ name });
    return res.status(201).json({ message: "Task created successfully", task });
  } catch (error: unknown) {
    console.error("Error creating task:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).json({ message: "Error creating task", error: errorMessage });
  }
};

// Delete Task
export const deleteTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error: unknown) {
    console.error("Error deleting task:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).json({ message: "Error deleting task", error: errorMessage });
  }
};

// Get All Tasks
export const getTasks = async (_req: Request, res: Response): Promise <any> => {
  try {
    const tasks = await Task.find();
    return res.status(200).json({ tasks });
  } catch (error: unknown) {
    console.error("Error fetching tasks:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).json({ message: "Error fetching tasks", error: errorMessage });
  }
};
