import React from "react";

const Button = ({ text, clicks, setClicks }) => {

  /**
   * @returns {Promise<void>}
   * @description increace the count value
   */
  const handelClicks = () => {
    setClicks(clicks + 1);
  };
  return (
    <div>
      <h1>Total clicks = {clicks}</h1>
      <button onClick={handelClicks}>{text}</button>
    </div>
  );
};

export default Button;
