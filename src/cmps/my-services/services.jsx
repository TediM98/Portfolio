import { BiCheck } from 'react-icons/bi'

export function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Fullstack Web Developer</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>End-to-End Web Development</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Collaborative Approach</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Scalable Solutions</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Responsive Front-End Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Database Management</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
