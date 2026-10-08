import Icon from '../components/Icon.jsx'
import { Reveal } from '../components/ui.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const wa = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage || '')}`
    : null
  const cards = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, tone: 'mail' },
    wa && { icon: 'whatsapp', label: 'WhatsApp', value: 'Chat on WhatsApp', href: wa, ext: true, tone: 'wa' },
    profile.linkedin && { icon: 'linkedin', label: 'LinkedIn', value: 'View my profile', href: profile.linkedin, ext: true, tone: 'li' },
    { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, tone: 'phone' },
    profile.github && { icon: 'github', label: 'GitHub', value: profile.github.replace(/^https?:\/\/(www\.)?/, ''), href: profile.github, ext: true, tone: 'gh' },
    { icon: 'pin', label: 'Location', value: profile.location, tone: 'pin' },
  ].filter(Boolean)

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="cx">
          <div className="cx-glow" aria-hidden="true"><i /><i /></div>

          <div className="cx-intro">
            <span className="cx-avail"><i aria-hidden="true" />Available for new opportunities</span>
            <h2>Let's talk about your <span className="grad-text">applications</span></h2>
            <p>I'm open to Lead Application Support and Production Support roles. Email or WhatsApp is the fastest way to reach me.</p>
            <div className="cx-cta">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}><Icon name="mail" />Email me</a>
              {wa && <a className="btn cx-wa-btn" href={wa} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" />WhatsApp</a>}
            </div>
          </div>

          <ul className="cx-list">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="cx-ic"><Icon name={c.icon} /></span>
                  <span className="cx-txt"><small>{c.label}</small><b>{c.value}</b></span>
                  {c.href && <span className="cx-go" aria-hidden="true"><Icon name={c.ext ? 'external' : 'arrow'} /></span>}
                </>
              )
              return (
                <li key={c.label}>
                  {c.href
                    ? <a className={`cx-item t-${c.tone}`} href={c.href} aria-label={`${c.label}: ${c.value}`} {...(c.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a>
                    : <div className={`cx-item t-${c.tone}`}>{inner}</div>}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
