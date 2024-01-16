import ErrorHandler from "../middlewares/error.js";
import { contest } from "../models/contest.js";

//creating past comp. details
export const CONTEST = async (req, res, next) => {
  try {
    const {title,level,ref_link} = req.body;

    await contest.create({
      title,
      level,
      ref_link
    });

    res.status(201).json({
      success: true,
      message: "Contest added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// display all contests

export const displayContests = async (req, res, next) => {
  try {
    const contests = await contest.find();

    res.status(200).json({
      success: true,
      all: contests,
    });
  } catch (error) {
    next(error);
  }
}



