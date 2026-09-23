import { Component } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const SKILL_GROUPS = [
  {
    title: "Backend & APIs",
    skills: [
      { name: "Python", level: "Experienced" },
      { name: "Django", level: "Experienced" },
      { name: "Django REST Framework", level: "Experienced" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Celery / RabbitMQ", level: "Intermediate" },
      { name: "JWT / OAuth", level: "Experienced" },
      { name: "PostgreSQL / MySQL", level: "Intermediate" },
      { name: "Unittest", level: "Experienced" }
    ]
  },
  {
    title: "AI / GenAI",
    skills: [
      { name: "OpenAI API", level: "Experienced" },
      { name: "LangChain", level: "Experienced" },
      { name: "RAG Pipelines", level: "Experienced" },
      { name: "LLMs", level: "Experienced" },
      { name: "Prompt Engineering", level: "Experienced" },
      { name: "Cursor / Windsurf", level: "Experienced" },
      { name: "Codex / Claude", level: "Experienced" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: "Experienced" },
      { name: "Redux", level: "Experienced" },
      { name: "JavaScript", level: "Experienced" },
      { name: "Material UI", level: "Intermediate" },
      { name: "Ant Design", level: "Intermediate" },
      { name: "Bootstrap", level: "Intermediate" },
      { name: "HTML5 / CSS3", level: "Experienced" },
      { name: "PWA", level: "Intermediate" }
    ]
  },
  {
    title: "Cloud, DevOps & Data",
    skills: [
      { name: "AWS (EC2, S3, RDS)", level: "Experienced" },
      { name: "Azure App Service", level: "Intermediate" },
      { name: "Docker", level: "Experienced" },
      { name: "Git / GitHub / GitLab", level: "Experienced" },
      { name: "Grafana / Sentry", level: "Intermediate" },
      { name: "Scrapy", level: "Intermediate" },
      { name: "Blockchain Integration", level: "Intermediate" },
      { name: "Beam", level: "Intermediate" }
    ]
  }
];

const TIMELINE = [
  {
    role: "Full Stack AI Developer",
    company: "Devteam 365 Development India Pvt. Ltd.",
    period: "Feb 2025 – Apr 2026",
    points: [
      "Built and maintained production Python/Django applications, ensuring high performance, scalability, and reliability.",
      "Integrated OpenAI models into client-facing products to deliver intelligent, GenAI-powered features.",
      "Partnered with cross-functional teams to translate business requirements into shipped, production-ready features.",
      "Managed source control and collaborative development workflows using Git and GitHub."
    ]
  },
  {
    role: "Associate Software Engineer – II",
    company: "Techno Exponent",
    period: "Apr 2024 – Jan 2025",
    points: [
      "Developed and maintained high-performance Python-based applications for production environments.",
      "Integrated advanced OpenAI models into applications to deliver AI-driven, intelligent solutions.",
      "Collaborated with cross-functional teams to design and implement features aligned to business needs.",
      "Used Git and GitHub to streamline code management and team collaboration."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "BridgeFix Technology, Indore",
    period: "Mar 2021 – Mar 2024",
    points: [
      "Led backend development with Python/Django and Django REST Framework, containerized with Docker; drove frontend delivery with JavaScript, React.js, and Redux.",
      "Designed and built the Tuzo reward-points platform for merchants and ISOs using Django, React.js, AWS EC2, and RDS.",
      "Resolved Jira-tracked issues, wrote unit tests to protect code quality, and built new APIs to extend platform capability.",
      "Optimized REST APIs and the Django admin dashboard; implemented Grafana dashboards backed by SQL for real-time data monitoring.",
      "Contributed to Agile ceremonies and peer code reviews while staying current on industry best practices."
    ]
  }
];

class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>Skills &amp; Experience</h2>

        <div className="container experience__container">
          {SKILL_GROUPS.map(({ title, skills }) => (
            <div className="experience__group" key={title}>
              <h3>{title}</h3>
              <div className="experience__content">
                {skills.map(({ name, level }) => (
                  <article className="experience__details" key={name}>
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{name}</h4>
                      <small className="text-light">{level}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="container">
          <div className="experience__work">
            <h3>Work Experience</h3>
            <div className="experience__timeline">
              {TIMELINE.map(({ role, company, period, points }) => (
                <div className="timeline__item" key={role + company}>
                  <span className="timeline__marker" />
                  <div className="timeline__head">
                    <h4>{role}</h4>
                    <span className="timeline__period">{period}</span>
                  </div>
                  <p className="timeline__company">{company}</p>
                  <ul className="timeline__points">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
