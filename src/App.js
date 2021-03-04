import React from "react";

import "./styles/global.css";
import Intervalo from "./components/Intervalo/index";
import Soma from "./components/Soma/index";
import Media from "./components/Media/index";
import Sorteio from "./components/Sorteio/index";

function App() {
  return (
    <div className="App">
      <div className="linha">
        <Intervalo title="Card 1" red />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
