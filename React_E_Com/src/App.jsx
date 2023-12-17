import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import ValueContext from "./components/re-usable components/ValueContext";
import productArray from "./components/re-usable components/productArray";
import ProductDetails from "./screens/ProductDetais";
import Form from "./screens/Form";
import Home from "./screens/Home";
import Product from "./screens/Products";
import Cart from "./screens/Cart";
import ForgotPassword from "./screens/ForgotPassword";
import About from "./screens/About";
import Contact from "./screens/Contact";
import CustomOrder from "./screens/CustomOrder";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      index: "index",
      element: <Home />
    },
    {
      path: "/products",
      element: <Product />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/form/:type",
      element: <Form />
    },
    {
      path: "/products/:productId",
      element: <ProductDetails />
    },
    {
      path: "/custom_order",
      element: <CustomOrder />
    },
    /* {
      path: "/forgot-password",
      element: <ForgotPassword />
    }, */
    {
      path: "/cart",
      element: <Cart />
    }
  ]);

  const localCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(localCart);

  return (
    <ValueContext.Provider value={{ cart, setCart, productArray }}>
      <RouterProvider router={routes} />
    </ValueContext.Provider>
  );
}

export default App;
