import { useRef, useEffect, useContext } from "react";
import ValueContext from "./ValueContext";
import { Link } from "react-router-dom";
import default_dp from "/Media/default.jpg";
import Alert from "./Alert";
import logo from "/Media/nav-logo.png";
import shoe1 from "/Media/shoe1.png";
import "./css/NavBar.css";
import "./css/Alert.css";

function NavBar({ bg }) {
  let cartIndicator = useRef();
  const alertElement = useRef();
  let showIndicator = false;
  const { cart } = useContext(ValueContext);
  if (cart.length > 0) showIndicator = true;
  // console.log(cart, cart.length, showIndicator);
  let backgroundColor = "transparent";
  if (bg) {
    backgroundColor = "var(--dim-black)";
  }
  const dropCart = (e) => {
    e.target.previousElementSibling.classList.toggle("drop-cart");
  };

  const change = (e, disp) => {
    if (disp) {
      console.log(e.target.parentElement.nextElementSibling);
      e.target.parentElement.nextElementSibling.style.display = "block";
      setTimeout(() => {
        e.target.parentElement.nextElementSibling.style.opacity = "1";
        console.log(
          e.target.parentElement.nextElementSibling.firstElementChild
        );
        e.target.parentElement.nextElementSibling.firstElementChild.style.transform =
          "translateX(0%)";
      }, 300);
      return;
    }
    console.log(e.target.parentElement);
    e.target.parentElement.style.opacity = "0";
    console.log(e.target.previousElementSibling);
    e.target.previousElementSibling.style.transform = "translateX(-100%)";
    setTimeout(() => {
      e.target.parentElement.style.display = "none";
    }, 900);
  };
  return (
    <header className="nav-cont flex-it" style={{ backgroundColor }}>
      <div className="maxWidth">
        <div className="alert-cont" ref={alertElement}></div>
        {/* <div className="left-side-header flex-it"> */}
        <ul className="links flex">
          <Link to="/">
            <img src={logo} alt="nav-logo" className="nav-logo" />
          </Link>
          <Link to="/">
            <li className="hLinks home li-active">home</li>
          </Link>
          <Link to="/products">
            <li className="hLinks products">products</li>
          </Link>
          {/* <Link to="/about"> */}
          <li className="hLinks about">about</li>
          {/* </Link> */}
          {/* <Link to="/contact"> */}
          <li
            className="hLinks contact"
            // onClick={() => Alert(alertElement.current, "added successfully")}
          >
            contact
          </li>
          {/* </Link> */}
          <Link to="/form/signup">
            <li className="hLinks contact">form</li>
          </Link>
          <Link to="/subscription">
            <li className="hLinks contact">subsrciption</li>
          </Link>
        </ul>
        {/* </div> */}
        <div className="right-side-header flex-it">
          <div id="toFormPg"></div>
          <div className="header-cart">
            {/* <p className="indicator"></p> */}
            <div className="cart-cont flex-it">
              <Link to="/cart">
                <i className="icofont-doutone icofont-cart cart">
                  {cart.length > 0 && <p className="flex-it">{cart.length}</p>}
                  {/* <p className="flex-it">20</p> */}
                </i>
              </Link>
              <i className="fa-solid fa-caret-down drop" onClick={dropCart}></i>
            </div>
          </div>
          <i
            className="fas fa-bars nav-icon"
            onClick={(e) => {
              change(e, true);
            }}
          ></i>
        </div>
        <div className="side-nav">
          <div className="side-nav-sub">
            <ul>
              <Link to="/">
                <li>home</li>
              </Link>
              <Link to="/products">
                <li>products</li>
              </Link>
              <Link to="/about">
                <li>about</li>
              </Link>
              <Link to="/contact">
                <li>contact</li>
              </Link>
              <Link to="/form/signup">
                <li>form</li>
              </Link>
              <Link to="/subscription">
                <li className="hLinks contact">subsrciption</li>
              </Link>
            </ul>
          </div>
          <i
            className="icofont-close side-nav-close-icon"
            onClick={(e) => {
              change(e, false);
            }}
          ></i>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
