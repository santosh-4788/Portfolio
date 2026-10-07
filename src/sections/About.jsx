import Icon from '../components/Icon.jsx'
import { Reveal, useSpotlight } from '../components/ui.jsx'
import { about } from '../data/profile.js'

export default function About() {
  const spot = useSpotlight()
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">About</span>
          <h2>Where the business problem meets the database</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-story glass spot" onMouseMove={spot}>
            {about.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <p className="about-quote">Fix it, find the root cause, then automate it so it does not come back.</p>
          </Reveal>
          <div className="pillars">
            {about.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="pillar glass spot" onMouseMove={spot}>
                <span className="p-ic"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
