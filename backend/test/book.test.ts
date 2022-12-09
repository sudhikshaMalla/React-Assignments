import { expect } from "chai";
import sinon from "sinon";
import mongoose from "mongoose";
import {
  BookType,
  ErrorType,
  GET_BOOKS_JSON_RESPONSE_TYPE,
  PUT_BOOK_JSON_RESPONSE_TYPE,
} from "../src/utils/types";

import Book from "../src/models/book";
import { getBooks, putBook } from "../src/controllers/book";
import { findSourceMap } from "module";

describe("Book Controller", function () {
  before(function (done) {
    mongoose
      .connect(
        "mongodb+srv://sudhikshaMalla:kFZU3Ms6057ulj0G@cluster-udemycoursenode.aoytij3.mongodb.net/test-blinkist?retryWrites=true&w=majority"
      )
      .then(() => {
        done();
      });
  });

  // it("should throw an error with code 500 if accessing database fails", function (done) {
  //   sinon.stub(Book, "find").throws();
  //   getBooks({}, {}, () => {}).then((result: ErrorType) => {
  //     expect(result).to.be.an("error");
  //     expect(result).to.have.property("statusCode", 500);
  //     done();
  //   });
  //   sinon.restore();
  // });

  it("should send a response with books that exist in database", (done) => {
    const book = new Book({
      _id: 1,
      title: "Bring Your Human to Work",
      subtitle:
        "10 Surefire Ways to Design a Workplace That Is Good for People, Great for Business, and Just Might Change the World",
      author: "Erica Keswin",
      time: 13,
      reads: "1.9k",
      status: "pending",
      trending: false,
      latest: false,
      audio: true,
      synopsis:
        "Bring Your Human to Work is a manual for leaders, managers, employees of all ages and across industries, offering ten ways to transform your workplace (and your job search) by applying one simple truth to everything you do: Smart companies honor relationships.",
      for: "If you care about people as much as profits, this book is full of useful ideas for making work life better.",
      aboutAuthor:
        "Erica is a workplace strategist who has worked for the past twenty-five years with some of the most iconic brands in the world as a consultant, speaker, author, and professional dot-connector. She helps top-of-the-class businesses, organizations, and individuals improve their performance by honoring relationships in every context, always with an eye toward high-tech for human touch.",
    });
    book.save().then(async () => {
      let fetched_books: BookType[] = [];
      const res: any = {
        statusCode: 500,
        books: fetched_books,
        status: function (code: number) {
          this.statusCode = code;
          return this;
        },
        json: function (data: GET_BOOKS_JSON_RESPONSE_TYPE) {
          this.books = data.books;
        },
      };
      await getBooks({}, res, () => {}).then(() => {
        expect(res.statusCode).to.be.equal(200);
      });
      done();
    });
  });

  it("should throw an error with code 422 if book status is invalid", function (done) {
    const req: any = {
      params: {
        bookId: 1,
      },
      body: {
        title: "Bring Your Human to Work",
        subtitle:
          "10 Surefire Ways to Design a Workplace That Is Good for People, Great for Business, and Just Might Change the World",
        author: "Erica Keswin",
        time: 13,
        reads: "1.9k",
        status: "finish",
        trending: false,
        latest: false,
        audio: true,
        synopsis:
          "Bring Your Human to Work is a manual for leaders, managers, employees of all ages and across industries, offering ten ways to transform your workplace (and your job search) by applying one simple truth to everything you do: Smart companies honor relationships.",
        for: "If you care about people as much as profits, this book is full of useful ideas for making work life better.",
        aboutAuthor:
          "Erica is a workplace strategist who has worked for the past twenty-five years with some of the most iconic brands in the world as a consultant, speaker, author, and professional dot-connector. She helps top-of-the-class businesses, organizations, and individuals improve their performance by honoring relationships in every context, always with an eye toward high-tech for human touch.",
      },
    };

    const res: any = {
      statusCode: 500,
      message: "",
      status: function (code: number) {
        this.statusCode = code;
        return this;
      },
      json: function (data: PUT_BOOK_JSON_RESPONSE_TYPE) {
        this.message = data.message;
      },
    };
    putBook(req, res, () => {}).then((result: any) => {
      expect(result).to.be.an("error");
      expect(result).to.have.property("statusCode", 422);
      done();
    });
  });

  it("should send response with code 200 if book status is valid", function (done) {
    const req: any = {
      params: {
        bookId: 1,
      },
      body: {
        title: "Bring Your Human to Work",
        subtitle:
          "10 Surefire Ways to Design a Workplace That Is Good for People, Great for Business, and Just Might Change the World",
        author: "Erica Keswin",
        time: 13,
        reads: "1.9k",
        status: "finished",
        trending: false,
        latest: false,
        audio: true,
        synopsis:
          "Bring Your Human to Work is a manual for leaders, managers, employees of all ages and across industries, offering ten ways to transform your workplace (and your job search) by applying one simple truth to everything you do: Smart companies honor relationships.",
        for: "If you care about people as much as profits, this book is full of useful ideas for making work life better.",
        aboutAuthor:
          "Erica is a workplace strategist who has worked for the past twenty-five years with some of the most iconic brands in the world as a consultant, speaker, author, and professional dot-connector. She helps top-of-the-class businesses, organizations, and individuals improve their performance by honoring relationships in every context, always with an eye toward high-tech for human touch.",
      },
    };

    const res: any = {
      statusCode: 500,
      message: "",
      status: function (code: number) {
        this.statusCode = code;
        return this;
      },
      json: function (data: PUT_BOOK_JSON_RESPONSE_TYPE) {
        this.message = data.message;
      },
    };

    putBook(req, res, () => {}).then(() => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  after(function (done) {
    Book.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
