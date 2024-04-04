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
                <p>Demonstrated proficiency in front-end technologies including JavaScript, React.js, and Redux..</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Played a key role in collaborative front-end development projects, ensuring seamless integration with back-end systems.</p>
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
                <p>Demonstrated proficiency in backend technologies including Python, Django, and Django Rest Framework.</p>
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
                <p>Proficiently integrated third-party databases and tools such as MySQL and PostgreSQL for enhanced application functionality and data management.</p>
              </li>
              
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Deployement</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Demonstrated proficiency in deploying web applications using AWS EC2 and S3, ensuring scalable and reliable hosting solutions.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Played a key role in setting up AWS infrastructure, configuring EC2 instances, and managing S3 buckets for efficient deployment workflows.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Committed to ensuring high availability and fault tolerance by implementing robust deployment strategies and monitoring systems on AWS.</p>
              </li>
              
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Services;
