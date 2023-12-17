import { Link } from "react-router-dom";
import NavBar from "./re-usable components/NavBar";
import Space from "./re-usable components/Space";
import Footer from "./re-usable components/Footer";

function Login() {
  return (
    <div>
      <NavBar bg={true} />
      <div className="form-container">
        <form>
          <h2>login form</h2>
          <div className="field">
            <input type="text" name="email" id="email" placeholder="E-mail" />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <i className="fa-solid fa-lock"></i>
          </div>
          <Link className="forgot-password">forgot password ?</Link>
          <div className="not-a-member">
            <p>not a member ?.</p>
            <Link to="/form/signup">sign up</Link>
          </div>
          <div className="btn">
            <button onClick={(event) => change(event)}>login</button>
          </div>
        </form>
      </div>
      <Space />
      <Footer />
    </div>
  );
}

export default Login;
