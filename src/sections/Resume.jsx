import Icon from '../components/Icon.jsx'
import { asset, Reveal } from '../components/ui.jsx'
import { education, profile } from '../data/profile.js'

export default function Resume() {
  const href = asset(profile.resume)
  return (
    <section className="section" id="resume">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Resume</span>
          <h2>The full picture on two pages</h2>
        </Reveal>
        <div className="resume-grid">
          <Reveal className="resume-card glass">
            <h3>{profile.fullName}</h3>
            <p>{profile.designation}. 7 years in IT, 5+ in the insurance domain, 6 internal platforms delivered. The PDF has the complete experience, skills, projects and education.</p>
            <div className="resume-doc">
              <span className="p-ic"><Icon name="file" /></span>
              <span><b>{profile.resume}</b><small>PDF · 2 pages</small></span>
            </div>
            <div className="resume-actions">
              <a className="btn btn-primary" href={href} download><Icon name="download" />Download resume</a>
              <a className="btn btn-glass" href={href} target="_blank" rel="noopener noreferrer"><Icon name="external" />View in browser</a>
            </div>
          </Reveal>
          <Reveal className="edu-card glass" delay={0.08}>
            <h3><Icon name="grad" className="inline-ic" /> Education</h3>
            {education.map((e) => (
              <div className="edu" key={e.degree}>
                <span className="edu-year">{e.year}</span>
                <b>{e.degree}</b>
                <small>{e.school}<em>{e.score}</em></small>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
