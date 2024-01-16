import express from "express";
import { getAll, getInfoById, getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

router.get("/user/:id", getInfoById);

router.get("/all", getAll);

export default router;
