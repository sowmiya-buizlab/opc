import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Brush,
  Building2,
  ChevronDown,
  Clapperboard,
  Clock3,
  Compass,
  Cpu,
  Eye,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Landmark,
  Lightbulb,
  MapPin,
  Menu,
  Megaphone,
  Palette,
  Presentation,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapLocationDot,
  FaPinterestP,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import heroBannerAsset from "../assets/about-banner.png.asset.json";
import communityImage from "../assets/community-workshop.jpg";
import industryImage from "../assets/industry-career.jpg";
import ideasImage from "../assets/ideas-innovation.jpg";
import artsImage from "../assets/arts-culture.jpg";
import adventureImage from "../assets/play-adventure.jpg";
import wellbeingImage from "../assets/wellbeing-lifestyle.jpg";
import orangeEconomyImage from "../assets/orange-economy.jpg";
import collaborationImage from "../assets/community-collaboration.jpg";
import logoAsset from "../assets/OPC_logo_png.png.asset.json";
import footerLogoAsset from "../assets/OPC_logo_black_BG_png.png.asset.json";
import atplLogo from "../assets/ATPL_1_logo.png.asset.json";
import savemomLogo from "../assets/Savemom_2.png.asset.json";
import buizlabLogo from "../assets/Buizlab_Logo_1.png.asset.json";
import digitallLogo from "../assets/Digitall_white_BG.png.asset.json";

const WHATSAPP_URL = "https://chat.whatsapp.com/LX2JpMqRa13IyIdP024twV";

const navItems = [
  ["About", "about"],
  ["Who Can Join", "who-can-join"],
  ["What You Can Learn", "what-you-can-learn"],
  ["Events", "events"],
  ["Casebook", "casebook"],
] as const;

const audiences = [
  ["School Students", "Ask questions, explore your interests, and discover new ways to learn and create.", GraduationCap],
  ["College Students", "Build practical skills, try your ideas, and discover where your learning can take you.", Landmark],
  ["Young Professionals", "Learn something new, grow your skills, and connect with people beyond your workplace.", BriefcaseBusiness],
  ["CXOs & Business Leaders", "Share your experience, guide emerging talent, and help new ideas move forward.", Presentation],
  ["Entrepreneurs", "Explore business ideas, solve challenges, and meet people you could build with.", Lightbulb],
  ["Creators", "Develop your skills, share your work, and find others who enjoy creating.", Palette],
  ["Women Creators & Homemakers", "Explore your interests, learn new skills, and discover possibilities for personal growth, work, or business.", Sparkles],
  ["Artists & Cultural Practitioners", "Share your art, celebrate your culture, and find new ways to reach people.", Brush],
] as const;

const learningDomains = [
  ["Design & Creative Services", "Learn to shape how things look, feel, and work.", "Graphic • UX/UI • Product • Fashion • Interior • Packaging", Brush],
  ["Media & Entertainment", "Learn to tell stories through pictures, movement, and sound.", "Film • Photography • Video • Editing • Animation • VFX • Music", Clapperboard],
  ["Creator, Brand & Marketing", "Create content and help businesses share their stories and reach people.", "Content • Branding • Digital Marketing • Advertising • Communication", Megaphone],
  ["Innovation & Design Thinking", "Understand a problem, explore ideas, and find better ways to solve it.", "Problem Solving • Product Thinking • Entrepreneurship • Innovation", BrainCircuit],
  ["AI & Immersive Technology", "Explore AI tools, create digital worlds, and bring ideas to life through interactive experiences and physical models.", "Generative AI • AI Design • AI Content • AR • VR • XR • 3D • 3D Printing", Cpu],
  ["Arts, Culture & Heritage", "Express yourself through art and explore the traditions and stories around you.", "Art • Crafts • Music • Literature • Folk Arts • Heritage", Landmark],
] as const;

const benefits = [
  ["Discover Your Strengths", "Explore different interests and find what you enjoy doing.", Compass],
  ["Build Your Skills", "Learn, practise, ask questions, and improve with feedback.", Sparkles],
  ["Bring Ideas to Life", "Use what you learn to create something useful or meaningful.", Lightbulb],
  ["Find People to Grow With", "Meet people who share your interests and bring different experiences.", Users],
  ["Make a Contribution", "Share a skill, support an idea, or help someone take their next step.", HeartHandshake],
] as const;

