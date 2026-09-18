import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Brush,
  Building2,
  ChevronDown,
  Clapperboard,
  Compass,
  Cpu,
  Eye,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Lightbulb,
  Menu,
  Megaphone,
  Palette,
  Sparkles,
  Users,
  Zap,
  X,
} from "lucide-react";

import heroImage from "../assets/orange-pie-hero.jpg";
import communityImage from "../assets/community-workshop.jpg";
import industryImage from "../assets/industry-career.jpg";
import ideasImage from "../assets/ideas-innovation.jpg";
import artsImage from "../assets/arts-culture.jpg";
import adventureImage from "../assets/play-adventure.jpg";
import wellbeingImage from "../assets/wellbeing-lifestyle.jpg";
import orangeEconomyImage from "../assets/orange-economy.jpg";
import collaborationImage from "../assets/community-collaboration.jpg";

const navItems = [
  ["About", "about"],
  ["Who Can Join", "who-can-join"],
  ["Why to Join", "why-join"],
  ["FAQs", "faqs"],
] as const;

const benefits = [
  {
    title: "Discover your Kreativity",
    description: "Explore your interests, recognise your strengths, and discover the ideas you can bring.",
    icon: Compass,
  },
  {
    title: "Develop your capability",
    description: "Ask questions, explore different perspectives, and build your abilities through learning and practice.",
    icon: Sparkles,
  },
  {
    title: "Put ideas into action",
    description: "Explore how your Kreativity can address a need, solve a problem, or improve an experience.",
    icon: Lightbulb,
  },
  {
    title: "Connect and collaborate",
    description: "Meet people with different skills and experiences. Discover what you could create together.",
    icon: Users,
  },
  {
    title: "Share and contribute",
    description: "Offer your knowledge, feedback, or experience to help someone else move forward.",
    icon: HeartHandshake,
  },
] as const;

const audiences = [
  ["Students & Learners", "Explore your interests and discover creative ways to use what you learn.", GraduationCap],
  ["Creators & Professionals", "Share your skills, exchange perspectives, and explore new possibilities in your work.", Palette],
  ["Entrepreneurs & Business Owners", "Identify unmet needs and explore how Kreativity can help you develop ideas and create value.", Lightbulb],
  ["Educators & Institutions", "Encourage curiosity and connect learning with practical experiences and creative exploration.", Building2],
  ["Industry & Organisations", "Share real-world challenges and perspectives, connect with talent, and explore collaboration.", BriefcaseBusiness],
  ["Individuals & Communities", "Bring your everyday experiences and explore ideas that could improve life around you.", Users],
] as const;

const experiences = [
  {
    title: "Industry & Career",
    description: "Explore internships, industrial visits, CEO connect sessions, conferences, and summits to connect your learning with real-world perspectives.",
    image: industryImage,
    alt: "Indian students and professionals speaking with an engineer during an industry visit",
    size: "large",
  },
  {
    title: "Ideas & Innovation",
    description: "Participate in hackathons and collaborative challenges to test your ideas, solve problems, and create with others.",
    image: ideasImage,
    alt: "Indian makers developing and testing an idea together",
    size: "large",
  },
  {
    title: "Arts & Culture",
    description: "Explore photography, music, and cultural events to express yourself, share your interests, and discover new perspectives.",
    image: artsImage,
    alt: "Indian artists sharing photography and music in a creative studio",
    size: "small",
  },
  {
    title: "Play & Adventure",
    description: "Join games, trekking, and outdoor experiences to explore new places and build connections beyond your routine.",
    image: adventureImage,
    alt: "A group of friends trekking together in South India",
    size: "small",
  },
  {
    title: "Wellbeing & Lifestyle",
    description: "Make time for yoga and shared wellbeing activities to recharge and bring balance to everyday life.",
    image: wellbeingImage,
    alt: "A group sharing a calm yoga practice in a garden courtyard",
    size: "small",
  },
  {
    title: "Community & Collaboration",
    description: "Connect through community meetups, exchange ideas, and work on shared projects. Build meaningful relationships and discover what you can create together.",
    image: collaborationImage,
    alt: "Indian creatives exchanging ideas together at a community meetup",
    size: "small",
  },
] as const;

