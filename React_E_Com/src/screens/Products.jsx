import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/re-usable components/NavBar";
import Footer from "../components/re-usable components/Footer";
import ProductDisplay from "../components/re-usable components/ProductDisplay";
import Space from "../components/re-usable components/Space";
import ContactSection from "../components/re-usable components/ContactSection";

function Product() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    document.body.style.overflow = "auto";
  }, [location]);

  return (
    <div className="hold">
      <NavBar bg={true} />
      <Space amt={60} />
      <ProductDisplay />
      <Space amt={60} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Product;
