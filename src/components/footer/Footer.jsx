import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import "./footer.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" }
];

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/anand-renjre-0726b8259/",
    label: "LinkedIn",
    icon: <BsLinkedin />
  },
  { href: "https://github.com/arenjre", label: "GitHub", icon: <FaGithub /> },
  {
    href: "https://www.facebook.com/renjre/",
    label: "Facebook",
    icon: <IoLogoFacebook />
  },
  {
    href: "mailto:anand.renjre@gmail.com",
    label: "Email",
    icon: <MdOutlineEmail />
  }
];

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#home" className="footer__logo">
          Anand Kumar
        </a>

        <ul className="permalinks">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="footer__social">
          {SOCIALS.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="footer__contact">
          <small>anand.renjre@gmail.com &nbsp;|&nbsp; +91 8962755855</small>
        </div>
        <div className="footer__copyright">
          <small>&copy; {new Date().getFullYear()} Anand Kumar. All rights reserved.</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