const creativeDomains = [
  {
    title: "Design & Creative Services",
    description: "Shape how things look, feel, and work.",
    interests: "Graphic • UX/UI • Product • Fashion • Interior • Packaging",
    icon: Brush,
  },
  {
    title: "Media & Entertainment",
    description: "Tell stories through images, movement, and sound.",
    interests: "Film • Photography • Video • Editing • Animation • VFX • Music",
    icon: Clapperboard,
  },
  {
    title: "Creator, Brand & Marketing",
    description: "Create content, build brands, and connect with audiences.",
    interests: "Content • Branding • Digital Marketing • Advertising • Communication",
    icon: Megaphone,
  },
  {
    title: "Innovation & Design Thinking",
    description: "Understand challenges and develop ideas that create value.",
    interests: "Problem Solving • Product Thinking • Entrepreneurship • Innovation",
    icon: BrainCircuit,
  },
  {
    title: "Creative Technology & Making",
    description: "Explore AI, build immersive experiences, and turn digital ideas into things people can experience and use.",
    interests: "Generative AI • AI Design, Video & Content • AR / VR / XR • 3D • 3D Printing • Interactive Experiences",
    icon: Cpu,
  },
  {
    title: "Arts, Culture & Heritage",
    description: "Express yourself and explore the traditions and stories that connect us.",
    interests: "Art • Crafts • Music • Literature • Folk Arts • Heritage",
    icon: Landmark,
  },
] as const;

const faqs = [
  ["What is Orange Pie Community?", "Orange Pie Community brings people together to discover, develop, and use their Kreativity through shared learning, ideas, and collaboration."],
  ["Do I need a creative background to join?", "No. You do not need a creative qualification or a portfolio. You can begin with curiosity and a willingness to explore."],
  ["Can I join without an idea?", "Yes. Start with an interest or a question. Learning from different people can help you discover what you would like to try."],
  ["Can I contribute my knowledge or experience?", "Yes. Indicate your interest in sharing knowledge, collaborating, or contributing when you register."],
  ["Can institutions and organisations express interest?", "Yes. Institutions and organisations can register their interest in connecting with the community and exploring ways to contribute."],
] as const;

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`wordmark ${light ? "wordmark-light" : ""}`} aria-label="Orange Pie Community home">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span>Orange Pie<br /><strong>Community</strong></span>
    </a>
  );
}

