import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/re-usable components/NavBar";
import Footer from "../components/re-usable components/Footer";
import ContactSection from "../components/re-usable components/ContactSection";
import Space from "../components/re-usable components/Space";
import "./css/Contact.css";

function Contact() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    document.body.style.overflow = "auto";
  }, [location]);

  return (
    <div>
      <NavBar bg={true} />
      <div className="form">
        <div className="maxWidth form-sub">
          <div className="det">
            <h1 className="font-semibold">Keep in Touch</h1>
            <p className="top">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              delectus quam provident ex reiciendis molestias error
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              itaque, ullam tempora, odit quia optio dolores omnis similique
              praesentium modi consectetur consequuntur. Tempora commodi
              molestias quibusdam tenetur eaque ducimus Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Error possimus sequi facilis
              quisquam est non veritatis id harum, ratione unde?
            </p>
          </div>
          <form action="#" className="w-full max-w-full">
            <h2 className="font-semibold">contact us</h2>
            <div className="field">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="your name"
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="field">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="field">
              <input type="tel" name="phone" id="phone" placeholder="phone" />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="field">
              <input
                type="text"
                name="budget"
                id="budget"
                placeholder="what's your budget"
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="field">
              <textarea
                name="description"
                id="description"
                placeholder="describe your taste"
              ></textarea>
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="btn">
              <button>contact us</button>
            </div>
          </form>
        </div>
      </div>
      <Space amt={30} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Contact;
