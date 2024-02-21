import ErrorHandler from "../middlewares/error.js";
import { upcomingEvents } from "../models/upcomingEvent.js";

//creating user suggestion
export const Events = async (req, res, next) => {
  try {
    const {title,img_url,description } = req.body;

    await upcomingEvents.create({
      title,
      img_url,
      description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// get all events

export const getEvents = async (req, res, next) => {
  try {
    const events = await upcomingEvents.find({});

    res.status(200).json({
      success: true,
      events,
    });
  } catch (error) {
    next(error);
  }
}
