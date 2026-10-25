import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  Check,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock3,
} from 'lucide-react';

type Machine = {
  name: string;
  kind: string;
  description: string;
  number: string;
};

const machines: Machine[] = [
  {
    name: 'CYNIC 370',
    kind: 'CNC Linear Turning Machine',
    description:
      'A precision-focused CNC turning solution designed to support demanding production environments.',
    number: '01',
  },
  {
    name: 'JUNIOR 370',
    kind: 'CNC Linear Turning Machine',
    description:
      'A considered linear turning platform for manufacturers seeking dependable machining performance.',
    number: '02',
  },
  {
    name: 'RIG 600',
    kind: 'CNC machining product',
    description:
      'A CNC machining solution from KTM, built around practical engineering and manufacturing needs.',
    number: '03',
  },
];

const interactiveModels = [
  { name: 'RIG 2000 T+', file: 'rig-2000-t-plus.html', number: '01', delay: '1' },
  { name: 'ELPHIS 21090', file: 'elphis-21090.html', number: '02', delay: '2' },
];

const navItems = [
  ['Our Story', '#story'],
  ['Products', '#products'],
  ['Industries', '#industries'],
  ['Events', '#events'],
  ['Presence', '#presence'],
  ['Clientele', '#clientele'],
  ['Contact', '#contact'],
];

const industries = [
  'Defence',
  'Aerospace',
  'Automobile',
  'Oil & Gas',
  'Medical',
  'Pump & Valve',
  'Die & Mould',
  'Agriculture & Earth Movers',
  'General Engineering',
];

const features = [
  '45° true slant-bed construction',
  'C3-grade ball screws',
  'High-precision LM guideways',
  'Digital servo spindle motor',
  'High-speed rigid spindle',
  'Hydraulic power chuck',
  'Linear tooling system',
  'Automatic lubrication and coolant systems',
];

function MachineIllustration({ compact = false }: { compact?: boolean }) {
  return (
    <svg viewBox="0 0 680 310" role="img" aria-label="Abstract CNC machine illustration">
      <defs>
        <linearGradient id="machineFront" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#778184" />
          <stop offset=".48" stopColor="#475154" />
          <stop offset="1" stopColor="#292f32" />
        </linearGradient>
        <linearGradient id="machineSide" x1="0" x2="1">
          <stop stopColor="#31393c" />
          <stop offset="1" stopColor="#1d2325" />
        </linearGradient>
        <linearGradient id="machineGlass" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#8e9a9d" stopOpacity=".68" />
          <stop offset="1" stopColor="#252d30" stopOpacity=".96" />
        </linearGradient>
      </defs>
      <ellipse cx="345" cy="273" rx="274" ry="17" fill="#080b0c" opacity=".4" />
      <path d="M111 88 479 54l103 34v168l-371 28-100-45z" fill="url(#machineFront)" stroke="#9ba4a6" strokeOpacity=".4" />
      <path d="m479 54 103 34v168l-103-39z" fill="url(#machineSide)" stroke="#899396" strokeOpacity=".33" />
      <path d="m136 101 315-29 3 116-315 28z" fill="#1d2426" stroke="#929c9f" strokeOpacity=".52" />
      <path d="m150 111 131-12v82l-131 12z" fill="url(#machineGlass)" stroke="#aab3b5" strokeOpacity=".5" />
      <path d="m292 98 145-13v81l-145 13z" fill="#20282b" stroke="#839094" strokeOpacity=".6" />
      <path d="m306 107 119-11v62l-119 11z" fill="#465256" />
      <path d="m314 115 54-5v42l-54 5z" fill="#171e20" />
      <path d="m375 109 57-5v41l-57 5z" fill="#171e20" />
      <path d="m170 127 91-9v48l-91 9z" fill="#465256" opacity=".7" />
      <path d="m172 132 84-8" stroke="#c4cccd" strokeOpacity=".35" />
      <path d="m172 141 77-7" stroke="#c4cccd" strokeOpacity=".25" />
      <path d="m172 150 68-6" stroke="#c4cccd" strokeOpacity=".2" />
      <path d="m120 209 364-34v43l-363 33z" fill="#283033" stroke="#899396" strokeOpacity=".25" />
      <path d="m111 234 371-34 100 37-371 35z" fill="#3b4447" />
      <path d="m211 244 260-24 71 24-263 24z" fill="#202629" />
      <path d="m130 243 87-8v23l-87 8z" fill="#171c1e" />
      <path d="m480 197 84 31v18l-84-30z" fill="#151a1c" />
      <path d="m451 75 21-2v24l-21 2z" fill="#f07835" />
      {!compact && (
        <>
          <path d="m491 112 72 25" stroke="#687477" strokeWidth="2" />
          <path d="m491 126 72 25" stroke="#687477" strokeWidth="2" />
          <path d="m491 140 72 25" stroke="#687477" strokeWidth="2" />
          <circle cx="522" cy="196" r="12" fill="#1b2224" stroke="#768184" />
          <circle cx="522" cy="196" r="4" fill="#f07835" />
          <path d="m105 252 369-34" stroke="#a9b2b4" strokeOpacity=".35" />
        </>
      )}
      <path d="m162 215 78-7" stroke="#d2d9da" strokeOpacity=".35" />
      <path d="m260 206 54-5" stroke="#f07835" strokeWidth="3" />
      <path d="m325 200 116-11" stroke="#d2d9da" strokeOpacity=".28" />
      <rect x="463" y="112" width="18" height="35" rx="2" fill="#252c2f" stroke="#899396" strokeOpacity=".5" />
      <circle cx="472" cy="121" r="2" fill="#f07835" />
      <path d="m495 181 48 17" stroke="#929da0" strokeOpacity=".28" />
    </svg>
  );
}

