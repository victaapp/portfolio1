import { Component } from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./header.css";

const HIGHLIGHTS = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Products Shipped" },
  { value: "AI", label: "GenAI / RAG Focus" }
];

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="header__glow header__glow--one" />
        <div className="header__glow header__glow--two" />

        <div className="container header__container">
          <span className="header__badge">
            <span className="header__badge-dot" />
            Available for new opportunities
          </span>

          <h5 className="header__greeting">Hello, I'm</h5>
          <h1 className="header__name">Anand Kumar</h1>

          <div className="header__role">
            Software Engineer
            <span className="header__role-sep">/</span>
            Python &amp; Django
            <span className="header__role-sep">/</span>
            AI &amp; GenAI
            <span className="header__role-sep">/</span>
            Full-Stack
          </div>

          <p className="header__location text-light">
            <HiOutlineLocationMarker /> Indore, Madhya Pradesh, India
          </p>

          <p className="header__summary">
            Software Engineer with 5 years of experience designing and shipping
            production-grade Python/Django applications and AI-powered products built
            on OpenAI, LangChain, and RAG. Full-stack proficiency across Django REST
            Framework, React.js/Redux, and cloud deployment on AWS (EC2, S3, RDS) and
            Azure. Delivered fintech reward platforms, GenAI content and auto-grading
            systems, and cross-border social-impact applications used by NGOs and
            international clients.
          </p>

          <CTA />

          <div className="header__highlights">
            {HIGHLIGHTS.map(({ value, label }) => (
              <div className="header__highlight" key={label}>
                <strong>{value}</strong>
                <small>{label}</small>
              </div>
            ))}
          </div>

          <a href="#about" className="scroll__down">
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </header>
    );
  }
}

export default Header;
