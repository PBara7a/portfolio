import workoutPreview from "../../assets/workout.jpg";
import rustychainPreview from "../../assets/rustychain.jpg";
import chatAppPreview from "../../assets/chat.jpg";
import portfolioPreview from "../../assets/portfolio.png";
import ProjectCard from "./ProjectCard";
import projects from "./projects";
import "./projects.css";

const images = {
  "Workout Planner": workoutPreview,
  "Chat In The Box": chatAppPreview,
  Rustychain: rustychainPreview,
  Portfolio: portfolioPreview,
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 data-text="Recent projects" className="neon-light">
        Recent pr
        <span data-text="o" className="neon-light-faulty-secondary">
          o
        </span>
        jects
      </h1>

      <div className="projects-container">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            client={project.clientCode}
            server={project.serverCode}
            imgPreview={images[project.title]}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
