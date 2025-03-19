import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Auth from "./Components/Authentication/auth";

function App() {

  const [showLogin,setShowLogin] = useState(false)
  
  return (
    <>
      {showLogin?(<Auth setShowLogin={setShowLogin}/>):(<></>)}
      <Navbar setShowLogin={setShowLogin}/>
    </>
  );
}

export default App;
