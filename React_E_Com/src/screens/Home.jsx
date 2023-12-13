import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/re-usable components/NavBar";
import Space from "../components/re-usable components/Space";
import ProductDisplay from "../components/re-usable components/ProductDisplay";
import ContactSection from "../components/re-usable components/ContactSection";
import Footer from "../components/re-usable components/Footer";
import Alert from "../components/re-usable components/Alert";
import hero from "/Media/banner14.jpg";
import "./css/Home.css";

function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    document.body.style.overflow = "auto";
  }, [location]);
  const ref = useRef();
  return (
    <div className="hold">
      {/* <Alert bg="var(--pink)" content="added successfully" /> */}
      <div className="hero">
        <div
          className="hero-img"
          style={{ backgroundImage: `url('${hero}')` }}
        ></div>
        <div>
          <NavBar bg={false} />
          <div className="maxWidth hero-content">
            <div className="details">
              <h5>We can help you buy the best Shoes</h5>
              <p>The best Wears from UK</p>
              <div className="btns">
                <button>discover wines</button>
                <button>support help</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Space amt={60} />
      <ProductDisplay limit={true} />
      <Space amt={60} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
