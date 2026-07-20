import { useEffect, useRef, useState } from 'react'

const STATS = [
  { target: 23, prefix: '$', suffix: 'M', label: 'loss demonstrated at\na single fleet operator' },
  { target: 100, suffix: 'K+', label: 'physical parts carried\non a single industrial vessel' },
  { target: 20, prefix: '12–', label: 'different names the same\npart has across systems' },
  { value: 'Instant', label: 'fleet-wide stock visibility\nand spares verification' },
]

function Counter({ target, prefix = '', suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const dur = 1800
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setVal(Math.floor(ease * target))
          if (p < 1) requestAnimationFrame(tick)
          else setVal(target)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <div className="stat-num" ref={ref}>{prefix}{val}{suffix}</div>
}

export default function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.querySelectorAll('.stat-item').forEach((item, i) => {
          setTimeout(() => item.classList.add('anim'), i * 130)
        })
        obs.unobserve(el)
      }
    }, { threshold: 0.3 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="stats-strip" id="stats-strip" ref={ref}>
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className="stat-item" key={i}>
              {s.value
                ? <div className="stat-num">{s.value}</div>
                : <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} />
              }
              <div className="stat-lbl">{s.label.split('\n').map((l, j) => (
                <span key={j}>{l}{j === 0 && <br />}</span>
              ))}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
