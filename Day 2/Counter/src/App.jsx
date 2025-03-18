import React, { useState } from "react";
import Button from "./Components/Button";

function App() {
  const text = "click"
  const [clicks,setClicks] = useState(0)
  return (
  <>
    <Button label={text} clicks={clicks} setClicks={setClicks}/>
  </>
  );
}

export default App;
