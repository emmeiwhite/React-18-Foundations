import React from "react";

// export default function App() {
//   //   return <div>JSX is JavaSript Object underthehood</div>;
//   return React.createElement("div", {}, "I am the div Element Object");
// }

// Nesting Components
const Person = ({ userName }) => <h1>{userName}</h1>;
const Car = ({ model }) => <h1>{model}</h1>;

export default function App() {
  return (
    <>
      <Person userName={`Imran Rafi Rather`} />
      <Car model={`Maruti Suzuki`}>"There are no accidents"</Car>
    </>
  );
}
