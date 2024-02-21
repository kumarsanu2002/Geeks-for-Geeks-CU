import express from "express";
import {
     Events, getEvents
} from "../controllers/upcomingEvents.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//posting event
router.post("/new", isAuthenticated, Events);

// get all events
router.get("/all",getEvents);


export default router;
