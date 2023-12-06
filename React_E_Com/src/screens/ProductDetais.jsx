import { useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ValueContext from "../components/re-usable components/ValueContext";
import Alert from "../components/re-usable components/Alert";
import shoe1 from "/Media/shoe1.png";
import "./css/ProductDetails.css";

function ProductDetails() {
  const alertElement = useRef();
  const { cart, setCart, productArray } = useContext(ValueContext);
  const { productId } = useParams();
  const data =
    cart.find((item) => item.id == productId) ||
    productArray.find((item) => item.id == productId);
  console.log(data);
  const changeQty = (increase) => {
    if (increase) {
      console.log("inc");
      let products = cart.map((c) => {
        if (c.id == productId) c.qty++;
        return c;
      });
      setCart(() => products);
      localStorage.setItem("cart", JSON.stringify(products));
      Alert(alertElement.current, "product updated successfully");
      return;
    }
    let products = cart.map((c) => {
      if (c.id == productId) c.qty--;
      return c;
    });
    setCart(() => products);
    localStorage.setItem("cart", JSON.stringify(products));
    Alert(alertElement.current, "product updated successfully");
  };

  const addToCart = () => {
    const data = productArray.find((item) => item.id == productId);
    const cartData = cart.find((item) => item.id == productId);
    if (cartData) {
      Alert(alertElement.current, "product already in cart");
      return;
    }
    const products = [...cart, { ...data, qty: 1 }];
    // console.log(products);
    setCart(() => products);
    localStorage.setItem("cart", JSON.stringify(products));
    Alert(alertElement.current, "product added successfully");
  };

  return (
    <div className="product-det-hold">
      {/* <NavBar bg={true} /> */}
      <div className="alert-cont" ref={alertElement}></div>
      <div className="product-det-cont">
        <div className="head">
          <Link to="/products">
            <i className="fa-solid fa-arrow-left-long"></i>
          </Link>
          <div className="logo">Your Logo</div>
          <Link to="/cart">
            <i className="icofont-doutone icofont-cart cart">
              {cart.length > 0 && <p className="flex-it">{cart.length}</p>}
              {/* <p className="flex-it">20</p> */}
            </i>
          </Link>
        </div>
        <div className="product-details">
          <div
            className="img-cont"
            style={{ backgroundImage: `url('${shoe1}')` }}
          >
            <div className="small-imgs">
              <div
                className="small-img"
                style={{ backgroundImage: `url('${shoe1}')` }}
              ></div>
              <div
                className="small-img"
                style={{ backgroundImage: `url('${shoe1}')` }}
              ></div>
              <div
                className="small-img"
                style={{ backgroundImage: `url('${shoe1}')` }}
              ></div>
            </div>
          </div>
          <div className="details">
            <h1 className="title">{data.title}</h1>
            <p className="price">${data.price}</p>
            <p className="description">{data.description}</p>
            <div className="quantity">
              <div className="text">
                <p>QUANTITY : </p>
                <p className="value">{data.qty}</p>
              </div>
              <div className="icon">
                <i
                  className="icofont-minus"
                  onClick={(e) => changeQty(false)}
                ></i>
                <i
                  className="icofont-plus"
                  onClick={(e) => changeQty(true)}
                ></i>
              </div>
            </div>
            <button className="add-to-cart-btn" onClick={addToCart}>
              ADD TO CART
            </button>
            <div className="share">
              <p>share this model</p>
              <div className="icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
