'use client'
import { useEffect, useRef, useState } from 'react'
import Navigation from '../components/Navigation'
import TweetEmbed from '../components/TweetEmbed'

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = heroVideoRef.current
    if (!v) return
    v.muted = true
    const tryPlay = () => v.play().catch(() => {})
    tryPlay()
    document.addEventListener('touchstart', tryPlay, { once: true })
    return () => document.removeEventListener('touchstart', tryPlay)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const projects = [
    {
      num: '01',
      title: 'Testnet Wallet Agent',
      year: '2025',
      desc: 'MCP-powered AI wallet agent for EVM testnets. Enables natural language interaction with blockchain infrastructure — request funds, check balances, and deploy contracts via conversational prompts.',
      tags: ['TypeScript', 'MCP', 'AI Agents', 'EVM'],
      href: 'https://github.com/goksualc/testnet-wallet-agent',
    },
    {
      num: '02',
      title: 'Wallet SMS',
      year: '2024',
      desc: 'Check and monitor any wallet balance via SMS — send a text, get on-chain data back. Built for low-friction Web3 access without apps or browser extensions.',
      tags: ['TypeScript', 'SMS', 'Web3', 'Twilio'],
      href: 'https://github.com/goksualc/Wallet-SMS',
    },
    {
      num: '03',
      title: 'Ovia',
      year: '2024',
      desc: 'Conference companion iOS app for crypto travelers. Features event discovery, side events calendar, city travel guides, friends map, and community networking. Built for the global Web3 conference circuit.',
      tags: ['SwiftUI', 'Firebase', 'iOS', 'UX'],
      href: 'https://github.com/goksualc',
      demo: '/images/projects/ovia-demo.MOV',
    },
    {
      num: '04',
      title: 'FinWise',
      year: '2024',
      desc: 'Capstone project — personal finance and investment guidance iOS app. Adaptive UI based on user risk profiles, in-app educational content, and beginner-friendly investment recommendations.',
      tags: ['Swift', 'iOS', 'Finance', 'UX'],
      href: 'https://github.com/goksualc/Finwise',
    },
    {
      num: '05',
      title: 'SolLearn',
      year: '2023',
      desc: 'Award-winning learn-to-earn dApp on Solana. Decentralized education with NFT certifications for completed courses, merging incentivized learning and the blockchain economy. Won UpSchool Hackathon.',
      tags: ['Solana', 'NFT', 'Education', 'Rust'],
      href: 'https://github.com/goksualc/SolLearn',
    },
    {
      num: '06',
      title: 'Solana NFT Marketplace',
      year: '2023',
      desc: 'Full NFT marketplace workshop built on Solana — covering minting, listing, and smart contract fundamentals. Used as official teaching material for Solana university programs in Turkey.',
      tags: ['Solana', 'NFT', 'Rust', 'Workshop'],
      href: 'https://github.com/goksualc/Solana-NFT-marketplace',
    },
    {
      num: '07',
      title: 'Cairo / StarkNet Education',
      year: '2023',
      desc: 'Open-source Cairo 1.0 tutorials and a Turkish introduction to StarkNet — among the first Cairo education resources published in Turkish, used across university blockchain clubs.',
      tags: ['Cairo', 'StarkNet', 'Education', 'ZK'],
      href: 'https://github.com/goksualc/Cairo_Giris',
    },
    {
      num: '08',
      title: 'Solana Wallet Watcher',
      year: '2023',
      desc: 'Real-time wallet monitoring for Solana — tracks on-chain activity and sends alerts for incoming transactions and balance changes across multiple wallets.',
      tags: ['Solana', 'TypeScript', 'Web3', 'Monitoring'],
      href: 'https://github.com/goksualc',
    },
    {
      num: '09',
      title: 'Avalanche Mainnet Watcher',
      year: '2023',
      desc: 'Monitoring tool for Avalanche mainnet — tracks wallet activity and contract events with configurable notification thresholds and real-time alerting.',
      tags: ['Avalanche', 'TypeScript', 'Web3', 'Monitoring'],
      href: 'https://github.com/goksualc',
    },
    {
      num: '10',
      title: 'Wiser',
      year: '2023',
      desc: 'Fully on-chain community-driven prediction platform built at ETHGlobal Istanbul. Fairness enforced by VRF, shared bankrolls, and decentralized governance. Finalist at ETHGlobal.',
      tags: ['Ethereum', 'VRF', 'Governance', 'Solidity'],
      href: 'https://ethglobal.com/showcase/wiser-e9brh',
    },
    {
      num: '11',
      title: 'CharmLSP',
      year: '2023',
      desc: 'Decentralized Layer Security Protocol built at ETHGlobal Istanbul. Trustless messaging layer using cryptographic primitives, on-chain verification, and privacy-preserving mechanisms for Web3 communication.',
      tags: ['Security', 'Cryptography', 'Privacy', 'Ethereum'],
      href: 'https://app.buidlbox.io/projects/charmlsp',
    },
    {
      num: '12',
      title: 'Naive Bayes Email Classifier',
      year: '2023',
      desc: 'From-scratch Naive Bayes classifier for spam/ham email detection — built without ML libraries to demonstrate probabilistic model fundamentals and Bayesian inference.',
      tags: ['Python', 'ML', 'NLP', 'Classification'],
      href: 'https://github.com/goksualc/naive-bayes-email-classifier',
    },
    {
      num: '13',
      title: 'Distributed Word Count',
      year: '2023',
      desc: 'MapReduce-style distributed word count system across multiple worker nodes — demonstrates parallel processing and distributed systems fundamentals.',
      tags: ['Distributed Systems', 'Go', 'MapReduce'],
      href: 'https://github.com/goksualc/distributed_word_count_system',
    },
    {
      num: '14',
      title: 'Data Science Projects',
      year: '2023',
      desc: 'Collection of data science experiments and analyses — covering statistical modeling, data visualization, and ML workflows applied to real-world datasets.',
      tags: ['Python', 'Data Science', 'ML', 'Pandas'],
      href: 'https://github.com/goksualc/data-science',
    },
    {
      num: '15',
      title: 'Cryptography & Hashing',
      year: '2023',
      desc: 'Implementation of core cryptographic primitives from first principles — hash functions, symmetric/asymmetric encryption, and digital signatures without relying on external libraries.',
      tags: ['Python', 'Cryptography', 'Security'],
      href: 'https://github.com/goksualc/Cryptography-and-Hashing',
    },
    {
      num: '16',
      title: 'Developer Tutorials',
      year: '2022–2023',
      desc: 'Open-source Web3 and blockchain developer tutorial series — covering Solana, Ethereum, NFTs, smart contracts, and introductions to core concepts for new developers.',
      tags: ['Education', 'Web3', 'Solana', 'Ethereum'],
      href: 'https://github.com/goksualc',
    },
  ]

  const experiences = [
    {
      period: 'Sep 2025 – Present',
      company: 'The City College of New York',
      role: 'Fluid MPC — Research Contributor',
      desc: 'Working on Fluid Multiparty Computation (Fluid MPC) with a focus on dynamic committees, scalability, and robustness in distributed cryptographic systems. Implementing core protocol components in Rust.',
      tags: ['Cryptography', 'MPC', 'Rust', 'Distributed Systems'],
      logo: '/images/logos/ccny.svg',
    },
    {
      period: 'Feb 2023 – Present',
      company: 'H.E.R. DAO Türkiye',
      role: 'Co-Founder',
      desc: 'Launched developer onboarding series for women in Web3. Built an active developer community; partnered with SheFi for IRL events. Produced beginner-friendly blockchain education content. One of the first female co-founders in Turkey\'s Web3 ecosystem.',
      tags: ['Web3', 'Community', 'Education', 'DAO'],
      logo: '/images/logos/herdao.png',
    },
    {
      period: 'Jan 2024 – Jun 2024',
      company: 'TÜBİTAK BİLGEM',
      role: 'Blockchain Researcher',
      desc: 'Worked on blockchain and cryptography R&D at Turkey\'s leading scientific research institution. Contributed to national CBDC system design and architecture. Collaborated across public sector technology teams on distributed ledger infrastructure.',
      tags: ['Research', 'Cryptography', 'CBDC', 'R&D'],
      logo: '/images/logos/tubitak.png',
    },
    {
      period: 'Jan 2024 – Mar 2024',
      company: 'MetisL2',
      role: 'DevRel Advocate',
      desc: 'Promoted Layer 2 adoption through technical education and developer outreach. Created content bridging developers from Web2 to Ethereum L2 infrastructure. Represented Metis at industry events and hackathons.',
      tags: ['DevRel', 'L2', 'Education', 'Ethereum'],
      logo: '/images/logos/metis.png',
    },
    {
      period: 'Feb 2023 – Jul 2023',
      company: 'Solana Foundation',
      role: 'University Relations Manager',
      desc: 'First Turkish Solana University Ambassador. Onboarded students across Turkey into the Solana ecosystem through workshops and hackathons. Built university developer communities and organized Solana Crossroads — covering transportation and accommodation for students across the country.',
      tags: ['Solana', 'University', 'Community', 'Workshops'],
      logo: '/images/logos/solana.png',
    },
    {
      period: 'Feb 2022 – Mar 2023',
      company: 'BlockchainIST Center',
      role: 'Research Assistant',
      desc: 'Supported academic blockchain research and contributed to technical reports on DLT infrastructure. Assisted in academic publishing and blockchain education initiatives.',
      tags: ['Research', 'Academic', 'Blockchain'],
      logo: '/images/logos/blockchainIST.png',
    },
  ]

  const [activeCategory, setActiveCategory] = useState<'all' | 'conferences' | 'hackathons' | 'workshops' | 'speaking'>('all')

  const events = [
    // ── 2026 ──────────────────────────────────────
    {
      year: '2026',
      name: 'ETHGlobal New York',
      location: 'New York, USA',
      role: 'Mentor & Volunteer',
      photo: '/images/experiences/ethnewyork.JPG',
      desc: 'Served as both mentor and volunteer at ETHGlobal New York — guided hacker teams throughout the event, provided hands-on technical support, and helped run operations at one of the largest Ethereum hackathons.',
      featured: true,
      category: 'conferences' as const,
    },
    {
      year: '2026',
      name: 'Consensus Miami',
      location: 'Miami, USA',
      role: 'Attendee',
      photo: '/images/experiences/consensus.jpg',
      desc: 'Attended Consensus Miami, one of the largest blockchain and Web3 gatherings in the world with over 15,000 participants — connecting with builders, founders, and researchers across the ecosystem.',
      category: 'conferences' as const,
    },
    {
      year: '2026',
      name: 'ETHConf 2026',
      location: 'USA',
      role: 'Volunteer',
      photo: '/images/experiences/ethconf.JPG',
      desc: 'Volunteered at ETHConf — the first-ever ETH conference. Assisted with speaker coordination and ensured a smooth experience for attendees and speakers throughout the event.',
      featured: true,
      category: 'conferences' as const,
    },
    // ── 2025 ──────────────────────────────────────
    {
      year: '2025',
      name: 'ETHDenver',
      location: 'Denver, USA',
      role: 'Attendee',
      photo: '/images/experiences/denver.jpg',
      desc: 'Attended ETHDenver, one of the largest Ethereum ecosystem events — connecting with builders, researchers, and founders across the decentralized web.',
      category: 'conferences' as const,
    },
    // ── 2023–2024 ─────────────────────────────────
    {
      year: '2023–2024',
      name: 'X Spaces',
      location: 'Online',
      role: 'Host & Speaker',
      photo: '/images/experiences/x-space.jpg',
      desc: 'Hosted and participated in multiple X Spaces covering Web3 development, Solana ecosystem updates, and community building for the next wave of blockchain developers.',
      category: 'speaking' as const,
    },
    // ── 2023 ──────────────────────────────────────
    {
      year: '2023',
      name: 'Breakpoint: Solana',
      location: 'Lisbon, Portugal',
      role: 'Sponsored Attendee',
      photo: '/images/experiences/solana-breakpoint.jpg',
      desc: 'Sponsored by the Solana Foundation for Breakpoint and the Solana Hacker House. Built alongside innovative Solana teams.',
      category: 'conferences' as const,
    },
    {
      year: '2023',
      name: 'Devconnect Week',
      location: 'Istanbul, Turkey',
      role: 'Club President & Organizer',
      photo: '/images/experiences/IMG_4748.jpg',
      desc: 'As club president, led my team to every side event during Devconnect Week, giving students direct access to global industry leaders.',
      category: 'conferences' as const,
    },
    {
      year: '2023',
      name: 'ETHGlobal Istanbul',
      location: 'Istanbul, Turkey',
      role: 'Club Leader & Mentor',
      photo: '/images/experiences/hackathon-istanbul.jpg',
      desc: 'Led BAU Blockchain Club\'s attendance. Managed three hackathon teams simultaneously and mentored first-time Web3 builders.',
      category: 'hackathons' as const,
    },
    {
      year: '2023',
      name: 'H.E.R. DAO × Devconnect × Metis',
      location: 'Istanbul, Turkey',
      role: 'Co-Organizer & Host',
      photo: '/images/experiences/herdao-devconnect.jpg',
      desc: 'Co-organized and hosted a workshop and networking event empowering women in Web3 during Devconnect Week.',
      category: 'speaking' as const,
    },
    {
      year: '2023',
      name: 'Solana Hacker House Istanbul',
      location: 'Istanbul, Turkey',
      role: 'Speaker & NFT Workshop Host',
      photo: '/images/experiences/hackerhouse-istanbul-panel.jpg',
      desc: 'Selected as the first Turkish Solana University Ambassador. Led an NFT workshop covering marketplace development on Solana.',
      category: 'speaking' as const,
    },
    {
      year: '2023',
      name: 'Avalanche Summit',
      location: 'Barcelona, Spain',
      role: 'H.E.R. DAO Representative',
      photo: '/images/experiences/avax-es.jpg',
      desc: 'Represented H.E.R. DAO Türkiye and facilitated scholarships for three women developers to attend the summit.',
      category: 'conferences' as const,
    },
    {
      year: '2023',
      name: 'Starknet Summit',
      location: 'Tel Aviv, Israel',
      role: 'Sponsored Attendee',
      photo: '/images/experiences/IMG_6630.jpg',
      desc: 'Attended sponsored by H.E.R. DAO, connecting with women developers and industry leaders in the ZK ecosystem.',
      category: 'conferences' as const,
    },
    {
      year: '2023',
      name: 'ETHGlobal London',
      location: 'London, UK',
      role: 'Participant & Builder',
      photo: '/images/experiences/london.jpg',
      desc: 'Collaborated with global developers to build a zk-based authentication system in under 36 hours.',
      category: 'hackathons' as const,
    },
    {
      year: '2023',
      name: 'ETHGlobal Paris',
      location: 'Paris, France',
      role: 'Team Manager & Mentor',
      photo: '/images/experiences/ethglobalparis.jpg',
      desc: 'Managed three teams, mentored first-time hackathon developers, and built a ChatGPT plugin at the Starknet Hacker House.',
      category: 'hackathons' as const,
    },
    {
      year: '2023',
      name: 'Hacker House Paris',
      location: 'Paris, France',
      role: 'Participant & Builder',
      photo: '/images/experiences/parisstarknet.png',
      desc: 'Participated in the Starknet Hacker House during ETHGlobal Paris week — built and presented a project alongside developers from across the ecosystem.',
      category: 'hackathons' as const,
    },
    {
      year: '2023',
      name: 'ETHOxford',
      location: 'Oxford, UK',
      role: 'Team Manager & Researcher',
      photo: '/images/experiences/ethoxford.jpg',
      desc: 'Attended with a seven-person Turkish blockchain team, took on team management and research roles throughout the hackathon.',
      category: 'hackathons' as const,
    },
    {
      year: '2023',
      name: 'Solana Crossroads',
      location: 'Istanbul, Turkey',
      role: 'Event Organizer',
      photo: '/images/experiences/IMG_8295.jpg',
      desc: 'Organized student attendance for Solana Crossroads — coordinating transportation and accommodation for university students across Turkey to attend the flagship Solana event.',
      category: 'conferences' as const,
    },
    {
      year: '2023',
      name: 'Solana Foundation University Program',
      location: 'Remote / Turkey',
      role: 'University Ambassador',
      photo: '/images/experiences/solanau.jpg',
      desc: 'Served as the first Turkish Solana University Ambassador under the Solana Foundation program, building university-level developer communities and organizing official Solana events across Turkey.',
      category: 'conferences' as const,
    },
    {
      year: '2023',
      name: 'Solana NFT Workshop',
      location: 'Istanbul, Turkey',
      role: 'Co-Instructor',
      photo: '/images/experiences/nft-workshop.jpg',
      desc: 'Co-instructed an NFT marketplace development workshop on Solana, guiding developers through minting, listing, and smart contract fundamentals.',
      category: 'workshops' as const,
    },
    {
      year: '2023',
      name: 'YGA Women\'s Blockchain Workshop',
      location: 'Istanbul, Turkey',
      role: 'Workshop Host',
      photo: '/images/experiences/turkish-workshop.jpg',
      desc: 'Hosted a hands-on blockchain workshop empowering women participants with practical knowledge of decentralized technologies.',
      category: 'workshops' as const,
    },
    {
      year: '2023',
      name: 'Galatasaray University',
      location: 'Istanbul, Turkey',
      role: 'Workshop Instructor',
      photo: '/images/experiences/gsu-workshop.jpg',
      desc: 'Delivered a hands-on blockchain workshop at one of Turkey\'s top universities, introducing students to Web3 development and decentralized systems.',
      category: 'workshops' as const,
    },
    {
      year: '2023',
      name: 'BAU Blockchain Club Events',
      location: 'Istanbul, Turkey',
      role: 'Club President & Organizer',
      photo: '/images/experiences/club3.jpg',
      desc: 'As founding president of BAU Blockchain Club, organized a series of workshops, panels, and networking events — onboarding hundreds of students into Web3.',
      category: 'speaking' as const,
    },
    {
      year: '2023',
      name: 'Token and Talks',
      location: 'Online',
      role: 'Guest Speaker',
      photo: '/images/experiences/tokenandtalks.jpg',
      desc: 'Invited as guest speaker to share experiences from the Solana ecosystem — covering developer relations, university outreach, and building communities in emerging tech.',
      category: 'speaking' as const,
    },
    {
      year: '2023',
      name: 'UpSchool Hackathon',
      location: 'Online',
      role: 'Winner',
      photo: '',
      video: 'X6Fqd6_D3Zg',
      desc: 'Won first place at UpSchool Hackathon with SolLearn, a decentralized learning application built on Solana.',
      category: 'hackathons' as const,
    },
  ]

  const categoryTabs = [
    { key: 'all',         label: 'All' },
    { key: 'conferences', label: 'Conferences' },
    { key: 'hackathons',  label: 'Hackathons' },
    { key: 'workshops',   label: 'Workshops' },
    { key: 'speaking',    label: 'Speaking' },
  ] as const

  const filteredEvents = activeCategory === 'all'
    ? events
    : events.filter(e => e.category === activeCategory)

  const featuredEvents = filteredEvents.filter(e => e.featured)
  const regularEvents  = filteredEvents.filter(e => !e.featured)

  return (
    <>
      <Navigation />

      {/* ── HERO ─────────────────────────────────── */}
      <section id="hero">
        <div className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow reveal">
              <span className="hero-eyebrow-dot" />
              <span className="hero-eyebrow-text">Based in New York City</span>
            </div>

            <h1 className="hero-name reveal reveal-d1">
              Goksu<br />
              <span className="hero-name-italic">Alcinkaya</span>
            </h1>

            <p className="hero-tagline reveal reveal-d2">
              Engineer crafting developer experiences, agentic systems, and
              communities around emerging technologies.
            </p>

            <div className="hero-roles reveal reveal-d3">
              <span className="hero-role-tag">Engineer</span>
              <span className="hero-role-tag">DevRel</span>
              <span className="hero-role-tag">Community Builder</span>
            </div>

            <div className="hero-cta reveal reveal-d4">
              <a href="#work" className="hero-cta-link">
                Projects <span>→</span>
              </a>
              <span className="hero-cta-divider" />
              <a href="#contact" className="hero-cta-link">
                Get in Touch <span>→</span>
              </a>
            </div>
          </div>

          <div className="hero-right reveal reveal-d2">
            <div className="hero-photo-frame">
              <video
                ref={heroVideoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="/videos/gok-web.mp4" type="video/mp4" />
              </video>
              <div className="hero-photo-overlay">
                <div>
                  <div className="hero-photo-name">Goksu Alcinkaya</div>
                  <div className="hero-photo-title">Computer Engineer · New York</div>
                </div>
              </div>
            </div>
            <div className="hero-scroll-hint">
              <div className="hero-scroll-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────── */}
      <section id="about" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-num">01</span>
            <hr className="hr-red" />
            <h2 className="section-title reveal">About</h2>
          </div>
          <div className="about-grid">
            <div className="about-quote reveal">
              I approach engineering with{' '}
              <span className="about-quote-em">intention and curiosity</span>,
              shaping developer experiences, agentic systems, and communities
              that feel human.
            </div>
            <div className="about-body reveal reveal-d2">
              <p className="about-p">
                I&apos;m Goksu Alcinkaya, a Computer Engineer currently pursuing my
                Master&apos;s in Computer Science at Brooklyn College (CUNY) in New York City.
                I hold a Bachelor&apos;s in Computer Engineering from Bahçeşehir University on
                a full scholarship.
              </p>
              <p className="about-p">
                With 4+ years of hands-on experience at the intersection of blockchain,
                AI agents, and developer relations, I&apos;ve built products, communities,
                and educational programs across three continents. My work spans security
                research, decentralized identity, smart contracts, and developer tooling.
              </p>
              <p className="about-p">
                I&apos;m especially passionate about helping developers build confidently in
                emerging ecosystems — whether that&apos;s Web3, AI agents, or whatever comes next.
                I believe the best developer experience is one that makes complexity feel
                intuitive.
              </p>
              <div className="about-details">
                <div>
                  <div className="about-detail-label">Location</div>
                  <div className="about-detail-value">New York City, USA</div>
                </div>
                <div>
                  <div className="about-detail-label">Focus</div>
                  <div className="about-detail-value">AI Agents · DevRel · Web3</div>
                </div>
                <div>
                  <div className="about-detail-label">Education</div>
                  <div className="about-detail-value">M.S. CS, Brooklyn College</div>
                </div>
                <div>
                  <div className="about-detail-label">Skills</div>
                  <div className="about-detail-value">TypeScript · Swift · Rust · Solidity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION & COMMUNITY ─────────────────── */}
      <section id="education" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-num">02</span>
            <hr className="hr-red" />
            <h2 className="section-title reveal">Education & Community</h2>
          </div>
          <div className="edu-grid">
            {/* Education column */}
            <div className="reveal">
              <div className="edu-col-label">Academic</div>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">Aug 2025<br/>Present</div>
                  <div>
                    <div className="timeline-title">Brooklyn College, CUNY</div>
                    <div className="timeline-sub">M.S. Computer Science</div>
                    <div className="timeline-desc">Information Systems track. New York City.</div>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">Aug 2024<br/>May 2025</div>
                  <div>
                    <div className="timeline-title">Bay Atlantic University</div>
                    <div className="timeline-sub">Study Abroad · Full Scholarship</div>
                    <div className="timeline-desc">Information Technology coursework. Washington, D.C.</div>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">Oct 2021<br/>Jun 2025</div>
                  <div>
                    <div className="timeline-title">Bahçeşehir University</div>
                    <div className="timeline-sub">B.S. Computer Engineering · Full Scholarship</div>
                    <div className="timeline-desc">
                      Capstone: FinWise — adaptive personal finance iOS app with risk-profiled investment
                      guidance and in-app education.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community column */}
            <div className="reveal reveal-d2">
              <div className="edu-col-label">Community & Programs</div>
              <div className="community-list">
                <div className="community-item">
                  <span className="community-dot" />
                  <div>
                    <div className="community-title">H.E.R. DAO Türkiye</div>
                    <div className="community-desc">Co-Founder. Building Web3 developer communities for women in Turkey and beyond. Organized workshops, IRL events, and scholarship programs.</div>
                  </div>
                </div>
                <div className="community-item">
                  <span className="community-dot" />
                  <div>
                    <div className="community-title">Solana Global Fellow</div>
                    <div className="community-desc">Selected as the first Turkish Solana University Ambassador. Worked directly with the Solana Foundation to build university developer programs across Turkey.</div>
                  </div>
                </div>
                <div className="community-item">
                  <span className="community-dot" />
                  <div>
                    <div className="community-title">BAU Blockchain Club</div>
                    <div className="community-desc">President. One of the first female presidents of a university blockchain club in Turkey. Led the club to ETHGlobal Istanbul and multiple international hackathons.</div>
                  </div>
                </div>
                <div className="community-item">
                  <span className="community-dot" />
                  <div>
                    <div className="community-title">DevRel Uni</div>
                    <div className="community-desc">Member and contributor. Part of the global community for developer relations professionals and educators building the next generation of DevRel.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────── */}
      <section id="experience" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-num">03</span>
            <hr className="hr-red" />
            <h2 className="section-title reveal">Experience</h2>
          </div>
          <div className="exp-list">
            {experiences.map((e, i) => (
              <div key={i} className="exp-item reveal">
                <div className="exp-left">
                  <div className="exp-logo-wrap">
                    <img src={e.logo} alt={e.company} className="exp-logo" />
                  </div>
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-company">{e.company}</div>
                </div>
                <div className="exp-right">
                  <div className="exp-role">{e.role}</div>
                  <p className="exp-desc">{e.desc}</p>
                  <div className="exp-tags">
                    {e.tags.map((t) => (
                      <span key={t} className="exp-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAKING & EVENTS ────────────────────── */}
      <section id="speaking" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-num">05</span>
            <hr className="hr-red" />
            <h2 className="section-title reveal">Speaking & Events</h2>
          </div>

          {/* Category filter tabs */}
          <div className="ev-tabs reveal">
            {categoryTabs.map(tab => (
              <button
                key={tab.key}
                className={`ev-tab${activeCategory === tab.key ? ' ev-tab--active' : ''}`}
                onClick={() => setActiveCategory(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Featured row (only when 2 featured visible) */}
          {featuredEvents.length > 0 && (
            <div className="ev-featured">
              {featuredEvents.map((ev, i) => (
                <div key={i} className="ev-card ev-card--large">
                  <img src={ev.photo} alt={ev.name} className="ev-photo" />
                  <div className="ev-overlay">
                    <div className="ev-overlay-top">
                      <span className="ev-year-badge">{ev.year}</span>
                      <span className="ev-role-top">{ev.role}</span>
                    </div>
                    <div className="ev-overlay-bottom">
                      <div className="ev-name">{ev.name}</div>
                      <div className="ev-location">{ev.location}</div>
                      <div className="ev-role-badge">{ev.role}</div>
                      <p className="ev-desc">{ev.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Regular grid */}
          {regularEvents.length > 0 && (
            <div className="ev-grid">
              {regularEvents.map((ev, i) => (
                ev.video ? (
                  <div key={i} className="ev-card-video-wrap">
                    <div className="ev-card-video-embed">
                      <iframe
                        src={`https://www.youtube.com/embed/${ev.video}`}
                        title={ev.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="ev-card-video-info">
                      <div className="ev-card-video-top">
                        <span className="ev-year-badge ev-year-badge--dark">{ev.year}</span>
                        <span className="ev-role-badge ev-role-badge--dark">{ev.role}</span>
                      </div>
                      <div className="ev-card-video-name">{ev.name}</div>
                      <div className="ev-card-video-location">{ev.location}</div>
                      <p className="ev-card-video-desc">{ev.desc}</p>
                    </div>
                  </div>
                ) : ev.photo ? (
                  <div key={i} className="ev-card">
                    <img src={ev.photo} alt={ev.name} className="ev-photo" />
                    <div className="ev-overlay">
                      <div className="ev-overlay-top">
                        <span className="ev-year-badge">{ev.year}</span>
                        <span className="ev-role-top">{ev.role}</span>
                      </div>
                      <div className="ev-overlay-bottom">
                        <div className="ev-name">{ev.name}</div>
                        <div className="ev-location">{ev.location}</div>
                        <div className="ev-role-badge">{ev.role}</div>
                        <p className="ev-desc">{ev.desc}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={i} className="ev-card ev-card--placeholder">
                    <div className="ev-placeholder-inner">
                      <span className="ev-year-badge ev-year-badge--dark">{ev.year}</span>
                      <div className="ev-name ev-name--dark">{ev.name}</div>
                      <div className="ev-location ev-location--dark">{ev.location}</div>
                      <div className="ev-role-badge ev-role-badge--dark">{ev.role}</div>
                      <p className="ev-desc ev-desc--dark">{ev.desc}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          )}

          {/* Empty state */}
          {featuredEvents.length === 0 && regularEvents.length === 0 && (
            <p className="ev-empty">No events in this category yet.</p>
          )}
        </div>
      </section>

      {/* ── DEVELOPER CONTENT ────────────────────── */}
      <section id="content" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-num">04</span>
            <hr className="hr-red" />
            <h2 className="section-title reveal">Developer Content</h2>
          </div>

          <p className="writing-intro reveal">
            I create tutorials, technical threads, and educational content for
            developers building in Web3 and AI — on X, YouTube, and beyond.
          </p>

          {/* Format pills */}
          <div className="content-formats reveal reveal-d1">
            {['Technical Threads', 'YouTube Tutorials', 'X Spaces', 'Live Workshops', 'Technical Writing'].map(f => (
              <span key={f} className="content-format-pill">{f}</span>
            ))}
          </div>

          {/* Embedded tweets side by side */}
          <div className="tweet-grid reveal reveal-d2">
            <TweetEmbed tweetId="2065906468398735556" />
            <TweetEmbed tweetId="2062623836470694170" />
          </div>

          {/* Substack writings */}
          <div className="substack-block reveal reveal-d3">
            <div className="substack-block-header">
              <span className="substack-block-label">Substack</span>
              <a href="https://0xgks.substack.com" target="_blank" rel="noopener noreferrer" className="substack-block-cta">
                View all <span>↗</span>
              </a>
            </div>
            <div className="substack-articles">
              {[
                {
                  title: 'Becoming a Solutions Engineer',
                  desc: 'A comprehensive series covering the fundamentals of technical solutions work — from API design patterns to integration architecture.',
                  tag: 'Series',
                },
                {
                  title: 'API Fundamentals for Developer Relations',
                  desc: 'REST, GraphQL, webhooks — explained for developers stepping into customer-facing technical roles.',
                  tag: 'Tutorial',
                },
                {
                  title: "Building in Web3: A Developer's Guide",
                  desc: 'Practical entry points into Web3 development, smart contracts, and the ecosystem tools that actually matter.',
                  tag: 'Guide',
                },
              ].map((article, i) => (
                <a
                  key={i}
                  href="https://0xgks.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="substack-article"
                >
                  <div className="substack-article-meta">
                    <span className="substack-article-tag">{article.tag}</span>
                  </div>
                  <div className="substack-article-title">{article.title}</div>
                  <p className="substack-article-desc">{article.desc}</p>
                  <span className="substack-article-read">Read on Substack ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────── */}
      <section id="work" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-num">06</span>
            <hr className="hr-red" />
            <h2 className="section-title reveal">Projects</h2>
          </div>
          <div className="work-list">
            {projects.map((p) => (
              <div key={p.num} className={`work-item-wrap reveal${p.demo ? ' work-item-wrap--demo' : ''}`}>
                <a
                  href={p.href !== '#' ? p.href : undefined}
                  target={p.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="work-item"
                >
                  <span className="work-num">{p.num}</span>
                  <div className="work-content">
                    <div className="work-title">{p.title}</div>
                    <p className="work-desc">{p.desc}</p>
                    <div className="work-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="work-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="work-meta">
                    <span className="work-year">{p.year}</span>
                    <span className="work-arrow">↗</span>
                  </div>
                </a>
                {p.demo && (
                  <div className="work-demo-side">
                    <video
                      src={p.demo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="work-demo-video"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────── */}
      <section id="contact" className="section-wrap">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-num">07</span>
            <hr className="hr-red" />
            <h2 className="section-title reveal">Contact</h2>
          </div>
          <div className="contact-grid">
            <div className="reveal">
              <div className="contact-headline">
                Let&apos;s build<br />
                something{' '}
                <span className="contact-headline-em">meaningful</span>.
              </div>
              <p className="contact-sub">
                Open to collaborations, speaking opportunities, developer
                relations roles, and conversations about AI agents, Web3,
                and everything in between.
              </p>
            </div>
            <div className="contact-links-col reveal reveal-d2">
              {[
                { platform: 'Email', handle: 'goksualcinkaya@gmail.com', href: 'mailto:goksualcinkaya@gmail.com' },
                { platform: 'LinkedIn', handle: 'goksualcinkaya', href: 'https://www.linkedin.com/in/goksualcinkaya' },
                { platform: 'X / Twitter', handle: '@0xgks', href: 'http://x.com/0xgks' },
                { platform: 'GitHub', handle: 'goksualc', href: 'https://github.com/goksualc' },
                { platform: 'Telegram', handle: '@g0ksu9', href: 'https://t.me/g0ksu9' },
                { platform: 'Instagram', handle: '@goksualcinkaya', href: 'http://instagram.com/goksualcinkaya' },
              ].map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link-row"
                >
                  <span className="contact-link-platform">{link.platform}</span>
                  <span className="contact-link-handle">{link.handle}</span>
                  <span className="contact-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer>
        <div className="footer">
          <span className="footer-copy">
            © 2025 Goksu Alcinkaya — Engineer, Builder, Educator
          </span>
          <a href="#hero" className="footer-back">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}
