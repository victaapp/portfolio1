import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/anand-kumar-7a4402135/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/arenjre" target="_blank">
          <FaGithub />
        </a>
        <a href="https://dribble.com" target="_blank">
          <FiDribbble />
        </a>
      </div>
    );
  }
}
export default HeaderSocials;
