import { Router} from "express";
import type  {Request,Response}  from "express";
import db  from "../repository/db";
const router = Router()

router.all("/hello", (req: Request, res: Response)=>{
    res.send("Hello,World!")
})

router.get("/db", async (req: Request, res: Response)=>{
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
})

router.all("/healthy", (req: Request, res: Response)=>{
    res.send("I'm healthy!")
})

export default router;