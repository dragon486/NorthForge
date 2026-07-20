import { useState, useRef } from 'react'

export default function Waitlist() {
  const [status, setStatus] = useState(null) // null | 'ok' | 'err'
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(formRef.current)
    try {
      // Replace with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('ok')
        formRef.current.reset()
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  return (
    <section className="waitlist" id="waitlist">
      <div className="wrap">
        <div className="waitlist-box">
          <div className="wl-glow" aria-hidden="true" />

          <div style={{ position: 'relative' }}>
            <div className="eyebrow"><span className="eyebrow-line" />Early Access</div>
            <h2 className="waitlist-h2">Stop paying for the part you already own.</h2>
            <p className="waitlist-sub">
              We're running the first pilot with a small group of fleet operators. Leave your work
              email and we'll reach out as spots become available — no commitment, no pitch deck,
              just a conversation.
            </p>

            <div className="req-form" style={{ marginTop: '32px' }}>
              <div className="req-head">
                <span className="req-title">Requisition — Early Access</span>
                <span className="req-num">Form NF-01</span>
              </div>
              <div className="req-body">
                <form id="waitlistForm" ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="field-group">
                    <div className="field-row">
                      <div className="field-wrap">
                        <label htmlFor="emailInput" className="field-label">Work Email *</label>
                        <input type="email" id="emailInput" name="email" placeholder="you@company.com" required autoComplete="email" />
                      </div>
                      <div className="field-wrap">
                        <label htmlFor="companyInput" className="field-label">Company / Fleet</label>
                        <input type="text" id="companyInput" name="company" placeholder="e.g. Tanker, bulk operator, etc." />
                      </div>
                    </div>
                    <div className="field-row">
                      <div className="field-wrap full">
                        <label htmlFor="roleInput" className="field-label">Your Role</label>
                        <select id="roleInput" name="role">
                          <option value="">Select your role…</option>
                          <option>Procurement Manager</option>
                          <option>Fleet Engineer</option>
                          <option>Superintendent</option>
                          <option>Technical Director</option>
                          <option>CFO / Finance</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn-submit" id="submitBtn">
                      <span className="btn-text">Request Early Access</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </form>
                <div className="form-note">No spam. One email when your spot is ready — nothing else.</div>
                {status && (
                  <div className={`form-status show ${status}`} role="status" aria-live="polite">
                    {status === 'ok'
                      ? '✓ Thank you. We\'ll be in touch when a pilot slot opens.'
                      : '✗ Something went wrong. Please email us directly at adelmuhammed786@gmail.com'}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="pilot-info">
              <div className="pilot-label">Pilot Program Details</div>
              <div className="pilot-detail">
                {[
                  { key: 'Format', val: '90-day paid pilot' },
                  { key: 'Fleet size', val: '5–50 vessels' },
                  { key: 'Setup', val: 'Read-only API / CSV export' },
                  { key: 'Migration', val: 'None required' },
                  { key: 'Commitment', val: 'Exit any time' },
                ].map(r => (
                  <div className="pilot-row" key={r.key}>
                    <span className="pr-key">{r.key}</span>
                    <span className="pr-val">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pilot-quote">
              <blockquote>
                "If this catches even one $8,000 duplicate order per vessel per quarter, the math writes itself."
              </blockquote>
              <cite>— Fleet procurement director, bulk carrier operator</cite>
            </div>

            <div className="enterprise-ready">
              <div className="er-title">Enterprise Ready</div>
              <div className="er-bullets">
                <div className="er-bullet">
                  <span className="er-bullet-check">✓</span>
                  <span><strong>Read-only:</strong> API or CSV integration (no write access).</span>
                </div>
                <div className="er-bullet">
                  <span className="er-bullet-check">✓</span>
                  <span><strong>Secure:</strong> Encrypted in transit and at rest.</span>
                </div>
                <div className="er-bullet">
                  <span className="er-bullet-check">✓</span>
                  <span><strong>Private data:</strong> Never used to train public AI models.</span>
                </div>
                <div className="er-bullet">
                  <span className="er-bullet-check">✓</span>
                  <span><strong>Deploy:</strong> Private cloud &amp; on-premises available.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
