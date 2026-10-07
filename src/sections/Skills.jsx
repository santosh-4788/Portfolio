import Icon from '../components/Icon.jsx'
import { Reveal, useSpotlight } from '../components/ui.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  const spot = useSpotlight()
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Skills</span>
          <h2>Technical toolkit</h2>
          <p>Support and database skills from daily production work, plus the stack I use to deliver internal platforms.</p>
        </Reveal>
        <div className="skills-grid">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.07} className="skill-card glass spot" onMouseMove={spot}>
              <h3><span className="p-ic"><Icon name={g.icon} /></span>{g.title}</h3>
              <div className="chips">
                {g.items.map((s, j) => <span className="chip" key={s} style={{ animationDelay: `${0.15 + j * 0.035}s` }}>{s}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="ai-note glass">
          <Icon name="spark" />
          <p>
            <strong>AI-assisted development &amp; productivity.</strong> I use AI-assisted development tools, mainly Claude Code and ChatGPT where it helps, to speed up application development, problem solving, documentation, automation and prototyping. I own the requirements, business rules, data logic and testing, and I deploy and support every system myself.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
