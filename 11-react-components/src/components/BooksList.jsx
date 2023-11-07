import React from 'react'
import Book from './Book'
import './BooksList.css'
import { data } from '../data'


const BooksList = () => {

    function consoleFunction(title) {
        console.log(`The title of the book is '${ title }'`)
    }

  return (
   <div className='books-list-container'>
    { data.map(( book ) => <Book key={ book.id } img={ book.img } author={ book.author } title={ book.title} desc={ book.desc } consoleFunction={ consoleFunction }/>)}
   </div> 
  )
}

export default BooksList