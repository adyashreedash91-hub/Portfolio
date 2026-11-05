
import "./App.css";
import { useState } from "react";

import {
  Mail,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Briefcase,
  MapPin,
  ExternalLink,
  Download,
  FileText,
  Database,
  Laptop,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    {
      title: "Programming Languages",
      icon: Code2,
      items: ["Python", "Java", "JavaScript"],
    },
    {
      title: "Frontend Development",
      icon: Laptop,
      items: ["HTML5", "CSS3", "Tailwind CSS", "React.js"],
    },
    {
      title: "Databases",
      icon: Database,
      items: ["MySQL"],
    },
    {
      title: "Tools & Platforms",
      icon: Briefcase,
      items: ["GitHub", "VS Code"],
    },
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Time Management",
  ];

  const languages = ["English", "Hindi", "Odia"];

  const projects = [
    {
      title: "Food Delivery Website",
      description:
        "A food delivery website where users can explore food items, search products, add items to cart and place orders through a user-friendly interface.",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      link: "https://food-frontend-gamma-five.vercel.app/",
    },
    {
      title: "Pizza Ordering Website",
      description:
        "A pizza ordering website where users can explore different pizzas, view prices and enjoy a simple and interactive ordering experience.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      link: "https://pizzaorderingwebsite-virid.vercel.app/",
    },
  ];

  const internships = [
    {
      title: "MySQL Internship",
      company: "NEO ORIGIN",
      duration: "22 June 2024 – 28 June 2024",
      details: "45 Hours | Training Code: NE0003",
      image: "/images/mysql-internship-certificate.jpeg",
    },
    {
      title: "Core Java Internship",
      company: "Glucian India Pvt. Ltd.",
      duration: "1 June 2024 – 30 June 2024",
      details: "Core Java Internship Training",
      image: "/images/java-internship-certificate.jpeg",
    },
  ];

  const education = [
    {
      degree: "B.Tech – Computer Science and Engineering",
      college: "Gandhi Institute of Technology and Management",
      detail: "Bhubaneswar, Odisha",
      year: "2023–2027",
      score: "CGPA: 8.5",
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      college: "Nayagarh Prajamandal Mahila Maha Vidyalaya",
      detail: "Odisha",
      year: "2021–2023",
      score: "60%",
    },
    {
      degree: "Secondary Education (Class X)",
      college: "Kamaleswar Dev High School",
      detail: "Odisha",
      year: "2021",
      score: "85%",
    },
  ];

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Internships", "#internships"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Adyashree<span>.</span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map(([name, link]) => (
            <a
              key={name}
              href={link}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-text">
          <span className="hero-label">
            WELCOME TO MY PORTFOLIO
          </span>

          <h3>Hello, I'm</h3>

          <h1>
            Adyashree <span className="purple">Dash</span>
          </h1>

          <h2 className="hero-role">
            Full Stack Developer
          </h2>

          <p>
            I am a Computer Science Engineering student passionate
            about building creative, responsive and user-friendly
            web applications. I enjoy learning new technologies
            and turning ideas into reality.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary">
              View My Projects
              <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className="secondary">
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Adyashree_Dash_Resume.pdf"
              className="primary"
            >
              <Download size={17} />
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              <FileText size={17} />
              View Resume
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/adyashreedash91-hub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ExternalLink size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/adyashree-dash-b5b4ba2bb"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ExternalLink size={14} />
            </a>

            <a href="mailto:adyashreedash91@gmail.com">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/adyashree-profile.jpeg"
            alt="Adyashree Dash"
          />
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="section about-section" id="about">
        <span className="about-label">A LITTLE ABOUT ME</span>

        <h2 className="about-title">
          Curious mind. <span>Builder's mindset.</span>
        </h2>

        <p className="about-subtitle">
          I enjoy turning ideas into practical, user-friendly digital
          experiences while continuously learning new technologies.
        </p>

        <div className="about-main-card">
          <p className="about-description">
            I'm Adyashree Dash, a Computer Science and Engineering
            student at Gandhi Institute of Technology and Management,
            Bhubaneswar. I enjoy building responsive web applications
            and exploring modern web technologies. Through academic
            projects, internships and practical learning, I'm
            continuously strengthening my programming and development
            skills. My goal is to contribute to meaningful software
            solutions and grow as a developer.
          </p>

          <div className="career-box">
            <div className="career-icon">
              <Code2 size={20} />
            </div>

            <div>
              <h3>Career Objective</h3>
              <p>
                To contribute to meaningful software projects, improve
                my full-stack development skills and grow as a software
                developer while working with a collaborative team.
              </p>
            </div>
          </div>
        </div>

        <div className="about-info-grid">
          <div className="about-info-card">
            <div className="about-info-icon">
              <GraduationCap size={20} />
            </div>
            <span>CURRENT DEGREE</span>
            <h3>B.Tech · 2023–2027</h3>
          </div>

          <div className="about-info-card">
            <div className="about-info-icon">
              <Code2 size={20} />
            </div>
            <span>PRIMARY FOCUS</span>
            <h3>Full Stack Development</h3>
          </div>

          <div className="about-info-card">
            <div className="about-info-icon">
              <Laptop size={20} />
            </div>
            <span>ADDITIONAL INTERESTS</span>
            <h3>Web Development & Programming</h3>
          </div>

          <div className="about-info-card">
            <div className="about-info-icon">
              <MapPin size={20} />
            </div>
            <span>LOCATION</span>
            <h3>Bhubaneswar, Odisha, India</h3>
          </div>
        </div>
      </section>

      {/* TECHNICAL TOOLKIT */}
      <section className="section toolkit" id="skills">
        <span className="toolkit-label">WHAT I WORK WITH</span>

        <h2 className="toolkit-title">
          My technical <span>toolkit</span>
        </h2>

        <p className="toolkit-description">
          A growing set of languages, frameworks, and tools I use
          while learning and building projects.
        </p>

        <div className="toolkit-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div className="toolkit-card" key={skill.title}>
                <h3>
                  <span className="toolkit-icon">
                    <Icon size={17} />
                  </span>
                  {skill.title}
                </h3>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="toolkit-extra">
          <h3>Soft Skills</h3>

          <div className="skill-tags">
            {softSkills.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <h3>Languages</h3>

          <div className="skill-tags">
            {languages.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-heading">
          <span className="section-label">MY WORK</span>
          <h2>
            My <span className="purple">Projects</span>
          </h2>
          <p>Some projects I have developed</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div
              className="glass-card project-card"
              key={project.title}
            >
              <div className="project-icon">
                <Code2 size={25} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="skill-tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo <ArrowUpRight size={17} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNSHIPS */}
      <section className="section" id="internships">
        <div className="section-heading">
          <span className="section-label">MY EXPERIENCE</span>

          <h2>
            Internships & <span className="purple">Certificates</span>
          </h2>

          <p>My internship experience and achievements</p>
        </div>

        <div className="project-grid">
          {internships.map((internship) => (
            <div
              className="glass-card project-card"
              key={internship.title}
            >
              <Briefcase className="purple" size={27} />

              <h3>{internship.title}</h3>
              <p><strong>{internship.company}</strong></p>
              <p>{internship.duration}</p>
              <p>{internship.details}</p>

              <img
                src={internship.image}
                alt={`${internship.title} certificate`}
                className="certificate-image"
              />

              <a
                href={internship.image}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Certificate
                <ArrowUpRight size={17} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section" id="education">
        <span className="section-label">EDUCATION</span>

        <h2 className="education-title">
          The foundation of my <span>journey</span>
        </h2>

        <p className="education-subtitle">
          My academic path in computer science and software development.
        </p>

        <div className="education-timeline">
          {education.map((item) => (
            <div className="timeline-item" key={item.degree}>
              <div className="timeline-icon">
                <GraduationCap size={19} />
              </div>

              <div className="timeline-card">
                <div className="timeline-top">
                  <h3>{item.degree}</h3>
                  <span className="timeline-date">{item.year}</span>
                </div>

                <p className="college-name">{item.college}</p>
                <p className="college-detail">{item.detail}</p>

                <div className="timeline-score">
                  <GraduationCap size={15} />
                  {item.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="section-heading">
          <span className="section-label">GET IN TOUCH</span>

          <h2>
            Contact <span className="purple">Me</span>
          </h2>

          <p>
            Let's connect and create something meaningful.
          </p>
        </div>

        <div className="glass-card contact-card">
          <p>
            <Mail size={18} />
            <a href="mailto:adyashreedash91@gmail.com">
              adyashreedash91@gmail.com
            </a>
          </p>

          <p>
            <MapPin size={18} />
            Bhubaneswar, Odisha, India
          </p>

          <p>
            <ExternalLink size={18} />
            <a
              href="https://github.com/adyashreedash91-hub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </p>

          <p>
            <ExternalLink size={18} />
            <a
              href="https://www.linkedin.com/in/adyashree-dash-b5b4ba2bb"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
      </section>

      {/* LET'S CONNECT */}
      <section className="section connect-section" id="connect">
        <span className="section-label">LET'S CONNECT</span>

        <h2 className="connect-title">
          Have an idea? <span>Let's build it together.</span>
        </h2>

        <p className="connect-description">
          I'm always excited to connect with new people, explore
          opportunities, collaborate on projects and learn new things.
          Feel free to reach out!
        </p>

        <a
          href="mailto:adyashreedash91@gmail.com"
          className="connect-button"
        >
          Say Hello <ArrowUpRight size={18} />
        </a>

        <div className="connect-socials">
          <a
            href="https://github.com/adyashreedash91-hub"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ExternalLink size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/adyashree-dash-b5b4ba2bb"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ExternalLink size={15} />
          </a>

          <a href="mailto:adyashreedash91@gmail.com">
            Email <Mail size={15} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Adyashree Dash. All Rights Reserved.</p>
      </footer>

      {/* BACK TO TOP */}
      <button
        className="back-to-top"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        aria-label="Back to top"
      >
        <ChevronUp size={22} />
      </button>

    </div>
  );
}

export default App;

