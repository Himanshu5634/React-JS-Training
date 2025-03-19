import { useDispatch } from "react-redux";
import {
  emailRegex,
  lowercaseAlphabats,
  numberRegex,
  spacialCharacter,
  uppercaseAlphabats,
} from "./regex.js";
import { useState } from "react";
import { handleError } from "../Features/userSlice.js";

/**
 * @description  Check the error and set error in the Redux state
 * @param {Object} data - The form data to validate
 * @returns {Boolean}
 */
const checkError = (data) => {
  const { name, email, password } = data;
  // let errors = useSelector((state) => state.errors)
  const [err,setErr] = useState(false)

  const dispatch = useDispatch();
  let error = {
    name: "",
    email: "",
    password: "",
  };

  if (name.length <= 0) {
    error.name = "Please provide the name";
  }

  if (email.length <= 0) {
    error.email = "Please provide the email";
  } else if (!emailRegex.test(email.trim())) {
    error.email = "Please provide the valid email";
  }

  if (!password) {
    error.password = "please enter Password";
  } else if (password.length <= 7) {
    error.password = "password length must be 8 or more than 8";
  } else if (!uppercaseAlphabats.test(password)) {
    error.password = "password must contain one capital alphabates";
  } else if (!lowercaseAlphabats.test(password)) {
    error.password = "password must contain lowercase alphabates";
  } else if (!spacialCharacter.test(password)) {
    error.password = "password must contain one spacial character";
  } else if (!numberRegex.test(password)) {
    error.password = "password must contain numbers";
  }

  dispatch(handleError(error));

  if (error.name == "" || error.email == "" || error.password == "") {
    setErr(false)
  }else{
    setErr(true)
  }

  return err;
};

export default checkError;
