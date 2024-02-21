import express from "express";
import {
  getMyTask,
  newTask,
} from "../controllers/suggestion.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//posting suggestion
router.post("/new", isAuthenticated, newTask);
//geting suggestion
router.get("/my", isAuthenticated, getMyTask);


export default router;
