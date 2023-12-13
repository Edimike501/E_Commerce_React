import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/ForgotPassword.css";

function ForgotPassword() {
  const verificationRef = useRef();
  const titleRef = useRef();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    document.body.style.overflow = "auto";
  }, [location]);

  return (
    <div className="verification-cont" ref={verificationRef}>
      <div className="email-ver">
        <div className="text" ref={titleRef}>
          <h2>confirm your email address</h2>
          <h2>enter the code sent</h2>
          <h2>change your password</h2>
        </div>
        <div className="form-container">
          <div className="form-inner">
            <form>
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input
                  type="button"
                  value="Request Code"
                  onClick={(e) => {
                    e.target.parentElement.parentElement.parentElement.style.transform =
                      "translateX(-33.3%)";
                    titleRef.current.style.transform = "translateX(-33.3%)";
                  }}
                />
              </div>
              <div className="field btn no-fill">
                <div className="btn-layer"></div>
                <input
                  type="button"
                  value="Cancel"
                  onClick={(e) => {
                    e.target.parentElement.parentElement.parentElement.style.transform =
                      "translateX(-33.3%)";
                  }}
                />
              </div>
            </form>
            <form>
              <div className="field">
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input
                  type="button"
                  value="Confirm Code"
                  onClick={(e) => {
                    e.target.parentElement.parentElement.parentElement.style.transform =
                      "translateX(-66.7%)";
                    titleRef.current.style.transform = "translateX(-66.7%)";
                  }}
                />
              </div>
            </form>
            <form>
              <div className="field">
                <input type="text" placeholder="New Password" required />
              </div>
              <div className="field">
                <input type="text" placeholder="Confirm Password" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <Link to="/form/login">
                  <input
                    type="button"
                    value="Update Password"
                    onClick={(e) => {
                      e.target.parentElement.parentElement.parentElement.style.transform =
                        "translateX(-50%)";
                    }}
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
