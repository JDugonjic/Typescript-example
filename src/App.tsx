import React from "react";
import "./App.css";
import { Counter } from "./Counter";
import TextField from "./TextField";

const App: React.FC = () => {
  return (
    <div className="app">
      <TextField
        text="hello"
        person={{ firstName: "Jelena", lastName: "Dugonjic" }}
      />
      <Counter>
        {({ count, setCount }) => {
          return (
            <div>
              {count}
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          );
        }}
      </Counter>
    </div>
  );
};

export default App;
