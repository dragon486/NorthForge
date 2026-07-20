export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid-overlay" />
        <div className="glow-1" />
        <div className="glow-2" />
      </div>

      <div className="wrap hero-inner">
        {/* LEFT — Content */}
        <div className="hero-content">
          <div className="eyebrow fade-in">
            <span className="eyebrow-line" />
            The $23M problem nobody named
          </div>

          <h1 className="hero-h1 fade-in d1">
            You don't have an<br />
            inventory problem.<br />
            You have an <em>identity</em> problem.
          </h1>

          <p className="hero-sub fade-in d2">
            NorthForge identifies identical spare parts across every vessel, ERP, spreadsheet,
            warehouse, and supplier catalog — even when every system calls them something different.
          </p>

          <div className="hero-actions fade-in d3">
            <a href="#waitlist" className="btn-primary">Request Early Access</a>
            <a href="#problem" className="btn-ghost">See the problem →</a>
          </div>

          <div className="hero-proof fade-in d4">
            <div className="proof-item">
              <span className="proof-num">$23M</span>
              <span className="proof-label">Lost annually<br />at one operator</span>
            </div>
            <div className="proof-div" />
            <div className="proof-item">
              <span className="proof-num">$235M</span>
              <span className="proof-label">Annual parts<br />spend baseline</span>
            </div>
            <div className="proof-div" />
            <div className="proof-item">
              <span className="proof-num">~10%</span>
              <span className="proof-label">Lost to naming<br />inconsistency</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Product UI */}
        <div className="hero-visual fade-in d2" aria-hidden="true">
          <div className="product-card">
            <div className="pc-titlebar">
              <span className="pc-dot r" /><span className="pc-dot y" /><span className="pc-dot g" />
              <span className="pc-app-name">NorthForge · Fleet Inventory</span>
            </div>
            <div className="pc-tabs">
              <div className="pc-tab active">Part Detail</div>
              <div className="pc-tab">Fleet Stock</div>
              <div className="pc-tab">Orders</div>
            </div>
            <div className="pc-body">
              <div className="pc-part-row">
                <div className="pc-part-name">Fuel Pump</div>
                <div className="pc-status">Canonical Record</div>
              </div>

              <div className="pc-section-label">Aliases Found — 4 systems</div>
              <div className="pc-aliases">
                {[
                  { name: 'Fuel Pu.', src: 'Vessel 3 · Excel' },
                  { name: 'FP-2200', src: 'Warehouse · Bin tag' },
                  { name: 'Pompe à Carburant', src: 'Vessel 1 · Invoice' },
                  { name: 'Pump, Fuel Inj.', src: 'Vessel 4 · PMS' },
                ].map(a => (
                  <div className="pc-alias" key={a.name}>
                    <span className="pc-alias-check">✓</span>
                    <span>{a.name}</span>
                    <span className="pc-alias-src">{a.src}</span>
                  </div>
                ))}
              </div>

              <div className="pc-divider" />
              <div className="pc-section-label">Fleet Stock</div>
              <div className="pc-stock-grid">
                {[
                  { port: 'Singapore', qty: 4 },
                  { port: 'Dubai', qty: 2 },
                  { port: 'Rotterdam', qty: 7 },
                ].map(s => (
                  <div className="pc-stock-item" key={s.port}>
                    <div className="pc-stock-port">{s.port}</div>
                    <div className="pc-stock-qty">{s.qty}</div>
                  </div>
                ))}
              </div>

              <div className="pc-alert">
                <span className="pc-alert-label">⚠ Prevented duplicate order</span>
                <span className="pc-alert-val">$8,400 saved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
        <span className="scroll-lbl">Scroll</span>
      </div>
    </section>
  )
}
