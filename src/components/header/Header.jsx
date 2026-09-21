import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Anand Kumar</h1>
          <div className="text-light">Software Engineer — Python | Django | AI/GenAI | Full-Stack</div>
          <CTA />
          <div className="me2" >
            <p style={{alignItems:"center"}}>
            Software Engineer with 5 years of experience designing and shipping production-grade Python/Django applications and AI-powered products built on OpenAI, LangChain, and RAG. Full-stack proficiency across Django REST Framework, React.js/Redux, and cloud deployment on AWS (EC2, S3, RDS) and Azure. Delivered fintech reward platforms, GenAI content and auto-grading systems, and cross-border social-impact applications used by NGOs and international clients. Strong track record of API design, code quality, and cross-functional Agile collaboration.
            </p>
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </header>
    );
  }
}

export default Header;
