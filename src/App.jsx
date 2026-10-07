import { useCallback, useEffect, useState } from 'react'
import { Background, BackToTop, Footer, Nav, NAV } from './components/Chrome.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'
import Hero from './sections/Hero.jsx'
import ProjectDetail from './sections/ProjectDetail.jsx'
import Projects from './sections/Projects.jsx'
import Resume from './sections/Resume.jsx'
import Skills from './sections/Skills.jsx'

// Hash routing works on GitHub Pages under any repository path:
//   #/project/<id>  -> project detail view
//   #<section>      -> home page, scrolled to that section
const projectFromHash = () => {
  const m = window.location.hash.match(/^#\/project\/([\w-]+)/)
  return m ? m[1] : null
}

export default function App() {
  const [projectId, setProjectId] = useState(projectFromHash)
  const [active, setActive] = useState('home')
  const [pendingScroll, setPendingScroll] = useState(null)

  // A refresh always starts at the top (Home). Section links never stay in the URL,
  // and the browser must not restore the old scroll position.
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    if (!projectFromHash()) {
      if (window.location.hash) history.replaceState(null, '', window.location.pathname + window.location.search)
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    const onHash = () => {
      const id = projectFromHash()
      setProjectId(id)
      if (id) window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Scroll to a section once the home page is rendered.
  useEffect(() => {
    if (projectId || !pendingScroll) return
    const el = document.getElementById(pendingScroll)
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    setPendingScroll(null)
  }, [projectId, pendingScroll])

  // Highlight the nav item for the section in view.
  useEffect(() => {
    if (projectId) { setActive('projects'); return }
    const els = NAV.map(([id]) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
    }, { rootMargin: '-45% 0px -50% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [projectId])

  const navigate = useCallback((id) => {
    const clean = window.location.pathname + window.location.search
    if (projectId) {
      history.pushState(null, '', clean)
      setProjectId(null)
      setPendingScroll(id)
    } else {
      history.replaceState(null, '', clean)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [projectId])

  const openProject = useCallback((id) => {
    history.pushState(null, '', `#/project/${id}`)
    setProjectId(id)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Background />
      <Nav active={active} onNavigate={navigate} />
      {projectId ? (
        <ProjectDetail id={projectId} onBack={() => navigate('projects')} onOpenProject={openProject} />
      ) : (
        <main id="main">
          <Hero onNavigate={navigate} onOpenProject={openProject} />
          <About />
          <Experience />
          <Skills />
          <Projects onOpenProject={openProject} />
          <Resume />
          <Contact />
        </main>
      )}
      <Footer onNavigate={navigate} />
      <BackToTop />
    </>
  )
}
