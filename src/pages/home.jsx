import { Header } from '../cmps/header/header'
import { Nav } from '../cmps/nav/nav'
import { About } from '../cmps/about/about'
import { Experience } from '../cmps/experience/experience'
import { Services } from '../cmps/my-services/services'
import { Portfolio } from '../cmps/portfolio/portfolio'
import { Contact } from '../cmps/contact/contact'
import { Footer } from '../cmps/footer/footer'

export function Home() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}
