import { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import {
  emailRegex,
  passwordRegex,
  uppercaseAlphabats,
  lowercaseAlphabats,
  spacialCharacter,
  numberRegex,
} from "./utils/regex";

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

function App() {
  const [data, setData] = useState(initialState);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  /***
   * @description - change state of data
   * @param {Object} e - input event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
    setErrors({});
  };

  /**
   * @description - validate the palyload of sigin form
   * @returns - boolean value
   */
  const validatePayload = () => {
    const { name, email, phone, password } = data;
    let newErrorsObj = {};

    //name error conditions
    if (!name.trim()) {
      newErrorsObj.name = "please enter Name";
    }

    //email error condotions
    if (!email.trim()) {
      newErrorsObj.email = "please enter Email";
    } else if (!emailRegex.test(email.trim())) {
      newErrorsObj.email = "please enter valid Email";
    }

    //phone error conditions
    if (!phone.trim()) {
      newErrorsObj.phone = "please enter  phone number";
    } else if (isNaN(phone.trim())) {
      newErrorsObj.phone = "please enter valid Phone number";
    } else if (phone.length != 10) {
      newErrorsObj.phone = "Phone number must have 10 digits";
    }

    //password error conditions
    if (!password) {
      newErrorsObj.password = "please enter Password";
    } else if (password.length <= 7) {
      newErrorsObj.password = "password length must be 8 or more than 8";
    } else if (!uppercaseAlphabats.test(password)) {
      newErrorsObj.password = "password must contain one capital alphabates";
    } else if (!lowercaseAlphabats.test(password)) {
      newErrorsObj.password = "password must contain lowercase alphabates";
    } else if (!spacialCharacter.test(password)) {
      newErrorsObj.password = "password must contain one spacial character";
    } else if (!numberRegex.test(password)) {
      newErrorsObj.password = "password must contain numbers";
    }

    setErrors(newErrorsObj);

    return Object.keys(newErrorsObj).length === 0;
  };

  /**
   * @description validate the form and submit the form
   * @param {*} e "input event"
   */
  const handelSubmit = (e) => {
    e.preventDefault();
    if (validatePayload()) {
      console.log(data);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className="container">
        <div className="form-container">
          <form action="" name="myForm" onSubmit={handelSubmit}>
            <div className="input-row">
              <div className="label">
                <label htmlFor="name">Name</label>
              </div>
              <InputField
                type="text"
                id="name"
                placeholder="Enter name here"
                data={data}
                handelChange={handleChange}
              />
              <span className={errors.name ? "error" : ""}>{errors.name}</span>
            </div>
            <div className="input-row">
              <div className="label">
                <label htmlFor="email">Email</label>
              </div>
              <InputField
                type="text"
                id="email"
                placeholder="Enter email here"
                data={data}
                handelChange={handleChange}
              />

              <span className={errors.email ? "error" : ""}>
                {errors.email}
              </span>
            </div>
            <div className="input-row">
              <div className="label">
                <label htmlFor="phone">Phone</label>
              </div>
              <InputField
                type="text"
                id="phone"
                placeholder="Enter phone here"
                data={data}
                handelChange={handleChange}
              />

              <span className={errors.phone ? "error" : ""}>
                {errors.phone}
              </span>
            </div>
            <div className="input-row">
              <div className="label">
                <label htmlFor="password">Password</label>
              </div>
              <InputField
                type="password"
                id="password"
                placeholder="Enter password here"
                data={data}
                handelChange={handleChange}
              />

              <span className={errors.password ? "error" : ""}>
                {errors.password}
              </span>
            </div>

            <div className="signup-btn">
              <button type="submit" onClick={handelSubmit}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
