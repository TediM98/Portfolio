import { FaFacebookF } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Tedi Marunchak
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials flex">
        <a href="https://www.facebook.com/tedi.marunchack" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/tedima/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/TediM98" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Tedi Marunchak. All rights reserved.</small>
      </div>
    </footer>
  )
}
