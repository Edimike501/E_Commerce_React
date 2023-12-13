import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/re-usable components/NavBar";
import ContactSection from "../components/re-usable components/ContactSection";
import Footer from "../components/re-usable components/Footer";
import Space from "../components/re-usable components/Space";

import "./css/CustomOrder.css";

function CustomOrder() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    document.body.style.overflow = "auto";
  }, [location]);

  return (
    <div>
      <NavBar bg={true} />
      <div className="form-container">
        <form>
          <h2>custom order</h2>
          <div className="field">
            <input type="text" name="name" id="name" placeholder="name" />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="field">
            <input type="text" name="email" id="email" placeholder="E - mail" />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="two-col">
            <div className="field">
              <select id="cars" name="cars">
                <option value="">choose category</option>
                <option value="air nike">air nike</option>
                <option value="air jordan">air jordan</option>
                <option value="air max">air max</option>
                <option value="tommy hilfiger">tommy hilfiger</option>
                <option value="givenchy">givenchy</option>
              </select>
            </div>
            <div className="field">
              <select id="cars" name="cars">
                <option value="">choose type</option>
                <option value="loafers">loafers</option>
                <option value="sneakers">sneakers</option>
                <option value="slides">slides</option>
                <option value="cover shoe">cover shoe</option>
              </select>
            </div>
          </div>
          <div className="two-col">
            <div className="field">
              <select id="cars" name="cars">
                <option value="">choose color</option>
                <option value="blue">blue</option>
                <option value="white">white</option>
                <option value="pale">pale blue</option>
                <option value="red">red</option>
              </select>
            </div>
            <div className="field">
              <select id="cars" name="cars">
                <option value="">choose size</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
              </select>
            </div>
          </div>
          <div className="field">
            <textarea
              name="description"
              id="description"
              placeholder="desribe your product"
            ></textarea>
            <i className="fa-regular fa-file-lines"></i>
          </div>
          <div className="btn">
            <button onclick="customOrder(event)">send request</button>
          </div>
        </form>
      </div>
      <Space amt={40} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default CustomOrder;
