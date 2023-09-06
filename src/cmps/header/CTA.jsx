import CV from '../../assets/CV-Tedi.pdf'

export function CTA() {
  return (
    <div className="cta flex">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  )
}
