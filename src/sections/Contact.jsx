import Icon from '../components/Icon.jsx'
import { Reveal } from '../components/ui.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const wa = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage || '')}`
    : null
  const cards = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    wa && { icon: 'whatsapp', label: 'WhatsApp', value: 'Chat on WhatsApp', href: wa, ext: true, brand: 'wa' },
    profile.linkedin && { icon: 'linkedin', label: 'LinkedIn', value: 'View my profile', href: profile.linkedin, ext: true, brand: 'li' },
    { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    profile.github && { icon: 'github', label: 'GitHub', value: profile.github.replace(/^https?:\/\/(www\.)?/, ''), href: profile.github, ext: true },
    { icon: 'pin', label: 'Location', value: profile.location },
  ].filter(Boolean)

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact-wrap glass">
          <span className="kicker">Contact</span>
          <h2 style={{ fontSize: 'clamp(30px, 4.4vw, 48px)' }}>Let's talk about your <span className="grad-text">applications</span></h2>
          <p style={{ marginTop: 14, color: 'var(--text-2)', fontSize: 17, maxWidth: 640 }}>
            I'm open to Lead Application Support and Production Support roles. Email is the fastest way to reach me.
          </p>
          <div className="contact-grid">
            {cards.map((c) => {
              const inner = <><span className="p-ic"><Icon name={c.icon} /></span><span>{c.label}</span><b>{c.value}</b></>
              const cls = `c-card${c.brand ? ` c-${c.brand}` : ''}`
              return c.href
                ? <a key={c.label} className={cls} href={c.href} aria-label={`${c.label}: ${c.value}`} {...(c.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a>
                : <div key={c.label} className={cls}>{inner}</div>
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
