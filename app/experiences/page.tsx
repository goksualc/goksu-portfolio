'use client'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import { RevealOnScroll, RevealList } from '../../components/RevealOnScroll'

// Define TypeScript interfaces for experience items
interface BaseExperience {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
  emoji: string;
}

interface ConferenceExperience extends BaseExperience {
  role: string;
  image?: string;
  company?: string;
  event?: string;
  website?: string;
}

interface HackathonExperience extends BaseExperience {
  role: string;
  image?: string;
  company?: string;
  event?: string;
  website?: string;
  links?: {
    github?: string;
    youtube?: string;
  };
}

interface SpeechExperience extends BaseExperience {
  event: string;
  image?: string;
  company?: string;
  role?: string;
  website?: string;
}

interface WorkExperience extends BaseExperience {
  company: string;
  role: string;
  image?: string;
  website?: string;
  event?: string;
}

interface WorkshopExperience extends BaseExperience {
  event: string;
  images: string[];
  image?: string;
  company?: string;
  role?: string;
  website?: string;
}

interface AllExperience extends BaseExperience {
  category: string;
  categoryEmoji: string;
  company?: string;
  event?: string;
  role?: string;
  image?: string;
  website?: string;
  images?: string[];
  links?: {
    github?: string;
    youtube?: string;
  };
}

