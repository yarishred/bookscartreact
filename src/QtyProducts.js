import React, { useState } from "react";
import { BooksCart } from "./BooksCart/BooksCart";

import "./QtyProducts.css";

export const QtyProducts = () => {
  const [books, setBooks] = useState([
    { id: 0, isbn: 272827, title: "Book 1 ", author: "John D.", qty: 0 },
    { id: 1, isbn: 638362, title: "Book 2 ", author: "Franz W.", qty: 0 },
    { id: 2, isbn: 191781, title: "Book 3 ", author: "Bob T.", qty: 0 },
    { id: 3, isbn: 958473, title: "Book 4 ", author: "Charles W.", qty: 0 },
  ]);

  const quantity = books.map((book) => {
    return book.qty;
  }).reduce((acc, curr)=>{
    return acc + curr
  })

  return (
    <div className="qtyProducts">
      <h1>Book Store</h1>
      <BooksCart books={books} setBooks={setBooks} />
      <div>
        <h2>Your Cart: {quantity} Books</h2>
      </div>
    </div>
  );
};
