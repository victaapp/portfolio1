import { Component } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import "./nav.css";

const LINKS = [
  { id: "#home", label: "Home", icon: <AiOutlineHome /> },
  { id: "#about", label: "About", icon: <AiOutlineUser /> },
  { id: "#experience", label: "Experience", icon: <BiBook /> },
  { id: "#services", label: "Services", icon: <RiServiceLine /> },
  { id: "#projects", label: "Projects", icon: <HiOutlineSparkles /> },
  { id: "#portfolio", label: "Portfolio", icon: <MdOutlineWorkOutline /> },
  { id: "#contact", label: "Contact", icon: <BiMessageSquareDetail /> }
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "#home" };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // highlight the section currently closest to the top of the viewport
  handleScroll() {
    const offset = window.innerHeight * 0.35;
    let active = LINKS[0].id;

    LINKS.forEach(({ id }) => {
      const section = document.querySelector(id);
      if (section && section.getBoundingClientRect().top <= offset) {
        active = id;
      }
    });

    if (active !== this.state.active) {
      this.setState({ active });
    }
  }

  render() {
    return (
      <nav>
        {LINKS.map(({ id, label, icon }) => (
          <a
            key={id}
            href={id}
            aria-label={label}
            title={label}
            onClick={() => this.setState({ active: id })}
            className={this.state.active === id ? "active" : ""}
          >
            {icon}
          </a>
        ))}
      </nav>
    );
  }
}

export default Nav;
