import React from "react";
import ReactDOM from "react-dom";

// Component
function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

// Creating seperate Components
const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/51RFcsBf5jL._AC_SX184_.jpg"
    alt="Book by Hussain Zaidi"
  />
);

const Title = () => <h3>Zero Day</h3>;

const Author = () => <p>S. Hussain Zaidi</p>;
ReactDOM.render(<BookList />, document.querySelector("#root"));
