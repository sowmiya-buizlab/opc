import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Brush,
  Building2,
  ChevronDown,
  Clock3,
  Compass,
  Cpu,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Landmark,
  Lightbulb,
  Menu,
  Megaphone,
  Palette,
  Presentation,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import heroBannerAsset from "../assets/about-banner.png.asset.json";
import orangeEconomyImage from "../assets/orange-economy.jpg";
import ceoImage from "../assets/experience-ceo-connect.jpg";
import industryImage from "../assets/experience-industry-visits.jpg";
import sportsImage from "../assets/experience-sports-play.jpg";
import hackathonImage from "../assets/experience-hackathons.jpg";
import workshopImage from "../assets/experience-workshops.jpg";
import artsImage from "../assets/experience-arts-culture.jpg";
import headerLogo from "../assets/orangepie-community-logo.png.asset.json";
import footerLogo from "../assets/opc2030-dark-logo.png.asset.json";
import atplLogo from "../assets/ATPL_1_logo.png.asset.json";
import savemomLogo from "../assets/Savemom_2.png.asset.json";
import buizlabLogo from "../assets/Buizlab_Logo_1.png.asset.json";
import digitallLogo from "../assets/Digitall_white_BG.png.asset.json";
import gdgLogo from "../assets/GDG_white_BG.png.asset.json";

const collaboratorLogos = [
  { url: buizlabLogo.url, alt: "Buiz Lab" },
  { url: savemomLogo.url, alt: "Savemom" },
  { url: atplLogo.url, alt: "Auroversity Technologies" },
  { url: digitallLogo.url, alt: "Digitall Digital Transformation Forum" },
  { url: gdgLogo.url, alt: "Google Developer Groups Madurai" },
];

const WHATSAPP_URL = "https://chat.whatsapp.com/LX2JpMqRa13IyIdP024twV";

const navItems = [
  ["Orangepie Labs", "orangepie-labs"],
  ["Who Can Join", "who-can-join"],
  ["What You Learn", "what-you-learn"],
  ["What You Experience", "what-you-experience"],
  ["Casebook", "casebook"],
  ["Events", "events"],
  ["Give Back", "give-back"],
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
  ["Media & Entertainment", "Learn to tell stories through pictures, movement, and sound.", "Film • Photography • Video • Editing • Animation • VFX • Music", Users],
  ["Creator, Brand & Marketing", "Create content and help businesses share their stories and reach people.", "Content • Branding • Digital Marketing • Advertising • Communication", Megaphone],
  ["Innovation & Design Thinking", "Understand a problem, explore ideas, and find better ways to solve it.", "Problem Solving • Product Thinking • Entrepreneurship • Innovation", BrainCircuit],
  ["AI & CREATIVE TECHNOLOGY", "", "Generative AI • AI Design • AI Video • AI Content • Creative AI", Cpu],
  ["IMMERSIVE & MAKER TECHNOLOGY", "", "AR • VR • XR • 3D • 3D Printing • Interactive Experiences", Compass],
  ["Arts, Culture & Heritage", "Express yourself through art and explore the traditions and stories around you.", "Art • Crafts • Music • Literature • Folk Arts • Heritage", Landmark],
] as const;

const experiences = [
  ["CEO Connect", "Meet business leaders, ask what shaped their choices and learn from the ideas, risks and lessons behind their journeys.", ceoImage, "Indian Kreators in a conversation with a business leader"],
  ["Industry Visits", "Step into real workplaces and discover how people, tools and teamwork turn ideas into something others use and experience.", industryImage, "Indian Kreators learning during an industry visit"],
  ["Sports & Play", "Share a game, find your team spirit and build friendships that continue beyond the final score.", sportsImage, "Indian Kreators enjoying a team game outdoors"],
  ["Hackathons & Ideathons", "Explore a challenge with people who think differently, test your ideas and discover what you can create together.", hackathonImage, "Indian Kreators collaborating during a hackathon"],
  ["Workshops", "Pick up a tool, experiment with a technique and turn something you’ve been curious about into something you can do.", workshopImage, "Indian Kreators participating in a hands-on workshop"],
  ["Arts & Culture", "Explore photography, music, and exchange stories with the people and find fresh inspiration in our shared heritage.", artsImage, "Indian Kreators sharing photography, music, and traditional crafts"],
] as const;

