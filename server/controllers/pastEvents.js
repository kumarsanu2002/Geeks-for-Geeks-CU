import ErrorHandler from "../middlewares/error.js";

import { pastEvents } from "../models/pastEvents.js";

//creating past comp. details
export const PASTEVENTS = async (req, res, next) => {
  try {
    const {img_url,title,description} = req.body;

    await pastEvents.create({
      img_url,
      title,
      description
    });

    res.status(201).json({
      success: true,
      message: "Task added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// getting all events
export const GETPASTEVENTS = async (req, res, next) => {
  try {
    const pastevents = await pastEvents.find({});

    res.status(200).json({
      success: true,
      pastevents,
    });
  } catch (error) {
    next(error);
  }
};



