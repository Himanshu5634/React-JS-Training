import { useState, createContext, useEffect } from "react";

export const StoreContaxt = createContext(null);

const StoreContaxtProvider = (props) => {
  const { children } = props;
  const [theam, setTheam] = useState(localStorage.getItem("theam") || "light");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("theam", theam);
  }, [theam]);

  // useEffect(() => {
  //   localStorage.setItem("theam", dark);
  // }, [dark]);

  const a = "fghjkl;'"
  const contaxtValue = {
    search,
    setSearch,
    theam, 
    setTheam,
    a
  };

  return (
    <StoreContaxt.Provider value={contaxtValue}>
      {children}
    </StoreContaxt.Provider>
  );
};

export default StoreContaxtProvider;
