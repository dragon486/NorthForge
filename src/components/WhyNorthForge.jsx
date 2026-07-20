const WHY_CARDS = [
  {
    num: 'I',
    title: 'A real number behind it',
    body: 'This isn\'t a guess. One operator with $235M in annual parts spend estimated losing $23M/year to duplicate purchases from inconsistent naming alone. That\'s 10% of total spend — provable, recoverable.',
  },
  {
    num: 'II',
    title: 'Low risk. Fast to prove.',
    body: 'Predictive maintenance requires your AI to correctly predict engine failures. Wrong predictions sink ships. NorthForge just matches "Fuel Pump" to "Fuel Pu." — provably right or wrong within weeks of deployment.',
  },
  {
    num: 'III',
    title: 'Invisible to your team',
    body: 'Your team doesn\'t change what they do. Procurement still raises requisitions the same way. NorthForge intercepts before the order goes out — invisible until it saves you money.',
  },
  {
    num: 'IV',
    title: 'No migration. No disruption.',
    body: 'NorthForge reads your existing systems as-is: ERPs, PMS, WMS, and spreadsheets. No new data model, no re-entry, no change management project. It adapts to you — not the other way around.',
  },
]

const CT_ROWS = [
  { feat: 'Works on existing data',          nf: true,  erp: false, mdm: false, rec: false },
  { feat: 'No migration required',           nf: true,  erp: false, mdm: false, rec: false },
  { feat: 'Fleet-wide visibility',           nf: true,  erp: false, mdm: false, rec: false },
  { feat: 'Catches duplicates pre-order',    nf: true,  erp: false, mdm: false, rec: false },
  { feat: 'ROI demonstrable in weeks',       nf: true,  erp: false, mdm: false, rec: false },
  { feat: 'Multi-language alias resolution', nf: true,  erp: false, mdm: false, rec: false },
]

export default function WhyNorthForge() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="section-header">
          <div className="section-left">
            <div className="eyebrow"><span className="eyebrow-line" />Why NorthForge</div>
            <h2 className="section-h2">
              Not a rip-and-replace.<br />Not another ERP module.<br />Not a prediction.
            </h2>
          </div>
          <div className="section-right">
            <p className="section-sub">
              We fix one problem — the naming inconsistency that causes duplicate purchases — and
              do it without touching your existing systems, workflows, or team habits.
              The ROI is visible in weeks, not years.
            </p>
          </div>
        </div>

        <div className="why-grid">
          {WHY_CARDS.map(c => (
            <div className="why-card" key={c.num}>
              <div className="why-num">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <div className="why-erp-block">
          <div className="why-erp-content">
            <h3>Why ERP can't solve this</h3>
            <p className="why-erp-lead">
              ERP knows what each system calls a part. It doesn't know when different systems mean the same physical part. NorthForge does.
            </p>
            <p className="why-erp-sub">
              <strong>Why can't ERP providers solve this with a feature?</strong><br />
              Because ERP only sees ERP. NorthForge reconciles identities across ERPs, spreadsheets, supplier catalogs, PMS systems, and offline databases without requiring a multi-year master data cleanup project.
            </p>
          </div>
        </div>

        <div className="ct">
          <div className="ct-head">
            <div className="ct-col" />
            <div className="ct-col hi">NorthForge</div>
            <div className="ct-col">ERP Alone</div>
            <div className="ct-col">Master Data Process</div>
          </div>
          {CT_ROWS.map(r => (
            <div className="ct-row" key={r.feat}>
              <div className="ct-feat">{r.feat}</div>
              <div className="ct-val hi"><span className="chk">✓</span></div>
              <div className="ct-val"><span className="crs">✗</span></div>
              <div className="ct-val"><span className="crs">✗</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
