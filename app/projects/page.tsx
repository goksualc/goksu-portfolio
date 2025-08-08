'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function Projects() {
  const [isLightMode, setIsLightMode] = useState(false)

  const projects = [
    {
      id: 1,
      name: "FinWise",
      year: "2024",
      tags: ["swift", "mobile", "finance", "ui-ux", "investment"],
      description: "FinWise is a personal finance and investment guidance mobile application designed to help users understand their financial profiles, assess their risk tolerance, and receive tailored investment recommendations. The app features an adaptive UI based on user risk categories, in-app educational content and FAQs for beginner investors, and clean mobile-first design focused on usability. I designed and developed the mobile application using Swift, handling both UI/UX and core functionality.",
      image: "💰",
      link: "https://github.com/goksualc/Finwise"
    },
    {
      id: 2,
      name: "Cryptography and Hashing",
      year: "2024",
      tags: ["cryptography", "security", "algorithms", "privacy"],
      description: "Explored cryptographic concepts with a focus on hashing algorithms like SHA256. This repository serves as an educational and development platform, covering encryption methods, key cryptosystems, and hashing techniques. Implemented advanced hashing algorithms in Python.",
      image: "🔐",
      link: "https://github.com/goksualc/Cryptography-and-Hashing"
    },
    {
      id: 3,
      name: "Cairo",
      year: "2024",
      tags: ["starknet", "zk-proofs", "smart contracts", "scaling"],
      description: "Cairo Giris, award-winning repo for Starknet ECMP. It provides a primer on leveraging StarkNet, a permissionless L2 ZK-Rollup on Ethereum, using Cairo for zero-knowledge cryptographic solutions. It includes tutorials on setup, developing initial programs and smart contracts, emphasizing zero-knowledge proofs for blockchain scalability.",
      image: "🔷",
      link: "https://github.com/goksualc/Cairo_Giris"
    },
    {
      id: 4,
      name: "CharmLSP",
      year: "2023",
      tags: ["lsp", "web3", "security", "privacy", "cryptography"],
      description: "CharmLSP is a decentralized Layer Security Protocol (LSP) developed during ETHGlobal Istanbul to improve secure communication and privacy in Web3 applications. We designed a trustless messaging layer using cryptographic primitives, on-chain verification, and privacy-preserving mechanisms. I led the research and brand creation, dev management and smart contracts.",
      image: "🎯",
      link: "https://app.buidlbox.io/projects/charmlsp"
    },
    {
      id: 5,
      name: "Wiser",
      year: "2023",
      tags: ["betting", "vrf", "governance", "blockchain"],
      description: "Wiser is a fully on-chain, community-driven crypto betting platform ensuring transparency and fairness through VRF, shared bankrolls, decentralized governance, and blockchain security. Future features include social interaction and AI assistance.",
      image: "🧠",
      link: "https://ethglobal.com/showcase/wiser-e9brh"
    },
    {
      id: 6,
      name: "SolLearn",
      year: "2023",
      tags: ["solana", "education", "nft", "hackathon"],
      description: "SolLearn is an award-winning learn-to-earn dApp on Solana that won the UpSchool Hackathon. It offers decentralized education with NFT certifications for completed training, merging learning and earning on the blockchain.",
      image: "🎓",
      link: "https://github.com/goksualc/SolLearn"
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
      <Navigation />

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
      <div className="golden-star star-5">★</div>
      <div className="golden-star star-6">★</div>
      <div className="golden-star star-7">★</div>
      <div className="golden-star star-8">★</div>
      <div className="golden-star star-9">★</div>
      <div className="golden-star star-10">★</div>
      <div className="golden-star star-11">★</div>
      <div className="golden-star star-12">★</div>
      <div className="golden-star star-13">★</div>
      <div className="golden-star star-14">★</div>
      <div className="golden-star star-15">★</div>
      <div className="golden-star star-16">★</div>
      <div className="golden-star star-17">★</div>
      <div className="golden-star star-18">★</div>
      <div className="golden-star star-19">★</div>
      <div className="golden-star star-20">★</div>
      <div className="golden-star star-21">★</div>
      <div className="golden-star star-22">★</div>
      <div className="golden-star star-23">★</div>
      <div className="golden-star star-24">★</div>
      <div className="golden-star star-25">★</div>
      <div className="golden-star star-26">★</div>
      <div className="golden-star star-27">★</div>
      <div className="golden-star star-28">★</div>
      <div className="golden-star star-29">★</div>
      <div className="golden-star star-30">★</div>
      <div className="golden-star star-31">★</div>
      <div className="golden-star star-32">★</div>
      <div className="golden-star star-33">★</div>
      <div className="golden-star star-34">★</div>
      <div className="golden-star star-35">★</div>
      
      {/* Yellow Hearts */}
      <div className="yellow-heart heart-1">♥</div>
      <div className="yellow-heart heart-2">♥</div>
      <div className="yellow-heart heart-3">♥</div>
      <div className="yellow-heart heart-4">♥</div>
      <div className="yellow-heart heart-5">♥</div>
      <div className="yellow-heart heart-6">♥</div>
      <div className="yellow-heart heart-7">♥</div>
      <div className="yellow-heart heart-8">♥</div>
      <div className="yellow-heart heart-9">♥</div>
      <div className="yellow-heart heart-10">♥</div>
      <div className="yellow-heart heart-11">♥</div>
      <div className="yellow-heart heart-12">♥</div>
      <div className="yellow-heart heart-13">♥</div>
      <div className="yellow-heart heart-14">♥</div>
      <div className="yellow-heart heart-15">♥</div>
      
      {/* Sparkles */}
      <div className="sparkle sparkle-1">✨</div>
      <div className="sparkle sparkle-2">✨</div>
      <div className="sparkle sparkle-3">✨</div>
      <div className="sparkle sparkle-4">✨</div>
      <div className="sparkle sparkle-5">✨</div>
      <div className="sparkle sparkle-6">✨</div>
      <div className="sparkle sparkle-7">✨</div>
      <div className="sparkle sparkle-8">✨</div>

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
                
                {project.link && project.link !== "#" && (
                  <div className="project-link">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-button"
                    >
                      🔗 View Project
                    </a>
                  </div>
                )}
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