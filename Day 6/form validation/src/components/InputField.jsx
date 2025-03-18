import React from "react";

const InputField = ({data,handelChange,id,placeholder,type}) => {

  return (

      <input
        type={type}
        name={id}
        id={id}
        className="input-text"
        value={data.id}
        placeholder={placeholder}
        onChange={handelChange}
      />

  );
};

export default InputField;
