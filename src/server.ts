import express, { Request, Response, NextFunction } from 'express';
import healtRouter from '../src/routes/health'
import { json } from 'body-parser';

const app = express();
app.use(json());

app.use("/health",healtRouter)

//Starting server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`✅ Server is running on http://localhost:${PORT}`)
})