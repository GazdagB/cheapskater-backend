import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());


//Starting server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`✅ Server is running on http://localhost:${PORT}`)
})