import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import "./css/Form.css";

function Form() {
  const { type } = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    document.body.style.overflow = "auto";
  }, [location]);

  return <div>{type == "signup" ? <SignUp /> : <Login />}</div>;
}

export default Form;
