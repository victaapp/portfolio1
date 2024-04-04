import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import port3 from "../../assets/port3.png";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port4 from "../../assets/port4.png";
import port5 from "../../assets/port5.png";

const data = [
  {
    id: 1,
    image: port3,
    title: "Merumesh",
    github: "https://github.com/",
    demo: "https://www.merumesh.com/"
  },
  {
    id: 2,
    image: port4,
    title: "AltHub",
    demo: "https://althub.com/"
  },
  
  {
    id: 3,
    image: port2,
    title: "Inclusive Labor Monitoring",
    demo: "https://ilm.issarainstitute.org/"
  },
  {
    id: 4,
    image: port1,
    title: "Golden Dreams",
    demo: "https://app.golden-dreams.org/"
  },
  
  {
    id: 5,
    image: port5,
    title: "ILM community public dashboard",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev"
  },
  
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
