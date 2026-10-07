import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

export const NAV = [
  ['home', 'Home', 'home'],
  ['about', 'About', 'user'],
  ['experience', 'Experience', 'briefcase'],
  ['skills', 'Skills', 'spark'],
  ['projects', 'Projects', 'layers'],
  ['resume', 'Resume', 'file'],
  ['contact', 'Contact', 'mail'],
]

export function Background() {
  const [p, setP] = useState({ x: 0, y: 0 })
  useEffect(() => {
    if (!window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setP({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 }))
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])
  const t = (k) => ({ transform: `translate3d(${p.x * k}px, ${p.y * k}px, 0)` })
  return (
    <div className="ambient" aria-hidden="true">
      <div className="orb orb-1" style={t(40)} />
      <div className="orb orb-2" style={t(-30)} />
      <div className="orb orb-3" style={t(24)} />
      <div className="noise" />
    </div>
  )
}

function readTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme)
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('sy-theme', next) } catch { /* storage blocked */ }
    setTheme(next)
  }
  return (
    <button type="button" role="switch" aria-checked={theme === 'light'} className={`theme-switch ${theme}`} onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} title={theme === 'dark' ? 'Light theme' : 'Dark theme'}>
      <span className="ts-icon ts-moon"><Icon name="moon" /></span>
      <span className="ts-icon ts-sun"><Icon name="sun" /></span>
      <span className="ts-knob" aria-hidden="true"><Icon name={theme === 'dark' ? 'moon' : 'sun'} /></span>
    </button>
  )
}

export function Nav({ active, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 1000 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize) }
  }, [])

  const go = (e, id) => { e.preventDefault(); setOpen(false); onNavigate(id) }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="container">
        <a className="brand" href="#home" onClick={(e) => go(e, 'home')} aria-label="Santosh Yadav, back to top">
          <span className="brand-mark"><span>{profile.initials}</span></span>
          <span><b>{profile.name}</b><small>{profile.designation}</small></span>
        </a>
        <nav className="nav-links" id="nav-links" aria-label="Primary">
          {NAV.map(([id, label, icon]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined}
              onClick={(e) => go(e, id)}><Icon name={icon} /><span>{label}</span></a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button className="menu-btn" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
            aria-controls="nav-links" onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button type="button" className={`to-top ${show ? 'show' : ''}`} aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <Icon name="up" />
    </button>
  )
}

export function Footer({ onNavigate }) {
  const go = (e, id) => { e.preventDefault(); onNavigate(id) }
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {profile.fullName} · {profile.designation} · {profile.location}</p>
        <nav aria-label="Footer">
          <a href="#projects" onClick={(e) => go(e, 'projects')}>Projects</a>
          <a href="#resume" onClick={(e) => go(e, 'resume')}>Resume</a>
          <a href="#contact" onClick={(e) => go(e, 'contact')}>Contact</a>
          {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </nav>
      </div>
    </footer>
  )
}
