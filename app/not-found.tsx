'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pixel-container">
      <div className="crt-screen" />
      <div className="animated-grid" />
      
      <div style={{ 
        textAlign: 'center', 
        zIndex: 20,
        position: 'relative'
      }}>
        <h1 className="title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
          404 - PAGE NOT FOUND
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          textShadow: '0 0 10px var(--neon-green)'
        }}>
          The page you&apos;re looking for doesn&apos;t exist in this retro universe!
        </p>
        <Link 
          href="/" 
          className="nav-item"
          style={{ 
            display: 'inline-block',
            fontSize: '1rem',
            padding: '1rem 2rem'
          }}
        >
          RETURN TO MAIN MENU
        </Link>
      </div>
    </div>
  )
} 