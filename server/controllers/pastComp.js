import ErrorHandler from "../middlewares/error.js";
import { pastComp } from "../models/pastComp.js";

//creating past comp. details
export const pastCompt = async (req, res, next) => {
  try {
    const {img_url } = req.body;

    await pastComp.create({
      img_url,
    });

    res.status(201).json({
      success: true,
      message: "Task added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// get all past events

export const getpastCompt = async (req, res, next) => {
  try {
    const pastcomp = await pastComp.find({});

    res.status(200).json({
      success: true,
      pastcomp,
    });
  } catch (error) {
    next(error);
  }
}



