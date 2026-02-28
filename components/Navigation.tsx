'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const hero = document.getElementById('hero')
    const fallbackThreshold = 100

    if (hero) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsNavVisible(entry.isIntersecting)
        },
        {
          threshold: 0,
          rootMargin: '0px 0px -5% 0px',
        }
      )
      observer.observe(hero)
      return () => observer.disconnect()
    }

    const handleScroll = () => {
      setIsNavVisible(window.scrollY < fallbackThreshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/experiences', label: 'EXPERIENCES' },
    { href: '/education', label: 'EDUCATION' },
    { href: '/blog', label: 'BLOG' }
  ]

  return (
    <nav className={`nav-container ${!isNavVisible ? 'nav-hidden' : ''}`} aria-hidden={!isNavVisible}>
      {/* Desktop Navigation */}
      <div className="nav-menu desktop-nav">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={`nav-item ${pathname === item.href ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation - show all items directly, no hamburger */}
      <div className="mobile-nav">
        <div className="nav-menu">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`nav-item ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
