import express, { Application, Request, Response } from "express"; 
import cors from "cors";
import taskRoutes from './routes/task.routes';

const app: Application = express();

// Enables CORS (consider restricting to specific origins if needed)
app.use(cors());
app.use(express.json()); 

app.use('/tasks', taskRoutes);

app.get("/", (_req: Request, res: Response) => {
    res.send("Tasks API!");
});

export default app;
