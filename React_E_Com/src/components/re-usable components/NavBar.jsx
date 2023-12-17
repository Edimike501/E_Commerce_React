import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ValueContext from "./ValueContext";
import "./css/NavBar.css";
import "./css/Alert.css";

function NavBar({ bg }) {
  const navigate = useNavigate();
  let cartIndicator = useRef();
  const alertElement = useRef();
  let showIndicator = false;
  const { cart } = useContext(ValueContext);
  if (cart.length > 0) showIndicator = true;
  let backgroundColor = "transparent";
  if (bg) backgroundColor = "var(--dim-black)";

  const dropCart = (e) => {
    e.target.previousElementSibling.classList.toggle("drop-cart");
  };

  const change = (e, disp) => {
    if (disp) {
      e.target.parentElement.nextElementSibling.style.display = "block";
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        e.target.parentElement.nextElementSibling.style.opacity = "1";
        e.target.parentElement.nextElementSibling.firstElementChild.style.transform =
          "translateX(0%)";
      }, 300);
      return;
    }
    document.body.style.overflow = "auto";
    e.target.parentElement.style.opacity = "0";
    e.target.previousElementSibling.style.transform = "translateX(-100%)";
    setTimeout(() => {
      e.target.parentElement.style.display = "none";
    }, 900);
  };

  const profileRoute = () => {
    navigate("/form/signup");
  };

  return (
    <header className="nav-cont flex-it" style={{ backgroundColor }}>
      <div className="maxWidth">
        <div className="alert-cont" ref={alertElement}></div>
        <ul className="links flex">
          <Link to="/">
            <img
              src={"/Media/nav-logo.png"}
              alt="nav-logo"
              className="nav-logo"
            />
          </Link>
          <Link to="/">
            <li
              className={
                window.location.pathname == "/"
                  ? "hLinks home li-active"
                  : "hLinks home"
              }
            >
              home
            </li>
          </Link>
          <Link to="/products">
            <li
              className={
                window.location.pathname == "/products"
                  ? "hLinks products li-active"
                  : "hLinks products"
              }
            >
              products
            </li>
          </Link>
          <Link to="/about">
            <li
              className={
                window.location.pathname == "/about"
                  ? "hLinks about li-active"
                  : "hLinks about"
              }
            >
              about
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={
                window.location.pathname == "/contact"
                  ? "hLinks contact li-active"
                  : "hLinks contact"
              }
            >
              contact
            </li>
          </Link>
          <Link to="/custom_order">
            <li
              className={
                window.location.pathname == "/custom_order"
                  ? "hLinks contact li-active"
                  : "hLinks contact"
              }
            >
              custom order
            </li>
          </Link>
        </ul>
        <div className="right-side-header flex-it">
          <div id="toFormPg" onClick={profileRoute}>
            <img src="/Media/default.jpg" alt="" />
          </div>
          <div className="header-cart">
            <div className="cart-cont flex-it">
              <Link to="/cart">
                <i className="icofont-doutone icofont-cart cart">
                  {cart.length > 0 && <p className="flex-it">{cart.length}</p>}
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
          <div className="side-nav-sub flex flex-col justify-between">
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
              <Link to="/custom_order">
                <li className="hLinks contact">Custom order</li>
              </Link>
              <Link to="/form/signup">
                <li className="hLinks contact">sign up</li>
              </Link>
              <Link to="/form/login">
                <li className="hLinks contact">login</li>
              </Link>
            </ul>

            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="/Media/default.jpg"
                alt="profile_image"
                onClick={profileRoute}
                className="w-10 h-10 rounded-full"
              />
              <p className="text-16 font-semibold capitalize">user myke</p>
            </div>
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
