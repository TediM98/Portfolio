import { CTA } from './CTA'
import { HeaderSocials } from './header-socials'

export function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Tedi Marunchak</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img
            src="https://res.cloudinary.com/dvagopwtu/image/upload/v1693912960/animated-me_qrriqk.webp"
            alt="me"
          />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}