const experiences = [
  ["Industry & Career", "Explore internships, industrial visits, CEO connect sessions, conferences, and summits. Discover how people use their skills in the working world.", industryImage, "Indian students and professionals speaking with an engineer during an industry visit"],
  ["Ideas & Innovation", "Take part in hackathons, ideathons, and shared challenges. Work with others to turn a problem into a possible solution.", ideasImage, "Indian makers developing and testing an idea together"],
  ["Arts & Culture", "Explore photography, music, and cultural events. Express yourself and discover different perspectives.", artsImage, "Indian artists sharing photography and music in a creative studio"],
  ["Play & Adventure", "Join games, trekking, and outdoor experiences. Step beyond your routine and build connections along the way.", adventureImage, "A group of friends trekking together in South India"],
  ["Wellbeing & Lifestyle", "Make time for yoga and shared wellbeing activities. Pause, recharge, and bring balance to your day.", wellbeingImage, "A group sharing a calm yoga practice in a garden courtyard"],
  ["Community & Collaboration", "Meet people, exchange ideas, and work on shared projects. Discover what you can create together.", collaborationImage, "Indian creatives exchanging ideas together at a community meetup"],
] as const;

const givingOptions = [
  ["Give Your Time", "Volunteer for community activities and help people learn and participate.", Clock3],
  ["Share Your Knowledge", "Share what you know through sessions, conversations, and guidance.", Presentation],
  ["Connect Us to Your Industry", "Open doors to industry visits, internships, projects, and useful connections.", Building2],
  ["Support Our Initiatives", "Help bring learning programmes, creative events, and Casebook to more people.", HeartHandshake],
  ["Contribute Financially", "Support opportunities for more people to learn, create, and grow.", HandCoins],
] as const;

const faqs = [
  ["Who can join?", "Anyone interested in learning, creating, or contributing. You can be a student, professional, business owner, homemaker, artist, or someone exploring a new interest."],
  ["Do I need experience or a creative qualification?", "No. You can begin with curiosity and a willingness to learn."],
  ["What can I learn?", "You can explore seven creative domains covering design, media, marketing, innovation, AI, immersive technology, arts, and culture."],
  ["Can I explore more than one domain?", "Yes. You can join multiple interest circles within one Orange Pie Community."],
  ["Can women and homemakers participate?", "Yes. Women and homemakers are welcome to learn, build confidence, share their abilities, and explore new possibilities."],
  ["Can companies and institutions collaborate?", "Yes. They can express interest in sharing expertise, supporting practical learning, and helping emerging talent and ideas grow."],
] as const;

function WhatsAppLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`action-link ${className}`}><span>{children}</span><ArrowRight size={18} aria-hidden="true" /></a>;
}

