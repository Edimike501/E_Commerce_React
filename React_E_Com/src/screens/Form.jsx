import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/Form.css";
// import { changeForm } from "../components/re-usable components/form";

function Form() {
  const { type } = useParams();
  console.log(type);
  const slideRef = useRef();
  const formRef = useRef();
  const titleRef = useRef();
  const signFName = useRef();
  const signLName = useRef();
  const signEmail = useRef();
  const signPass = useRef();
  const signComPass = useRef();
  const logEmail = useRef();
  const logPass = useRef();
  // const emailRegEx = new RegExp(
  //   /^[\w!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  // );
  const emailRegEx = new RegExp(
    /^[\w!#$%&'*+/=?^_`{|}~-]+@(gmail|yahoo|email)\.(com|net|mail)$/
  );
  let changeForm = (form) => {
    if (form == "login") {
      slideRef.current.classList.remove("checked");
      formRef.current.classList.add("translate");
      titleRef.current.classList.add("translate");
    } else {
      slideRef.current.classList.add("checked");
      formRef.current.classList.remove("translate");
      titleRef.current.classList.remove("translate");
    }
  };
  const testExpression = (exp, word) => {
    console.log(word);
    let test = exp.test(word);
    return test;
  };
  const validate = (e) => {
    let val = e.target.value;
    let name = e.target.name;
    if (name == "signEmail") {
      console.log(e.target);
      const test = testExpression(emailRegEx, val);
      console.log(test);
      if (!test) {
        e.target.parentElement.lastElementChild.style.display = "block";
      } else {
        e.target.parentElement.lastElementChild.style.display = "none";
      }
      return;
    }
  };
  const signUp = (e) => {
    console.log(e.target);
  };
  useEffect(() => {
    changeForm(type);
  });
  return (
    <div className="form-hold">
      <div className="wrapper">
        <div className="title-text" ref={titleRef}>
          <div className="title signup">Signup Form</div>
          <div className="title login checked">Login Form</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <div
              onClick={() => changeForm("signup")}
              ref={slideRef}
              className="slide signup checked"
            >
              Signup
            </div>
            <div onClick={() => changeForm("login")} className="slide login">
              Login
            </div>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner" ref={formRef}>
            <form className="signup">
              <div className="field">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  ref={signFName}
                />
                <p className="error">incorrect information</p>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  ref={signLName}
                />
                <p className="error">incorrect information</p>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="signEmail"
                  placeholder="Email Address"
                  required
                  ref={signEmail}
                  onChange={(e) => validate(e)}
                />
                <p className="error">incorrect information</p>
              </div>
              <div className="field">
                <input
                  type="password"
                  name="signPass"
                  placeholder="Password"
                  required
                  ref={signPass}
                  onChange={(e) => validate(e)}
                />
                <i
                  className="fa-solid fa-eye hide"
                  onClick={(e) => {
                    e.target.classList.toggle("hide");
                  }}
                ></i>
                <p className="error">incorrect information</p>
              </div>
              <div className="field">
                <input
                  type="password"
                  name="signComPass"
                  placeholder="Confirm password"
                  required
                  ref={signComPass}
                  onChange={(e) => validate(e)}
                />
                <i className="fa-solid fa-eye-slash"></i>
                <p className="error">incorrect information</p>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                {/* <Link to="/form/login"> */}
                <input
                  type="button"
                  value="Signup"
                  onClick={(e) => signUp(e)}
                />
                {/* </Link> */}
              </div>
            </form>
            <form className="login">
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  ref={logEmail}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  ref={logPass}
                />
              </div>
              <Link to="/forgot-password">
                <div className="pass-link">Forgot password?</div>
              </Link>
              <div className="field btn">
                <div className="btn-layer"></div>
                <Link to="/">
                  <input type="button" value="Login" />
                </Link>
              </div>
              {/* <div className="signup-link">
                Not a member? <a href="">Signup now</a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      <div className="other-login-cont">
        <div className="text">
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        </div>
        <div className="icons">
          <i className="fa-brands fa-amazon"></i>
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-shopify"></i>
          <i className="fa-brands fa-paypal"></i>
        </div>
      </div>
    </div>
  );
}

export default Form;
