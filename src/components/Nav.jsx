import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme')
    } else {
      document.body.classList.remove('light-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const close = () => setOpen(false)
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#" className="logo-link" aria-label="NorthForge home" onClick={close}>
          <img src="/logo.png" alt="NorthForge" className="logo-img" />
          <span className="logo-text">NorthForge</span>
        </a>
        <div className="nav-links">
          <a href="#problem" className="nav-link">The Problem</a>
          <a href="#ai" className="nav-link">How It Works</a>
          <a href="#who" className="nav-link">Who It's For</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg className="toggle-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg className="toggle-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <a href="#waitlist" className="btn-primary">Request Early Access</a>
        </div>
        <button
          className={`hamburger${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <a href="#problem" className="mobile-link" onClick={close}>The Problem</a>
        <a href="#ai" className="mobile-link" onClick={close}>How It Works</a>
        <a href="#who" className="mobile-link" onClick={close}>Who It's For</a>
        <button onClick={() => { toggleTheme(); close(); }} className="mobile-link theme-toggle-mobile" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', textAlign: 'left', width: '100%' }}>
          <span>Toggle Theme</span>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <a href="#waitlist" className="mobile-link mobile-cta" onClick={close}>Request Early Access</a>
      </div>
    </nav>
  )
}
