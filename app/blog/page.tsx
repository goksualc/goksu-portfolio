'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Blog() {
  const [activeBlog, setActiveBlog] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      slug: "future-of-web3-development",
      title: "THE FUTURE OF WEB3 DEVELOPMENT",
      excerpt: "Exploring the intersection of blockchain technology and modern web development practices. How decentralized applications are reshaping the digital landscape.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "TECHNOLOGY",
      image: "🌐"
    },
    {
      id: 2,
      slug: "building-communities-digital-age",
      title: "BUILDING COMMUNITIES IN THE DIGITAL AGE",
      excerpt: "Lessons learned from co-founding H.E.R. DAO Türkiye and fostering inclusive spaces in the blockchain ecosystem.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "COMMUNITY",
      image: "👥"
    },
    {
      id: 3,
      slug: "hackathons-to-innovation",
      title: "FROM HACKATHONS TO INNOVATION",
      excerpt: "My journey as a hackathon mentor and how these intense coding sessions spark creativity and drive technological breakthroughs.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "EXPERIENCE",
      image: "🚀"
    },
    {
      id: 4,
      slug: "art-of-pixel-perfect-design",
      title: "THE ART OF PIXEL PERFECT DESIGN",
      excerpt: "How retro aesthetics and pixel art principles can enhance modern user interfaces and create memorable digital experiences.",
      date: "2024-01-01",
      readTime: "15 min read",
      category: "DESIGN",
      image: "🎨"
    },
    {
      id: 5,
      slug: "blockchain-research-beyond-hype",
      title: "BLOCKCHAIN RESEARCH: BEYOND THE HYPE",
      excerpt: "Deep dive into the technical foundations of blockchain technology and its real-world applications beyond cryptocurrency.",
      date: "2023-12-28",
      readTime: "20 min read",
      category: "RESEARCH",
      image: "🔬"
    },
    {
      id: 6,
      slug: "nyc-tech-scene-developers-perspective",
      title: "NYC TECH SCENE: A DEVELOPER'S PERSPECTIVE",
      excerpt: "Navigating the vibrant tech ecosystem of New York City and finding your place in the world's most dynamic startup environment.",
      date: "2023-12-25",
      readTime: "14 min read",
      category: "LIFESTYLE",
      image: "🗽"
    }
  ]

  useEffect(() => {
    // Add fade-in animation for blog cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.blog-card').forEach(card => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Decorative Elements */}
      <div className="golden-star star-1">★</div>
      <div className="golden-star star-2">★</div>
      <div className="golden-star star-3">★</div>
      <div className="golden-star star-4">★</div>
      
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-menu">
          <Link href="/" className="nav-item">
            HOME
          </Link>
          <Link href="/projects" className="nav-item">
            PROJECTS
          </Link>
          <Link href="/blog" className="nav-item active">
            BLOG
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">DIGITAL DIARIES ✨</h1>
          <p className="blog-hero-subtitle">Thoughts on technology, community, and the future of web development</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-page-section">
        <div className="blog-page-content">
          <div className="blog-grid-extended">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="blog-card-extended"
                onMouseEnter={() => setActiveBlog(post.id)}
                onMouseLeave={() => setActiveBlog(null)}
              >
                <div className="blog-card-header">
                  <div className="blog-card-image">{post.image}</div>
                  <div className="blog-card-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                </div>
                
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                
                <div className="blog-card-footer">
                  <span className="blog-read-time">{post.readTime}</span>
                  <Link href={`/blog/${post.slug}`} className="blog-read-more">
                    READ MORE →
                  </Link>
                </div>
              </article>
            ))}
          </div>
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