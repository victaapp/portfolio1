import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Anand Kumar</h1>
          <div className="text-light">Fullstack Developer</div>
          <CTA />
          <div className="me2" >
            <p style={{alignItems:"center"}}>
            I specialize in crafting high-quality, responsive websites and dynamic web applications that boast clean user interfaces and rich interactive experiences. With expertise spanning both front-end and back-end development, I thrive on leveraging the power of React.js and JavaScript to create engaging user interfaces that captivate and delight users. On the backend, my proficiency lies in Python, Django, and Django Rest Framework, enabling me to architect robust server-side solutions and design RESTful APIs that seamlessly integrate with the frontend. I am well-versed in deploying applications using AWS EC2 and S3, ensuring scalability, reliability, and optimal performance. Whether it's remote freelance opportunities, contract work, or full-time positions, I am eager to tackle new challenges, solve complex problems, and innovate within the realm of web development.
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
