import express, { Application } from "express"; 
import cors from "cors";
import taskRoutes from './routes/task.routes'

const app: Application = express();

//enables cors for all origins (but here am restricting for only this server)
app.use(cors());
app.use(express.json()); 

app.use('/tasks', taskRoutes)


app.get("/", (_req, res) => {
    res.send(" Tasks Api!");
  });
  
  
  export default app;