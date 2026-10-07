import Icon from './Icon.jsx'
import { FreelanceTag, StatusBadge, useTilt } from './ui.jsx'

export default function ProjectCard({ project, onOpen, index }) {
  const tilt = useTilt(5)
  const open = () => onOpen(project.id)
  const freelance = project.type === 'freelance'
  return (
    <div className="tilt-wrap">
      <article className={`pcard glass spot ${freelance ? 'freelance' : ''}`} style={{ '--hue': project.hue }} {...tilt} onClick={open}>
        <div className="pcard-head">
          <span className="pcard-icon"><Icon name={project.icon} /></span>
          <div className="pcard-badges">
            {freelance && <FreelanceTag />}
            <StatusBadge status={project.status} />
          </div>
        </div>
        <span className="pcard-track">{String(index + 1).padStart(2, '0')} · {project.track} · {project.period}</span>
        <h3>{project.name}</h3>
        <p className="pcard-tag">{project.tagline}</p>
        <ul className="pcard-points">
          {project.highlights.map((h) => <li key={h}><Icon name="check" />{h}</li>)}
        </ul>
        <div className="pcard-foot">
          <div className="pcard-tech">{project.tech.slice(0, 3).map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          <a className="pcard-cta" href={`#/project/${project.id}`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); open() }}
            aria-label={`View ${project.name}`}>
            View project <Icon name="arrow" />
          </a>
        </div>
      </article>
    </div>
  )
}
