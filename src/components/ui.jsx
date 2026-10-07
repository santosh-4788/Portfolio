import { useEffect, useRef, useState } from 'react'
import { STATUS } from '../data/projects.js'

const BASE = import.meta.env.BASE_URL

/** Public-folder URL that respects the deploy base path. */
export const asset = (p) => `${BASE}${p.replace(/^\//, '')}`

export function StatusBadge({ status }) {
  const s = STATUS[status] || STATUS.built
  return (
    <span className={`status status-${s.tone}`}>
      <i />
      {s.label}
    </span>
  )
}

export function FreelanceTag() {
  return (
    <span className="status tag-freelance">
      <i />
      Freelance
    </span>
  )
}

/** Fades children in when scrolled into view. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ '--delay': `${delay}s` }} {...rest}>
      {children}
    </Tag>
  )
}

/** Sets --mx/--my on the element for the mouse-follow spotlight. */
export function useSpotlight() {
  return (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
}

const finePointer = () => typeof window !== 'undefined' && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** Subtle 3D tilt toward the cursor (desktop only, respects reduced motion). */
export function useTilt(max = 7) {
  const onMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
    if (!finePointer() || reducedMotion()) return
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.classList.add('tilting')
    el.style.setProperty('--ry', `${(x * max).toFixed(2)}deg`)
    el.style.setProperty('--rx', `${(-y * max).toFixed(2)}deg`)
  }
  const onLeave = (e) => {
    const el = e.currentTarget
    el.classList.remove('tilting')
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }
  return { onMouseMove: onMove, onMouseLeave: onLeave }
}

/** Counts up to `to` once visible. */
export function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reducedMotion() || !('IntersectionObserver' in window)) { setN(to); return }
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / 1100)
        setN(Math.round(to * (1 - Math.pow(1 - k, 3))))
        if (k < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to])
  return <b ref={ref}>{n}{suffix}</b>
}
