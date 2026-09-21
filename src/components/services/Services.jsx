import { Component } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
class Services extends Component {
  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>Frontend Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Proficient in React.js, Redux, Material UI, Ant Design, HTML5, CSS3, and PWA for building modern, responsive user interfaces.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Experienced in collaborative front-end development projects, ensuring seamless integration with back-end systems.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Excelled in React application development, refining components for both new and existing features.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Committed to enhancing UI/UX design through continuous improvement and innovation.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Proficiently integrated third-party libraries and tools such as Swiper.js for improved website usability.</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Backend Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Demonstrated proficiency in Python, Django, Django REST Framework, FastAPI, and Celery for robust server-side solutions.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Played a key role in collaborative backend development projects, ensuring seamless integration with front-end systems.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Excelled in Django application development, refining backend components for both new and existing features.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Committed to enhancing database design and functionality through continuous improvement and innovation.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Proficiently integrated third-party databases such as PostgreSQL, MySQL, and SQLite for enhanced application functionality.</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>AI / GenAI Solutions</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Specialized in integrating OpenAI models, LangChain, and RAG to build intelligent, AI-powered applications.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Experienced in developing GenAI content platforms, auto-grading systems, and knowledge management solutions.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Proficient in Prompt Engineering, LLMs, and using tools like Cursor, Windsurf, Codex, and Claude.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Delivered AI-powered products including SEO content generation, auto-grading platforms, and knowledge retrieval systems.</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Cloud & DevOps</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Demonstrated proficiency in deploying web applications using AWS EC2, S3, RDS, and Azure App Service.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Experienced in containerizing applications with Docker and managing infrastructure on AWS and Azure.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Proficient in Git, GitHub, and GitLab for collaborative development and CI/CD workflows.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Implemented Grafana dashboards and monitoring systems for real-time data visualization.</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Deployment</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Deployed full-stack applications on AWS with EC2, S3, and RDS ensuring scalability and reliability.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Configured and managed Azure App Service for cloud-hosted applications.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Streamlined deployment workflows using Docker containers and automated CI/CD pipelines.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Ensured high availability and fault tolerance through robust deployment strategies and monitoring.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Services;
