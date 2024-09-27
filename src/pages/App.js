import "../assets/css/style.css";
import logo from "../assets/img/logo.png";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Hero from "./Hero";
import Mission from "./Mission";

function App() {
  return (
    <div>
      <div className="navbar container">
        <div className="left">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="right">
          <p className="menu">Main</p>
          <p className="menu">Gallery</p>
          <p className="menu">Project</p>
          <p className="menu">Certifications</p>
          <p className="menu">Contact</p>
        </div>
      </div>

      <Hero />
      <About />
      <Mission />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
