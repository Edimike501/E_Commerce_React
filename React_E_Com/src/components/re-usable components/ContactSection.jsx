import "./css/ContactSection.css";

function ContactSection() {
  return (
    <div id="contact_us_section" className="flex-it about-closing-remark">
      <div className="maxWidth">
        <h1 className="about-closing-text">
          Want To Work With Us? <br />
          Contact Us
        </h1>
        <button>
          <i className="fa-solid fa-phone"></i> Get Started
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
