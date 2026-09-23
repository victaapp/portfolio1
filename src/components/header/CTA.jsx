import { Component } from "react";
import { FiDownload, FiEye } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import CV from "../../assets/Anand_Kumar_Resume_Latest.pdf";

const RESUME_FILE_NAME = "Anand_Kumar_Resume.pdf";

class CTA extends Component {
  render() {
    return (
      <div className="cta">
        <a className="btn btn-primary" href={CV} download={RESUME_FILE_NAME}>
          <FiDownload />
          Download Resume
        </a>
        <a
          className="btn"
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiEye />
          View Resume
        </a>
        <a className="btn" href="#contact">
          <BiMessageSquareDetail />
          Let's Talk
        </a>
      </div>
    );
  }
}

export default CTA;
