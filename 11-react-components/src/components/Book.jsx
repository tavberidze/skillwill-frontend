import React from 'react'
import './Book.css' 

const Book = (props) => {

  return (
   <>
    <div className="book-container">
        <div className="book-img">
           <img src={ props.img } alt= { props.title } /> 
        </div>
        <div className="book-info">
            <div className="book-author-title">
                <h3> { props.author } </h3>
                <h4> { props.title } </h4>
            </div>
            <div className="book-desc">
                { props.desc}
            </div>
            <div className="button-container">
                <button onClick={ () => props.consoleFunction(props.title) }>
                    Click
                </button>
            </div>
        </div>
    </div>
   </> 
  )
}

export default Book