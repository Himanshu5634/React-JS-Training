import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleError } from "../Features/userSlice";
import {
  emailRegex,
  passwordRegex,
  uppercaseAlphabats,
  lowercaseAlphabats,
  spacialCharacter,
  numberRegex,
} from "../utils/regex.js";

/**
 * 
 * @param {Object} data 
 * @param {String} state 
 * @description hook validates the provided form data
 */
const useCheckError = (data, state) => {
  const {
    name = "himanshu",
    email = "aa@aa.com",
    password = "Abcde@123",
  } = data;

  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    let newErrorObj = {
      name: "",
      email: "",
      password: "",
    };
    console.log(state, "state");

    if (state == "Sign Up") {
      if (name == "") {
        newErrorObj.name = "Please provide the name";
      }
    }

    if (email.length <= 0) {
      newErrorObj.email = "Please provide the email";
    } else if (!emailRegex.test(email)) {
      newErrorObj.email = "Please provide the valid email";
    }

    if (!password) {
      newErrorObj.password = "please enter Password";
    } else if (password.length <= 7) {
      newErrorObj.password = "password length must be 8 or more than 8";
    } else if (!uppercaseAlphabats.test(password)) {
      newErrorObj.password = "password must contain one capital alphabates";
    } else if (!lowercaseAlphabats.test(password)) {
      newErrorObj.password = "password must contain lowercase alphabates";
    } else if (!spacialCharacter.test(password)) {
      newErrorObj.password = "password must contain one spacial character";
    } else if (!numberRegex.test(password)) {
      newErrorObj.password = "password must contain numbers";
    }

    // dispatch(handleError(newErrorObj));
    // console.log(newErrorObj,"condition");
    // console.log(newErrorObj,"check");

    setError(newErrorObj);
    dispatch(handleError(newErrorObj));
    
    
  }, [data]);

  return {isValid,error}
};

export default useCheckError;
