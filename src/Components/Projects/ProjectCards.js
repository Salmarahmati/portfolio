import "./Projects.css";
export default function PerfumesCards({ projects }) {
  return (
    <div>
      <section id="projects" className="project-section">
        <div className="container">
          <h1 className="project-title">
            My <span className="project-color">Projects</span>
          </h1>
          <p className="project-paragraph">
            These are the projects that I have learned since the begining of
            programming education as a student.
            <br /> As soon as I start programming and working for customers,I
            assure you that it will get better and better.
          </p>
          <div className="row carts p-2">
            {projects.map((project, index) => (
              <div className="col-sm-4" key={index}>
                <div className="cart">
                  <img src={project.image} alt={project.title} />
                  <br />
                  <h3 className="cart-title">{project.title}</h3>
                  <p className="cart-description">{project.description}</p>
                  <h4 className="cart-link">{project.thepagelink}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}