function ActionLink({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a href="#registration" className={`action-link ${className}`}>
      <span>{label}</span><ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}

export function OrangePiePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <a href="#registration" className="header-cta">Join the Community <ArrowDownRight size={17} /></a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a href="#registration" className="mobile-join" onClick={() => setMenuOpen(false)}>Join the Community</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero section" aria-labelledby="hero-title">
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">ORANGE PIE COMMUNITY</p>
              <h1 id="hero-title"><span>Discover your Kreativity.</span><span>Create new possibilities.</span></h1>
              <p className="hero-intro">Connect with people to explore ideas, learn from each other, and use your Kreativity to make a difference in everyday life, learning, and work.</p>
              <ActionLink label="Join the Community" />
              <p className="supporting-line">Be curious. Share ideas. Create together.</p>
            </div>
            <div className="hero-art">
              <img src={heroImage} alt="" aria-hidden="true" width={1280} height={1024} fetchPriority="high" />
            </div>
          </div>
        </section>

        <section className="section economy" aria-labelledby="economy-title">
          <div className="page-width economy-grid">
            <div className="economy-copy">
              <p className="eyebrow">THE ORANGE ECONOMY</p>
              <h2 id="economy-title">Ornage economy</h2>
              <p className="economy-kicker">Where Kreativity becomes opportunity.</p>
              <div className="editorial-copy">
                <p>The Orange Economy brings together activities where creativity, culture, and ideas create value—from art, design, and media to film, animation, and games.</p>
                <p>Behind these are people using their imagination, knowledge, and skills to create meaningful work, build businesses, and generate opportunities.</p>
                <p className="emphasis">Your Kreativity can be part of this economy.</p>
                <p>Orange Pie Community brings people together to explore that potential and discover how their ideas can contribute.</p>
              </div>
            </div>
            <figure className="economy-image"><img src={orangeEconomyImage} alt="Indian creatives developing ideas across design, media, and making" width={1280} height={960} loading="lazy" /></figure>
          </div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title">
          <div className="page-width about-grid">
            <figure className="community-image">
              <img src={communityImage} alt="People sharing ideas and prototypes in a contemporary Indian creative studio" width={1280} height={960} loading="lazy" />
            </figure>
            <div className="about-copy">
              <p className="eyebrow">WHAT IS ORANGE PIE COMMUNITY?</p>
              <h2 id="about-title">A place for your Kreativity to grow.</h2>
              <p>Orange Pie Community brings people together to discover, develop, and use their Kreativity.</p>
              <p>Building on the purpose of Orangepie economy, it connects people across education, work, business, and everyday life to exchange perspectives, explore ideas, and create together.</p>
              <p>Bring a question, share something you know, or explore a possibility with others.</p>
              <p className="closing-thought">Your perspective could be the beginning of something new.</p>
            </div>
          </div>
        </section>

        <section className="section direction" aria-labelledby="direction-title">
          <div className="page-width">
            <div className="direction-heading">
              <p className="eyebrow">OUR SHARED DIRECTION</p>
              <h2 id="direction-title">New ideas for a better future.</h2>
            </div>
            <div className="direction-grid">
              <article className="direction-item vision">
                <div className="direction-label"><span><Eye size={23} aria-hidden="true" /></span><h3>Our Vision</h3></div>
                <p>A future where people use Kreativity to discover what is missing, imagine new possibilities, and create innovative solutions that make society and the world better.</p>
              </article>
              <article className="direction-item mission">
                <div className="direction-label"><span><Zap size={23} aria-hidden="true" /></span><h3>Our Mission</h3></div>
                <p>Bring structured Kreativity learning into schools, colleges, offices, and society—helping people discover, develop, and apply their abilities.</p>
                <p>Through this, we aim to nurture <strong>2–3 lakh</strong> creative talents across <strong>Tamil Nadu</strong> by <strong>2030</strong>.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="why-join" className="section why" aria-labelledby="why-title">
          <div className="page-width">
            <div className="section-intro-row">
              <div><p className="eyebrow">WHY JOIN?</p><h2 id="why-title">Discover it.<br />Develop it. Use it.</h2></div>
              <ActionLink label="Join the Community" className="desktop-action" />
            </div>
            <div className="benefits-list">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return <article className="benefit" key={benefit.title}>
                  <span className="benefit-icon"><Icon size={22} strokeWidth={1.6} aria-hidden="true" /></span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>;
              })}
            </div>
            <ActionLink label="Join the Community" className="mobile-action" />
          </div>
        </section>

        <section id="who-can-join" className="section audiences" aria-labelledby="audiences-title">
          <div className="page-width">
            <div className="audience-heading">
              <h2 id="audiences-title"><span>KREATIVITY IS FOR EVERYONE.</span> Different people. More possibilities.</h2>
              <div className="orbit-mark" aria-hidden="true"><span /><span /><span /></div>
            </div>
            <div className="audience-grid">
              {audiences.map(([title, description, Icon]) => (
                <article key={title} className="audience-item">
                  <div className="audience-top"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></div>
                  <h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
            <p className="audience-conclusion">You do not need a creative qualification or a finished idea. Begin with curiosity and a willingness to try.</p>
          </div>
        </section>

        <section className="section creative-universe" aria-labelledby="creative-universe-title">
          <div className="page-width">
            <div className="universe-heading">
              <p className="eyebrow">EXPLORE YOUR INTERESTS</p>
              <h2 id="creative-universe-title">THE CREATIVE UNIVERSE</h2>
              <p className="universe-lead">Six creative domains.</p>
              <p className="universe-lead">Many ways to belong.</p>
              <p className="universe-question">What would you like to explore, create, or contribute to?</p>
              <p className="universe-intro">Discover interest circles across six creative domains. Follow a familiar interest or explore something new.</p>
            </div>
            <div className="domain-grid">
              {creativeDomains.map((domain) => {
                const Icon = domain.icon;
                return (
                  <article className="domain-card" key={domain.title}>
                    <span className="domain-icon"><Icon size={24} strokeWidth={1.7} aria-hidden="true" /></span>
                    <h3>{domain.title}</h3>
                    <p>{domain.description}</p>
                    <p className="domain-interests">{domain.interests}</p>
                  </article>
                );
              })}
            </div>
            <div className="universe-closing">
              <h3>One community. More than one interest.</h3>
              <p>You can belong to multiple interest circles within one Orange Pie Community identity.</p>
              <p>A student can explore design and AI. An entrepreneur can connect with branding and innovation. An artist can discover immersive technology.</p>
              <p>Who you are and what you want to create come together here.</p>
              <ActionLink label="Join the Community" />
            </div>
          </div>
        </section>

        <section className="section experiences" aria-labelledby="experiences-title">
          <div className="page-width">
            <div className="experiences-heading">
              <p className="eyebrow">Learn. Create. Explore.</p>
              <h2 id="experiences-title">Experience life together.</h2>
              <p>From industry exposure to outdoor adventures, discover experiences that help you explore your Kreativity, meet people, and grow.</p>
            </div>
            <div className="experience-grid">
              {experiences.map((experience) => (
                <article key={experience.title} className={`experience-item experience-${experience.size}`}>
                  <div className="experience-image"><img src={experience.image} alt={experience.alt} width={1024} height={768} loading="lazy" /></div>
                  <div className="experience-copy"><h3>{experience.title}</h3><p>{experience.description}</p></div>
                </article>
              ))}
            </div>
            <div className="experience-footer"><p>Discover something you enjoy. Try something new. Find people to share it with.</p><ActionLink label="Join Us" /></div>
          </div>
        </section>

        <section id="registration" className="section registration" aria-labelledby="registration-title">
          <div className="page-width registration-grid">
            <div className="registration-intro">
              <p className="eyebrow">JOIN ORANGE PIE COMMUNITY</p>
              <h2 id="registration-title">Your Kreativity has a place here.</h2>
              <p>Whether you want to learn, explore, create, or contribute, start by introducing yourself.</p>
            </div>
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="field-grid">
                <label><span>Full name</span><input name="name" type="text" placeholder="Enter your name" autoComplete="name" required /></label>
                <label><span>Email address</span><input name="email" type="email" placeholder="Enter your email address" autoComplete="email" required /></label>
              </div>
              <label><span>City / Town</span><input name="city" type="text" placeholder="Enter your city or town" autoComplete="address-level2" required /></label>
              <label><span>Which best describes you?</span>
                <select name="role" defaultValue="" required>
                  <option value="" disabled>Select one.</option>
                  <option>School Student</option><option>College Student</option><option>Professional</option><option>Entrepreneur</option><option>CXOs</option><option>Institutions </option><option>Industry / Organisation</option><option>Artists</option><option>Other</option>
                </select>
              </label>
              <fieldset>
                <legend>What would you like to explore?<small>Select all that interest you.</small></legend>
                <div className="checkbox-list">
                  {["Discover and develop my Kreativity", "Connect with people and exchange business ideas", "Create and collaborate on real time projects", "Share my knowledge to young talents", "Contribute to community initiatives"].map((item) => (
                    <label key={item}><input type="checkbox" name="interests" value={item} /><span>{item}</span></label>
                  ))}
                </div>
              </fieldset>
              <label className="consent"><input type="checkbox" name="consent" required /><span>I agree to be contacted about my registration and community participation. I have read the Privacy Policy.</span></label>
              <button type="submit" className="submit-button">Submit My Registration <ArrowRight size={19} aria-hidden="true" /></button>
            </form>
          </div>
        </section>

        <section id="faqs" className="section faqs" aria-labelledby="faq-title">
          <div className="page-width faq-grid">
            <div><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2 id="faq-title">Curious to know more?</h2></div>
            <div className="accordion">
              {faqs.map(([question, answer], index) => (
                <details key={question} name="faq" open={index === 0}>
                  <summary><span>{question}</span><ChevronDown size={22} aria-hidden="true" /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-width footer-grid">
          <div><Wordmark light /><p>Human. Powered by Kreativity</p></div>
          <nav className="footer-links" aria-label="Footer navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
            <a href="#registration">Join the Community</a>
          </nav>
          <div className="footer-contact"><h2>Contact Us</h2><a href="tel:9444948494">9444948494</a><a href="mailto:OPL@gmail.com">OPL@gmail.com</a></div>
          <p className="copyrights">copyrights</p>
        </div>
      </footer>
    </div>
  );
}