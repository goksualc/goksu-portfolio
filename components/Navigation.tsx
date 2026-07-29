'use client'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const links = [
    { href: '#about',      label: 'About' },
    { href: '#education',  label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#mandate',    label: 'Mandate' },
    { href: '#content',    label: 'Content' },
    { href: '#videos',     label: 'Videos' },
    { href: '#speaking',   label: 'Events' },
    { href: '#work',       label: 'Projects' },
    { href: '#contact',    label: 'Contact' },
  ]

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">Goksu Alcinkaya</a>

        {/* Desktop links */}
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`nav-mobile-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-mobile-item" onClick={close}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
