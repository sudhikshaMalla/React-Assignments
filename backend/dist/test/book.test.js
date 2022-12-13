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
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const mongoose_1 = __importDefault(require("mongoose"));
const book_1 = __importDefault(require("../src/models/book"));
const book_2 = require("../src/controllers/book");
describe("Book Controller", function () {
    before(function (done) {
        mongoose_1.default
            .connect("mongodb+srv://sudhikshaMalla:kFZU3Ms6057ulj0G@cluster-udemycoursenode.aoytij3.mongodb.net/test-blinkist?retryWrites=true&w=majority")
            .then(() => {
            done();
        });
    });
    it("should throw an error with code 500 if accessing database fails", function (done) {
        sinon_1.default.stub(book_1.default, "find").throws();
        (0, book_2.getBooks)({}, {}, () => { }).then((result) => {
            (0, chai_1.expect)(result).to.be.an("error");
            (0, chai_1.expect)(result).to.have.property("statusCode", 500);
            done();
        });
        sinon_1.default.restore();
    });
    it("should send a response with books that exist in database", (done) => {
        const book = new book_1.default({
            _id: 1,
            title: "Bring Your Human to Work",
            subtitle: "10 Surefire Ways to Design a Workplace That Is Good for People, Great for Business, and Just Might Change the World",
            author: "Erica Keswin",
            time: 13,
            reads: "1.9k",
            status: "pending",
            trending: false,
            latest: false,
            audio: true,
            synopsis: "Bring Your Human to Work is a manual for leaders, managers, employees of all ages and across industries, offering ten ways to transform your workplace (and your job search) by applying one simple truth to everything you do: Smart companies honor relationships.",
            for: "If you care about people as much as profits, this book is full of useful ideas for making work life better.",
            aboutAuthor: "Erica is a workplace strategist who has worked for the past twenty-five years with some of the most iconic brands in the world as a consultant, speaker, author, and professional dot-connector. She helps top-of-the-class businesses, organizations, and individuals improve their performance by honoring relationships in every context, always with an eye toward high-tech for human touch.",
        });
        book.save().then(() => __awaiter(this, void 0, void 0, function* () {
            let fetched_books = [];
            const res = {
                statusCode: 500,
                books: fetched_books,
                status: function (code) {
                    this.statusCode = code;
                    return this;
                },
                json: function (data) {
                    this.books = data.books;
                },
            };
            yield (0, book_2.getBooks)({}, res, () => { }).then(() => {
                (0, chai_1.expect)(res.statusCode).to.be.equal(200);
            });
            done();
        }));
    });
    it("should throw an error with code 422 if book status is invalid", function (done) {
        const req = {
            params: {
                bookId: 1,
            },
            body: {
                title: "Bring Your Human to Work",
                subtitle: "10 Surefire Ways to Design a Workplace That Is Good for People, Great for Business, and Just Might Change the World",
                author: "Erica Keswin",
                time: 13,
                reads: "1.9k",
                status: "finish",
                trending: false,
                latest: false,
                audio: true,
                synopsis: "Bring Your Human to Work is a manual for leaders, managers, employees of all ages and across industries, offering ten ways to transform your workplace (and your job search) by applying one simple truth to everything you do: Smart companies honor relationships.",
                for: "If you care about people as much as profits, this book is full of useful ideas for making work life better.",
                aboutAuthor: "Erica is a workplace strategist who has worked for the past twenty-five years with some of the most iconic brands in the world as a consultant, speaker, author, and professional dot-connector. She helps top-of-the-class businesses, organizations, and individuals improve their performance by honoring relationships in every context, always with an eye toward high-tech for human touch.",
            },
        };
        const res = {
            statusCode: 500,
            message: "",
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.message = data.message;
            },
        };
        (0, book_2.putBook)(req, res, () => { }).then((result) => {
            (0, chai_1.expect)(result).to.be.an("error");
            (0, chai_1.expect)(result).to.have.property("statusCode", 422);
            done();
        });
    });
    it("should send response with code 200 if book status is valid", function (done) {
        const req = {
            params: {
                bookId: 1,
            },
            body: {
                title: "Bring Your Human to Work",
                subtitle: "10 Surefire Ways to Design a Workplace That Is Good for People, Great for Business, and Just Might Change the World",
                author: "Erica Keswin",
                time: 13,
                reads: "1.9k",
                status: "finished",
                trending: false,
                latest: false,
                audio: true,
                synopsis: "Bring Your Human to Work is a manual for leaders, managers, employees of all ages and across industries, offering ten ways to transform your workplace (and your job search) by applying one simple truth to everything you do: Smart companies honor relationships.",
                for: "If you care about people as much as profits, this book is full of useful ideas for making work life better.",
                aboutAuthor: "Erica is a workplace strategist who has worked for the past twenty-five years with some of the most iconic brands in the world as a consultant, speaker, author, and professional dot-connector. She helps top-of-the-class businesses, organizations, and individuals improve their performance by honoring relationships in every context, always with an eye toward high-tech for human touch.",
            },
        };
        const res = {
            statusCode: 500,
            message: "",
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.message = data.message;
            },
        };
        (0, book_2.putBook)(req, res, () => { }).then(() => {
            (0, chai_1.expect)(res.statusCode).to.be.equal(200);
            done();
        });
    });
    after(function (done) {
        book_1.default.deleteMany({})
            .then(() => {
            return mongoose_1.default.disconnect();
        })
            .then(() => {
            done();
        });
    });
});
