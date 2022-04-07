import React from "react";
import ReactDOM from "react-dom";

// Component
function Greeting() {
  return (
    <main>
      <h1>Adventure is out there</h1>
    </main>
  );
}

ReactDOM.render(<Greeting />, document.querySelector("#root"));
