import mongoose from "mongoose";

const schema = new mongoose.Schema({
 
  img_url:{
    type:String 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const pastComp = mongoose.model("pastComp", schema);
