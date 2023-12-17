import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import Alert from "../components/re-usable components/Alert";
import ValueContext from "../components/re-usable components/ValueContext";
import Space from "../components/re-usable components/Space";

import "./css/Cart.css";

function Cart() {
  const alertElement = useRef();
  let orderCont = useRef();
  const { cart, setCart, productArray } = useContext(ValueContext);
  let total = 0;
  cart.forEach((item) => {
    total += Number(item.price * item.qty);
  });

  const changeQty = (e, increase) => {
    const id = e.target.parentElement.firstElementChild.value;
    if (increase) {
      let products = cart.map((c) => {
        if (c.id == id) c.qty++;
        return c;
      });

      setCart(() => products);
      localStorage.setItem("cart", JSON.stringify(products));
      Alert(alertElement.current, "product updated successfully");
      return;
    }

    let products = cart.map((c) => {
      if (c.id == id) c.qty--;
      return c;
    });

    setCart(() => products);
    localStorage.setItem("cart", JSON.stringify(products));
    Alert(alertElement.current, "product updated successfully");
  };

  const deleteItem = (e) => {
    const id = e.target.previousElementSibling.value;
    const index = cart.findIndex((cart) => cart.id == id);
    const products = cart.map((c) => c);
    products.splice(index, 1);
    setCart(() => products);
    localStorage.setItem("cart", JSON.stringify(products));
  };

  const emptyCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    orderCont = orderCont.current.children;
  });

  return (
    <div className="flex-it cart-hold">
      <div className="alert-cont" ref={alertElement}></div>
      <div className="flex-it flex-col cart-sub">
        <div className="cart-head">
          <h1>Hey User, Here's your Cart</h1>
          <p>Step Up Your Shoe Game, One Step Ahead.</p>
          <Link to="/products">
            <p className="continue">continue shopping</p>
          </Link>
        </div>
        <Space amt={40} />
        <div className="cart-orders" ref={orderCont}>
          {cart.map((item, i) => (
            <div className="order" key={i}>
              <input type="hidden" value={item.id} />
              <i
                className="fa-regular fa-trash-can del-order"
                onClick={deleteItem}
              ></i>
              <img src={"/Media/shoe1.png"} alt="order-img" />
              <div className="order-det">
                <div>
                  <div>
                    <p className="title">{item.title}</p>
                    <p className="other">{item.category}</p>
                  </div>
                  <p className="price">${item.price}</p>
                </div>
                <div className="ali-end">
                  <div className="btn-cont">
                    <input type="hidden" value={item.id} />
                    <i
                      className="fas fa-plus"
                      onClick={(e) => changeQty(e, true)}
                    ></i>
                    <p className="preview">{item.qty}</p>
                    <i
                      className="fas fa-minus"
                      onClick={(e) => changeQty(e, false)}
                    ></i>
                  </div>
                  <p className="amount">${item.price * item.qty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Space amt={60} />
        <div className="cart-order-summary">
          <p className="title">order summary</p>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            pariatur repudiandae inventore molestias, modi sed?
          </p>
          <div className="total">
            <p>total</p>
            <p>${total}</p>
          </div>
          <div className="btn-cont">
            <Link to="/products">
              <button>continue shopping</button>
            </Link>
            <button>proceed to checkout</button>
          </div>
          <button className="empty-cart" onClick={emptyCart}>
            empty cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
