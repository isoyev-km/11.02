import React, { useState } from "react";
import RadioButton from "./components/RadioButton";
import SendButton from "./components/SendButton";

function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <RadioButton />
      <RadioButton />
      <RadioButton />
      <br />
      <SendButton />
    </div>
  );
}

export default App;

//Use state почитать
//useEffect обязательно почитай!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//если баттон не выбран - сенд не работает и красного цвета