function MachineModelSlot({ label }: { label: string }) {
  return (
    <div className="machine-art" aria-label={`${label} visual placeholder`}>
      {/* CYNIC 370 and JUNIOR 370 remain placeholders until matching models are supplied. */}
      <MachineIllustration />
    </div>
  );
}

function InteractiveMachineModel({
  name,
  file,
  number,
  delay,
}: {
  name: string;
  file: string;
  number: string;
  delay: string;
}) {
  return (
    <article className={`machine-model-card reveal delay-${delay}`}>
      <div className="machine-model-heading">
        <div>
          <div className="eyebrow">Interactive model / {number}</div>
          <h3>{name}</h3>
        </div>
        <span className="model-caption">360° product showcase</span>
      </div>
      <iframe
        className="machine-model-frame"
        title={`Interactive 3D model of ${name}`}
        src={`${import.meta.env.BASE_URL}models/${file}`}
        loading="lazy"
        sandbox="allow-scripts"
        referrerPolicy="no-referrer"
      >
        Your browser does not support embedded 3D previews.
      </iframe>
    </article>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand ${footer ? 'footer-brand' : ''}`} href="#top" aria-label="KTM home">
      <span className="brand-mark">KTM</span>
      <span className="brand-copy">
        <span>Technology &amp; Innovation</span>
        <span>India Pvt. Ltd.</span>
      </span>
    </a>
  );
}

function ProductVisual({ number, label }: { number: string; label: string }) {
  return (
    <div className="product-visual" aria-hidden="true">
      <span className="product-number">KTM / {number}</span>
      <span className="product-orbit" />
      {label === 'CYNIC 370' || label === 'JUNIOR 370'
        ? <MachineModelSlot label={label} />
        : <MachineIllustration compact />}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [interestedMachine, setInterestedMachine] = useState('');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedMachine) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedMachine(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedMachine]);

  const goToQuote = (machine?: string) => {
    if (machine) setInterestedMachine(machine);
    setSelectedMachine(null);
    setMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    const name = String(data.get('name') || '').trim();
    const company = String(data.get('company') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name) nextErrors.name = 'Please enter your name.';
    if (!company) nextErrors.company = 'Please enter your company.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email address.';
    if (!/^[+()\d\s-]{7,}$/.test(phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!message) nextErrors.message = 'Please tell us a little about your requirements.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setSuccess(false);
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }
    setSuccess(true);
    form.reset();
    setInterestedMachine('');
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <a className="button button-primary header-quote" href="#contact" data-testid="link-request-quote">Request a Quote <ArrowRight size={14} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="mobile-quote" href="#contact" onClick={() => setMenuOpen(false)}>Request a Quote <ArrowRight size={14} /></a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">PRECISION ENGINEERING · CNC TECHNOLOGY</div>
              <h1 id="hero-title">Engineered for Precision. <span>Built for Performance.</span></h1>
              <p className="hero-description">Advanced CNC machining solutions for demanding manufacturing applications. Explore precision engineering designed for industries that move the world.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#products">Explore Our Machines <ArrowRight size={15} /></a>
                <a className="button button-outline" href="#contact">Contact Sales <ArrowRight size={15} /></a>
              </div>
              <div className="hero-meta"><span className="rule" /><span>Engineering for what’s next</span></div>
            </div>
            <div className="hero-stage" aria-label="CYNIC 370 CNC machine showcase">
              <div className="stage-grid" />
              <div className="stage-ring" />
              <span className="stage-index">KTM / MACHINE 001</span>
              <MachineModelSlot label="CYNIC 370" />
              <div className="stage-caption">
                <strong>CYNIC 370</strong>
                <span>CNC LINEAR TURNING MACHINE</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <span>Precision-led manufacturing</span>
              <strong>Solutions for modern industry</strong>
              <span>Engineering experience</span>
              <a href="#story" className="eyebrow">Discover KTM <ArrowDownRight size={13} /></a>
            </div>
          </div>
        </section>

        <section className="section products" id="products">
          <div className="container">
            <div className="section-heading-row reveal">
              <div>
                <div className="eyebrow section-kicker">Our machines / 01</div>
                <h2 className="section-title">Explore Our Machines</h2>
              </div>
              <p className="section-intro">Discover precision-engineered CNC solutions for modern manufacturing.</p>
            </div>
            <div className="interactive-model-grid" aria-label="Interactive machine models">
              {interactiveModels.map((model) => (
                <InteractiveMachineModel key={model.file} {...model} />
              ))}
            </div>
            <div className="product-grid">
              {machines.map((machine, index) => (
                <article className={`product-card reveal delay-${index + 1}`} key={machine.name} data-testid={`card-product-${machine.name.toLowerCase().replace(' ', '-')}`}>
                  <ProductVisual number={machine.number} label={machine.name} />
                  <div className="product-info">
                    <h3>{machine.name}</h3>
                    <span className="product-kind">{machine.kind}</span>
                    <p>{machine.description}</p>
                    <div className="product-actions">
                      <button className="text-link" onClick={() => setSelectedMachine(machine)} data-testid={`button-explore-${machine.name.toLowerCase().replace(' ', '-')}`}>Explore Machine <ArrowRight size={14} /></button>
                      <button className="button button-dark" onClick={() => goToQuote(machine.name)} data-testid={`button-quote-${machine.name.toLowerCase().replace(' ', '-')}`}>Request a Quote</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section technical" id="precision">
          <div className="container technical-grid">
            <div className="technical-copy reveal">
              <div className="eyebrow section-kicker">Built around precision / 02</div>
              <h2 className="section-title">Precision in Every Detail</h2>
              <p>Thoughtful machine construction and carefully selected systems come together to support reliable, repeatable machining.</p>
              <span className="technical-note">ENGINEERING DETAIL / KTM CNC PLATFORM</span>
            </div>
            <div className="feature-list">
              {features.map((feature, index) => (
                <div className={`feature-row reveal delay-${index % 3 + 1}`} key={feature}>
                  <span>{String(index + 1).padStart(2, '0')}</span><strong>{feature}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section industries" id="industries">
          <div className="container">
            <div className="industries-top reveal">
              <div>
                <div className="eyebrow section-kicker">Applications / 03</div>
                <h2 className="section-title">Industries We Serve</h2>
              </div>
              <p className="section-intro">CNC manufacturing and engineering solutions for a broad cross-section of industry, from corporates and Tier-2 industries to MSMEs and government.</p>
            </div>
            <div className="industry-grid">
              {industries.map((industry, index) => (
                <div className="industry-item reveal" key={industry}><span>{String(index + 1).padStart(2, '0')}</span><strong>{industry}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section story" id="story">
          <div className="container story-grid">
            <div className="story-mark reveal" aria-hidden="true">
              <span className="story-monogram">KTM</span>
              <span className="story-coordinates">TECHNOLOGY &amp; INNOVATION · INDIA</span>
            </div>
            <div className="story-copy reveal delay-1">
              <div className="eyebrow section-kicker">Our story / 04</div>
              <h2 className="section-title">Engineering Progress Through Precision</h2>
              <p>KTM Technology &amp; Innovation delivers CNC machining solutions for a wide range of industrial applications, supported by engineering experience and a commitment to precision.</p>
              <p>Founded in 2015, KTM works with manufacturing organizations across corporate, Tier-2, MSME, and government sectors.</p>
              <div className="story-facts">
                <div className="story-fact"><strong>2015</strong><span>Founded</span></div>
                <div className="story-fact"><strong>18+</strong><span>Years experience*</span></div>
              </div>
              <p className="verification-note">*18+ years experience is a company-provided claim and requires client verification.</p>
            </div>
          </div>
        </section>

        <section className="company-context" aria-label="KTM company context">
          <div className="container context-grid">
            <article className="context-card reveal">
              <div className="eyebrow">01 / Perspective</div>
              <h3>Precision, applied.</h3>
              <p>Engineering choices grounded in the practical requirements of modern manufacturing.</p>
            </article>
            <article className="context-card reveal delay-1">
              <div className="eyebrow">02 / Partnership</div>
              <h3>Built through dialogue.</h3>
              <p>Our team works with customers to understand machining requirements and applications.</p>
            </article>
            <article className="context-card reveal delay-2">
              <div className="eyebrow">03 / Progress</div>
              <h3>Focused on what’s next.</h3>
              <p>Technology and engineering experience in service of evolving industrial needs.</p>
            </article>
          </div>
        </section>

        <section className="section company-context" id="events">
          <div className="container industries-top reveal">
            <div>
              <div className="eyebrow section-kicker">On the ground / 05</div>
              <h2 className="section-title">Events &amp; Conversations</h2>
            </div>
            <p className="section-intro">We value the conversations that move manufacturing forward. Connect with KTM to learn about our latest updates and upcoming industry engagements.</p>
          </div>
        </section>

        <section className="section" id="presence">
          <div className="container context-grid reveal">
            <article className="context-card">
              <div className="eyebrow">Presence / 06</div>
              <h3>Engineering, within reach.</h3>
              <p>Connect with our team in India to discuss CNC machining requirements and product enquiries.</p>
            </article>
            <article className="context-card" id="clientele">
              <div className="eyebrow">Clientele / 07</div>
              <h3>Across manufacturing.</h3>
              <p>Serving a diverse industrial landscape across corporates, Tier-2 industries, MSMEs, and government.</p>
            </article>
            <article className="context-card">
              <div className="eyebrow">Let’s connect</div>
              <h3>Start a conversation.</h3>
              <p>Tell us what you need to make. Our team will help you explore the right next step.</p>
            </article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <div className="eyebrow section-kicker">Enquiries / 08</div>
              <h2 className="section-title">Let’s Build Something Precise.</h2>
              <p className="section-intro">Connect with our team to discuss your machining requirements.</p>
              <div className="contact-details">
                <a href="tel:+916357300777"><Phone size={16} /> +91 63573 00777</a>
                <a href="tel:+916357300766"><Phone size={16} /> +91 63573 00766</a>
                <a href="mailto:marketing@ktmtechno.com"><Mail size={16} /> marketing@ktmtechno.com</a>
                <div><MapPin size={16} /> KTM Technology &amp; Innovation (India) Pvt. Ltd.</div>
              </div>
              <a href="tel:+916357300777" className="contact-call"><Phone size={15} /> Call Our Team</a>
            </div>
            <form className="contact-form reveal delay-1" onSubmit={submitEnquiry} noValidate>
              {success && <div className="form-success" role="status" data-testid="status-enquiry-success"><Check size={16} /> Thank you. Your enquiry has been prepared in this demo; no information has been sent or saved.</div>}
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} onChange={() => setErrors((old) => ({ ...old, name: '' }))} data-testid="input-name" />
                {errors.name && <span className="form-error" id="name-error">{errors.name}</span>}
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" autoComplete="organization" aria-invalid={!!errors.company} aria-describedby={errors.company ? 'company-error' : undefined} onChange={() => setErrors((old) => ({ ...old, company: '' }))} data-testid="input-company" />
                {errors.company && <span className="form-error" id="company-error">{errors.company}</span>}
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} onChange={() => setErrors((old) => ({ ...old, email: '' }))} data-testid="input-email" />
                {errors.email && <span className="form-error" id="email-error">{errors.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} onChange={() => setErrors((old) => ({ ...old, phone: '' }))} data-testid="input-phone" />
                {errors.phone && <span className="form-error" id="phone-error">{errors.phone}</span>}
              </div>
              <div className="field full">
                <label htmlFor="machine">Interested Machine</label>
                <select id="machine" name="machine" value={interestedMachine} onChange={(event) => setInterestedMachine(event.target.value)} data-testid="select-machine">
                  <option value="">Select a machine (optional)</option>
                  {machines.map((machine) => <option value={machine.name} key={machine.name}>{machine.name}</option>)}
                  <option value="General enquiry">General enquiry</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your machining requirements" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} onChange={() => setErrors((old) => ({ ...old, message: '' }))} data-testid="input-message" />
                {errors.message && <span className="form-error" id="message-error">{errors.message}</span>}
              </div>
              <div className="form-submit">
                <span className="form-note">Demo enquiry · No data is sent or stored</span>
                <button className="button button-primary" type="submit" data-testid="button-submit-enquiry">Send Enquiry <ArrowRight size={15} /></button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Brand footer />
            <p>CNC machining solutions for a wide range of industrial applications, supported by engineering experience and a commitment to precision.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <div className="footer-links">
              <a href="#story">Our Story</a><a href="#products">Products</a><a href="#precision">Precision</a><a href="#industries">Industries</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <div className="footer-links">
              <a href="#events">Events</a><a href="#presence">Presence</a><a href="#clientele">Clientele</a><a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <div className="footer-links">
              <a href="tel:+916357300777">+91 63573 00777</a>
              <a href="tel:+916357300766">+91 63573 00766</a>
              <a href="mailto:marketing@ktmtechno.com">marketing@ktmtechno.com</a>
              <span><Clock3 size={12} /> Monday–Saturday<br />9:00 AM–6:00 PM</span>
              <a href="#contact" className="button button-primary">Request a Quote <ArrowRight size={13} /></a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} KTM Technology &amp; Innovation (India) Pvt. Ltd.</span>
          <span>PRECISION ENGINEERING · CNC TECHNOLOGY</span>
          <a href="#top" className="back-top">Back to top <ArrowUp size={13} /></a>
        </div>
      </footer>

      {selectedMachine && (
        <div className="detail-modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedMachine(null);
        }}>
          <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="machine-modal-title">
            <button className="modal-close" aria-label="Close machine details" onClick={() => setSelectedMachine(null)} data-testid="button-close-machine-details"><X size={18} /></button>
            <div className="eyebrow">KTM / PRODUCT {selectedMachine.number}</div>
            <h2 id="machine-modal-title">{selectedMachine.name}</h2>
            <strong className="product-kind">{selectedMachine.kind}</strong>
            <p>{selectedMachine.description}</p>
            <p>Speak with our team to discuss applications, requirements, and further product information.</p>
            <button className="button button-primary" onClick={() => goToQuote(selectedMachine.name)}>Request a Quote <ArrowRight size={15} /></button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
