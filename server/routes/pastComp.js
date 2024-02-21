import express from "express";
import {
    getpastCompt,
    pastCompt
} from "../controllers/pastComp.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();
//routes for past competition
router.post("/new", isAuthenticated, pastCompt);

// get all the past competetions
router.get("/all", getpastCompt)
export default router;
