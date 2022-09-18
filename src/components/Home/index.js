import { Link } from "react-scroll";
import "./home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__name-wrp">
        <h1 data-text="Paulo Barata" className="neon-light">
          P
          <span data-text="a" className="neon-light-faulty">
            a
          </span>
          ulo Barata
        </h1>
        <h2 data-text="Full Stack Developer" className="neon-light">
          Full Stack Devel
          <span data-text="o" className="neon-light-faulty-secondary">
            o
          </span>
          per
        </h2>
      </div>
      <div className="btn-container">
        <Link to="about" offset={-150} className="custom-btn">
          ▼
        </Link>
      </div>
    </section>
  );
};

export default Home;
