import Grid from "@mui/material/Grid";
import React, { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";
import BookCard from "../../molecules/BookCard/BookCard";

type booktype = {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  time: number;
  reads: string;
  status: string;
  trending: boolean;
  latest: boolean;
  audio: boolean;
  synopsis: string;
  for: string;
  aboutAuthor: string;
};

type BooksGridProps = {
  property: string;
  setBookFunction: Dispatch<SetStateAction<booktype>>;
};

export default function BooksGrid(props: BooksGridProps) {
  const [books, setBooks] = useState([]);
  const retrieveBooks = async () => {
    const response = await API.get("books");
    return response.data;
  };

  useEffect(() => {
    async function getBooks() {
      const fetchedBooks = await retrieveBooks();
      setBooks(fetchedBooks);
    }

    getBooks();
  });

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
            const handleClick = () => {
              props.setBookFunction(book);
            };
            return (
              <Grid key={book.id} item>
                <Link
                  to="/book"
                  style={{ textDecoration: "none" }}
                  onClick={handleClick}
                >
                  <BookCard val={book} />
                </Link>
              </Grid>
            );
          } else {
            return <></>;
          }
        })}
    </Grid>
  );
}
