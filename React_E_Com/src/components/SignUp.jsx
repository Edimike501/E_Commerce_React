import NavBar from "./re-usable components/NavBar";
import Space from "./re-usable components/Space";
import Footer from "./re-usable components/Footer";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <NavBar bg={true} />
      <div className="form-container">
        <form>
          <h2>sign up form</h2>
          <div className="field">
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="full - name"
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="field">
            <input type="text" name="email" id="email" placeholder="E - mail" />
            <i className="fa-solid fa-envelope"></i>
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
          <div className="field">
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="confirm - password"
            />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="already-a-member">
            <p>already a member ?.</p>
            <Link to="/form/login">login</Link>
          </div>
          <div className="btn">
            <button onClick={(event) => hange(event)}>sign up</button>
          </div>
        </form>
      </div>
      <Space amt={30} />
      <Footer />
    </div>
  );
}

export default SignUp;
