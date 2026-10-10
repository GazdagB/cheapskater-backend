import { Router} from "express";
import type  {Request,Response}  from "express";
import { sayHello, checkDbConnection, beHealthy } from "../controllers/health.controller";
const router = Router()

router.all("/hello", sayHello)

router.get("/db", checkDbConnection)

router.all("/healthy", beHealthy)

export default router;