import mongoose from "mongoose";

const schema = new mongoose.Schema({
      //user so that we can display in blog section who created it
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    description:{
        type:String
      },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const blog = mongoose.model("blog", schema);
