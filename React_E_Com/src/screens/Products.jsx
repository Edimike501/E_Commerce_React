import NavBar from "../components/re-usable components/NavBar";
import Footer from "../components/re-usable components/Footer";
import ProductDisplay from "../components/re-usable components/ProductDisplay";
import Space from "../components/re-usable components/Space";

function Product() {
  return (
    <div className="hold">
      <NavBar bg={true} />
      <Space amt={60} />
      <ProductDisplay />
      <Space amt={60} />
      <Footer />
    </div>
  );
}

export default Product;
