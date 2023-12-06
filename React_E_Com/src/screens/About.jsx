import React from "react";

function About() {
  return (
    <div>
      <div class="mission">
        <div class="maxWidth mission-sub">
          <div class="det">
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
            class="img"
            style="background-image: url('./Media/pic.jpg')"
          ></div>
        </div>
      </div>
      <div class="team">
        <div class="maxWidth team-sub">
          <div class="head">
            <div class="line"></div>
            <h4>team members</h4>
            <div class="line"></div>
          </div>
          <h2>meet our experienced team</h2>
          <div class="grid">
            <div class="member">
              <div
                class="profile"
                style="background-image: url('./Media/profile.jpg')"
              ></div>
              <div class="info">
                <p class="name">nicholas swafford</p>
                <p class="portfolio">CEO & Founder</p>
              </div>
              <div class="social">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div class="member">
              <div
                class="profile"
                style="background-image: url('./Media/profile.jpg')"
              ></div>
              <div class="info">
                <p class="name">nicholas swafford</p>
                <p class="portfolio">CEO & Founder</p>
              </div>
              <div class="social">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div class="member">
              <div
                class="profile"
                style="background-image: url('./Media/profile.jpg')"
              ></div>
              <div class="info">
                <p class="name">nicholas swafford</p>
                <p class="portfolio">CEO & Founder</p>
              </div>
              <div class="social">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact_us_section" class="flex-it about-closing-remark">
        <div class="maxWidth border-b-2 border-slate-400">
          <h1 class="about-closing-text">
            Want To Work With Us? <br />
            Contact Us
          </h1>
          <button>
            <i class="fa-solid fa-phone"></i> Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
