export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div className="section-header">
          <div className="section-left">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              Three steps
            </div>
            <h2 className="section-h2">No rip-and-replace.<br />No migration.<br />No retraining.</h2>
          </div>
          <div className="section-right">
            <p className="section-sub">
              NorthForge layers on top of what you already run. It reads your existing systems
              and does the reconciliation work invisibly — your team keeps working exactly
              as they always have.
            </p>
          </div>
        </div>

        <div className="steps-flow">
          <div className="step-card">
            <div className="step-num">01</div>
            <svg className="step-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 16h40" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
              <circle cx="18" cy="12" r="2" fill="currentColor"/>
              <path d="M12 24h8M12 30h14M12 36h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M34 26l4 4-4 4M38 30h-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="step-lbl">Connect</div>
            <h3>Plug in what you already run</h3>
            <p>ERPs, PMS, spreadsheets, warehouse databases, and supplier catalogs. NorthForge reads what's there — no migration required, nothing to replace.</p>
            <div className="step-tags">
              {['ERPs', 'PMS', 'Excel', 'WMS', 'Catalogs', '+ more'].map(t => (
                <span className="sys-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="step-arrow" aria-hidden="true">→</div>

          <div className="step-card">
            <div className="step-num">02</div>
            <svg className="step-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="16" cy="20" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="32" cy="20" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="24" cy="34" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.4"/>
              <circle cx="24" cy="24" r="1.5" fill="currentColor"/>
            </svg>
            <div className="step-lbl">Match</div>
            <h3>One canonical record per part</h3>
            <p>Every alias, abbreviation, part number, and translation is resolved back to a single physical part — fleet-wide by combining manufacturer references, catalogs, and semantic understanding.</p>
            <div className="match-demo" aria-hidden="true">
              <span className="match-item">Fuel Pu.</span>
              <span className="match-arrow">→</span>
              <span className="match-item">FP-2200</span>
              <span className="match-arrow">→</span>
              <span className="match-item canonical">Fuel Pump ✓</span>
            </div>
          </div>

          <div className="step-arrow" aria-hidden="true">→</div>

          <div className="step-card">
            <div className="step-num">03</div>
            <svg className="step-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M8 36V20l16-12 16 12v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <rect x="18" y="28" width="12" height="12" stroke="currentColor" strokeWidth="2"/>
              <path d="M24 28v12" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="36" cy="14" r="8" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
              <path d="M33 14l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="step-lbl">Flag</div>
            <h3>See it before you buy it</h3>
            <p>Before a requisition goes out, NorthForge shows what's already sitting in the fleet — and what it's called wherever you're about to look. The duplicate purchase never happens.</p>
            <div className="flag-demo" aria-hidden="true">
              <span className="flag-icon">⚠</span>
              <span className="flag-text">13 units fleet-wide · Singapore (4) · Dubai (2) · Rotterdam (7)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
