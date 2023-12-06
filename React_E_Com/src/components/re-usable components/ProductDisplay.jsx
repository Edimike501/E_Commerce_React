import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import ValueContext from "./ValueContext";
import shoe1 from "/Media/shoe1.png";
import "./css/ProductDisplay.css";
import "./css/Alert.css";

function ProductDisplay() {
  const prodCont = useRef();
  const alertElement = useRef();
  const { cart, setCart, productArray } = useContext(ValueContext);
  const addToCart = (e) => {
    let products;
    const id = parseInt(
      e.target.parentElement.parentElement.parentElement.firstElementChild.value
    );
    let data = productArray.find((item) => item.id == id);
    // console.log(id, data);
    let condition = cart.some((item) => item.id == data.id);
    if (condition) {
      // console.log(index);
      products = cart.map((item) => {
        if (item.id == data.id) {
          item.qty++;
          // console.log(item.qty);
          return { ...item, qty: item.qty };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(products));
      // console.log(products);
      Alert(alertElement.current, "product updated successfully");
      return;
    }
    products = [...cart, { ...data, qty: 1 }];
    // console.log(products);
    setCart(() => products);
    localStorage.setItem("cart", JSON.stringify(products));
    Alert(alertElement.current, "product added successfully");
  };
  useEffect(() => {});
  return (
    <div className="product-cont">
      <div className="alert-cont" ref={alertElement}></div>
      <div className="maxWidth product-cont-sub" ref={prodCont}>
        {productArray.map((product) => {
          // console.log(product);
          return (
            <div className="product" key={product.id}>
              <input type="hidden" value={product.id} />
              <div className="bookmark">
                <i className="icofont-book-mark"></i>
              </div>
              <div className="image flex-it">
                <img src={shoe1} alt="" />
              </div>
              <div className="det">
                <p className="name">{product.title}</p>
                <div className="brnd-cont flex-spc-btwn">
                  <p className="brand">{product.category}</p>
                  <p className="price">${product.price}</p>
                </div>
                <div className="rating">
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                </div>
                <div className="btn flex-spc-btwn">
                  <Link to={`/products/${product.id}`}>
                    <div>More</div>
                  </Link>
                  <button onClick={addToCart}>add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDisplay;
