import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

//creating user suggestion
export const newTask = async (req, res, next) => {
  try {
    const {description } = req.body;

    await Task.create({
      description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Suggestion added Successfully",
    });
  } catch (error) {
    next(error);
  }
};
//to get what user want to send suggestion
export const getMyTask = async (req, res, next) => {
  try {
    const userid = req.user._id;

    const tasks = await Task.find({ user: userid });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};



