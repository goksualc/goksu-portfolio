import './academic.css'
import TweetEmbed from '../components/TweetEmbed'
import ProfilePhoto from '../components/academic/ProfilePhoto'
import DemoVideo from '../components/academic/DemoVideo'
import Events from '../components/academic/Events'
import {
  projects, mandateFeatures, mandateStack, youtubeVideos, experiences, education,
  community, orgLinks, tweetIds, substackArticles, contactLinks,
} from './data'

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

const CV_URL = '/images/Goksu_Alcinkaya_CV.pdf'

const nav = [
  ['about', 'About'],
  [CV_URL, 'CV (Resume)'],
  ['research', 'Research'],
  ['education', 'Education'],
  ['experience', 'Experience'],
  ['community', 'Community'],
  ['writing', 'Writing'],
  ['events', 'Events'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
]

const fluidMpc = experiences.find((e) => e.role.startsWith('Fluid MPC'))!

export default function Home() {
  return (
    <div className="ac">
      <main>
        <header className="ac-header" id="top">
          <div>
            <h1>Goksu Alcinkaya</h1>
            <p>
              Computer engineer based in New York City
            </p>
            <p className="ac-links">
              {contactLinks.map((l, i) => (
                <span key={l.platform}>
                  {i > 0 && ' / '}
                  <a href={l.href} {...(l.href.startsWith('mailto') ? {} : ext)}>{l.platform}</a>
                </span>
              ))}
            </p>
          </div>
          <ProfilePhoto />
        </header>

        <nav className="ac-nav" aria-label="Sections">
          {nav.map(([id, label], i) => (
            <span key={id}>
              {i > 0 && ' · '}
              {id === CV_URL ? <a href={id} {...ext}>{label}</a> : <a href={`#${id}`}>{label}</a>}
            </span>
          ))}
        </nav>

        <section id="about">
          <h2>About</h2>
          <p>
            I am a software engineer working across applied cryptography, blockchain infrastructure, and
            AI agent systems. I am currently pursuing an M.S. in Computer Science at Brooklyn College
            (CUNY) in New York City, and I hold a B.S. in Computer Engineering from Bahçeşehir University,
            completed on a full scholarship.
          </p>
          <p>
            Over the past four years I have built products, conducted research, and led developer
            communities in the blockchain ecosystem. My work has included implementing multi-party
            computation primitives in Rust at The City College of New York, contributing to national
            digital currency and digital identity research at TÜBİTAK BİLGEM, and growing university
            developer communities with the Solana Foundation.
          </p>
          <p>
            Today I am a Founding Engineer at Poliviz, where I build the iOS application and contribute to
            portfolio risk modeling. I am also developing MANDATE, a protocol that lets autonomous AI
            agents operate under verifiable zero-knowledge mandates on Ethereum.
          </p>
          <p>
            I care about making complex systems accessible to developers, through clear tooling, technical
            education, and well-run communities.
          </p>
        </section>

        <section id="research">
          <h2>Research</h2>

          <article className="ac-featured" id="mandate">
            <h3>MANDATE <span className="ac-status">(active)</span></h3>
            <p className="ac-meta">
              Featured build · Security and policy infrastructure for autonomous financial agents.
            </p>
            <p>
              <strong>What it is.</strong> MANDATE is a security and policy infrastructure layer that sits
              between an AI agent and a wallet or payment system. Before any transaction is executed,
              MANDATE enforces predefined policies, protecting against compromised agents, prompt
              injection, and unauthorized financial actions.
            </p>
            <p>
              <strong>Why MANDATE?</strong>
            </p>
            <blockquote>
              &ldquo;As AI agents gain access to wallets and financial systems, the question isn&rsquo;t
              whether they&rsquo;ll be exploited; it&rsquo;s whether the guardrails exist before they
              are.&rdquo;
            </blockquote>
            <p>
              Autonomous agents operating in financial contexts introduce new attack vectors: prompt
              injection, policy drift, compromised reasoning chains. MANDATE addresses this with
              cryptographically verifiable policy enforcement: not just software guards, but
              zero-knowledge proofs that policies were followed correctly.
            </p>
            <p><strong>Key capabilities.</strong></p>
            <ul>
              {mandateFeatures.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p><strong>Technical stack.</strong> {mandateStack.join(', ')}.</p>
            <p>
              Links:{' '}
              <a href="https://www.mandate.help" {...ext}>mandate.help</a> ·{' '}
              <a href="https://www.mandate.help/whitepaper" {...ext}>Whitepaper</a> ·{' '}
              <a href="https://www.mandate.help/docs" {...ext}>Documentation</a>
            </p>
            <details className="ac-more">
              <summary>From the builder (post on X)</summary>
              <TweetEmbed tweetId="2081549844380819467" />
            </details>
          </article>

          <article className="ac-featured" id="fluid-mpc">
            <h3>Fluid MPC</h3>
            <p className="ac-meta">
              {fluidMpc.company} · Research Contributor · {fluidMpc.period}
            </p>
            <p>{fluidMpc.desc}</p>
          </article>
        </section>

        <section id="education">
          <h2>Education</h2>
          <ul className="ac-list">
            {education.map((e) => (
              <li key={e.institution}>
                <div className="ac-date">{e.period}</div>
                <div>
                  <strong>{e.institution}</strong>, {e.degree}. {e.location}.
                  <br />
                  {e.desc}
                  {e.capstone && (
                    <>
                      <p className="ac-sub"><strong>{e.capstone.title}.</strong> {e.capstone.summary}</p>
                      <ul className="ac-bullets">
                        {e.capstone.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                      <a href={e.capstone.github} {...ext}>FinWise on GitHub</a>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience">
          <h2>Professional Experience</h2>
          <ul className="ac-list">
            {experiences.map((e) => (
              <li key={e.company + (e.period ?? '')}>
                <div className="ac-date">{e.period}</div>
                <div>
                  <strong>{e.role}</strong>,{' '}
                  <img src={e.logo} alt="" width={16} height={16} className="ac-logo" loading="lazy" />
                  {orgLinks[e.company] ? <a href={orgLinks[e.company]} {...ext}>{e.company}</a> : e.company}
                  {e.desc && <p>{e.desc}</p>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="community">
          <h2>Community &amp; Leadership</h2>
          <ul className="ac-plain">
            {community.map((c) => (
              <li key={c.title}>
                <strong>{orgLinks[c.title] ? <a href={orgLinks[c.title]} {...ext}>{c.title}</a> : c.title}.</strong> {c.desc}
              </li>
            ))}
          </ul>
        </section>

        <section id="writing">
          <h2>Writing &amp; Technical Content</h2>
          <p>
            I create tutorials, technical threads, and educational content for developers building in
            Web3 and AI, on X, YouTube, and beyond.
          </p>

          <h3>Substack</h3>
          <ul className="ac-plain">
            {substackArticles.map((a) => (
              <li key={a.title}>
                <a href="https://0xgks.substack.com" {...ext}>{a.title}</a>. {a.desc}
              </li>
            ))}
          </ul>
          <p><a href="https://0xgks.substack.com" {...ext}>View all on Substack</a></p>

          <h3>Technical threads</h3>
          <div className="ac-tweets">
            {tweetIds.map((id) => <TweetEmbed key={id} tweetId={id} />)}
          </div>

          <h3>Technical videos</h3>
          <p>
            Developer-focused videos on blockchain infrastructure, AI agents, crypto markets, and
            emerging technologies. Channel: <a href="https://www.youtube.com/@goknyc" {...ext}>@goknyc</a>.
          </p>
          <ul className="ac-plain">
            {youtubeVideos.map((v) => (
              <li key={v.videoId}>
                <a href={`https://www.youtube.com/watch?v=${v.videoId}`} {...ext}>{v.title}</a>
              </li>
            ))}
          </ul>
          <p><a href="https://www.youtube.com/@goknyc" {...ext}>Watch more on YouTube</a></p>
        </section>

        <section id="events">
          <h2>Speaking, Conferences &amp; Events</h2>
          <p className="ac-meta">Select an entry to see details and photos.</p>
          <Events />
        </section>

        <section id="projects">
          <h2>Additional Projects</h2>
          <ul className="ac-list ac-projects">
            {projects.map((p) => (
              <li key={p.title}>
                <div className="ac-date">{p.year}</div>
                <div className={p.demo ? 'ac-withvideo' : undefined}>
                  <div>
                    <a href={p.href} {...ext}><strong>{p.title}</strong></a>
                    <p>{p.desc}</p>
                  </div>
                  {p.demo && <DemoVideo src={p.demo} />}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Let&apos;s build something meaningful. Open to collaborations, speaking opportunities,
            developer relations roles, and conversations about AI agents, Web3, and everything in between.
          </p>
          <ul className="ac-plain">
            {contactLinks.map((l) => (
              <li key={l.platform}>
                {l.platform}: <a href={l.href} {...(l.href.startsWith('mailto') ? {} : ext)}>{l.handle}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="ac-footer">
        © 2026 Goksu Alcinkaya. Engineer, Builder, Educator · <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}
