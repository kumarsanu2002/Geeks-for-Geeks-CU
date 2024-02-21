import express from "express";
import {
    GETPASTEVENTS,
    PASTEVENTS
} from "../controllers/pastEvents.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//routes for past competition
router.post("/new", isAuthenticated, PASTEVENTS);

router.get("/all", GETPASTEVENTS);

export default router;
