import mongoose from "mongoose";

const schema = new mongoose.Schema({
 
  img_url:{
    type:String 
  },
  title:{
    type:String
  },
  description:{
    type:String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const pastEvents = mongoose.model("pastEvents", schema);
