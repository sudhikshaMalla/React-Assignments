import Book from "../models/book";
import { Request, Response, NextFunction } from "express";
import { ErrorType, BookType } from "../utils/types";
import { StatusCodes } from "http-status-codes";

export const getBooks: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books: null | BookType[] = await Book.find();
    res.status(StatusCodes.OK).json({
      books: books,
    });
    return;
  } catch (err) {
    let error = err as ErrorType;
    if (!error.statusCode) {
      error.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    }
    next(error);
    return error;
  }
};

export const putBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (
      !(
        req.body.status === "reading" ||
        req.body.status === "pending" ||
        req.body.status === "finished"
      )
    ) {
      const validation_error: any = new Error(
        "Validation failed, entered data is incorrect."
      );
      let custom_error = validation_error as ErrorType;
      custom_error.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
      throw custom_error;
    }
    const id = req.params.bookId;
    const book: null | BookType = await Book.findById(id);
    if (book) {
      book.title = req.body.title;
      book.subtitle = req.body.subtitle;
      book.author = req.body.author;
      book.time = req.body.time;
      book.reads = req.body.reads;
      book.status = req.body.status;
      book.trending = req.body.trending;
      book.latest = req.body.latest;
      book.audio = req.body.audio;
      book.synopsis = req.body.synopsis;
      book.for = req.body.for;
      book.aboutAuthor = req.body.aboutAuthor;
      const saved_book = await book.save();
      res.status(StatusCodes.OK).json({
        message: "Book edited successfully!",
        book: saved_book,
      });
    }
    return;
  } catch (err) {
    let error = err as ErrorType;
    if (!error.statusCode) {
      error.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    }
    next(error);
    return error;
  }
};
