import React from "react";

import { BookItem } from "../BookItem/BookItem";

import "./BooksCart.css";

export const BooksCart = ({ books, setBooks }) => {
  const myBooks = books.map((book, index) => {
    return <BookItem key={book.isbn} {...book} setBooks={setBooks} index={index}/>;
  });
  return (
    <>
      <h2>Books Cart</h2>
      <div className="booksCart">{myBooks}</div>
    </>
  );
};
