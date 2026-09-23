import { Component } from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import "./projects.css";

const PROJECTS = [
  {
    title: "YT Summarizer",
    tags: ["Python", "LangChain", "OpenAI", "RAG"],
    description:
      "AI-powered RAG-based project that lets users chat with a YouTube video — ask questions and get contextual answers grounded in the video's content."
  },
  {
    title: "AI Rank",
    tags: ["Python", "Django", "OpenAI", "AWS", "WordPress"],
    description:
      "GenAI platform that generates SEO-friendly articles and auto-publishes them to WordPress, delivering affordable, automated content creation."
  },
  {
    title: "Second Brain",
    tags: ["Python", "Django", "OpenAI", "RAG", "LangChain"],
    description:
      "AI-powered personal knowledge platform using RAG and LLMs to organize, retrieve, and generate contextual responses from stored knowledge and documents."
  },
  {
    title: "Web App Comprehensive Exam",
    tags: ["Django", "DRF", "OpenAI API"],
    description:
      "Auto-grading platform enabling teachers to create exams, upload answer sheets, and use OpenAI for automated grading and personalized student feedback."
  },
  {
    title: "Tuzo — Reward Points Management",
    tags: ["Django", "React.js", "AWS EC2", "RDS", "Celery"],
    description:
      "Transaction-based rewards platform where merchants and ISOs earn and redeem points; built backend (Django) and frontend (React.js) with AWS deployment."
  },
  {
    title: "AFTS Digital — Cargo & Logistics",
    tags: ["Django", "React.js", "AWS", "Blockchain"],
    description:
      "Secure cargo management system for cross-border defense-supply transport with a three-layer consignor/customs/consignee workflow, using blockchain for transparency and data security."
  },
  {
    title: "Inclusive Labor Monitoring & Golden Dreams",
    tags: ["Django", "DRF", "Docker", "React.js", "Material UI", "AWS"],
    description:
      "Multi-language (Burmese, Khmer, Nepali) web and mobile platforms for case management and worker rights education, supporting migrant workers and NGO staff across Asia."
  }
];

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h5>What I've Built</h5>
        <h2>Key Projects</h2>
        <div className="container projects__container">
          {PROJECTS.map(({ title, tags, description }) => (
            <article className="project__card" key={title}>
              <HiOutlineSparkles className="project__icon" />
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="project__tags">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
