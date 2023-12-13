import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/re-usable components/Footer";
import NavBar from "../components/re-usable components/NavBar";
import ContactSection from "../components/re-usable components/ContactSection";
import Space from "../components/re-usable components/Space";
import "./css/About.css";

function About() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    document.body.style.overflow = "auto";
  }, [location]);

  return (
    <div>
      <NavBar bg={true} />
      {/* <Space amt={30} /> */}
      <div className="mission">
        <div className="maxWidth mission-sub">
          <div className="det">
            <h2>our mission</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              praesentium numquam corporis magni harum, nostrum modi unde fuga
              natus quia facilis aliquam distinctio nemo, officia nulla veniam
              nobis. Quis, error voluptatum. Veritatis, nostrum? Consequatur
              dolores minus rem consequuntur culpa magnam placeat quae autem
              officia commodi delectus, natus molestias adipisci ius Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              necessitatibus, recusandae ipsum modi voluptas delectus hic
              corporis vel nisi aut!
            </p>
          </div>
          <div
            className="img"
            style={{ backgroundImage: "url('/Media/pic.jpg')" }}
          ></div>
        </div>
      </div>
      <div className="team">
        <div className="maxWidth team-sub">
          <div className="head">
            <div className="line"></div>
            <h4>team members</h4>
            <div className="line"></div>
          </div>
          <h2>meet our experienced team</h2>
          <div className="grid">
            <div className="member">
              <div
                className="profile"
                style={{ backgroundImage: "url('/Media/profile.jpg')" }}
              ></div>
              <div className="info">
                <p className="name">nicholas swafford</p>
                <p className="portfolio">CEO & Founder</p>
              </div>
              <div className="social">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="member">
              <div
                className="profile"
                style={{ backgroundImage: "url('/Media/profile.jpg')" }}
              ></div>
              <div className="info">
                <p className="name">nicholas swafford</p>
                <p className="portfolio">CEO & Founder</p>
              </div>
              <div className="social">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="member">
              <div
                className="profile"
                style={{ backgroundImage: "url('/Media/profile.jpg')" }}
              ></div>
              <div className="info">
                <p className="name">nicholas swafford</p>
                <p className="portfolio">CEO & Founder</p>
              </div>
              <div className="social">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Space amt={60} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default About;
