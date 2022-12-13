"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putBook = exports.getBooks = void 0;
const book_1 = __importDefault(require("../models/book"));
const http_status_codes_1 = require("http-status-codes");
const getBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.default.find();
        res.status(http_status_codes_1.StatusCodes.OK).json({
            books: books,
        });
        return;
    }
    catch (err) {
        let error = err;
        if (!error.statusCode) {
            error.statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        }
        next(error);
        return error;
    }
});
exports.getBooks = getBooks;
const putBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(req.body.status === "reading" ||
            req.body.status === "pending" ||
            req.body.status === "finished")) {
            const validation_error = new Error("Validation failed, entered data is incorrect.");
            let custom_error = validation_error;
            custom_error.statusCode = http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY;
            throw custom_error;
        }
        const id = req.params.bookId;
        const book = yield book_1.default.findById(id);
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
            const saved_book = yield book.save();
            res.status(http_status_codes_1.StatusCodes.OK).json({
                message: "Book edited successfully!",
                book: saved_book,
            });
        }
        return;
    }
    catch (err) {
        let error = err;
        if (!error.statusCode) {
            error.statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        }
        next(error);
        return error;
    }
});
exports.putBook = putBook;
