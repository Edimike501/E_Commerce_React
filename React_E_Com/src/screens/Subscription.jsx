import NavBar from "../components/re-usable components/NavBar";
import Footer from "../components/re-usable components/Footer";
import Space from "../components/re-usable components/Space";
import hero from "/Media/banner14.jpg";
import "./css/Subscription.css";

function Subscription() {
  return (
    <div className="hold">
      <div className="subscription-hero">
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
      <Space amt={80} />
      <div className="subscription-sec2">
        <div className="maxWidth subscription-sec2-sub">
          <div
            className="image"
            style={{ backgroundImage: `url('${hero}')` }}
          ></div>
          <div className="text">
            <h1>about us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              reiciendis dolorem asperiores et, minus illum quae sapiente ipsam
              doloribus excepturi praesentium? Facere deleniti dolore atque.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              nemo, sed provident illo similique atque dolore. Optio accusantium
              ab repellendus dolores fugiat, quae dignissimos voluptatem
              asperiores laboriosam nostrum! Porro, ducimus.
            </p>
          </div>
        </div>
      </div>
      <Space amt={90} />
      <div className="subscription-sec3">
        <div className="maxWidth subscription-sec3-sub">
          <div className="about">
            <h2>about us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              reiciendis dolorem asperiores et, minus illum quae sapiente ipsam
              doloribus excepturi praesentium? Facere deleniti dolore atque.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, culpa a! Recusandae nobis consequuntur sit nemo,
              dolores aperiam sed praesentium officiis cum suscipit perferendis
              veniam doloremque sint rem maiores quibusdam.
            </p>
          </div>
          <div className="line"></div>
          <div className="feature">
            <h2>features</h2>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
            </ul>
          </div>
        </div>
      </div>
      <Space amt={90} />
      <div className="subscription-sec4">
        <h2>choose your plan</h2>
        <div className="maxWidth subscription-sec4-sub">
          <div className="plan">
            <div className="head">
              <div className="img"></div>
              <div className="text">
                <p className="type">Basic</p>
                <div className="price">
                  <p className="currency">$</p>
                  <p className="amt">254</p>
                  <p className="duration"> / month</p>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="features">
              <div className="feature">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
              <div className="feature">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
              <div className="feature not">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
              <div className="feature not">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
            </div>
            <button>
              Choose Plan <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="plan">
            <div className="head">
              <div className="img"></div>
              <div className="text">
                <p className="type">Basic</p>
                <div className="price">
                  <p className="currency">$</p>
                  <p className="amt">254</p>
                  <p className="duration"> / month</p>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="features">
              <div className="feature">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
              <div className="feature">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
              <div className="feature not">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
              <div className="feature not">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
            </div>
            <button>
              Choose Plan <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="plan">
            <div className="head">
              <div className="img"></div>
              <div className="text">
                <p className="type">Basic</p>
                <div className="price">
                  <p className="currency">$</p>
                  <p className="amt">254</p>
                  <p className="duration"> / month</p>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="features">
              <div className="feature">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
              <div className="feature">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
              <div className="feature not">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
              <div className="feature not">
                <i className="fa-solid fa-check"></i>
                <div>
                  Flexible <p>call Sheduling</p>
                </div>
              </div>
            </div>
            <button>
              Choose Plan <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
      <Space amt={90} />
      <Footer />
    </div>
  );
}

export default Subscription;
