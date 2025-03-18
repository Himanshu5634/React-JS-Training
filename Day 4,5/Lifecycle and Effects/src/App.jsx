import React,{useContext, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Home from "./Pages/Home/Home";
import { StoreContaxt } from "./Context/StoreContaxt";

function App() {
  
  const {dark} = useContext(StoreContaxt)

  return (
    <>
      <div className={dark?"dark":""}>
      <div className={"container"}>
        <Navbar />
        <Outlet />
      </div>
      </div>
    </>
  );
}

export default App;
