import Grid from "@mui/material/Grid";
import React from "react";
import { useEffect, useState } from "react";
import API from "../../api";
import BookCard from "../molecules/BookCard";

type booktype = {
  id: number;
  title: string;
  author: string;
  time: number;
  reads: string;
  status: string;
  trending: boolean;
  latest: boolean;
  audio: boolean;
};

type BooksGridProps = {
  property: string;
};

export default function BooksGrid(props: BooksGridProps) {
  const [books, setBooks] = useState([]);
  const retrieveBooks = async () => {
    const response = await API.get("books");
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    async function getBooks() {
      const fetchedBooks = await retrieveBooks();
      setBooks(fetchedBooks);
    }

    getBooks();
  }, []);

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {books &&
        books.map((book: booktype) => {
          if (
            (props.property === "trending" && book.trending === true) ||
            (props.property === "latest" && book.latest === true) ||
            (props.property === "audio" && book.audio === true) ||
            (props.property === "reading" && book.status === "reading") ||
            (props.property === "read" && book.status === "finished")
          ) {
            return (
              <Grid item>
                <BookCard val={book} />
              </Grid>
            );
          }
        })}
    </Grid>
  );
}
