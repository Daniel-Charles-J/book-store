import React from "react";
const Book = function(props){
    const {image, title, author, prize} = props.book;
    return(
        <div className="book">
            <div className="book-img-container">
            <img className="book-img" src={image} alt={props.title}></img>
            </div>
        <h1 className="book-title"> {title}</h1>
        <h3 className="book-author">{author}</h3>
        <h4 className="book-prize">{prize}</h4>
        </div>

    )
}

export default Book;