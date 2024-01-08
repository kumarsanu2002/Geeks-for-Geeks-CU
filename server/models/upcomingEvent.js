import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title:{
    type: String
  },
  img_url:{
    type: String
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const upcomingEvents = mongoose.model("upcomingEvents", schema);
