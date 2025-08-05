'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Projects() {
  const [isLightMode, setIsLightMode] = useState(false)

  const projects = [
    {
      id: 1,
      name: "outfitease",
      year: "2024",
      tags: ["react", "solana", "fashion", "nft"],
      description: "A fashion + Web3 platform that combines NFT wearables with real-world fashion recommendations, creating a seamless bridge between digital and physical style.",
      image: "👗",
      gif: "https://media.giphy.com/media/example1/giphy.gif"
    },
    {
      id: 2,
      name: "finwise",
      year: "2024",
      tags: ["ai", "defi", "python", "blockchain"],
      description: "Smart fund advisor using AI and blockchain to provide personalized investment strategies and portfolio management for the modern investor.",
      image: "📊",
      gif: "https://media.giphy.com/media/example2/giphy.gif"
    },
    {
      id: 3,
      name: "sollearn",
      year: "2023",
      tags: ["solana", "education", "gaming", "web3"],
      description: "Interactive learning platform on Solana with gamified education rewards and NFT certificates for achievements.",
      image: "🎓",
      gif: "https://media.giphy.com/media/example3/giphy.gif"
    },
    {
      id: 4,
      name: "herdao türkiye",
      year: "2023",
      tags: ["community", "dao", "education", "women"],
      description: "Co-founded H.E.R. DAO Türkiye to foster inclusive spaces in the blockchain ecosystem and empower women in technology.",
      image: "🌱",
      gif: "https://media.giphy.com/media/example4/giphy.gif"
    },
    {
      id: 5,
      name: "zk-identity",
      year: "2023",
      tags: ["zk", "privacy", "solidity", "ethereum"],
      description: "Zero-knowledge proof system for decentralized identity verification with privacy-preserving authentication.",
      image: "🔐",
      gif: "https://media.giphy.com/media/example5/giphy.gif"
    },
    {
      id: 6,
      name: "creative coding",
      year: "2022",
      tags: ["p5.js", "generative", "art", "interactive"],
      description: "Collection of generative art experiments and interactive installations exploring the intersection of code and creativity.",
      image: "🎨",
      gif: "https://media.giphy.com/media/example6/giphy.gif"
    }
  ]

  useEffect(() => {
    // Add fade-in animation for project cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode)
    document.documentElement.classList.toggle('light-mode')
  }

  return (
    <>
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-menu">
          <Link href="/" className="nav-item">
            HOME
          </Link>
          <Link href="/projects" className="nav-item active">
            PROJECTS
          </Link>
          <Link href="/blog" className="nav-item">
            BLOG
          </Link>
        </div>
      </nav>

      {/* Light Mode Toggle */}
      <button 
        className="light-mode-toggle"
        onClick={toggleLightMode}
        aria-label="Toggle light mode"
      >
        {isLightMode ? '🌙' : '☀️'}
      </button>

      {/* Decorative Elements */}
      <div className="golden-star star-1">★</div>
      <div className="golden-star star-2">★</div>
      <div className="golden-star star-3">★</div>
      <div className="golden-star star-4">★</div>

      {/* Projects Hero */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-title">projects ✨</h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
                <div className="project-gif-overlay">
                  <img src={project.gif} alt={project.name} />
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-header">
                  <h2 className="project-name">{project.name}</h2>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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