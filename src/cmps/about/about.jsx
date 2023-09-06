import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

export function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img
              src="https://res.cloudinary.com/dvagopwtu/image/upload/v1693922282/me3_yp0jes.jpg"
              alt="my-image"
            />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Cartificent</h5>
              <small>Coding Academy Bootcamp</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>
          <p>
            I am a passionate and versatile Full-Stack Developer with a strong
            foundation in both front-end and back-end technologies. I'm
            dedicated to continuous learning, staying updated with the latest
            industry trends, and embracing new challenges with enthusiasm. I
            particularly enjoy collaborating within a team environment, as I
            believe that the best solutions are often born from collective
            creativity and expertise. With my technical skills and a love for
            web development, I'm excited to contribute to projects that make a
            meaningful impact.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
