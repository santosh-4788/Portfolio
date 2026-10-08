import Icon from '../components/Icon.jsx'
import { asset, CountUp, StatusBadge, useTilt } from '../components/ui.jsx'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'

export default function Hero({ onNavigate, onOpenProject }) {
  const tilt = useTilt(5)
  const company = projects.filter((p) => p.type === 'company')
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <span className="hero-badge enter" style={{ '--d': '.05s' }}>
            <StatusBadge status="live" /> Supporting production systems since 2021
          </span>
          <h1 className="enter" style={{ '--d': '.15s' }}>
            Santosh<br /><span className="grad-text">Yadav</span>
          </h1>
          <p className="hero-role enter" style={{ '--d': '.25s' }}>{profile.designation}</p>
          <p className="hero-focus enter" style={{ '--d': '.32s' }}>
            {profile.focus.map((f) => <span key={f}>{f}</span>)}
          </p>
          <p className="hero-intro enter" style={{ '--d': '.4s' }}>{profile.intro}</p>
          <div className="chips hero-skills enter" style={{ '--d': '.48s' }}>
            {profile.heroSkills.map((s) => <span className="chip" key={s}>{s}</span>)}
          </div>
          <div className="hero-cta enter" style={{ '--d': '.56s' }}>
            <a className="btn btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); onNavigate('projects') }}>
              View projects <Icon name="arrow" />
            </a>
            <a className="btn btn-glass" href={asset(profile.resume)} download><Icon name="download" />Download resume</a>
            <a className="btn btn-glass" href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact') }}>
              <Icon name="mail" />Contact
            </a>
            <div className="hero-social">
              {profile.github && <a className="icon-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>}
              {profile.linkedin && <a className="icon-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>}
              {profile.whatsapp && <a className="icon-link icon-wa" href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage || '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" /></a>}
            </div>
          </div>
        </div>

        <div className="console-wrap enter" style={{ '--d': '.35s' }}>
          <div className="console glass spot tilt3d" {...tilt}>
            <div className="console-bar">
              <span className="dots"><i /><i /><i /></span>
              <span>platforms · built &amp; supported</span>
              <span>{company.length} systems</span>
            </div>
            <div className="console-rows">
              {company.map((p) => (
                <a key={p.id} className="svc" href={`#/project/${p.id}`} onClick={(e) => { e.preventDefault(); onOpenProject(p.id) }}>
                  <span><b>{p.name}</b><small>{p.tagline}</small></span>
                  <StatusBadge status={p.status} />
                </a>
              ))}
            </div>
            <div className="stats">
              {profile.stats.map((s) => (
                <div className="stat" key={s.label}><CountUp to={s.value} suffix={s.suffix} /><span>{s.label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="scroll-cue" aria-hidden="true" />
    </section>
  )
}
