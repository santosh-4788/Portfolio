import { useEffect, useRef, useState } from 'react'
import Icon from '../components/Icon.jsx'
import { Reveal, useSpotlight } from '../components/ui.jsx'
import { experience } from '../data/profile.js'

const PREVIEW = 4

function Job({ job, delay }) {
  const [all, setAll] = useState(false)
  const spot = useSpotlight()
  const points = all ? job.points : job.points.slice(0, PREVIEW)
  return (
    <Reveal className={`job ${job.current ? 'current' : ''}`} delay={delay}>
      <span className="job-node" aria-hidden="true" />
      <div className="job-card glass spot" onMouseMove={spot}>
        <div className="job-top">
          <div>
            <h3>{job.role}</h3>
            <div className="job-co">{job.company} <span>· {job.location}</span></div>
          </div>
          <span className="job-period">{job.period}</span>
        </div>
        <ul className="job-points">
          {points.map(([k, v]) => <li key={k}><b>{k}</b><span>{v}</span></li>)}
        </ul>
        {job.points.length > PREVIEW && (
          <button type="button" className="more-btn" aria-expanded={all} onClick={() => setAll((a) => !a)}>
            {all ? 'Show less' : `Show all ${job.points.length} responsibilities`} <Icon name="chevD" />
          </button>
        )}
        <div className="chips job-tags">{job.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / r.height))
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Experience</span>
          <h2>Seven years keeping systems running</h2>
          <p>Production support, migrations and database work at an insurance broker, built on an earlier start in QA and L2 support.</p>
        </Reveal>
        <div className="timeline" ref={ref}>
          <div className="timeline-line" aria-hidden="true"><span style={{ '--p': `${progress * 100}%` }} /></div>
          {experience.map((job, i) => <Job key={job.company} job={job} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  )
}
