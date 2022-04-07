import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Component
function Greeting() {
  return (
    <main>
      <App />
    </main>
  );
}

ReactDOM.render(<Greeting />, document.querySelector("#root"));
