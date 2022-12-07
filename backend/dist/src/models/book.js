"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const bookSchema = new Schema({
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
mongoose_auto_increment_1.default.initialize(mongoose_1.default.connection);
bookSchema.plugin(mongoose_auto_increment_1.default.plugin, {
    model: "bookSchema",
    startAt: 1,
    incrementBy: 1,
});
exports.default = mongoose_1.default.model("Book", bookSchema);
