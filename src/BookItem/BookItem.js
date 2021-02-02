import React from 'react'
import { BookQty } from '../BookQty/BookQty'

import './BookItem.css'

export const BookItem = ({setBooks, title, author, qty, index}) => {

    return (
        <>
            <div className='bookItem'>
                <h3>{title}</h3>
                <h4>{author}</h4>
                <BookQty setBooks={setBooks} index={index} quantity={qty} />
            </div>
        </>
    )
}
