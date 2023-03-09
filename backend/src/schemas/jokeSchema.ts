import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  apiId: {
    type: Number,
    require: true,
  }
});

export default mongoose.model("Jokes", jokeSchema);