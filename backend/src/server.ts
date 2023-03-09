import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Jokes from "./schemas/jokeSchema";

type JokesPostType = {
  apiId: number;
  category: string;
  joke: string;
};

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/jokes");

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.post("/joke", (req: Request<any, any, JokesPostType>, res: Response) => {
  const { body } = req;
  Jokes
    .findOne({ apiId: body.apiId })
    .then((data) => {
      if (!data) {
        Jokes
          .create(body)
          .then((data) => res.json(data))
          .catch((err) => res.send(err));
        return;
      }
      res.send("Joke is already stored to favorites.");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/joke", (req: Request, res: Response) => {
  Jokes
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.delete("/joke/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  Jokes
    .deleteOne({ _id: id })
    .then(() => res.send("success"))
    .catch((err) => res.send(err));
});

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});

