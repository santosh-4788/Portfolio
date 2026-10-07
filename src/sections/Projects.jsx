import { useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { Reveal } from '../components/ui.jsx'
import { projects } from '../data/projects.js'

const FILTERS = [
  ['all', 'All'],
  ['company', 'Company projects'],
  ['freelance', 'Freelancing'],
]

export default function Projects({ onOpenProject }) {
  const [filter, setFilter] = useState('all')
  const count = (f) => (f === 'all' ? projects.length : projects.filter((p) => p.type === f).length)
  const company = projects.filter((p) => p.type === 'company')
  const freelance = projects.filter((p) => p.type === 'freelance')
  const showCompany = filter !== 'freelance'
  const showFreelance = filter !== 'company'

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Projects</span>
          <h2>Platforms I've delivered</h2>
          <p>Six internal platforms for an insurance broker and one freelance build. Open any project for its objective, use cases, features and my contribution.</p>
        </Reveal>

        <div className="filter-bar" role="group" aria-label="Filter projects">
          {FILTERS.map(([id, label]) => (
            <button key={id} type="button" className={filter === id ? 'active' : ''} aria-pressed={filter === id} onClick={() => setFilter(id)}>
              {label}<span className="n">{count(id)}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {showCompany && <div className="group-label">Company projects · Robinhood Insurance Broker (OneInsure)</div>}
          {showCompany && company.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}><ProjectCard project={p} index={i} onOpen={onOpenProject} /></Reveal>
          ))}
          {showFreelance && <div className="group-label freelance">Freelancing project</div>}
          {showFreelance && freelance.map((p) => (
            <Reveal key={p.id} className="span-all"><ProjectCard project={p} index={company.length} onOpen={onOpenProject} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
