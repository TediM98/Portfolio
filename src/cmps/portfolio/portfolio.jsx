export function Portfolio() {
  const data = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dvagopwtu/image/upload/v1693993785/Musify_HomePage_odghko.png',
      title: 'Musify',
      github: 'https://github.com/TediM98/Musify',
      demo: 'https://musify-fullstack.onrender.com/',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dvagopwtu/image/upload/v1693994071/Mr.bitcoin_bpbugb.jpg',
      title: 'Mr.Bitcoin',
      github: 'https://github.com/TediM98/mister-bitcoin',
      demo: 'https://tedim98.github.io/mister-bitcoin/#/',
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
