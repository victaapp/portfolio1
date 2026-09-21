import { Component } from "react";
import CV from "../../assets/Anand_Kumar_Resume.pdf";
class CTA extends Component {
  render() {
    return (
      <div className="cta">
        <a className="btn" href={CV} download="Anand_Kumar_Resume.pdf">
          Download CV
        </a>
        <a className="btn btn-primary" href="#contact">
          Let's Talk
        </a>
      </div>
    );
  }
}

export default CTA;
