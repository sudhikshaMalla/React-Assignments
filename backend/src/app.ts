import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";

import bookRoutes from "./routes/book";
import { ErrorType } from "./utils/types";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api", bookRoutes);

app.use((error: ErrorType, req: Request, res: Response, next: NextFunction) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect(
    "mongodb+srv://sudhikshaMalla:kFZU3Ms6057ulj0G@cluster-udemycoursenode.aoytij3.mongodb.net/blinkist?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
