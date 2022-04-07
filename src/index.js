import React, { Children } from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";

// Booklist to iterate over | Refactoring the app

const books = [
  {
    author: "S. Hussain Zaidi",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/51RFcsBf5jL._AC_SX184_.jpg",
    title: "Zero Day",
  },
  {
    author: "Geetanjali Shree, Daisy Rockwell",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/41Hp+mTN4oL._AC_SX184_.jpg",
    title: "Tomb of Sand",
  },
  {
    author: "Ambai, GJV Prasad",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/51P+-7JEJdL._AC_SX184_.jpg",
    title: "A Red-necked Green Bird ",
  },
];

// BookList Component
function BookList() {
  const bookList = books.map((book) => <Book {...book} key={book.id} />);
  return <section className="booklist">{bookList}</section>;
}

function handleHover(title) {
  console.log(title);
}

const Book = ({ title, author, image, children }) => {
  return (
    <article className={"book"} onMouseOver={() => handleHover(title)}>
      <img src={image} alt={`Book by ${author}`} />
      <h3>{title}</h3>
      <p style={{ color: "orange" }}>{author}</p>
      <p>{children}</p>
    </article>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<BookList />);
