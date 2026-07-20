const TODAY = [
  { label: 'Fleet-wide part deduplication', done: true },
  { label: 'Cross-system alias resolution', done: true },
  { label: 'Pre-order duplicate flagging', done: true },
  { label: 'Canonical inventory layer', done: true },
]

const TOMORROW = [
  { label: 'Compatible replacement suggestions', done: false },
  { label: 'Fleet-to-fleet part transfers', done: false },
  { label: 'AI-assisted procurement recommendations', done: false },
  { label: 'Supplier intelligence & pricing', done: false },
  { label: 'AI purchasing assistant', done: false },
  { label: 'Mining, oil & gas, manufacturing', done: false },
]

export default function FutureVision() {
  return (
    <section className="future" id="future">
      <div className="wrap">
        <div className="section-header">
          <div className="section-left">
            <div className="eyebrow"><span className="eyebrow-line" />The roadmap</div>
            <h2 className="section-h2">
              Inventory is our first product.<br /><em>Not our last.</em>
            </h2>
          </div>
          <div className="section-right">
            <div className="future-vision-text">
              <h3>The intelligence layer for industrial operations</h3>
              <p>
                In five years, NorthForge becomes the single source of truth not just for maritime
                spare parts — but for every industrial asset, across every industry that has the
                same naming chaos problem: mining, oil &amp; gas, manufacturing, power generation.
              </p>
              <p style={{ marginTop: '12px' }}>
                Inventory deduplication is simply the most provable, highest-ROI place to start.
              </p>
            </div>
          </div>
        </div>

        <div className="future-split">
          <div className="future-col today">
            <div className="future-col-label">Today — Shipping now</div>
            <div className="future-items">
              {TODAY.map(t => (
                <div className="future-item" key={t.label}>
                  <div className="fi-check done">✓</div>
                  {t.label}
                </div>
              ))}
            </div>
            <div className="future-note">
              "If this catches even one $8,000 duplicate order per vessel per quarter, the math writes itself."
              <br /><span style={{ fontSize: '11px', marginTop: '6px', display: 'block', opacity: 0.65 }}>— Fleet procurement director, bulk carrier operator</span>
            </div>
          </div>

          <div className="future-col tomorrow">
            <div className="future-col-label">Tomorrow — On the roadmap</div>
            <div className="future-items">
              {TOMORROW.map(t => (
                <div className="future-item dim" key={t.label}>
                  <div className="fi-check soon">○</div>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
