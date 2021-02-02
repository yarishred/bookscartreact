import React, { useState } from "react";

import "./BookQty.css";

export const BookQty = ({ setBooks, index, quantity }) => {
  const [qty, setQty] = useState(quantity);

  const incrementQtyHandler = (idx) => {
    setQty(qty + 1);
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        return book.id === idx ? { ...book, qty: qty + 1 } : book;
      })
    );
  };

  const decrementQtyHandler = (idx) => {
    if(qty <= 0){
      return
    }
    setQty(qty - 1);
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        return book.id === idx ? { ...book, qty: qty - 1 } : book;
      })
    );
  };

  return (
    <>
      <div className="bookQty">
        <button onClick={() => incrementQtyHandler(index)}>+</button>
        <h2>{qty}</h2>
        <button onClick={() => decrementQtyHandler(index)}>-</button>
      </div>
    </>
  );
};
