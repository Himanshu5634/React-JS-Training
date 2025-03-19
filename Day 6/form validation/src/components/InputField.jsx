import React from "react";

const InputField = (props) => {
  const { data, handelChange, id, name ,placeholder, type,error } = props;
  console.log(error,"error");
  
  return (
    <>
      <div className="label">
        <label htmlFor="name">{id}</label>
      </div>
      <input
        type={type}
        name={name}
        id={id}
        className="input-text"
        value={data.id}
        placeholder={placeholder}
        onChange={handelChange}
      />
      <span className={ error[name] ? "error" : ""}>{error[name]}</span>
    </>
  );
};

export default InputField;
