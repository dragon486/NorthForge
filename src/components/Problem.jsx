import { useEffect, useRef } from 'react'

const TAGS = [
  { cls: 't1', name: 'Fuel Pu.', sys: 'Vessel 3 · Excel log', src: 'source: spreadsheet' },
  { cls: 't2', name: 'Pompe à Carburant', sys: 'Vessel 1 · Supplier invoice', src: 'source: invoice PDF' },
  { cls: 't3 canonical-tag', name: 'Fuel Pump — Marine', sys: 'Vessel 2 · ERP master', src: 'source: ERP master', badge: 'Master Record' },
  { cls: 't4', name: 'FP-2200', sys: 'Warehouse · Bin tag', src: 'source: warehouse db' },
  { cls: 't5', name: 'Pump, Fuel Inj.', sys: 'Vessel 4 · PMS record', src: 'source: maintenance log' },
]

function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) }
    }, { threshold, rootMargin: '0px 0px -40px 0px' })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

export default function Problem() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()

  return (
    <section className="problem" id="problem">
      <div className="wrap">
        <div className="section-header">
          <div className="section-left">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              One part. Five names.
            </div>
            <h2 className="section-h2">
              Your systems don't disagree<br />on the part.<br />They disagree on what to <em>call</em> it.
            </h2>
          </div>
          <div className="section-right">
            <p className="section-sub">
              A ship carries 30,000–100,000 parts. Multiply that across a fleet, across ERPs, Excel,
              PMS software, warehouse databases, and supplier emails — and the same physical part
              ends up filed under a dozen different labels, invisible to anyone trying to see the
              whole fleet at once.
            </p>
          </div>
        </div>

        <div className="problem-visual">
          <div className="tagstack" tabIndex={0} aria-label="Five inventory tags for the same physical part">
            {TAGS.map(t => (
              <div className={`tag ${t.cls}`} key={t.name}>
                <div className="tag-corner" />
                <div className="tag-hole" />
                <div className="pn">{t.name}</div>
                <div className="ps">{t.sys}</div>
                <div className="psr">{t.src}</div>
                {t.badge && <div className="same-badge">{t.badge}</div>}
              </div>
            ))}
            <span className="tagstack-hint">Hover to reveal</span>
          </div>
          <p className="tagstack-cap">
            Five records. One part. NorthForge merges them before anyone raises a purchase order.
          </p>
        </div>

        <div className="problem-cards">
          <div className="pc-card reveal" ref={r1}>
            <div className="pc-num">01</div>
            <h3>Fragmented naming</h3>
            <p>Each system, vessel, and department develops its own shorthand. Abbreviations, translations, part numbers, and plain descriptions coexist with no link between them.</p>
          </div>
          <div className="pc-card reveal" ref={r2} style={{ transitionDelay: '100ms' }}>
            <div className="pc-num">02</div>
            <h3>Invisible inventory</h3>
            <p>Because nobody can see across the fleet's naming chaos, buyers assume parts are missing. They reorder. The warehouse already has four of them — under a different name.</p>
          </div>
          <div className="pc-card reveal" ref={r3} style={{ transitionDelay: '200ms' }}>
            <div className="pc-num">03</div>
            <h3>Compounding cost</h3>
            <p>One operator. $235M annual parts spend. $23M estimated loss to duplicate purchases — driven almost entirely by naming inconsistency, not theft, not fraud, not waste.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
