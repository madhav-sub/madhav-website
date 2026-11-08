const work = [
  {
    number: '01', category: 'INDEPENDENT PROJECT',
    title: 'Neural networks from first principles',
    description: 'A configurable multilayer perceptron implemented with NumPy, including forward propagation, backpropagation, and training for classification and regression.',
    href: 'https://github.com/madhav-sub/numpy-neural-network', label: 'Explore the repository',
  },
  {
    number: '02', category: 'ENGINEERING EXPERIENCE',
    title: 'Platforms, integrations, and reliability',
    description: 'Professional work across multi-tenant cloud systems, enterprise integrations, distributed synchronization, and performance engineering.',
    href: 'https://github.com/MS-BC', label: 'Public engineering contributions',
  },
];

function Network() {
  return <svg className="network" viewBox="0 0 620 530" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="halo"><stop stopColor="#CFAC68" stopOpacity=".18"/><stop offset="1" stopColor="#CFAC68" stopOpacity="0"/></radialGradient>
      <linearGradient id="threads" x1="0" y1="0" x2="620" y2="530"><stop stopColor="#9F7940" stopOpacity=".05"/><stop offset=".5" stopColor="#DBB574" stopOpacity=".57"/><stop offset="1" stopColor="#AB7C3A" stopOpacity=".11"/></linearGradient>
    </defs>
    <circle cx="348" cy="238" r="225" fill="url(#halo)" />
    <g stroke="url(#threads)" strokeWidth="1">
      <path d="M80 342 158 180 300 111 441 142 551 263 462 393 305 463 164 413 80 342 300 111 462 393 158 180 551 263 164 413 441 142 305 463 80 342" />
      <path d="M80 342 441 142 164 413 300 111 551 263 158 180 462 393 441 142" />
      <path d="M158 180 305 463 551 263 80 342 300 111 164 413 462 393" />
      <path d="M243 264 348 220 409 300 320 354 243 264 158 180 348 220 441 142 409 300 551 263 320 354 305 463" />
      <circle cx="348" cy="270" r="144" opacity=".48"/><circle cx="348" cy="270" r="200" opacity=".3"/>
      <path d="M148 270h415M348 50v430" opacity=".3" strokeDasharray="2 7"/>
    </g>
    <g fill="#E8BC73">{[[80,342,2.7],[158,180,3.4],[300,111,3],[441,142,3.4],[551,263,3.2],[462,393,3.6],[305,463,3],[164,413,3],[243,264,2.8],[348,220,5.4],[409,300,3.5],[320,354,2.5]].map(([cx,cy,r],i)=><circle key={i} cx={cx} cy={cy} r={r}/> )}</g>
    <g fill="#DAB676" opacity=".5">{[[110,250],[212,124],[523,188],[502,354],[232,431],[376,88],[398,440],[93,384],[286,219],[399,201]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="1.4"/>)}</g>
  </svg>
}

export default function Home() {
 return <main>
    <div className="page">
      <header className="header">
        <a className="wordmark" href="#top">Madhav<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#inquiries">Investigations</a><a href="#about">About</a><a href="https://github.com/madhav-sub" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>
      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="tiny-line"/> ENGINEERING &nbsp; / &nbsp; INQUIRY &nbsp; / &nbsp; IDEAS</p>
          <h1>Building<br/><em>systems.</em><br/>Investigating<br/><em>ideas.</em></h1>
          <p className="hero-intro">I’m Madhav, a software engineer working across backend platforms, enterprise integrations, and applied AI. I’m interested in the structure beneath complex systems—and the questions that structure reveals.</p>
          <div className="hero-links"><a className="primary-link" href="#work">Explore my work <span>↗</span></a><a className="secondary-link" href="#inquiries">Questions I explore <span>↗</span></a></div>
        </div>
        <Network />
        <span className="hero-index">FIG. 01 — CONNECTIONS & STRUCTURE</span>
      </section>
      <section className="intro-band" id="about"><span className="section-kicker">01 / PERSPECTIVE</span><p>I like questions that sit between <em>how things work</em> and <em>why they work that way.</em> My interests move between engineering, mathematics, theoretical computer science, and philosophy.</p></section>
      <section id="work" className="section work-section">
        <div className="section-head"><div><span className="section-kicker">02 / ENGINEERING</span><h2>Selected work<span>.</span></h2></div><p>Some things built, and some problems worth understanding.</p></div>
        <div className="work-list">{work.map(item=><a className="work-item" key={item.number} href={item.href} target="_blank" rel="noreferrer"><div className="work-number">{item.number}</div><div className="work-main"><span className="smallcaps">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><span className="work-link">{item.label} ↗</span></div><span className="work-arrow">↗</span></a>)}</div>
      </section>
      <section id="inquiries" className="section inquiries"><span className="section-kicker">03 / INVESTIGATIONS</span><h2>Questions worth<br/><em>staying with.</em></h2><div className="question-grid"><p><span>01</span>What makes an abstraction useful?</p><p><span>02</span>How does the representation of information change what we can know?</p><p><span>03</span>What makes a complex system reliable?</p><p><span>04</span>What can computation tell us about intelligence and understanding?</p></div><p className="future-note">An evolving notebook for ideas, experiments, and writing. Essays will appear here as they develop.</p></section>
      <footer><div><span className="footer-name">Madhav.</span><p>Engineering, research, and the questions in between.</p></div><div className="footer-links"><a href="https://github.com/madhav-sub" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/madhav-sub/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><span className="footer-note">© {new Date().getFullYear()} Madhav</span></footer>
    </div>
  </main>;
}
