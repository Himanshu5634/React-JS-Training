import { useState, createContext, useEffect } from "react";

export const StoreContaxt = createContext(null);

const StoreContaxtProvider = (props) => {
  const { children } = props;
  const [dark, setDark] = useState(localStorage.getItem("theam"));
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("theam", dark);
  }, [dark]);

  const a = "fghjkl;'"
  const contaxtValue = {
    search,
    setSearch,
    dark,
    setDark,
    a
  };

  return (
    <StoreContaxt.Provider value={contaxtValue}>
      {children}
    </StoreContaxt.Provider>
  );
};

export default StoreContaxtProvider;
