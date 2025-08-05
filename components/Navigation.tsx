'use client'
import Link from 'next/link'

const sections = ['ABOUT ME', 'PROJECTS', 'EXPERIENCE', 'INTERESTS', 'CONTACT']

export default function Navigation() {
  return (
    <nav className="nav-menu">
      {sections.map((section, i) => (
        <Link
          key={i}
          href={`#${section.toLowerCase().replace(/\s/g, '')}`}
          className="nav-item"
        >
          {section}
        </Link>
      ))}
    </nav>
  )
}
