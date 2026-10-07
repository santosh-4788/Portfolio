import { useEffect } from 'react'
import Icon from '../components/Icon.jsx'
import { FreelanceTag, Reveal, StatusBadge, useSpotlight } from '../components/ui.jsx'
import { projects, STATUS } from '../data/projects.js'

function Block({ icon, title, children, delay = 0 }) {
  const spot = useSpotlight()
  return (
    <Reveal className="d-block glass spot" delay={delay} onMouseMove={spot}>
      <h2><span className="p-ic"><Icon name={icon} /></span>{title}</h2>
      {children}
    </Reveal>
  )
}

export default function ProjectDetail({ id, onBack, onOpenProject }) {
  const idx = projects.findIndex((p) => p.id === id)
  const p = projects[idx]

  useEffect(() => {
    document.title = p ? `${p.name} · Santosh Yadav` : 'Project not found · Santosh Yadav'
    return () => { document.title = 'Santosh Yadav · Lead Application Support Engineer' }
  }, [p])

  if (!p) {
    return (
      <main id="main" className="detail container" style={{ textAlign: 'center', paddingTop: 200 }}>
        <h1 style={{ fontSize: 40 }}>Project not found</h1>
        <p style={{ color: 'var(--text-2)', margin: '14px 0 26px' }}>That project doesn't exist or has moved.</p>
        <button className="btn btn-primary" type="button" onClick={onBack}><Icon name="back" />Back to projects</button>
      </main>
    )
  }

  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]
  const freelance = p.type === 'freelance'

  return (
    <main id="main" className="detail">
      <div className="container">
        <button type="button" className="back" onClick={onBack}><Icon name="back" />All projects</button>

        <div className="d-hero glass">
          <div className="d-badges">
            <StatusBadge status={p.status} />
            {freelance && <FreelanceTag />}
          </div>
          <div className="d-title"><span className="pcard-icon big"><Icon name={p.icon} /></span><h1>{p.name}</h1></div>
          <p className="d-tag">{p.tagline}</p>
          <div className="d-meta">
            <span>Track · <b>{p.track}</b></span>
            <span>Timeline · <b>{p.period}</b></span>
            <span>{freelance ? 'Client' : 'Organisation'} · <b>{freelance ? p.client : 'Robinhood Insurance Broker Ltd (OneInsure)'}</b></span>
          </div>
        </div>

        <div className="d-layout">
          <div className="d-main">
            <Block icon="layers" title="Project overview">
              <p>{p.overview}</p>
            </Block>

            <Reveal className={`d-three ${freelance ? '' : 'two'}`}>
              <div className="d-mini"><h3>Why it was created</h3><p>{p.why}</p></div>
              <div className="d-mini"><h3>Objective</h3><p>{p.objective}</p></div>
              {freelance && <div className="d-mini"><h3>Client requirement</h3><p>{p.requirement}</p></div>}
            </Reveal>

            <Block icon="usecase" title="Use cases">
              <div className="usecases">
                {p.useCases.map((u, i) => (
                  <div className="usecase" key={i}>
                    <span className="uc-n">{String(i + 1).padStart(2, '0')}</span>
                    <div><b>{u.who}</b><p>{u.what}</p></div>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon="check" title="Key features">
              <ul className="checks">{p.features.map((f) => <li key={f}><Icon name="check" /><span>{f}</span></li>)}</ul>
            </Block>

            <Block icon="user" title="My contribution">
              <ul className="contrib">{p.contribution.map((c) => <li key={c}>{c}</li>)}</ul>
            </Block>

            <Block icon="trend" title="Business impact">
              <div className="impact">{p.impact.map((x) => <span key={x}><Icon name="trend" />{x}</span>)}</div>
            </Block>
          </div>

          <aside className="d-side">
            <div className="d-block glass">
              <dl>
                <div><dt>Status</dt><dd><StatusBadge status={p.status} /></dd></div>
                <div><dt>Type</dt><dd>{freelance ? 'Freelancing project' : 'Company project'}</dd></div>
                {p.fullName && <div><dt>Full name</dt><dd>{p.fullName}</dd></div>}
                <div><dt>Timeline</dt><dd>{p.period}</dd></div>
                <div><dt>Stage</dt><dd>{STATUS[p.status].label === 'Live' ? 'In production' : STATUS[p.status].label === 'UAT' ? 'User acceptance testing' : STATUS[p.status].label}</dd></div>
              </dl>
            </div>
            <div className="d-block glass">
              <h2 style={{ fontSize: 16, marginBottom: 12 }}>Technology</h2>
              <div className="chips">{p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
            </div>
          </aside>
        </div>

        <nav className="d-pager" aria-label="More projects">
          <a className="glass" href={`#/project/${prev.id}`} onClick={(e) => { e.preventDefault(); onOpenProject(prev.id) }}>
            <span>← Previous</span><b>{prev.name}</b>
          </a>
          <a className="glass next" href={`#/project/${next.id}`} onClick={(e) => { e.preventDefault(); onOpenProject(next.id) }}>
            <span>Next →</span><b>{next.name}</b>
          </a>
        </nav>
      </div>
    </main>
  )
}
