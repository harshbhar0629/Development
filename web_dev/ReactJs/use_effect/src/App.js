/** @format */

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('');

  function inputHandler(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

	return (
		<div className="App">
      <input
        type="text"
        onChange={inputHandler}
      >
        
      </input>
      <h2>This is a current text: {text}</h2>

		</div>
	);
}

export default App;
