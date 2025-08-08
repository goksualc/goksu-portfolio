'use client'
import { useState, useEffect, useRef } from 'react'
import Navigation from '../components/Navigation'

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const sections = [
    { id: 'hero', title: 'HOME' },
    { id: 'about', title: 'ABOUT ME' },
    { id: 'contact', title: 'CONTACT' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    })

    // Observe all content sections
    document.querySelectorAll('.content-section, .section-title').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el
  }

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`scroll-dot ${activeSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
            title={section.title}
          />
        ))}
      </div>

      {/* Main Content */}
      <div ref={sectionsRef}>
        {/* Hero Section */}
        <section 
          ref={setSectionRef(0)}
          className="hero-section"
          id="hero"
        >
          {/* Floating Elements */}
          <div className="floating-heart">♥</div>
          
          <div className="welcome-mat-container">
            <img src="/images/carpet.jpg" alt="Welcome Mat" className="carpet-image" />
            <img src="/images/shoes.png" alt="Shoes" className="shoes-image" />
            <div className="shoes-text">remove your shoes!</div>
          </div>
          
          {/* Walking Shoes Animation */}
          <div className="walking-shoes-container">
            <img src="/images/rightshoe.png" alt="Right Shoe" className="walking-shoe right-shoe" />
            <img src="/images/leftshoe.png" alt="Left Shoe" className="walking-shoe left-shoe" />
          </div>
          
          {/* Golden Stars */}
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
          
          {/* Decorative Elements */}
          <div className="red-shoe"></div>
          <div className="furry-creature"></div>
          
          {/* Wave Pattern */}
          <div className="wave-pattern"></div>
          
          <div className="hero-content">
            <div className="falling-star">✨</div>
            <h1 className="hero-title">gok&apos;s portfolio</h1>
            
            <div className="hero-sections">
              <div className="hero-left">
                <p className="hero-subtitle">
                  ✨ Welcome to My Portfolio ✨<br/>
                  Hi there! I&apos;m so glad you&apos;re here 🌸<br/><br/>
                  This is my little corner of the internet a space to share who I am, what I do, and what inspires me.<br/>
                  You&apos;ll find my journey through tech, projects I&apos;ve built, and the milestones that shaped me.<br/><br/>
                  Let&apos;s connect, collaborate, and create something meaningful! 💛<br/>
                </p>
              </div>
              
              <div className="hero-right">
                <div className="designer-photo-container">
                  <div className="designer-photo-placeholder">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      preload="metadata"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onLoadedData={(e) => (e.target as HTMLVideoElement).play()}
                    >
                      <source src="/videos/gok.mov" type="video/quicktime" />
                      <source src="/videos/gok.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <img src="/videos/daisy.gif" alt="Daisy" className="daisy-gif daisy-left" />
                  <img src="/videos/daisy.gif" alt="Daisy" className="daisy-gif daisy-right" />
                  <div className="designer-title">Goksu♡</div>
                  <div className="designer-subtitle"> Security Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section 
          ref={setSectionRef(1)}
          className="section"
          id="about"
        >
          {/* Golden Stars */}
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
          
          <div className="section-content">
            <div className="about-title-with-image">
              <h2 className="section-title">about me</h2>
              <img src="/images/gok.png" alt="Gok" className="about-title-image" />
            </div>
            <div className="about-content">
              <div className="about-text-with-sunflower">
                <div className="about-text">
                  <p>
                    I&apos;m Göksu Alçınkaya, a computer engineer currently pursuing my Master&apos;s in Computer Science in New York City, 
                    with 4 years of hands-on experience in the blockchain space.
                  </p>
                  <p>
                    My journey combines a deep love for security, developer relations, and creative community building. 
                    I&apos;ve worn many hats from coding and technical writing to mentoring at hackathons, managing project teams, 
                    organizing events, and even designing for social media.
                  </p>
                  <p>
                    I&apos;m especially passionate about blockchain security, decentralized identity, and helping developers build confidently in Web3. 
                    </p>
                </div>
                <img src="/videos/code.gif" alt="Code" className="code-gif code-1" />
                <img src="/videos/cam.gif" alt="Camera" className="cam-gif cam-1" />
                <img src="/videos/sunflower.gif" alt="Sunflower" className="sunflower-gif sunflower-1" />
                <img src="/images/liberty.png" alt="Liberty" className="liberty-image liberty-1" />
              </div>
              
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">💻</div>
                  <h3 className="skill-title">Development</h3>
                  <p className="skill-description">TypeScript • React • Frontend Architecture • Rust • Swift</p>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon">🎨</div>
                  <h3 className="skill-title">Design</h3>
                  <p className="skill-description">Social Media Design</p>
                </div>
                
                <div className="skill-item">
                  <div className="skill-icon">🌱</div>
                  <h3 className="skill-title">Community</h3>
                  <p className="skill-description">Mentoring teams at hackathons • Building developer-focused communities • Onboarding Web2 developers to Web3</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          ref={setSectionRef(2)}
          className="section"
          id="contact"
        >
          {/* Golden Stars */}
          <div className="golden-star star-9">★</div>
          <div className="golden-star star-10">★</div>
          <div className="golden-star star-11">★</div>
          <div className="golden-star star-12">★</div>
          <div className="golden-star star-13">★</div>
          <div className="golden-star star-14">★</div>
          <div className="golden-star star-15">★</div>
          <div className="golden-star star-16">★</div>
          
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
      </div>
    </>
  )
}
