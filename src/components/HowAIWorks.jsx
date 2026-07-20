const NAMES = [
  { name: 'Fuel Pu.', src: 'Vessel 3 · Excel' },
  { name: 'Fuel Pump', src: 'Vessel 2 · ERP' },
  { name: 'FP-2200', src: 'Warehouse · Bin tag' },
  { name: 'Pompe à Carburant', src: 'Vessel 1 · Invoice' },
  { name: 'Vendor Code 33491', src: 'Supplier catalog' },
]

export default function HowAIWorks() {
  return (
    <section className="ai-section" id="ai">
      <div className="ai-glow" aria-hidden="true" />
      <div className="wrap">
        <div className="section-header light">
          <div className="section-left">
            <div className="eyebrow light">
              <span className="eyebrow-line" />
              The intelligence
            </div>
            <h2 className="section-h2">
              NorthForge doesn't<br />search. It <em>learns.</em>
            </h2>
          </div>
          <div className="section-right">
            <p className="section-sub">
              Most tools treat part deduplication as a search problem — you enter a query,
              it returns matches. NorthForge treats it as an identity problem — it builds
              a canonical record for every physical part, fleet-wide, automatically.
            </p>
          </div>
        </div>

        <div className="ai-content">
          {/* Name cluster visual */}
          <div>
            <div className="ai-cluster">
              <div className="ai-cluster-label">Incoming name signals — same physical component</div>
              <div className="ai-names">
                {NAMES.map(n => (
                  <div className="ai-name-item" key={n.name}>
                    <span className="ai-name-dot" />
                    <span>{n.name}</span>
                    <span className="ai-name-source">{n.src}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ai-arrow" aria-hidden="true">
              <div className="ai-arrow-line" />
            </div>
            <div className="ai-canonical">
              <div className="ai-can-label">Canonical Record — resolved</div>
              <div className="ai-can-name">Fuel Pump Assembly</div>
              <div className="ai-can-meta">
                <div className="ai-can-row">
                  <span className="ai-can-key">MFR Part No.</span>
                  <span className="ai-can-val">MAN B&W 98-ME-C</span>
                </div>
                <div className="ai-can-row">
                  <span className="ai-can-key">Fleet Stock</span>
                  <span className="ai-can-val">13 units · 3 locations</span>
                </div>
                <div className="ai-can-row">
                  <span className="ai-can-key">Aliases Resolved</span>
                  <span className="ai-can-val">5 names · 5 systems</span>
                </div>
                <div className="ai-can-row">
                  <span className="ai-can-key">Last Purchase</span>
                  <span className="ai-can-val">2024-11 · $8,400</span>
                </div>
              </div>
            </div>
          </div>

          {/* Explanation text */}
          <div className="ai-text">
            <div className="eyebrow light"><span className="eyebrow-line" />How it learns</div>
            <h3>One canonical inventory across your entire fleet</h3>
            <p>
              You already own it. You just can't see it.
              NorthForge connects to every source — ERPs, PMS, spreadsheets, warehouse systems, 
              and supplier catalogs — to ingest part logs as-is.
            </p>
            <p>
              Rather than generic matches, NorthForge combines manufacturer references, supplier catalogs, multilingual aliases, 
              historical purchasing data, and semantic understanding to identify the same physical part 
              across disconnected systems.
            </p>
            <p>
              The result is a resolved canonical record that acts as a single source of truth 
              across your entire fleet, checking availability and catching duplicate orders pre-submission.
            </p>
            <div className="ai-bullets">
              <div className="ai-bullet">
                <span className="ai-bullet-icon">⬡</span>
                <span>Resolves abbreviations, truncations, and typos ("Fuel Pu." → "Fuel Pump")</span>
              </div>
              <div className="ai-bullet">
                <span className="ai-bullet-icon">⬡</span>
                <span>Handles multi-language aliases across international fleets</span>
              </div>
              <div className="ai-bullet">
                <span className="ai-bullet-icon">⬡</span>
                <span>Matches vendor part codes to manufacturer references</span>
              </div>
              <div className="ai-bullet">
                <span className="ai-bullet-icon">⬡</span>
                <span>Flags duplicate requisitions: "You have 13 units fleet-wide before you buy more"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
