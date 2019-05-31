import React from "react";

import "./App.css";
import RedirectButton from "./RedirectButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <RedirectButton targetUrl="https://t3cs.de">
          To the T3CS page
        </RedirectButton>
      </header>
    </div>
  );
}

export default App;
