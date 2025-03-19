import React, { useEffect, useState } from "react";
import "./Auth.scss";
import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import useCheckError from "../../Hooks/useCheckError";
import { handleError } from "../../Features/userSlice";

const initialData = {
  name: "",
  email: "",
  password: "",
};

const Auth = ({ setShowLogin }) => {
  const [curruntState, setCurruntState] = useState("Log In");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const errors = useSelector((state) => state.errors);
  // const valid = useSelector((state) => state.valid)
  const [data, setData] = useState(initialData);
  const [checkErr,setCheckErr] = useState({})


  /**
   * @description Handles input changes for the form fields.
   * @param {Object} e event Object
   */
  const handleChange = (e) => {
    dispatch(handleError(initialData))
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  
  const {error} = useCheckError(checkErr,curruntState)
  
  const handleAuth = (e) => {
    try {
      e.preventDefault();
      setCheckErr(data)
    } catch (error) {
      console.log(error);
      
    }
  };

// useEffect(() => {
//   console.log(checkErr);
  
// },[checkErr])

  return (
    <div className="auth">
      <div className="container">
        <div className="close" onClick={() => setShowLogin(false)}>
          <img src={assets.cross} alt="" />
        </div>
        <h1>{curruntState}</h1>
        <div className="form-container">
          <form action="">
            {curruntState == "Sign Up" && (
              <div className="input">
                <label htmlFor="name">Name</label>
                <span>{isValid.name}</span>
                <div className="input-field">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={errors.name.length <= 0 ? "" : "error"}
                    placeholder="Enter name here"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            <div className="input">
              <label htmlFor="email">Email</label>
              <span>{errors.email}</span>
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={errors.email.length <= 0 ? "" : "error"}
                  placeholder="Enter email here"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="Password">Password</label>
              <span>{errors.password}</span>
              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={errors.password.length <= 0 ? "" : "error"}
                  placeholder="Enter Password here"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="auth-btn">
              <button onClick={handleAuth}>{curruntState}</button>
            </div>
          </form>
        </div>
        <div className="auth-condition">
          {curruntState == "Log In" ? (
            <p>
              Create a new account?
              <span onClick={() => setCurruntState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setCurruntState("Log In")}>Log in here</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