export default function Experiences() {
  const [activeTab, setActiveTab] = useState('all-experiences')

  const getLogoFilename = (companyName: string) => {
    const logoMap: { [key: string]: string } = {
      'H.E.R. DAO Türkiye': 'herdao',
      'TÜBİTAK BİLGEM': 'tubitak',
      'MetisL2': 'metis',
      'Solana Foundation': 'solana',
      'BlockchainIST Center': 'blockchainIST'
    }
    return logoMap[companyName] || companyName.toLowerCase().replace(/[^a-z0-9]/g, '')
  }

  const conferences = [
    {
      id: 1,
      title: "Starknet Summit",
      date: "2023",
      location: "Israel",
      role: "Attendee",
      description: "I had the opportunity to attend the Starknet Summit in Israel, sponsored by H.E.R. DAO. There, I connected with many industry leaders and women developers, expanding my network and deepening my knowledge of blockchain scalability solutions.",
      tags: ["starknet", "blockchain", "scalability", "networking"],
      emoji: "⚡",
      image: "/images/experiences/IMG_6630.jpg"
    },
    {
      id: 2,
      title: "Devconnect Week",
      date: "2023",
      location: "Istanbul, Turkey",
      role: "Club President & Team Leader",
      description: "As the president of the BAU Blockchain Club, I led my team members to attend every side event during Devconnect Week, giving them the opportunity to network with global industry leaders and immerse themselves in the blockchain ecosystem.",
      tags: ["devconnect", "blockchain", "networking", "leadership"],
      emoji: "🌐",
      image: "/images/experiences/IMG_4748.jpg"
    },
    {
      id: 3,
      title: "Avalanche Summit",
      date: "2023",
      location: "Barcelona, Spain",
      role: "H.E.R. DAO Türkiye Representative",
      description: "As H.E.R. DAO Türkiye, we provided scholarships to three women developers in the industry, enabling them to attend the Avalanche Summit in Barcelona. This opportunity helped them and us network, learn, and grow.",
      tags: ["avalanche", "blockchain", "women in tech", "scholarships"],
      emoji: "🏔️",
      image: "/images/experiences/avax-es.jpg"
    },
    {
      id: 4,
      title: "HER DAO Türkiye x Devconnect x Metis L2",
      date: "2023",
      location: "Istanbul, Turkey",
      role: "Co-Organizer & Host",
      description: "During Devconnect Week, I co-organized and hosted a workshop and networking event in collaboration with Metis L2 under H.E.R. DAO Türkiye. This event aimed to empower women in Web3 by offering technical insights and fostering community building in the Ethereum ecosystem.",
      tags: ["her dao", "devconnect", "metis l2", "women in web3", "workshop"],
      emoji: "🤝",
      image: "/images/experiences/herdao-devconnect.jpg"
    },
    {
      id: 5,
      title: "ETHGlobal London",
      date: "2023",
      location: "London, UK",
      role: "Participant & Collaborator",
      description: "At ETHGlobal London, I had the opportunity to collaborate with developers from all over the world. We built a project in under 36 hours, exploring zk-based authentication. The energy, mentorship, and diversity of ideas made this event unforgettable.",
      tags: ["hackathon", "london", "ethglobal", "zk", "innovation"],
      emoji: "🏙️",
      image: "/images/experiences/london.jpg"
    },
    {
      id: 6,
      title: "ETHDenver 2025",
      date: "2025",
      location: "Denver, USA",
      role: "Moderator & Community Builder",
      description: "At ETHDenver, I attended as a moderator and community builder. I mentored multiple teams and engaged with Ethereum's core developer community, exploring topics from Layer 2 scalability to decentralized identity.",
      tags: ["ethereum", "l2", "moderator", "denver", "web3"],
      emoji: "⛰️",
      image: "/images/experiences/denver.jpg"
    },
    {
      id: 7,
      title: "ETHGlobal Paris",
      date: "2023",
      location: "Paris, France",
      role: "Team Manager & Mentor",
      description: "ETHGlobal Paris was where I pushed creative boundaries. I managed three different hackathon teams and mentored first-time developers, making sure everyone had the support they needed to thrive.",
      tags: ["paris", "mentorship", "ethglobal", "hackathon", "web3"],
      emoji: "🎨",
      image: "/images/experiences/ethglobalparis.jpg"
    },
    {
      id: 8,
      title: "ETHGlobal Istanbul",
      date: "2023",
      location: "Istanbul, Turkey",
      role: "Club Leader & Mentor",
      description: "I led BAU Blockchain Club's attendance at ETHGlobal Istanbul, helping university students from different departments dive into Web3. This event was a major milestone in community-driven learning and project building.",
      tags: ["istanbul", "community", "blockchain education", "university", "hackathon"],
      emoji: "🌉",
      image: "/images/experiences/hackathon-istanbul.jpg"
    }
    ,
    {
      id: 9,
      title: "Breakpoint: Solana Hacker House & Conference",
      date: "2023",
      location: "Lisbon, Portugal",
      role: "Sponsored Attendee",
      description: "Sponsored by the Solana Foundation, I attended Breakpoint and the Solana Hacker House, engaging deeply with the developer ecosystem, exploring new tooling, and building alongside innovative teams.",
      tags: ["solana", "breakpoint", "hacker house", "conference"],
      emoji: "⚡",
      image: "/images/experiences/solana-breakpoint.jpg"
    }
  ]

  const hackathons = [
    {
      id: 1,
      title: "UpSchool Hackathon",
      date: "2023",
      location: "Online",
      role: "Winner",
      description: "Won first place with SolLearn - a learn-to-earn dApp on Solana with NFT certifications.",
      tags: [],
      emoji: "🏆",
      links: {
        github: "https://github.com/goksualc/sollearn",
        youtube: "https://youtube.com/watch?v=example"
      }
    },
    {
      id: 2,
      title: "ETHGlobal Istanbul",
      date: "2023",
      location: "Istanbul, Turkey",
      role: "Finalist",
      description: "Built Wiser - an on-chain crypto betting platform with VRF and decentralized governance. We attended 3 different teams and onboarded these teams to web3 first time.",
      tags: [],
      emoji: "🎲",
      image: "/images/experiences/hackathon-istanbul.jpg"
    },
    {
      id: 3,
      title: "ETHOxford",
      date: "2023",
      location: "Oxford, UK",
      role: "Team Manager & Researcher",
      description: "I attended ETHOxford with my Turkish blockchain team of seven people, where we connected with the local blockchain club. During the hackathon, I took on a team management and research role, ensuring smooth collaboration and innovation throughout the event.",
      tags: [],
      emoji: "🎓",
      image: "/images/experiences/ethoxford.jpg"
    },
    {
      id: 4,
      title: "Hacker House Paris",
      date: "2023",
      location: "Paris, France",
      role: "Participant",
      description: "Starknet sponsored my ETHGlobal Paris experience, where I stayed at a Hacker House and collaborated with a friend to build a ChatGPT plugin, which we later presented to the jury.",
      tags: [],
      emoji: "🗼",
      image: "/images/experiences/parisstarknet.png"
    }
  ]

  const speeches = [
    {
      id: 1,
      title: "Hacker House Istanbul",
      event: "Solana Hacker House",
      date: "2023",
      location: "Istanbul, Turkey",
      description: "I also participated in Hacker House Istanbul and was selected as the first Turkish Solana Ambassador. Additionally, I worked for the Solana Foundation, contributing to the development of the ambassador program.",
      tags: [],
      emoji: "🏠",
      image: "/images/experiences/hackerhouse.jpg"
    },
    {
      id: 2,
      title: "President of the Club",
      event: "University Blockchain Club",
      date: "2023",
      location: "Istanbul, Turkey",
      description: "I was the president of my university's Blockchain Club, becoming one of the first female presidents. I led numerous students and industry newcomers, organizing events, workshops, and onboarding many into the blockchain space.",
      tags: [],
      emoji: "👑",
      image: "/images/experiences/club3.jpg"
    },
    {
      id: 3,
      title: "Solana Crossroads",
      event: "Solana Foundation Event",
      date: "2023",
      location: "Istanbul, Turkey",
      description: "I worked with the Solana Foundation to gather students from across Turkey for the Solana Crossroads event, covering their transportation and accommodation to ensure they could fully experience and engage with the Solana ecosystem firsthand.",
      tags: [],
      emoji: "🛣️",
      image: "/images/experiences/crossroads.jpg"
    },
    {
      id: 4,
      title: "Token and Talks",
      event: "Token and Talks Program",
      date: "2023",
      location: "Online",
      description: "I gave a talk as a guest speaker on the Token and Talks program, where I shared my experiences with the Solana ecosystem, including my involvement in hackathons, ambassador programs, and community initiatives.",
      tags: [],
      emoji: "🎙️",
      image: "/images/experiences/tokenandtalks.jpg"
    }
  ]

  const workExperience = [
    {
      id: 1,
      title: "Co-Founder",
      company: "H.E.R. DAO Türkiye",
      role: "Co-Founder",
      date: "Feb 2023 – Present",
      location: "Remote",
      description: "Launched developer onboarding series for women in Web3. Built a dev community; partnered with SheFi for IRL events. Produced beginner-friendly blockchain content.",
      tags: ["web3", "community", "education", "dao"],
      emoji: "🌱",
      website: "https://www.her-dao.xyz/"
    },
    {
      id: 2,
      title: "Blockchain Researcher",
      company: "TÜBİTAK BİLGEM",
      role: "Blockchain Researcher",
      date: "Jan 2024 – Jun 2024",
      location: "Gebze, Türkiye",
      description: "Worked on blockchain and cryptography R&D. Contributed to national CBDC system design. Collaborated across public sector tech teams.",
      tags: ["research", "cryptography", "cbdc", "blockchain"],
      emoji: "🔬",
      website: "https://bilgem.tubitak.gov.tr"
    },
    {
      id: 3,
      title: "DevRel Advocate",
      company: "MetisL2",
      role: "DevRel Advocate",
      date: "Jan 2024 – Mar 2024",
      location: "Remote",
      description: "Promoted L2 adoption through educational outreach.",
      tags: ["devrel", "l2", "education", "blockchain"],
      emoji: "🚀",
      website: "https://www.metis.io/"
    },
    {
      id: 4,
      title: "University Relations Manager",
      company: "Solana Foundation",
      role: "University Relations Manager",
      date: "Feb 2023 – Jul 2023",
      location: "Remote",
      description: "Onboarded students into the Solana ecosystem. Built university dev communities through workshops.",
      tags: ["solana", "university", "community", "education"],
      emoji: "🎓",
      website: "https://solana.org/"
    },
    {
      id: 5,
      title: "Research Assistant",
      company: "BlockchainIST Center",
      role: "Research Assistant",
      date: "Feb 2022 – Mar 2023",
      location: "Istanbul",
      description: "Supported academic blockchain research and technical reports.",
      tags: ["research", "academic", "blockchain", "technical"],
      emoji: "📚",
      website: "https://blockchainist.org/"
    }
  ]

  const workshops = [
    {
      id: 1,
      title: "Solana NFT Workshop",
      event: "Solana Hacker House Istanbul",
      date: "2023",
      location: "Istanbul, Turkey",
      description: "We also conducted a workshop on NFTs with my teammate, where I covered the software development part and taught participants how to build an NFT marketplace on Solana.",
      tags: ["solana", "nft", "workshop", "teaching"],
      emoji: "🎨",
      images: ["/images/experiences/nft-workshop.jpg"]
    },
    {
      id: 2,
      title: "X Spaces",
      event: "Twitter/X Community Sessions",
      date: "2023 - 2024",
      location: "Online",
      description: "I've hosted and spoken in various X (Twitter) Spaces, sharing insights on technology, innovation, crypto, blockchain, finance, and education. These sessions helped me connect with diverse communities, spark meaningful discussions, and contribute to knowledge sharing in the Web3 space.",
      tags: ["x-spaces", "community", "web3", "education"],
      emoji: "💬",
      images: ["/images/experiences/x-space.jpg", "/images/experiences/space-x.jpg"]
    },
    {
      id: 3,
      title: "University Workshops",
      event: "Galatasaray University",
      date: "2023",
      location: "Istanbul, Turkey",
      description: "I led and onboarded many into the blockchain space, including hosting a workshop at Galatasaray University, one of Turkey's top universities, to introduce students to blockchain technology.",
      tags: ["blockchain", "education", "university", "workshop"],
      emoji: "🎓",
      images: ["/images/experiences/gsu-workshop.jpg"]
    },
    {
      id: 4,
      title: "YGA Women's Blockchain Workshop",
      event: "YGA Headquarters",
      date: "2023",
      location: "Istanbul, Turkey",
      description: "I hosted a hands-on blockchain workshop for women at YGA, focusing on empowering participants with practical knowledge of decentralized technologies and encouraging more women to step into the web3 ecosystem.",
      tags: ["blockchain", "women in tech", "live workshop", "education"],
      emoji: "💪",
      images: ["/images/experiences/turkish-workshop.jpg"]
    },
    
  ]

  // Combine all experiences and shuffle them randomly
  const allExperiences: AllExperience[] = [
    // Conferences
    ...conferences.map(conf => ({
      ...conf,
      category: 'conference',
      categoryEmoji: '🌍'
    })),
    // Hackathons
    ...hackathons.map(hack => ({
      ...hack,
      category: 'hackathon',
      categoryEmoji: '🏆'
    })),
    // Speeches
    ...speeches.map(speech => ({
      ...speech,
      category: 'speech',
      categoryEmoji: '🎤'
    })),
    // Work Experience
    ...workExperience.map(work => ({
      ...work,
      category: 'work',
      categoryEmoji: '💼'
    })),
    // Workshops
    ...workshops.map(workshop => ({
      ...workshop,
      category: 'workshop',
      categoryEmoji: '🎨'
    }))
  ]

  // Fisher-Yates shuffle algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    try {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    } catch (error) {
      console.error('Error shuffling array:', error)
      return array // Return original array if shuffle fails
    }
  }

  const shuffledExperiences = useMemo(() => {
    try {
      return shuffleArray(allExperiences)
    } catch (error) {
      console.error('Error creating shuffled experiences:', error)
      return allExperiences // Return original array if shuffle fails
    }
  }, [allExperiences])

  useEffect(() => {
    // Add fade-in animation for experience cards
    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, { threshold: 0.1 })

      // Small delay to ensure DOM is updated
      const timeoutId = setTimeout(() => {
        try {
          const cards = document.querySelectorAll('.experience-card')
          cards.forEach(card => {
            observer.observe(card)
          })
        } catch (error) {
          console.error('Error observing cards:', error)
        }
      }, 200)

      return () => {
        clearTimeout(timeoutId)
        observer.disconnect()
      }
    } catch (error) {
      console.error('Error setting up intersection observer:', error)
    }
  }, [])

  // Handle tab switching - make cards visible immediately when tab changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        const cards = document.querySelectorAll('.experience-card')
        cards.forEach(card => {
          card.classList.add('visible')
        })
      } catch (error) {
        console.error('Error making cards visible:', error)
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [activeTab])

  const renderExperienceCards = (items: Array<ConferenceExperience | HackathonExperience | SpeechExperience | WorkExperience | WorkshopExperience>) => {
    return items.map((item, index) => (
      <div 
        key={item.id} 
        className={`experience-card ${item.image ? 'experience-card-with-image' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="experience-header">
          <div className="experience-emoji">{item.emoji}</div>
          <div className="experience-title-section">
            <h3 className="experience-title">{item.title}</h3>
            {item.company && <p className="experience-company">{item.company}</p>}
            {item.event && <p className="experience-event">{item.event}</p>}
          </div>
        </div>
        
        <div className="experience-meta">
          <span className="experience-date">{item.date}</span>
          <span className="experience-location">{item.location}</span>
          {item.role && <span className="experience-role">{item.role}</span>}
        </div>
        
        {item.image ? (
          <div className="experience-content-with-image">
            <div className="experience-text-content">
              <p className="experience-description">{item.description}</p>
              <div className="experience-tags">
                {item.tags.map((tag: string) => (
                  <span key={tag} className="experience-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="experience-image-container">
              <img 
                src={item.image}
                alt={`${item.title} Photo`}
                className="experience-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="experience-image-placeholder">
                <span className="experience-placeholder-emoji">{item.emoji}</span>
                <p className="experience-placeholder-text">{item.title} Photo</p>
              </div>
              <div className="experience-image-sparkle">✨</div>
            </div>
          </div>
        ) : (
          <>
            <p className="experience-description">{item.description}</p>
            <div className="experience-tags">
              {item.tags.map((tag: string) => (
                <span key={tag} className="experience-tag">{tag}</span>
              ))}
            </div>
          </>
        )}
      </div>
    ))
  }

  const renderAllExperienceCards = (items: Array<AllExperience>) => {
    return items.map((item, index) => (
      <div 
        key={`${item.category}-${item.id}`} 
        className="experience-card all-experience-card"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="experience-card-header">
          <div className="experience-card-emoji">{item.emoji}</div>
          <div className="experience-card-title-section">
            <h3 className="experience-card-title">{item.title}</h3>
            <div className="experience-card-category">
              <span className="category-emoji">{item.categoryEmoji}</span>
              <span className="category-text">{item.category}</span>
            </div>
          </div>
          <div className="experience-card-sparkle">✨</div>
        </div>
        
        <div className="experience-card-meta">
          {item.company && <span className="experience-card-company">{item.company}</span>}
          {item.event && <span className="experience-card-event">{item.event}</span>}
          {item.role && <span className="experience-card-role">{item.role}</span>}
          <span className="experience-card-date">{item.date}</span>
          <span className="experience-card-location">{item.location}</span>
        </div>
        
        <p className="experience-card-description">{item.description}</p>
        
        <div className="experience-card-tags">
          {item.tags.map((tag: string) => (
            <span key={tag} className="experience-card-tag">{tag}</span>
          ))}
        </div>
        
        {item.website && (
          <div className="experience-card-website">
            <a 
              href={item.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="experience-card-website-link"
            >
              <span className="experience-card-website-icon">🌐</span>
              Visit Website
            </a>
          </div>
        )}
      </div>
    ))
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
      <div className="golden-star star-9">★</div>
      <div className="golden-star star-10">★</div>
      
      {/* Yellow Hearts */}
      <div className="yellow-heart heart-1">♥</div>
      <div className="yellow-heart heart-2">♥</div>
      <div className="yellow-heart heart-3">♥</div>
      <div className="yellow-heart heart-4">♥</div>
      <div className="yellow-heart heart-5">♥</div>
      <div className="yellow-heart heart-6">♥</div>
      <div className="yellow-heart heart-7">♥</div>
      <div className="yellow-heart heart-8">♥</div>
      
      {/* Sparkles */}
      <div className="sparkle sparkle-1">✨</div>
      <div className="sparkle sparkle-2">✨</div>
      <div className="sparkle sparkle-3">✨</div>
      <div className="sparkle sparkle-4">✨</div>

      {/* Experiences Hero */}
      <section className="experiences-hero">
        <RevealOnScroll as="div" className="experiences-hero-content">
          <h1 className="experiences-title">experiences ✨</h1>
          <p className="experiences-subtitle">
            My journey through conferences, hackathons, speeches, and work experiences in the blockchain and Web3 space.
          </p>
        </RevealOnScroll>
      </section>

      {/* Tab Navigation */}
      <section className="experiences-tabs-section">
        <div className="experiences-tabs">
          <button 
            className={`experience-tab ${activeTab === 'all-experiences' ? 'active' : ''}`}
            onClick={() => setActiveTab('all-experiences')}
          >
            🌟 All Experiences
          </button>
          <button 
            className={`experience-tab ${activeTab === 'conferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('conferences')}
          >
            🌍 Conferences
          </button>
          <button 
            className={`experience-tab ${activeTab === 'hackathons' ? 'active' : ''}`}
            onClick={() => setActiveTab('hackathons')}
          >
            🏆 Hackathons
          </button>
          <button 
            className={`experience-tab ${activeTab === 'speeches' ? 'active' : ''}`}
            onClick={() => setActiveTab('speeches')}
          >
            🎤 Speeches
          </button>
          <button 
            className={`experience-tab ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            💼 Work Experience
          </button>
          <button 
            className={`experience-tab ${activeTab === 'workshops' ? 'active' : ''}`}
            onClick={() => setActiveTab('workshops')}
          >
            🎨 Live Workshops
          </button>
        </div>
      </section>

      {/* Experiences Content */}
      <section className="experiences-content-section">
        {activeTab === 'workshops' ? (
          <div className="workshops-section">
            {workshops.map((workshop, index) => (
              <div key={workshop.id} className="workshop-hero" style={{ marginBottom: index < workshops.length - 1 ? '3rem' : '0' }}>
                <h2 className="workshop-title">{workshop.title}</h2>
                <div className="workshop-content">
                  {/* Multiple images layout for workshops */}
                  <div className="workshop-images-grid">
                    {workshop.images.map((imageSrc, imgIndex) => (
                      <div key={imgIndex} className="workshop-image-container">
                        <img 
                          src={imageSrc}
                          alt={`${workshop.title} Image ${imgIndex + 1}`}
                          className="workshop-image"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextSibling) {
                              nextSibling.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="workshop-image-placeholder">
                          <span className="workshop-placeholder-emoji">{workshop.emoji}</span>
                          <p className="workshop-placeholder-text">{workshop.title} Photo {imgIndex + 1}</p>
                        </div>
                        <div className={`workshop-image-sparkle sparkle-${imgIndex + 1}`}>✨</div>
                      </div>
                    ))}
                  </div>
                  <div className="workshop-text-content">
                    <p className="workshop-description">
                      {workshop.description}
                    </p>
                    <div className="workshop-event-tag">
                      📍 {workshop.event}
                    </div>
                    <div className="workshop-tags">
                      {workshop.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="workshop-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* BAU Blockchain Club Events Section */}
            <div className="bau-club-section">
              <h2 className="bau-club-title">BAU Blockchain Club Events</h2>
              <div className="bau-club-content">
                <p className="bau-club-description">
                  As the president of the BAU Blockchain Club, I onboarded many Web2 developers into Web3 and organized numerous technical and non-technical events and workshops—all of which were at full capacity during my tenure, fostering a strong and engaged blockchain community.
                </p>
                <div className="bau-club-images">
                  <div className="bau-club-image-container">
                    <img 
                      src="/images/experiences/club1.png"
                      alt="BAU Blockchain Club Event 1"
                      className="bau-club-image"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="bau-club-image-placeholder">
                      <span className="bau-club-placeholder-emoji">🏛️</span>
                      <p className="bau-club-placeholder-text">BAU Blockchain Club Event 1</p>
                    </div>
                    <div className="bau-club-image-sparkle">✨</div>
                  </div>
                  <div className="bau-club-image-container">
                    <img 
                      src="/images/experiences/club2.png"
                      alt="BAU Blockchain Club Event 2"
                      className="bau-club-image"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="bau-club-image-placeholder">
                      <span className="bau-club-placeholder-emoji">🏛️</span>
                      <p className="bau-club-placeholder-text">BAU Blockchain Club Event 2</p>
                    </div>
                    <div className="bau-club-image-sparkle">✨</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeTab === 'work' ? (
          <div className="work-experience-section">
            <div className="work-experience-header">
              <h2 className="work-experience-title">
                <span className="title-sparkle">✨</span>
                work experience
                <span className="title-sparkle">✨</span>
              </h2>
              <p className="work-experience-subtitle">
                My work in blockchain, research, and community building
              </p>
            </div>
            <div className="work-experience-grid">
              {workExperience.map((job, index) => (
                <div 
                  key={job.id} 
                  className="work-experience-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="work-card-header">
                    <div className="work-card-emoji">{job.emoji}</div>
                    <div className="work-card-title-section">
                      <h3 className="work-card-title">{job.title}</h3>
                      <p className="work-card-company">{job.company}</p>
                    </div>
                    <div className="work-card-logo-container">
                      <img 
                        src={`/images/logos/${getLogoFilename(job.company)}.png`}
                        alt={`${job.company} Logo`}
                        className="work-card-company-logo"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="work-card-sparkle">✨</div>
                  </div>
                  
                  <div className="work-card-meta">
                    <span className="work-card-role">{job.role}</span>
                    <span className="work-card-date">{job.date}</span>
                    <span className="work-card-location">{job.location}</span>
                  </div>
                  
                  <p className="work-card-description">{job.description}</p>
                  
                  <div className="work-card-tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="work-card-tag">{tag}</span>
                    ))}
                  </div>
                  
                  {job.website && (
                    <div className="work-card-website">
                      <a 
                        href={job.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="work-card-website-link"
                      >
                        <span className="work-card-website-icon">🌐</span>
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === 'all-experiences' ? (
          <div className="all-experiences-section">
            <div className="all-experiences-header">
              <h2 className="all-experiences-title">
                <span className="title-sparkle">✨</span>
                all experiences
                <span className="title-sparkle">✨</span>
              </h2>
              <p className="all-experiences-subtitle">
                A random mix of all my experiences across conferences, hackathons, speeches, work, and workshops
              </p>
            </div>
          <div className="all-experiences-grid">
            <RevealList itemAs="div">
              {renderAllExperienceCards(shuffledExperiences)}
            </RevealList>
          </div>
          </div>
        ) : (
          <div className="experiences-grid">
            <RevealList itemAs="div">
              {activeTab === 'conferences' && renderExperienceCards(conferences)}
              {activeTab === 'hackathons' && renderExperienceCards(hackathons)}
              {activeTab === 'speeches' && renderExperienceCards(speeches)}
            </RevealList>
          </div>
        )}
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