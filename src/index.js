import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// props as objects

const book1 = {
  author: "Geetanjali Shree, Daisy Rockwell",
  image:
    "	https://images-eu.ssl-images-amazon.com/images/I/41Hp+mTN4oL._AC_SX184_.jpg",
  title: "Tomb of Sand",
};

const book2 = {
  author: "S. Hussain Zaidi",
  image:
    "https://images-eu.ssl-images-amazon.com/images/I/51RFcsBf5jL._AC_SX184_.jpg",
  title: "Zero Day",
};

// BookList Component
function BookList() {
  return (
    <section className="booklist">
      <Book title={book1.title} author={book1.author} image={book1.image} />
      <Book title={book2.title} author={book2.author} image={book2.image} />
    </section>
  );
}

const Book = ({ title, author, image }) => {
  return (
    <article className="book">
      <img src={image} alt={`Book by ${author}`} />
      <h3>{title}</h3>
      <p>{author}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.querySelector("#root"));
