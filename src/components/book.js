import React from "react"
function Book(props) {
    //pass state from app down here
    let book = props.item.volumeInfo
    console.log(book.title)
    return (
      <div className="book">
        <div className="book-inner">
          <div>
            {book.imageLinks && (
              <img src={book.imageLinks.thumbnail} alt={book.title}></img>
            )}
            <p>Book Title: {book.title}</p>
            {book.authors && <p>Author: {book.authors[0]}</p>}
            {book.pubisher && <p>Published by: {book.pubisher}</p>}
            {book.publishedDate && <p>Publish Date: {book.publishedDate}</p>}
            {book.averageRating && <p>Ratings: {book.averageRating}</p>}
            {book.previewLink && (
              <a href={book.previewLink}>
                <button className="btn" id="btn-preview">
                  PREVIEW
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
}


export default Book