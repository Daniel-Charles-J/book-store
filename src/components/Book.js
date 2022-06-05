import React from "react";
const Book = function(props){
    console.log(props);
    return(
        <div className="book">
            <div className="book-img-container">
            <img className="book-img" src={props.image} alt={props.title}></img>
            </div>
        <h1 className="book-title"> {props.title}</h1>
        <h3 className="book-author">{props.author}</h3>
        <h4 className="book-prize">{props.prize}</h4>
        </div>

    )
}

export default Book;