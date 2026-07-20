const PERSONAS = [
  {
    role: 'Procurement Manager',
    quote: '"I raised a PO for 4 units. Turns out we had 7 across the fleet — just no one called them the same thing."',
    pain: 'Pain: Buying what you already own, invisibly.',
  },
  {
    role: 'Fleet Engineer',
    quote: '"I need to know if spare X is available across the fleet before I schedule a dry dock. I spend a week asking everyone individually."',
    pain: 'Pain: Fleet-wide stock visibility takes days, not seconds.',
  },
  {
    role: 'Superintendent',
    quote: '"The warehouse says we have it. The vessel log says we don\'t. Both are right — they\'re just naming it differently."',
    pain: 'Pain: Reconciling naming across systems manually, every time.',
  },
  {
    role: 'Technical Director',
    quote: '"I can\'t show the board a real parts spend number because I don\'t have one. Every system has a different answer."',
    pain: 'Pain: No single source of truth for reporting or budgeting.',
  },
]

export default function WhoItsFor() {
  return (
    <section className="who" id="who">
      <div className="who-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="section-header light">
          <div className="section-left">
            <div className="eyebrow light"><span className="eyebrow-line" />Built for</div>
            <h2 className="section-h2">The people who actually live in the parts problem</h2>
          </div>
          <div className="section-right">
            <p className="section-sub">
              NorthForge is built for the people who feel the naming chaos every day — procurement
              managers chasing duplicate orders, engineers who need fleet visibility before a dry
              dock, and directors who can't get a clean spend number.
            </p>
          </div>
        </div>
        <div className="persona-grid">
          {PERSONAS.map(p => (
            <div className="persona-card" key={p.role}>
              <div className="persona-role">{p.role}</div>
              <blockquote className="persona-quote">{p.quote}</blockquote>
              <div className="persona-pain">{p.pain}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
