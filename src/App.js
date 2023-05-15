import "./App.css";
import { useState } from "react";
import Sqaure from "./Components/Sqaure";

function App() {
  const [board, setboard] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Sqaure
            val={board[0]}
            chooseSqaure={() => {
              alert(0);
            }}
          />
          <Sqaure
            val={board[1]}
            chooseSqaure={() => {
              alert(1);
            }}
          />
          <Sqaure
            val={board[2]}
            chooseSqaure={() => {
              alert(2);
            }}
          />
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
