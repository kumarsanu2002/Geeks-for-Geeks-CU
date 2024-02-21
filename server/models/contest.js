import mongoose from "mongoose";

const schema = new mongoose.Schema({
 
  title:{
    type: String
  },
  level: {
    type: String,
  },
  ref_link:{
    type:String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const contest = mongoose.model("contest", schema);
