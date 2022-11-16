import { Router } from "express";

import * as bookController from "../controllers/book";

const router = Router();

router.get("/books", bookController.getBooks);

router.put("/books/:bookId", bookController.putBook);

export default router;
