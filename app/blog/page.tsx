'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function Blog() {
  const [cursorVisible, setCursorVisible] = useState(true)
  const [catFrame, setCatFrame] = useState(0)

  useEffect(() => {
    // Blinking cursor animation
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 500)

    // Cat animation frames
    const catInterval = setInterval(() => {
      setCatFrame(prev => (prev + 1) % 4)
    }, 300)

    return () => {
      clearInterval(cursorInterval)
      clearInterval(catInterval)
    }
  }, [])

  const getCatEmoji = () => {
    const cats = ['🐱', '😺', '😸', '😹']
    return cats[catFrame]
  }

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Decorative Elements */}
      <div className="golden-star star-1">★</div>
      <div className="golden-star star-2">★</div>
      <div className="golden-star star-3">★</div>
      <div className="golden-star star-4">★</div>
      <div className="golden-star star-5">★</div>
      <div className="golden-star star-6">★</div>
      <div className="golden-star star-7">★</div>
      <div className="golden-star star-8">★</div>
      
      {/* Yellow Hearts */}
      <div className="yellow-heart heart-1">♥</div>
      <div className="yellow-heart heart-2">♥</div>
      <div className="yellow-heart heart-3">♥</div>
      <div className="yellow-heart heart-4">♥</div>
      <div className="yellow-heart heart-5">♥</div>
      
      {/* Sparkles */}
      <div className="sparkle sparkle-1">✨</div>
      <div className="sparkle sparkle-2">✨</div>
      <div className="sparkle sparkle-3">✨</div>
      <div className="sparkle sparkle-4">✨</div>

      {/* Main Content */}
      <main className="blog-coming-soon">
        <div className="blog-coming-soon-container">
          <div className="blog-coming-soon-content">
            <h1 className="blog-coming-soon-title">
              My thoughts, stories, and guides
              <span className={`typing-cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
            </h1>
            <p className="blog-coming-soon-subtitle">coming soon</p>
            
            <div className="blog-coming-soon-cat">
              <span className="cat-emoji">{getCatEmoji()}</span>
              <span className="cat-text">Loading awesome content...</span>
            </div>

            <div className="blog-coming-soon-decoration">
              <div className="pixel-border">
                <div className="pixel-corner top-left"></div>
                <div className="pixel-corner top-right"></div>
                <div className="pixel-corner bottom-left"></div>
                <div className="pixel-corner bottom-right"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Back to Home */}
      <div className="back-to-home">
        <Link href="/" className="back-button">
          ← back to home ♡
        </Link>
      </div>

      {/* Contact Section - Fixed at Bottom */}
      <section className="contact-section">
        <div className="section-content">
          <img src="/videos/angel.gif" alt="Angel" className="contact-angel-gif" />
          <img src="/videos/bocek.gif" alt="Bocek" className="contact-bocek-gif" />
          <h2 className="section-title">let&apos;s connect</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I&apos;m always excited to connect with fellow developers, creators, and anyone passionate about 
              technology and innovation. Whether you want to collaborate on a project, discuss ideas, 
              or just say hello, I&apos;d love to hear from you!
            </p>
            
            <div className="contact-links">
              <a href="mailto:goksualcinkaya@gmail.com" className="contact-link">
                <span className="contact-icon">✉️</span>
                goksualcinkaya@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/goksualcinkaya" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">💼</span>
                linkedin.com/in/goksualcinkaya
              </a>
              <a href="http://x.com/0xgks" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">🐦</span>
                @0xgks
              </a>
              <a href="http://instagram.com/goksualcinkaya" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">📸</span>
                @goksualcinkaya
              </a>
              <a href="https://github.com/goksualc" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">💻</span>
                github.com/goksualc
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 