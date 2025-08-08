'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function Education() {
  const educationEntries = [
    {
      id: 1,
      institution: "City University of New York, Brooklyn College",
      degree: "Master's Degree – Computer Science (Information Systems)",
      location: "Brooklyn, NY",
      period: "August 2025 – Present",
      emoji: "🎓",
      description: "",
      tags: ["computer-science", "information-systems", "graduate"]
    },
    {
      id: 2,
      institution: "Bay Atlantic University – Study Abroad",
      degree: "Information Technology coursework (Full Scholarship)",
      location: "Washington, D.C.",
      period: "August 2024 – May 2025",
      emoji: "💻",
      description: "",
      tags: ["information-technology", "study-abroad", "scholarship"]
    },
    {
      id: 3,
      institution: "Bahçeşehir University",
      degree: "Bachelor's Degree – Computer Engineering (Full Scholarship)",
      location: "Istanbul, Türkiye",
      period: "October 2021 – June 2025",
      emoji: "🛠️",
      description: "Capstone project: Finwise – a personal budgeting & expense tracking platform",
      tags: ["computer-engineering", "bachelor", "scholarship", "capstone"]
    }
  ]

  useEffect(() => {
    // Add fade-in animation for education cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.education-card').forEach(card => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

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
      <div className="golden-star star-36">★</div>
      <div className="golden-star star-37">★</div>
      <div className="golden-star star-38">★</div>
      <div className="golden-star star-39">★</div>
      <div className="golden-star star-40">★</div>
      <div className="golden-star star-41">★</div>
      <div className="golden-star star-42">★</div>
      <div className="golden-star star-43">★</div>
      <div className="golden-star star-44">★</div>
      <div className="golden-star star-45">★</div>
      <div className="golden-star star-46">★</div>
      <div className="golden-star star-47">★</div>
      <div className="golden-star star-48">★</div>
      <div className="golden-star star-49">★</div>
      <div className="golden-star star-50">★</div>
      <div className="golden-star star-51">★</div>
      <div className="golden-star star-52">★</div>
      <div className="golden-star star-53">★</div>
      <div className="golden-star star-54">★</div>
      <div className="golden-star star-55">★</div>
      <div className="golden-star star-56">★</div>
      <div className="golden-star star-57">★</div>
      <div className="golden-star star-58">★</div>
      <div className="golden-star star-59">★</div>
      <div className="golden-star star-60">★</div>
      <div className="golden-star star-61">★</div>
      <div className="golden-star star-62">★</div>
      <div className="golden-star star-63">★</div>
      <div className="golden-star star-64">★</div>
      <div className="golden-star star-65">★</div>
      <div className="golden-star star-66">★</div>
      <div className="golden-star star-67">★</div>
      <div className="golden-star star-68">★</div>
      <div className="golden-star star-69">★</div>
      <div className="golden-star star-70">★</div>

      {/* Hero Section */}
      <section className="education-hero-section">
        <div className="education-hero-content">
          <h1 className="education-hero-title">education ✨</h1>
          <p className="education-hero-subtitle">
            My academic journey through computer science and engineering, from undergraduate to graduate studies.
          </p>
        </div>
      </section>

      {/* Education Content */}
      <section className="education-content-section">
        <div className="education-grid">
          {educationEntries.map((entry, index) => (
            <div 
              key={entry.id} 
              className="education-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="education-header">
                <div className="education-emoji">{entry.emoji}</div>
                <div className="education-title-section">
                  <h3 className="education-institution">{entry.institution}</h3>
                  <p className="education-degree">{entry.degree}</p>
                </div>
                <div className="education-sparkle">✨</div>
              </div>
              
              <div className="education-meta">
                <span className="education-location">📍 {entry.location}</span>
                <span className="education-period">{entry.period}</span>
              </div>
              
              {entry.description && (
                <p className="education-description">{entry.description}</p>
              )}
              
              <div className="education-tags">
                {entry.tags.map((tag) => (
                  <span key={tag} className="education-tag">{tag}</span>
                ))}
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

