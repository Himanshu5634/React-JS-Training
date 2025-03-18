import React, { useState } from "react";
import "./css/styles.css";
import Plus from "./Components/Plus/Plus";
import Minus from "./Components/Minus/Minus";

function App() {
  const [count, setCount] = useState(0);

  const handleCount=(type,number)=>{
    if(type ==='inc'){
      console.log(count,"plus");
      
      setCount((prev)=>prev + parseInt(number))
    }else if(type ==='dec'){
      console.log(count);
      if(count > 0){
        setCount((prev)=>prev-number)
      }
    }
  }
  return (
    <>
      <div className="container">
        <Minus setCount={handleCount} count={count} />
         <input type="number" name="" id="" value={count} onChange={(e) => setCount(parseInt(e.target.value))}/>
        <Plus setCount={handleCount} count={count} />
      </div>
      <div>
        <button onClick={() => setCount(0)}>Clear</button>
      </div>
    </>
  );
} 
export default App;
