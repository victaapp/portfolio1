import { Component } from "react";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube
} from "react-icons/io";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
      
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          {/* <li>
            <a href="#testimonials">Testimonials</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/renjre/" target="_blank">
            <IoLogoFacebook />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <IoLogoInstagram />
          </a>
          <a href="https://twitter.com" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <IoLogoYoutube />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Anand Kumar. All rights reserved</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
