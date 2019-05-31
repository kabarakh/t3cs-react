import React from "react";

import "./App.css";
import RedirectButton from "./RedirectButton";
import Counter from "./Counter";
import DateList from "./DateList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <Counter initialValue={4} />
        <RedirectButton targetUrl="https://t3cs.de">
          To the T3CS page
        </RedirectButton>

        <DateList />
      </header>
    </div>
  );
}

export default App;
