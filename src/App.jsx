import { useState } from 'react'
import Toolbar from './components/Toolbar.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import { projects } from './data/projects.js'

export default function App() {
  const [activeId, setActiveId] = useState(null)
  const activeProject = activeId ? projects[activeId] : null

  return (
    <>
      <Toolbar />

      <main id="top">
        <Hero />
        <Work onOpenProject={setActiveId} />
        <About />
        <Contact />
      </main>

      <Footer />

      <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />
    </>
  )
}
