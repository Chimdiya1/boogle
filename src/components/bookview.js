import React from "react"
import Book from "./book"
import Spinner from "./spinner"
function Bookview(props) {
    //pass state from app down here
    const bookItems = props.results.map(item => <Book className="book" key={item.id} item={item} />) 
     if (props.loading) {
       return <Spinner />;
     }
    return (
      <div className="book-view-container">
        <h2 style={{ textAlign:"center" }}>
          Results
        </h2>
        <div className="bookview">{bookItems}</div>
      </div>
    );
}


export default Bookview