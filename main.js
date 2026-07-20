/* =============================================
   NORTHFORGE — main.js
   ============================================= */

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  mobileMenu.classList.toggle('open', open);
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('open');
  });
});

// ===== FADE-IN ANIMATIONS =====
document.querySelectorAll('.fade-in').forEach((el, i) => {
  const delay = el.dataset.delay || 0;
  el.style.animationDelay = `${delay}ms`;
});

// ===== INTERSECTION OBSERVER — REVEAL ON SCROLL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('revealed'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const rawTarget = el.dataset.target;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const divide = parseInt(el.dataset.divide || 1);

  if (!rawTarget) return;

  // Static overrides (for text values like "$0 migration")
  if (isNaN(rawTarget)) return;

  const target = parseInt(rawTarget) / divide;
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    const formatted = divide > 1
      ? `${current}K`
      : current.toLocaleString();

    el.textContent = prefix + formatted + suffix;

    if (progress < 1) requestAnimationFrame(update);
    else {
      // Final display
      if (divide > 1) {
        el.textContent = prefix + target + 'K+' + suffix;
      } else {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    }
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      entry.target.querySelectorAll('.stat-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('animated'), i * 120);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsStrip = document.getElementById('stats-strip');
if (statsStrip) statsObserver.observe(statsStrip);

// ===== WAITLIST FORM =====
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const statusEl = form.closest('.req-body').querySelector('.form-status');
  const btn = form.querySelector('.btn-submit');
  const btnText = btn.querySelector('.btn-text');

  const email   = form.querySelector('[name="email"]').value.trim();
  const company = form.querySelector('[name="company"]')?.value.trim() || '';
  const role    = form.querySelector('[name="role"]')?.value || '';

  if (!email) {
    statusEl.className = 'form-status show err';
    statusEl.textContent = '⚠ Please enter your work email.';
    return;
  }

  btn.disabled = true;
  btnText.textContent = 'Sending…';
  statusEl.className = 'form-status show';
  statusEl.textContent = '';

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email, company, role })
    });

    if (res.ok) {
      statusEl.className = 'form-status show ok';
      statusEl.textContent = '✓ You\'re on the list. We\'ll be in touch when your spot is ready.';
      form.reset();
      btnText.textContent = 'Joined ✓';
    } else {
      throw new Error('Request failed');
    }
  } catch {
    statusEl.className = 'form-status show err';
    statusEl.textContent = 'Couldn\'t submit right now — email hello@northforge.io directly.';
    btn.disabled = false;
    btnText.textContent = 'Request Early Access';
  }
}

document.getElementById('waitlistForm')?.addEventListener('submit', handleFormSubmit);

// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = 72; // nav height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ===== TAGSTACK KEYBOARD SUPPORT =====
const tagstack = document.getElementById('tagstack');
if (tagstack) {
  tagstack.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      tagstack.classList.toggle('expanded');
    }
  });
}

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'rgba(250,250,248,0.95)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
