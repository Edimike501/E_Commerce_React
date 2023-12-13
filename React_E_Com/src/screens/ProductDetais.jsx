import { useContext, useRef, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import NavBar from "../components/re-usable components/NavBar";
import Footer from "../components/re-usable components/Footer";
import ValueContext from "../components/re-usable components/ValueContext";
import Alert from "../components/re-usable components/Alert";
// import shoe1 from /Media/shoe1.png";
import "./css/ProductDetails.css";

function ProductDetails() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    document.body.style.overflow = "auto";
  }, [location]);

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
    <div className="product-det-hold flex-col">
      <NavBar bg={true} />
      <div className="alert-cont" ref={alertElement}></div>
      <div className="w-full flex flex-col gap-5 items-center py-16 px-5">
        <div className="pageTitle maxWidth max-w-[1000px] font-semibold text-black text-25">
          Product Details
        </div>
        <div className="product-det-cont max-w-[1000px]">
          <div className="product-details">
            <div
              className="img-cont"
              style={{ backgroundImage: "url('/Media/shoe1.png')" }}
            >
              <div className="small-imgs">
                <div
                  className="small-img"
                  style={{ backgroundImage: "url('/Media/shoe1.png')" }}
                ></div>
                <div
                  className="small-img"
                  style={{ backgroundImage: "url('/Media/shoe1.png')" }}
                ></div>
                <div
                  className="small-img"
                  style={{ backgroundImage: "url('/Media/shoe1.png')" }}
                ></div>
              </div>
            </div>
            <div className="details">
              <h1 className="title">{data.title}</h1>
              <p className="price">${data.price}</p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                hic omnis eaque eius, laboriosam veniam.
              </p>
              <div className="quantity">
                <div className="text">
                  <p>QUANTITY :</p>
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
              <button
                className="add-to-cart-btn text-[#fff]"
                onClick={addToCart}
              >
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
          <div className="product-details mt-[50px]">
            <div className="w-full leading-relaxed">
              <h3>Product Description</h3>
              <br />
              <p>
                {data.description}
                <br />
                <br />
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
