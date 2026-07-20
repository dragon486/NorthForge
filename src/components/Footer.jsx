export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/logo.png" alt="NorthForge" className="footer-logo-img" />
              <span className="footer-logo-text">NorthForge</span>
            </div>
            <p className="footer-tagline">
              One canonical inventory across your entire fleet.<br />
              The intelligence layer for industrial assets.
            </p>
            <a href="mailto:adelmuhammed786@gmail.com" className="footer-email">adelmuhammed786@gmail.com</a>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#problem">The Problem</a>
              <a href="#ai">How It Works</a>
              <a href="#who">Who It's For</a>
              <a href="#waitlist">Early Access</a>
            </div>
            <div className="footer-legal">
              <p>© 2025 NorthForge. All rights reserved.</p>
              <p>Built for maritime. Designed to scale industrial.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
