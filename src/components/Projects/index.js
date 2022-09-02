import { Carousel, Container } from "react-bootstrap";
import workoutPreview from "../../assets/workout.jpg";
import rustychainPreview from "../../assets/rustychain.jpg";
import chatAppPreview from "../../assets/chat.jpg";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const Projects = () => {
  return (
    <Container className="projects-container">
      <h1 data-text="Recent projects" className="light">
        Recent projects
      </h1>

      <Container className="d-flex justify-content-center">
        <Carousel>
          <Carousel.Item interval={5000}>
            <ProjectCard
              imgPreview={workoutPreview}
              title="Workout Planner"
              description="A SPA I built to plan and save my workouts. Built with: React, Node.js, Express, Prisma and PostgreSQL."
              github="https://github.com/PBara7a/workout-planner-client"
              server="https://github.com/PBara7a/workout-planner"
            />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <ProjectCard
              imgPreview={chatAppPreview}
              title="Chat In The Box"
              description="A real-time messaging app with end-to-end encryption. Built with: React, Bootstrap, Node.js, Express, Socket.io, Prisma and PostgreSQL."
              github="https://github.com/PBara7a/chat-app-client"
              server="https://github.com/PBara7a/chat-app-server"
            />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <ProjectCard
              imgPreview={rustychainPreview}
              title="Rustychain"
              description="Blockchain application that records valid transactions on the chain and broadcasts changes. Built with: React, Node.js, Express, PubNub."
              github="https://github.com/PBara7a/rustychain"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
};

export default Projects;
