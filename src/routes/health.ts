import { Router} from "express";
import type  {Request,Response}  from "express";
const router = Router()

router.all("/hello", (req: Request, res: Response)=>{
    res.send("Hello,World!")
})

router.all("/healthy", (req: Request, res: Response)=>{
    res.send("I'm healthy!")
})

export default router;