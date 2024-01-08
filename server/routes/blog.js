import express from "express";
import {
  ALLBLOGS,
  BLOG,
  MYBLOG
} from "../controllers/blog.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
//posting suggestion
router.post("/new", isAuthenticated, BLOG);
//geting suggestion
router.get("/my", isAuthenticated, MYBLOG);

// all blogs 
router.get("/all", ALLBLOGS);

export default router;
