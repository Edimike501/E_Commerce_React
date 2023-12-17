import { useRef } from "react";
// import axios from "axios";
import Alert from "./Alert";
import "./css/Alert.css";
import "./css/Footer.css";

function Footer() {
  const alertElement = useRef();
  const subscribe = (e) => {
    const email = e.target.previousElementSibling.value;
    console.log(email);
    if (email != "") {
      handleApi(email);

      return;
    }
    Alert(alertElement.current, "Please Input your E-mail Address");
  };

  const handleApi = async (email) => {
    /* const response = await axios.post(
      "http://localhost:8080/subscribe_newsletter",
      { email }
    );
    if (response.data == "subscribed successfully") {
      Alert(
        alertElement.current,
        "Subcribed to Newsletter Successfully <br /> check your E-mail within 24 hours"
      );
    } else {
      Alert(alertElement.current, "already subscribed");
    }
    console.log(response.data, response.status); */
  };

  return (
    <div className="flex-ali-cen flex-cen flex-col footer">
      <div className="alert-cont" ref={alertElement}></div>
      <div className="flex-ali-cen flex-col maxWidth footer-sub">
        <div className="flex-it">
          <div className="flex-spc-btwn ali-cen news-cont">
            <label>newsletter</label>
            <div className="newsletter flex">
              <input type="email" id="news" placeholder="Enter your e-mail" />
              <i className="fa-regular fa-envelope" onClick={subscribe}></i>
            </div>
          </div>
        </div>
        <div className="det">
          <div>
            <div className="title">
              <h3>about us</h3>
              <hr />
            </div>
            <p>About us</p>
            <p>Privacy</p>
            <p>Public release</p>
            <p>Contact</p>
          </div>
          <div className="customer-care">
            <div className="title">
              <h3>customer care</h3>
              <hr />
            </div>
            <div>
              <p>FAQ</p>
              <p>Delivery info</p>
              <p>Returns</p>
              <p>Payments</p>
            </div>
          </div>
          <div className="hours">
            <div className="title">
              <h3>open hours</h3>
              <hr />
            </div>
            <span>
              <p>Mon - Thu</p>
              <h4>8:00 AM - 7:00 PM</h4>
            </span>
            <span>
              <p>Fri - Sat</p>
              <h4>8:00 AM - 7:00 PM</h4>
            </span>
            <span>
              <p>Sun</p>
              <h4>Closed</h4>
            </span>
            <button>see more</button>
          </div>
          <div>
            <div className="title">
              <h3>about us</h3>
              <hr />
            </div>
            <p>About us</p>
            <p>Privacy</p>
            <p>Public release</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="flex-it copyright">
        <div className="flex-it flex-col maxWidth">
          <p>
            Copyright {new Date().getFullYear()} OneTime. All rights reserved
          </p>
          <div className="flex social">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
