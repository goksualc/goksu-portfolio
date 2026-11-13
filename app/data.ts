// Content data for the home page. Moved verbatim from app/page.tsx.

export const projects = [
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

export const mandateFeatures = [
  'Agentic payments & trading governance',
  'Programmable policy enforcement',
  'Wallet security for AI-controlled accounts',
  'Zero-knowledge policy proofs (Noir / UltraHonk)',
  'Verifiable execution on every transaction',
  'Protection against prompt injection attacks',
  'MCP-native integration for AI agent pipelines',
  'Developer tooling & SDK',
]

export const mandateStack = ['TypeScript', 'Solidity', 'Noir', 'UltraHonk', 'MCP', 'ZK Proofs']

export const youtubeVideos = [
  { videoId: 'CT6d9KghxLY', title: 'How to Build an MCP Wallet Agent' },
  { videoId: 'KHIaloJncys', title: 'Building a Custom MoonPay Agent Skill | Solana Wallet Monitoring + Telegram Alerts' },
  { videoId: 'yeOrnRKdxTU', title: 'Dynamic by Fireblocks Tutorial #1 — Introduction' },
  { videoId: 'Md1v-K03hV0', title: 'Mandate Project Introduction' },
  { videoId: 'lPjH3O-qjdA', title: 'Devrel Uni Cohort 7' },
]

export const experiences: {
  period?: string
  company: string
  role: string
  desc?: string
  tags: string[]
  logo: string
}[] = [
  {
    company: 'Poliviz',
    role: 'Machine Learning & Algorithms Engineer',
    tags: [],
    logo: '/images/logos/poliviz-icon.svg',
  },
  {
    period: 'Jul 2026 – Present',
    company: 'Avalanche Team1',
    role: 'Collaborator',
    desc: 'Collaborating with the Avalanche Team1 community in New York, contributing to local ecosystem growth, technical education, builder-focused initiatives, community events, and developer engagement.',
    tags: ['Avalanche', 'Community', 'New York', 'Developer Engagement'],
    logo: '/images/logos/avax-team1.svg',
  },
  {
    period: 'Jun 2026 – Present',
    company: 'OKX',
    role: 'Technical Creator',
    desc: 'Producing technical and educational content around crypto infrastructure, on-chain markets, tokenized assets, AI-enabled products, and the broader OKX ecosystem. Contract.',
    tags: ['Content', 'Crypto', 'Education', 'OKX'],
    logo: '/images/logos/okx.png',
  },
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
    period: 'Jan 2024 – Feb 2024',
    company: 'MetisL2',
    role: 'DevRel Advocate · Part-time',
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
    period: 'Jan 2022 – Jan 2024',
    company: 'BlockchainIST Center',
    role: 'Research Assistant',
    desc: 'Supported academic blockchain research and contributed to technical reports on DLT infrastructure. Assisted in academic publishing and blockchain education initiatives.',
    tags: ['Research', 'Academic', 'Blockchain'],
    logo: '/images/logos/blockchainIST.png',
  },
]

export const events = [
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

export const categoryTabs = [
  { key: 'all',         label: 'All' },
  { key: 'conferences', label: 'Conferences' },
  { key: 'hackathons',  label: 'Hackathons' },
  { key: 'workshops',   label: 'Workshops' },
  { key: 'speaking',    label: 'Speaking' },
] as const

export type EventCategory = (typeof categoryTabs)[number]['key']

export const education = [
  {
    period: 'Aug 2025 – Present',
    institution: 'Brooklyn College, City University of New York (CUNY)',
    degree: 'M.S. Computer Science',
    location: 'Brooklyn, NY',
    desc: 'Information Systems track. New York City.',
  },
  {
    period: 'Aug 2024 – May 2025',
    institution: 'Bay Atlantic University',
    degree: 'Study Abroad · Full Scholarship',
    location: 'Washington, D.C.',
    desc: 'Information Technology coursework. Washington, D.C.',
  },
  {
    period: 'Oct 2021 – Jun 2025',
    institution: 'Bahçeşehir University',
    degree: 'B.S. Computer Engineering · Full Scholarship',
    location: 'Istanbul, Türkiye',
    desc: 'Capstone: FinWise — adaptive personal finance iOS app with risk-profiled investment guidance and in-app education.',
    capstone: {
      title: 'Capstone Project: FinWise',
      summary:
        'FinWise delivers beginner-friendly investing guidance with an adaptive interface based on user risk categories. It includes in‑app educational content, FAQs, and a clean mobile‑first design.',
      highlights: [
        'Adaptive UI for different risk profiles',
        'In‑app education, FAQs, and guided tips',
        'Swift app with polished mobile-first UX',
      ],
      github: 'https://github.com/goksualc/Finwise',
    },
  },
]

export const community = [
  {
    title: 'H.E.R. DAO Türkiye',
    desc: 'Co-Founder. Building Web3 developer communities for women in Turkey and beyond. Organized workshops, IRL events, and scholarship programs.',
  },
  {
    title: 'Solana Global Fellow',
    desc: 'Selected as the first Turkish Solana University Ambassador. Worked directly with the Solana Foundation to build university developer programs across Turkey.',
  },
  {
    title: 'BAU Blockchain Club',
    desc: 'President. One of the first female presidents of a university blockchain club in Turkey. Led the club to ETHGlobal Istanbul and multiple international hackathons.',
  },
  {
    title: 'DevRel Uni',
    desc: 'Member and contributor. Part of the global community for developer relations professionals and educators building the next generation of DevRel.',
  },
]

export const orgLinks: Record<string, string> = {
  'Avalanche Team1': 'https://www.avax.network/community',
  OKX: 'https://www.okx.com',
  'The City College of New York': 'https://www.ccny.cuny.edu',
  'Solana Global Fellow': 'https://solana.org/',
  'DevRel Uni': 'https://devreluni.substack.com',
  'H.E.R. DAO Türkiye': 'https://www.her-dao.xyz/',
  'TÜBİTAK BİLGEM': 'https://bilgem.tubitak.gov.tr',
  MetisL2: 'https://www.metis.io/',
  'Solana Foundation': 'https://solana.org/',
  'BlockchainIST Center': 'https://blockchainist.org/',
}

export const tweetIds = ['2065906468398735556', '2062623836470694170']

export const substackArticles = [
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
]

export const contactLinks = [
  { platform: 'Email', handle: 'goksualcinkaya@gmail.com', href: 'mailto:goksualcinkaya@gmail.com' },
  { platform: 'LinkedIn', handle: 'goksualcinkaya', href: 'https://www.linkedin.com/in/goksualcinkaya' },
  { platform: 'X / Twitter', handle: '@0xgks', href: 'http://x.com/0xgks' },
  { platform: 'Substack', handle: '0xgks.substack.com', href: 'https://0xgks.substack.com' },
  { platform: 'GitHub', handle: 'goksualc', href: 'https://github.com/goksualc' },
  { platform: 'Telegram', handle: '@g0ksu9', href: 'https://t.me/g0ksu9' },
  { platform: 'Instagram', handle: '@goksualcinkaya', href: 'http://instagram.com/goksualcinkaya' },
]
