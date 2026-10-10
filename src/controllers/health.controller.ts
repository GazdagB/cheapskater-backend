import type {Request, Response} from 'express';
import db from '../repository/db';

export const sayHello = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, World!' })
};

export const checkDbConnection = async (req: Request, res: Response) => {
     try{
        const result = await db.query("SELECT NOW()")

        res.status(200).json({
            status: "ok",
            database: "PostgreSQL",
            timestamp: result.rows[0].now,
        })
    } catch(err){
        console.error("Database connection error:", err);
        res.status(500).json({
            status: "disconnected",
            error: "Database unavailable",
        })
    }
}

export const beHealthy = (req: Request, res: Response) => {
  res.json({ status: "ok", message: "I'm Healthy!" });
}