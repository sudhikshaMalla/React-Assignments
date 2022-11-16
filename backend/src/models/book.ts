import mongoose from "mongoose";
const Schema = mongoose.Schema;
import autoIncrement from "mongoose-auto-increment";
import { BookType } from "../utils/types";

const bookSchema = new Schema<BookType>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  reads: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  trending: {
    type: Boolean,
    required: true,
  },
  latest: {
    type: Boolean,
    required: true,
  },
  audio: {
    type: Boolean,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  for: {
    type: String,
    required: true,
  },
  aboutAuthor: {
    type: String,
    required: true,
  },
});

autoIncrement.initialize(mongoose.connection);

bookSchema.plugin(autoIncrement.plugin, {
  model: "bookSchema",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model<BookType>("Book", bookSchema);
