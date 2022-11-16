import mongoose from "mongoose";

export type BookType = mongoose.Document & {
  title: string;
  subtitle: string;
  author: string;
  time: number;
  reads: string;
  status: "pending" | "finished" | "reading";
  trending: boolean;
  latest: boolean;
  audio: boolean;
  synopsis: string;
  for: string;
  aboutAuthor: string;
};

export type ErrorType = {
  statusCode: null | number;
  message: string;
};

export type GET_BOOKS_JSON_RESPONSE_TYPE = {
  books: BookType[];
};

export type PUT_BOOK_JSON_RESPONSE_TYPE = {
  message: string;
  book: BookType | null;
};
