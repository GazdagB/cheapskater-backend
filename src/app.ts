import express from 'express';
import healthRouter from './routes/health.route';

export const app = express();
app.use("/health", healthRouter)

app.use(express.json());