const givingOptions = [
  ["Give Your Time | Be a Volunteer", "Volunteer for community activities and help people learn and participate.", Clock3],
  ["Share Your Knowledge | Be a Mentor", "Share what you know through sessions, conversations, and guidance.", Presentation],
  ["Collaborate With Us | Be a Industry partner", "Open doors to industry visits, internships, projects, and useful connections.", Building2],
  ["Support Our Initiatives | Be a Community Builder", "Help to bring learning programmes, creative events to more people.", HeartHandshake],
  ["You Busy? | Be a Sponsor", "Support the community to make more people to learn, create, and grow.", HandCoins],
] as const;

const faqs = [
  ["Who can join?", "Anyone interested in learning, creating, or contributing. You can be a student, professional, business owner, homemaker, artist, or someone exploring a new interest."],
  ["Do I need experience or a creative qualification?", "No. You can begin with curiosity and a willingness to learn."],
  ["What can I learn?", "You can explore six creative domains covering design, media, marketing, innovation, AI, immersive technology, arts, and culture."],
  ["Can I explore more than one domain?", "Yes. You can join multiple interest circles within one Orange Pie Community."],
  ["Can women and homemakers participate?", "Yes. Women and homemakers are welcome to learn, build confidence, share their abilities, and explore new possibilities."],
  ["Can companies and institutions collaborate?", "Yes. They can express interest in sharing expertise, supporting practical learning, and helping emerging talent and ideas grow."],
] as const;

const describeOptions = ["School Student","College Student","Professional","Entrepreneur","CXOs","Institutions","Industry / Organisation","Artists","Other"];
const hackathonOptions = ["I have participated in a hackathon","I have won a hackathon","I haven’t participated in a hackathon"];
const exploreOptions = ["Discover and develop my Kreativity","Connect with people and exchange business ideas","Create and collaborate on real time projects","Share my knowledge to young talents","Contribute to community initiatives"];

function CasebookModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const required: [string, string][] = [["name","Full name"],["institution","College/Institution"],["phone","Phone number"],["email","Email"],["city","City / Town"]];
    for (const [key, label] of required) {
      if (!String(data.get(key) ?? "").trim()) { setError(`Please enter your ${label}.`); return; }
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(data.get("email")))) { setError("Please enter a valid email address."); return; }
    if (!String(data.get("describe") ?? "")) { setError("Please select which best describes you."); return; }
    if (!String(data.get("hackathon") ?? "")) { setError("Please select your hackathon experience."); return; }
    if (!data.get("consent")) { setError("Please agree to be contacted before submitting."); return; }
    setError("");
    setSubmitted(true);
    window.setTimeout(() => { setSubmitted(false); form.reset(); onClose(); }, 2000);
  };

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="casebook-form-title" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close form"><X size={20} aria-hidden="true" /></button>
        {submitted ? (
          <p className="modal-success" role="status">Your details have been submitted</p>
        ) : (
          <>
            <h2 id="casebook-form-title">Join OPC2030 Community</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label>Full Name<input name="name" type="text" autoComplete="name" placeholder="Enter your name" maxLength={100} /></label>
                <label>College/Institution<input name="institution" type="text" autoComplete="organization" placeholder="Enter your college or institution" maxLength={150} /></label>
              </div>
              <div className="form-row">
                <label>Ph no<input name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" maxLength={15} /></label>
                <label>Email<input name="email" type="email" autoComplete="email" placeholder="Enter your email address" maxLength={255} /></label>
              </div>
              <label>City / Town<input name="city" type="text" autoComplete="address-level2" placeholder="Enter your city or town" maxLength={100} /></label>
              <label>Which best describes you?
                <select name="describe" defaultValue="">
                  <option value="" disabled>Select one.</option>
                  {describeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
              <fieldset>
                <legend>What would you like to explore?</legend>
                <p className="field-hint">Select all that interest you.</p>
                {exploreOptions.map((o) => <label key={o} className="check-option"><input type="checkbox" name="explore" value={o} /><span>{o}</span></label>)}
              </fieldset>
              <label>What is your hackathon experience?
                <select name="hackathon" defaultValue="">
                  <option value="" disabled>Select one.</option>
                  {hackathonOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
              <label className="check-option consent"><input type="checkbox" name="consent" /><span>I agree to be contacted about my registration and community participation. I have read the Privacy Policy.</span></label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button type="submit" className="action-link form-submit"><span>Submit</span><ArrowRight size={17} aria-hidden="true" /></button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function WhatsAppLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`action-link ${className}`}><FaWhatsapp aria-hidden="true" /><span>{children}</span><ArrowRight size={17} aria-hidden="true" /></a>;
}

export function OrangePiePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [casebookOpen, setCasebookOpen] = useState(false);

  return <div id="top" className="site-shell">
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="header-logo" aria-label="Orangepie Community home"><img src={headerLogo.url} alt="Orangepie Community — Human. Powered by Kreativity" /></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <WhatsAppLink className="header-cta">Join OPC 2030 Community</WhatsAppLink>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<WhatsAppLink className="mobile-join">Join OPC 2030 Community</WhatsAppLink></nav>}
    </header>

    <main>
      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true"><img src={heroBannerAsset.url} alt="" width={1792} height={896} fetchPriority="high" /></div><div className="hero-veil" aria-hidden="true" />
        <div className="page-width hero-layout"><div className="hero-copy">
          <h1 id="hero-title"><span>A community bringing together</span><span>3 lakh Kreators by 2030</span></h1>
          <p className="hero-kicker">Let’s uplift our Orange Economy. <strong>Human. Powered by Kreativity.</strong></p>
          <p className="hero-intro">Connect with kreative people, explore ideas and learn from each other. Let’s use our Kreativity to make a difference in our lifestyle how we learn and work.</p>
          <WhatsAppLink>Join OPC 2030 Community</WhatsAppLink>
        </div></div>
      </section>

      <section className="section economy" aria-labelledby="economy-title"><div className="page-width economy-grid"><div className="economy-copy"><p className="eyebrow">THE ORANGE ECONOMY</p><h2 id="economy-title">Your Kreativity creates<br /><span>tomorrow’s opportunities.</span></h2><div className="editorial-copy"><p>The Orange Economy is where people earn a living by turning creativity, culture and ideas into products and services. From design, film and music to animation, gaming, art and crafts, creative work creates jobs, businesses and income.</p><p>These opportunities are growing. India’s animation, visual effects, gaming and comics (AVGC) sector is projected to need 20 lakh professionals by 2030, as highlighted in the Union Budget 2026.</p><p>Globally, UNESCO champions cultural and creative industries, while the United Nations recognises the creative economy’s role in sustainable development-helping creativity support livelihoods, preserve culture and strengthen communities.</p><p className="emphasis">Tomorrow’s opportunities can begin with what you create today.</p></div></div><figure className="economy-image"><img src={orangeEconomyImage} alt="Indian creatives developing ideas across design, media, and making" width={1280} height={960} loading="lazy" /></figure></div></section>

      <section id="orangepie-labs" className="section labs" aria-labelledby="labs-title"><div className="page-width labs-grid"><div><p className="eyebrow">WHY ORANGEPIE LABS</p><h2 id="labs-title">A framework that connects you with a wearable to shape your kreative lifestyle.</h2></div><div className="labs-copy"><p>Orangepie Labs is a framework that helps people explore their possibilities through awareness, knowledge and skills and discover their capability, with a wearable device to help track their progress.</p><p>What begins with awareness grows through learning and practice. Orangepie Labs helps people use their Kreativity in how they learn, work and live, turning their capability into contributions to the Orange Economy.</p><p>Starting in South Tamil Nadu, we are working towards bringing together 3 lakh Kreators across Tamil Nadu by 2030, helping people shape their lifestyle and create opportunities for themselves and others.</p><WhatsAppLink>Be Part of OPC 2030 community</WhatsAppLink></div></div></section>

      <section id="who-can-join" className="section audiences" aria-labelledby="audiences-title"><div className="page-width"><div className="section-heading audience-heading"><p className="eyebrow">WHO CAN JOIN?</p><h2 id="audiences-title">Kreativity is in everyone, everywhere.</h2></div><div className="audience-grid">{audiences.map(([title,description,Icon],index) => <article key={title} className="audience-item"><span className="card-number">0{index+1}</span><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section id="what-you-learn" className="section learning" aria-label="What You Learn"><div className="page-width"><div className="learning-heading"><p className="eyebrow">WHAT YOU LEARN</p><p>Connecting domains through Orangepie. Build knowledge, practise your skills and discover what you can create in these domains.</p></div><div className="learning-grid">{learningDomains.map(([title,description,interests,Icon]) => <article className="learning-card" key={title}><span className="domain-icon"><Icon size={24} strokeWidth={1.7} aria-hidden="true" /></span><h3>{title}</h3>{description && <p>{description}</p>}<p className="domain-interests">{interests}</p></article>)}</div><div className="learning-close"><p>Explore AI. Connect storytelling with business. Bring design into technology.</p><WhatsAppLink>Join OPC 2030 Community</WhatsAppLink></div></div></section>

      <section id="what-you-experience" className="section experiences" aria-labelledby="experiences-title"><div className="page-width"><div className="section-heading experience-heading"><p className="eyebrow">WHAT YOU EXPERIENCE</p><h2 id="experiences-title">A simple conversation, a shared challenge or a game together in the community can open new possibilities in your lifestyle.</h2></div><div className="experience-grid">{experiences.map(([title,description,image,alt]) => <article key={title} className="experience-item"><div className="experience-image"><img src={image} alt={alt} width={1024} height={768} loading="lazy" /></div><div className="experience-copy"><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>

      <section id="casebook" className="section casebook" aria-labelledby="casebook-title"><div className="page-width casebook-grid"><div className="casebook-intro"><p className="eyebrow">CASEBOOK</p><h2 id="casebook-title">Even a startup idea, starts with the Kreativity</h2><p>Winning a hackathon or ideathon is a moment to remember. Casebook is a planned platform to help student winners explore what comes after that moment.</p><p>By bringing them together with invited startups, venture representatives, CEOs and industry leaders, Casebook aims to give promising ideas room to be questioned, strengthened and taken further through feedback and potential collaboration.</p><p className="casebook-close">You’ve shown what your idea can win. Now explore what it could become.</p><button type="button" className="action-link" onClick={() => setCasebookOpen(true)}><span>Explore Casebook</span><ArrowRight size={17} aria-hidden="true" /></button></div><div className="casebook-steps"><article><span>01</span><h3>Present Your Idea</h3><p>Explain the problem, your solution, and what you have created.</p></article><article><span>02</span><h3>Hear Different Perspectives</h3><p>Learn from questions and feedback that can help you strengthen your idea.</p></article><article><span>03</span><h3>Explore Your Next Step</h3><p>Build connections and explore possibilities for further development and collaboration.</p></article></div></div></section>

      <section id="events" className="section events" aria-labelledby="events-title"><div className="page-width events-layout"><div><p className="eyebrow">COMMUNITY EVENTS</p><h2 id="events-title">Be one among the 3 Lakh Kreators<br /><span>Join to experience the life style</span></h2></div><div className="events-copy"><p>From kreative workshops and industry talks to cultural events and outdoor activities, find something you enjoy or try something new.</p><p>Meet people, share ideas, and explore your Kreativity together.</p><WhatsAppLink>Explore Event</WhatsAppLink></div></div></section>

      <section className="section collaborators" aria-labelledby="collaborators-title"><div className="page-width"><div className="section-heading collaborators-heading"><p className="eyebrow">OUR COLLABORATORS</p><h2 id="collaborators-title">Together, we create more possibilities.</h2><p>Meet the companies working with Orange Pie Community to help people learn, connect, and grow towards 3 lakh Kreators by 2030.</p><WhatsAppLink>Collaborate with OPC</WhatsAppLink></div><div className="logo-wall" aria-label="Collaborator logos"><div className="logo-track">{collaboratorLogos.map((logo) => (<figure key={logo.alt}><img src={logo.url} alt={logo.alt} /></figure>))}<div className="logo-track-dup" aria-hidden="true">{collaboratorLogos.map((logo) => (<figure key={`dup-${logo.alt}`}><img src={logo.url} alt="" /></figure>))}</div></div></div></div></section>

      <section id="give-back" className="section give-back" aria-labelledby="give-back-title"><div className="page-width give-layout"><div className="give-heading"><p className="eyebrow">GIVE BACK TO THE COMMUNITY</p><h2 id="give-back-title">Be someone to shape their lifestyle</h2><p>Your time, knowledge, or support can help someone discover their Kreativity and build their lifestyle. Whether you are an individual, a company, an entreprenuer, or an institution, there is a way to contribute.</p><WhatsAppLink>GIVE BACK TO THE COMMUNITY</WhatsAppLink></div><div className="giving-list">{givingOptions.map(([title,description,Icon],index) => <article key={title}><span className="giving-number">0{index+1}</span><Icon size={23} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>

      <section id="faqs" className="section faqs" aria-labelledby="faq-title"><div className="page-width faq-grid"><div><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2 id="faq-title">A few things you may want to know.</h2></div><div className="accordion">{faqs.map(([question,answer],index) => <details key={question} name="faq" open={index===0}><summary><span>{question}</span><ChevronDown size={22} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>
    </main>

    <footer className="footer"><div className="footer-main"><div className="page-width footer-grid"><a href="#top" className="footer-brand" aria-label="OPC 2030 home"><img src={footerLogo.url} alt="OPC 2030 — Community for 3L Kreators" /></a><div className="footer-column"><h2 className="footer-title">Quick link</h2><nav className="footer-links" aria-label="Footer quick links one"><a href="#orangepie-labs">Orangepie Labs</a><a href="#who-can-join">Who Can Join</a><a href="#what-you-learn">What You Learn</a></nav></div><div className="footer-column footer-column-without-title"><nav className="footer-links" aria-label="Footer quick links two"><a href="#what-you-experience">What You Experience</a><a href="#casebook">Casebook</a><a href="#events">Events</a><a href="#give-back">Give Back</a></nav></div><div className="footer-contact"><h2>Contact</h2><a href="mailto:opcnetworks2030@gmail.com">opcnetworks2030@gmail.com</a><a href="tel:9444948494">9444948494</a><nav className="social-links" aria-label="Social media"><a href="https://www.facebook.com/profile.php?id=61594534073105" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a><a href="https://www.instagram.com/orangepie.ai/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a><a href="https://www.youtube.com/channel/UCP9rEHGptx_tYibTF8ymUwA" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a><a href="https://x.com/Orangepieai" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a><a href="https://in.pinterest.com/Orangepieai/" target="_blank" rel="noreferrer" aria-label="Pinterest"><FaPinterestP /></a><a href="https://www.linkedin.com/company/143884050/admin/dashboard/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></nav></div></div></div><div className="footer-legal"><div className="page-width"><p>Copyrights reserved by orangepie community @2026</p></div></div></footer>
    <CasebookModal open={casebookOpen} onClose={() => setCasebookOpen(false)} />
  </div>;
}