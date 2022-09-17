import profilePic from "../../assets/profile.jpg";
import experienceLogo from "../../assets/experience-logo.png";
import languagesLogo from "../../assets/languages-logo.png";
import frameworksLogo from "../../assets/frameworks-logo.png";
import methodologiesLogo from "../../assets/methodologies-logo.png";
import toolsLogo from "../../assets/tools-logo.png";
import TypedStuff from "../../utils/Typewriter";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="about-me-container">
        <div className="about-me__image-container">
          <img className="about-me__image" src={profilePic} alt="profile" />
        </div>

        <div className="about-me__info">
          <h1>
            Hi<span className="wave">👋🏻</span>I'm Paulo!
          </h1>

          <ul className="about-me__info__skill-list">
            <li className="about-me__info__skill-list-item">
              <div className="about-me__info__skill-list__icon">
                <img src={experienceLogo} alt="experience icon" />
              </div>
              <p>6-month bootcamp graduate & Computing and IT student</p>
            </li>

            <li className="about-me__info__skill-list-item">
              <div className="about-me__info__skill-list__icon">
                <img src={languagesLogo} alt="programming languages icon" />
              </div>
              <p>JavaScript, TypeScript, Java, HTML5, CSS3</p>
            </li>

            <li className="about-me__info__skill-list-item">
              <div className="about-me__info__skill-list__icon">
                <img src={frameworksLogo} alt="frameworks icon" />
              </div>
              <p>React (with hooks), Express, Bootstrap</p>
            </li>

            <li className="about-me__info__skill-list-item">
              <div className="about-me__info__skill-list__icon">
                <img src={toolsLogo} alt="tools icon" />
              </div>
              <p>Git, GitHub, NPM, Jest, Prisma, Insomnia, VS Code</p>
            </li>

            <li className="about-me__info__skill-list-item">
              <div className="about-me__info__skill-list__icon">
                <img src={methodologiesLogo} alt="methodologies icon" />
              </div>
              <p>Agile, Kanban, TDD, OOP, MVC</p>
            </li>
          </ul>
          <TypedStuff />
        </div>
      </div>
    </>
  );
}
