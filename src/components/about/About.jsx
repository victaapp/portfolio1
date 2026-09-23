import { Component } from "react";
import ME from "../../assets/me-about2.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers, FiDownload } from "react-icons/fi";
import { FaProjectDiagram, FaGraduationCap } from "react-icons/fa";
import CV from "../../assets/Anand_Kumar_Resume_Latest.pdf";
import "./about.css";

const STATS = [
  { icon: <BsAwardFill className="about__icon" />, title: "Experience", value: "5+ Years Working" },
  { icon: <FiUsers className="about__icon" />, title: "Clients", value: "5+ Worldwide" },
  { icon: <FaProjectDiagram className="about__icon" />, title: "Projects", value: "10+ Delivered" }
];

const EDUCATION = [
  {
    degree: "M.Sc. in Computer Science",
    school: "Barkatullah University, Bhopal",
    meta: "2018 · 70%"
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "Rani Durgawati University, Jabalpur",
    meta: "2014 · 67%"
  }
];

class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Anand Kumar" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              {STATS.map(({ icon, title, value }) => (
                <article className="about__card" key={title}>
                  {icon}
                  <h5>{title}</h5>
                  <small>{value}</small>
                </article>
              ))}
            </div>

            <p className="about__text">
              I build production Python/Django backends and the React interfaces that
              sit on top of them, with a strong focus on AI-powered features using
              OpenAI, LangChain, and RAG. My work spans fintech reward platforms,
              GenAI content and auto-grading systems, and cross-border social-impact
              applications used by NGOs and international clients &mdash; deployed on
              AWS and Azure with an eye on API design, code quality, and Agile
              collaboration.
            </p>

            <div className="about__education">
              <h4>
                <FaGraduationCap /> Education
              </h4>
              <div className="about__education-list">
                {EDUCATION.map(({ degree, school, meta }) => (
                  <div className="about__education-item" key={degree}>
                    <strong>{degree}</strong>
                    <span>{school}</span>
                    <small>{meta}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="about__cta">
              <a className="btn btn-primary" href={CV} download="Anand_Kumar_Resume.pdf">
                <FiDownload />
                Download Resume
              </a>
              <a href="#contact" className="btn">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
