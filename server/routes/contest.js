import express from "express";
import {
    CONTEST, displayContests
} from "../controllers/contest.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//routes for past competition
router.post("/new", isAuthenticated, CONTEST);

//routes for getting all past competition
router.get("/all", displayContests);

export default router;