export function OrangePiePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="header-logo" aria-label="Orange Pie Community home"><img src={logoAsset.url} alt="Orange Pie Community" /></a>
          <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="header-cta">Join Our WhatsApp Community <ArrowDownRight size={17} /></a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mobile-join" onClick={() => setMenuOpen(false)}>Join Our WhatsApp Community</a>
        </nav>}
      </header>

      <main>
        <section className="hero section" aria-labelledby="hero-title">
          <div className="hero-bg" aria-hidden="true"><img src={heroBannerAsset.url} alt="" width={1792} height={896} fetchPriority="high" /></div>
          <div className="hero-veil" aria-hidden="true" />
          <div className="page-width hero-grid"><div className="hero-copy">
            <p className="eyebrow">ORANGE PIE COMMUNITY</p>
            <h1 id="hero-title"><span>A platform to discover your Kreativity.</span><span>Create new possibilities.</span></h1>
            <p className="hero-intro">Connect with people to explore ideas, learn from each other, and use your Kreativity to make a difference in everyday life, learning, and work.</p>
            <a href="#about" className="action-link"><span>Explore the Community</span><ArrowRight size={18} aria-hidden="true" /></a>
            <p className="supporting-line">Be curious. Share ideas. Create together.</p>
          </div></div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title"><div className="page-width about-grid">
          <figure className="community-image"><img src={communityImage} alt="People sharing ideas in a contemporary Indian creative studio" width={1280} height={960} loading="lazy" /></figure>
          <div className="about-copy"><p className="eyebrow">ABOUT THE COMMUNITY</p><h2 id="about-title">Your interests.<br /><span>New possibilities.</span></h2>
            <p>Explore what you enjoy through creative learning, events, and activities. Whoever you are, Orange Pie Community is a place to discover your <strong>Kreativity</strong> and grow with others.</p>
            <p>Turn your interests into skills, useful ideas, and opportunities to earn. Together, we can help Tamil Nadu&apos;s people and Orange Economy grow.</p>
          </div>
        </div></section>

        <section className="section direction" aria-labelledby="direction-title"><div className="page-width">
          <div className="direction-heading"><p className="eyebrow">OUR VISION &amp; MISSION</p><h2 id="direction-title">A better future begins<br />with what we can imagine today.</h2></div>
          <div className="direction-grid">
            <article className="direction-item"><div className="direction-label"><span><Eye size={23} aria-hidden="true" /></span><h3>Our Vision</h3></div><ul><li>A future where everyone can discover and use their <strong>Kreativity</strong>.</li><li>People who notice what is missing and imagine better ways.</li><li>Creative ideas that become useful solutions and improve everyday lives.</li><li>Communities that grow through new skills, meaningful work, and shared opportunities.</li></ul></article>
            <article className="direction-item"><div className="direction-label"><span><Zap size={23} aria-hidden="true" /></span><h3>Our Mission</h3></div><ul><li>Bring structured <strong>Kreativity</strong> learning into schools, colleges, workplaces, and everyday life.</li><li>Help people discover their strengths, build skills, and apply their learning.</li><li>Connect people through creative activities, shared projects, and industry experiences.</li><li>Develop <strong>2–3 lakh creative talents</strong> across <strong>Tamil Nadu by 2030</strong>.</li></ul></article>
          </div>
        </div></section>

        <section id="who-can-join" className="section audiences" aria-labelledby="audiences-title"><div className="page-width">
          <div className="section-heading"><p className="eyebrow">WHO CAN JOIN?</p><h2 id="audiences-title">Different journeys.<br /><span>A place for everyone.</span></h2></div>
          <div className="audience-grid">{audiences.map(([title, description, Icon], index) => <article key={title} className="audience-item"><span className="card-number">0{index + 1}</span><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div>
          <p className="audience-conclusion">These are some of the people we welcome. You do not have to fit a category to begin.</p>
        </div></section>

        <section id="what-you-can-learn" className="section learning" aria-labelledby="learning-title"><div className="page-width">
          <div className="learning-heading"><p className="eyebrow">WHAT YOU CAN LEARN</p><h2 id="learning-title">Follow an interest.<br /><span>Discover a new one.</span></h2><p>Explore learning across six creative domains. Begin with what you enjoy and discover where it can take you.</p></div>
          <div className="learning-grid">{learningDomains.map(([title, description, interests, Icon]) => <article className="learning-card" key={title}><span className="domain-icon"><Icon size={24} strokeWidth={1.7} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p><p className="domain-interests">{interests}</p></article>)}</div>
          <div className="learning-close"><div><p>You can join different interest circles within one Orange Pie Community.</p><p>Explore art and AI. Connect design with business. Bring storytelling into technology.</p></div><WhatsAppLink>Join Our WhatsApp Community</WhatsAppLink></div>
        </div></section>

        <section className="section economy" aria-labelledby="economy-title"><div className="page-width economy-grid">
          <div className="economy-copy"><p className="eyebrow">THE ORANGE ECONOMY</p><h2 id="economy-title">Ideas become creations.<br /><span>Creations become opportunities.</span></h2><div className="editorial-copy">
            <p>The films we watch, the music we enjoy, the designs we use, and the crafts we buy begin with people&apos;s ideas and skills.</p>
            <p>When creativity, culture, and knowledge become products, services, and work, they contribute to the Orange Economy.</p>
            <p className="emphasis">A designer helping a business. An artist selling their work. A filmmaker telling a story.</p>
            <p>There are many ways to be part of it.</p>
            <p>Orange Pie Community helps you explore yours—by learning skills, putting ideas into practice, and connecting with people.</p>
          </div></div>
          <figure className="economy-image"><img src={orangeEconomyImage} alt="Indian creatives developing ideas across design, media, and making" width={1280} height={960} loading="lazy" /></figure>
        </div></section>

        <section className="section why" aria-labelledby="why-title"><div className="page-width">
          <div className="section-heading"><p className="eyebrow">WHY JOIN?</p><h2 id="why-title">Learn it. Try it.<br /><span>See where it takes you.</span></h2></div>
          <div className="benefits-list">{benefits.map(([title, description, Icon], index) => <article className="benefit" key={title}><span className="benefit-number">0{index + 1}</span><span className="benefit-icon"><Icon size={22} strokeWidth={1.6} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div></section>

        <section className="section experiences" aria-labelledby="experiences-title"><div className="page-width">
          <div className="section-heading"><p className="eyebrow">EXPERIENCES IN THE COMMUNITY</p><h2 id="experiences-title">Beyond learning.<br /><span>Into lifestyle.</span></h2><p>Meet people, explore places, try new things, and make experiences part of your growth.</p></div>
          <div className="experience-grid">{experiences.map(([title, description, image, alt]) => <article key={title} className="experience-item"><div className="experience-image"><img src={image} alt={alt} width={1024} height={768} loading="lazy" /></div><div className="experience-copy"><h3>{title}</h3><p>{description}</p></div></article>)}</div>
          <div className="experience-footer"><p>Find something you enjoy. Try something unfamiliar. Make memories with others.</p><WhatsAppLink>Join Our WhatsApp Community</WhatsAppLink></div>
        </div></section>

        <section id="events" className="section events" aria-labelledby="events-title"><div className="page-width events-layout">
          <div><p className="eyebrow">COMMUNITY EVENTS</p><h2 id="events-title">Find your interest.<br /><span>Join the experience.</span></h2></div>
          <div className="events-copy"><p>From creative workshops and industry talks to cultural events and outdoor activities, find something you enjoy or try something new.</p><p>Meet people, share ideas, and explore your Kreativity together.</p><WhatsAppLink>Explore Event</WhatsAppLink></div>
        </div></section>

        <section id="casebook" className="section casebook" aria-labelledby="casebook-title"><div className="page-width casebook-grid">
          <div className="casebook-intro"><p className="eyebrow">CASEBOOK</p><h2 id="casebook-title">What comes next?<br /><span>when your idea won.</span></h2><p><strong>A hackathon or ideathon win can be the start of a bigger journey.</strong></p><p><strong>Casebook is a planned platform for student winners to take their ideas beyond the competition.</strong></p><p>It will bring participants together with invited startups, venture representatives, CEOs, and industry leaders to explore how their ideas can move forward.</p><div className="casebook-action"><p className="casebook-close">Give your idea a chance to go further.</p><a href="#registration" className="action-link"><span>Explore Casebook</span><ArrowRight size={18} aria-hidden="true" /></a></div></div>
          <div className="casebook-steps"><article><span>01</span><h3>Present Your Idea</h3><p>Explain the problem, your solution, and what you have created.</p></article><article><span>02</span><h3>Hear Different Perspectives</h3><p>Learn from questions and feedback that can help you strengthen your idea.</p></article><article><span>03</span><h3>Explore Your Next Step</h3><p>Build connections and explore possibilities for further development and collaboration.</p></article></div>
        </div></section>

        <section className="section collaborators" aria-labelledby="collaborators-title"><div className="page-width">
          <div className="section-heading centered"><p className="eyebrow">OUR COLLABORATORS</p><h2 id="collaborators-title">Together, we create more possibilities.</h2><p>Meet the companies working with Orange Pie Community to help people learn, connect, and grow.</p></div>
          <div className="logo-wall">
             <figure><img src={buizlabLogo.url} alt="Buiz Lab" /></figure><figure><img src={savemomLogo.url} alt="Savemom" /></figure><figure><img src={atplLogo.url} alt="Auroversity Technologies" /></figure><figure><img src={digitallLogo.url} alt="Digitall Digital Transformation Forum" /></figure>
          </div>
        </div></section>

        <section className="section give-back" aria-labelledby="give-back-title"><div className="page-width">
          <div className="give-heading"><p className="eyebrow">GIVE BACK TO THE COMMUNITY</p><h2 id="give-back-title">What you share.<br /><span>Be someone&apos;s next possibility.</span></h2><p>Your time, knowledge, or support can help someone discover their Kreativity and build their skills. Whether you are an individual, a company, or an institution, there is a way to contribute.</p></div>
          <div className="give-layout"><div className="giving-list">{givingOptions.map(([title, description, Icon], index) => <article key={title}><span className="giving-number">0{index + 1}</span><Icon size={23} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div><a href="#registration" className="action-link"><span>Give Back to the Community</span><ArrowRight size={18} aria-hidden="true" /></a></div>
        </div></section>

        <section id="faqs" className="section faqs" aria-labelledby="faq-title"><div className="page-width faq-grid">
          <div><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2 id="faq-title">A few things you may want to know.</h2></div>
          <div className="accordion">{faqs.map(([question, answer], index) => <details key={question} name="faq" open={index === 0}><summary><span>{question}</span><ChevronDown size={22} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
        </div></section>

        <section id="registration" className="section registration" aria-labelledby="registration-title"><div className="page-width registration-grid">
          <div className="registration-intro"><p className="eyebrow">JOIN THE COMMUNITY</p><h2 id="registration-title">Your Kreativity has a place here.</h2><p>Whether you want to learn, explore, create, or contribute, start by introducing yourself.</p></div>
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="field-grid"><label><span>Full name</span><input name="name" type="text" placeholder="Enter your name" autoComplete="name" required /></label><label><span>Email address</span><input name="email" type="email" placeholder="Enter your email address" autoComplete="email" required /></label></div>
            <label><span>City / Town</span><input name="city" type="text" placeholder="Enter your city or town" autoComplete="address-level2" required /></label>
            <label><span>Which best describes you?</span><select name="role" defaultValue="" required><option value="" disabled>Select one.</option><option>School Student</option><option>College Student</option><option>Professional</option><option>Entrepreneur</option><option>CXOs</option><option>Institutions </option><option>Industry / Organisation</option><option>Artists</option><option>Other</option></select></label>
            <fieldset><legend>What would you like to explore?<small>Select all that interest you.</small></legend><div className="checkbox-list">{["Discover and develop my Kreativity", "Connect with people and exchange business ideas", "Create and collaborate on real time projects", "Share my knowledge to young talents", "Contribute to community initiatives"].map((item) => <label key={item}><input type="checkbox" name="interests" value={item} /><span>{item}</span></label>)}</div></fieldset>
            <label className="consent"><input type="checkbox" name="consent" required /><span>I agree to be contacted about my registration and community participation. I have read the Privacy Policy.</span></label>
            <button type="submit" className="submit-button">Submit My Registration <ArrowRight size={19} aria-hidden="true" /></button>
          </form>
        </div></section>
      </main>

      <footer className="footer"><div className="footer-main"><div className="page-width footer-grid">
        <a href="#top" className="footer-brand" aria-label="Orange Pie Community home"><img src={footerLogoAsset.url} alt="Orange Pie Community — Human. Powered by Kreativity" /></a>
        <nav className="footer-links" aria-label="Footer navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="footer-contact"><h2>Contact Us</h2><a href="tel:9444948494">9444948494</a><a href="mailto:OPL@gmail.com">OPL@gmail.com</a></div>
        <nav className="social-links" aria-label="Social media"><a href="https://www.facebook.com/profile.php?id=61594534073105" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a><a href="https://www.instagram.com/orangepie.ai/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a><a href="https://www.youtube.com/channel/UCP9rEHGptx_tYibTF8ymUwA" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a><a href="https://x.com/Orangepieai" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a><a href="https://in.pinterest.com/Orangepieai/" target="_blank" rel="noreferrer" aria-label="Pinterest"><FaPinterestP /></a><a href="https://www.linkedin.com/company/143884050/admin/dashboard/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a><span className="social-link-disabled" role="img" aria-label="Google Maps"><FaMapLocationDot /></span></nav>
      </div></div><div className="footer-legal"><div className="page-width"><p>Copyrights reserved by orangepie community @2026</p></div></div></footer>
    </div>
  );
}