import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const obs = new IntersectionObserver((els) => {
      els.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) nav.style.background = window.scrollY > 40 ? 'rgba(10,15,10,0.97)' : 'rgba(10,15,10,0.85)';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignup = () => {
    const input = document.getElementById('phone-input') as HTMLInputElement;
    if (!input.value) {
      input.focus();
      return;
    }
    navigate('/setup');
  };

  return (
    <div className="landing-page noise-overlay">
      <nav>
        <div className="logo">Bot<span>Bazaar</span></div>
        <ul className="nav-links">
          <li><a href="#how">How it works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>
        <button className="nav-cta" onClick={() => navigate('/setup')}>Start Free →</button>
      </nav>

      <section className="hero">
        <div className="hero-badge"><div className="pulse"></div> India's simplest WhatsApp AI bot builder</div>
        <h1>Your shop.<br /><span className="accent">Never sleeps.</span></h1>
        <p className="hero-sub">Set up an AI chatbot for your WhatsApp business in 10 minutes. No coding. No tech team. Just customers getting instant replies — in Hindi & English.</p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={handleSignup}>Start Free — No Card Needed</button>
          <a href="#how" className="btn-sec" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',textDecoration:'none'}}>See how it works ↓</a>
        </div>
        <div className="phone-wrap">
          <div className="phone">
            <div className="phone-top"><div className="phone-notch"></div></div>
            <div className="chat-header">
              <div className="avatar">🏪</div>
              <div>
                <div className="chat-name">Sharma Medical Store</div>
                <div className="chat-status">● Online — powered by BotBazaar AI</div>
              </div>
            </div>
            <div className="chat-body">
              <div className="msg in d1">Bhai, Dolo 650 milegi? Aur price kya hai?</div>
              <div className="msg out d2">Haan ji! Dolo 650 available hai ✅<br />Price: ₹32 / strip<br />Stock: 48 strips<br /><br />Home delivery ke liye "ORDER" type karein 🚚</div>
              <div className="msg in d3">ORDER</div>
              <div className="msg out d4">Perfect! Naam aur address bata do 📍<br />15-20 min mein pahunch jaayega 🛵</div>
              <div className="msg in d5">Rajesh Kumar, C-14 Lajpat Nagar</div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat"><div className="stat-n">500M+</div><div className="stat-l">WhatsApp users in India</div></div>
        <div className="stat"><div className="stat-n">10 min</div><div className="stat-l">Setup time, no coding</div></div>
        <div className="stat"><div className="stat-n">24/7</div><div className="stat-l">AI replies for your shop</div></div>
        <div className="stat"><div className="stat-n">₹299</div><div className="stat-l">Per month, cancel anytime</div></div>
      </div>

      <section className="section reveal" id="how">
        <div className="section-tag">How it works</div>
        <h2 className="section-title">3 steps.<br />Bot is live.</h2>
        <p className="section-sub">No developers. No complicated setup. Just answer a few questions and your AI is ready.</p>
        <div className="steps">
          <div className="step" data-n="1">
            <div className="step-icon">📝</div>
            <div className="step-title">Tell us about your business</div>
            <div className="step-desc">Fill a simple form — your shop name, what you sell, your hours, prices. Takes 5 minutes.</div>
          </div>
          <div className="step" data-n="2">
            <div className="step-icon">🤖</div>
            <div className="step-title">AI learns your business</div>
            <div className="step-desc">BotBazaar AI reads your info and becomes an expert on your shop — products, FAQs, your tone.</div>
          </div>
          <div className="step" data-n="3">
            <div className="step-icon">📱</div>
            <div className="step-title">Connect to WhatsApp</div>
            <div className="step-desc">Scan a QR code. Your AI goes live on WhatsApp Business and starts replying instantly.</div>
          </div>
          <div className="step" data-n="4">
            <div className="step-icon">💰</div>
            <div className="step-title">Watch orders come in</div>
            <div className="step-desc">Customers get instant answers. You get notified for real orders. Sleep peacefully — bot handles the rest.</div>
          </div>
        </div>
      </section>

      <div className="pricing-wrap reveal" id="pricing">
        <div className="pricing-inner">
          <div className="section-tag" style={{ textAlign: 'center' }}>Pricing</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Less than your<br />morning chai ☕</h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>No hidden charges. No setup fee. Cancel anytime.</p>
          <div className="plans">
            <div className="plan">
              <div className="plan-name">Free</div>
              <div className="plan-price">₹0<span>/mo</span></div>
              <div className="plan-desc">Perfect to try it out</div>
              <ul className="plan-features">
                <li>50 replies per month</li>
                <li>1 WhatsApp number</li>
                <li>Basic FAQ bot</li>
                <li>Hindi + English</li>
              </ul>
              <button className="plan-btn outline" onClick={() => navigate('/setup')}>Start Free</button>
            </div>
            <div className="plan featured">
              <div className="plan-badge">MOST POPULAR</div>
              <div className="plan-name">Pro</div>
              <div className="plan-price">₹299<span>/mo</span></div>
              <div className="plan-desc">For serious shop owners</div>
              <ul className="plan-features">
                <li>Unlimited replies</li>
                <li>Order taking via WhatsApp</li>
                <li>Appointment booking</li>
                <li>Custom AI personality</li>
                <li>Daily sales report on WhatsApp</li>
                <li>Priority support</li>
              </ul>
              <button className="plan-btn primary" onClick={() => navigate('/setup')}>Get Started →</button>
            </div>
            <div className="plan">
              <div className="plan-name">Business</div>
              <div className="plan-price">₹999<span>/mo</span></div>
              <div className="plan-desc">For multiple branches</div>
              <ul className="plan-features">
                <li>Everything in Pro</li>
                <li>Up to 5 WhatsApp numbers</li>
                <li>Team inbox dashboard</li>
                <li>CRM integration</li>
                <li>Custom branding</li>
              </ul>
              <button className="plan-btn outline" onClick={() => navigate('/setup')}>Contact Sales</button>
            </div>
          </div>
        </div>
      </div>

      <section className="testimonials reveal" id="testimonials">
        <div className="section-tag">Reviews</div>
        <h2 className="section-title">Shop owners<br />love it.</h2>
        <div className="testi-grid">
          <div className="testi">
            <div className="stars">★★★★★</div>
            <div className="testi-text">"Raat ko bhi orders aane lage. Pehle customer message karta tha, koi reply nahi hota. Ab bot turat jawab deta hai. Meri sale 40% badh gayi!"</div>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#1a3a1a' }}>🏪</div>
              <div><div className="testi-name">Rakesh Sharma</div><div className="testi-biz">Medical Store, Delhi</div></div>
            </div>
          </div>
          <div className="testi">
            <div className="stars">★★★★★</div>
            <div className="testi-text">"10 minute mein setup ho gaya. Mere staff ko kuch nahi karna padta. Bot khud appointments book karta hai. Bahut amazing product hai!"</div>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#2a1a2a' }}>💇</div>
              <div><div className="testi-name">Priya Mehta</div><div className="testi-biz">Beauty Salon, Mumbai</div></div>
            </div>
          </div>
          <div className="testi">
            <div className="stars">★★★★★</div>
            <div className="testi-text">"₹299 mein itna powerful tool? Competitors ₹2000+ le rahe hain. BotBazaar mera sabse achha investment tha is saal."</div>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: '#1a2a3a' }}>🍜</div>
              <div><div className="testi-name">Suresh Patel</div><div className="testi-biz">Tiffin Service, Bengaluru</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section reveal">
        <div className="cta-box">
          <h2>Ready to put your<br />shop on autopilot?</h2>
          <p>Join 500+ shop owners already using BotBazaar. Free to start. Setup in 10 minutes.</p>
          <div className="input-row">
            <input type="tel" placeholder="Enter your WhatsApp number" id="phone-input" />
            <button className="btn-primary" onClick={handleSignup}>Get Started Free →</button>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '16px' }}>No credit card required · Cancel anytime · Setup in 10 minutes</p>
          <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '8px' }}>Questions? Email us at <a href="mailto:botbazaar11@gmail.com" style={{ color: 'var(--green)', textDecoration: 'none' }}>botbazaar11@gmail.com</a></p>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Bot<span>Bazaar</span></div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:botbazaar11@gmail.com">Contact</a>
        </div>
        <div className="footer-copy">© 2026 BotBazaar. Made in India 🇮🇳 • <a href="mailto:botbazaar11@gmail.com" style={{ color: 'var(--muted)', textDecoration: 'none' }}>botbazaar11@gmail.com</a></div>
      </footer>
    </div>
  );
}
