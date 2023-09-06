import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export function HeaderSocials() {
  return (
    <div className="header-socials flex">
      <a href="https://www.linkedin.com/in/tedima/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/TediM98" target="_blank">
        <FaGithub />
      </a>
    </div>
  )
}
