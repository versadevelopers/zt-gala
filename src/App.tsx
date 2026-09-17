import { useState } from 'react'

const NAV_LINKS = ['Menu', 'About', 'Reservations', 'Private Dining', 'Contact']

const MENU_TABS = ['Cuts', 'Starters', 'Sides', 'Wine']

const CUTS = [
  {
    name: 'Prime Ribeye',
    cut: '16 oz — USDA Prime, bone-in',
    desc: 'Dry-aged 45 days. Generous marbling, intense beefy flavor. Finished with compound herb butter.',
    price: '$89',
    badge: 'Signature',
  },
  {
    name: 'Filet Mignon',
    cut: '8 oz — Center-cut tenderloin',
    desc: 'Exceptionally tender with a mild, buttery texture. Served with bordelaise reduction.',
    price: '$74',
    badge: null,
  },
  {
    name: 'New York Strip',
    cut: '14 oz — USDA Prime',
    desc: 'Firm texture and bold flavor. A classic choice, cooked over hardwood and finished in cast iron.',
    price: '$68',
    badge: null,
  },
  {
    name: 'Tomahawk',
    cut: '40 oz — Long-bone ribeye',
    desc: 'A ceremonial cut for two. 60-day dry-aged with full rib bone intact. Carved tableside.',
    price: '$165',
    badge: 'For Two',
  },
  {
    name: 'Wagyu Striploin',
    cut: '12 oz — A5 Japanese import',
    desc: 'The pinnacle of beef. Extraordinary fat distribution yielding an incomparable depth of flavor.',
    price: '$195',
    badge: 'Premium',
  },
  {
    name: 'Porterhouse',
    cut: '28 oz — Strip & tenderloin',
    desc: 'Two cuts in one: a New York strip and a filet, separated by a T-bone. Best for two.',
    price: '$118',
    badge: null,
  },
]

const STARTERS = [
  { name: 'Beef Tartare', desc: 'Hand-cut prime beef, cured egg yolk, shallot, Dijon, capers, toasted brioche', price: '$28' },
  { name: 'Oysters Rockefeller', desc: 'Six East Coast oysters, spinach cream, Gruyère, anise, broiled', price: '$32' },
  { name: 'Bone Marrow', desc: 'Roasted veal marrow, oxtail marmalade, grilled sourdough, cornichons', price: '$24' },
  { name: 'Burrata & Heirloom Tomato', desc: 'Imported Italian burrata, heirloom tomatoes, aged balsamic, Sicilian olive oil', price: '$22' },
]

const SIDES = [
  { name: 'Truffle Mac & Cheese', desc: 'Aged cheddar, black truffle shavings, toasted breadcrumb', price: '$18' },
  { name: 'Creamed Spinach', desc: 'Sautéed with shallots, nutmeg, Parmesan, finished with heavy cream', price: '$14' },
  { name: 'Roasted Bone Marrow Fries', desc: 'Double-fried, tossed in bone marrow compound butter, flaked salt', price: '$16' },
  { name: 'Lobster Hash', desc: 'Diced Maine lobster, fingerling potatoes, tarragon, chives', price: '$26' },
]

const WINES = [
  { name: 'Caymus Cabernet Sauvignon', region: 'Napa Valley, CA — 2021', price: '$185' },
  { name: 'Opus One', region: 'Napa Valley, CA — 2019', price: '$480' },
  { name: 'Château Pichon Baron', region: 'Pauillac, Bordeaux — 2018', price: '$220' },
  { name: 'Silver Oak Cabernet', region: 'Alexander Valley, CA — 2020', price: '$135' },
  { name: 'Duckhorn Merlot', region: 'Napa Valley, CA — 2021', price: '$95' },
]

const TESTIMONIALS = [
  {
    quote: 'The finest steakhouse in the city, bar none. The 45-day dry-aged ribeye is a religious experience.',
    author: 'Jonathan Mercer',
    title: 'Food Critic, The Metropolitan Review',
  },
  {
    quote: 'From the tableside carving to the last drop of bordeaux, every detail is considered. An institution.',
    author: 'Claire Ashworth',
    title: 'Michelin Inspector',
  },
  {
    quote: "I've dined in every great steakhouse in America. Ember & Oak stands alone.",
    author: 'David Calloway',
    title: 'Author, The American Table',
  },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('Cuts')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ background: '#0f0e0d', color: '#e8e2d9', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: 'linear-gradient(to bottom, rgba(15,14,13,0.98), rgba(15,14,13,0))', backdropFilter: 'blur(2px)' }}
      >
        <div className="font-display text-xl tracking-widest uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9933a', letterSpacing: '0.2em' }}>
          Ember &amp; Oak
        </div>
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: '#b8a99a', letterSpacing: '0.15em' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c9933a')}
              onMouseLeave={e => (e.currentTarget.style.color = '#b8a99a')}
            >
              {link}
            </a>
          ))}
          <a
            href="#reservations"
            className="text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200"
            style={{ border: '1px solid #c9933a', color: '#c9933a', letterSpacing: '0.15em' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#c9933a'; e.currentTarget.style.color = '#0f0e0d' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9933a' }}
          >
            Reserve
          </a>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className="block w-6 h-px" style={{ background: '#c9933a' }} />
          ))}
        </button>
      </nav>

      {/* MOBILE NAV DRAWER */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ background: 'rgba(15,14,13,0.98)' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="font-display text-2xl tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#e8e2d9' }}
              onClick={() => setMobileNavOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 overflow-hidden" style={{ background: '#1a1208' }}>
          <img
            src="https://images.unsplash.com/photo-1755811248299-7a6867dc163d?w=1800&h=1200&fit=crop&auto=format"
            alt="Prime ribeye steak with rosemary garnish"
            className="w-full h-full object-cover"
            style={{ opacity: 0.45 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,14,13,1) 0%, rgba(15,14,13,0.5) 40%, rgba(15,14,13,0.2) 100%)' }} />
        </div>

        <div className="relative z-10 px-8 pb-24 md:px-20 max-w-5xl">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#c9933a', letterSpacing: '0.25em' }}>
            Est. 1987 · New York City
          </p>
          <h1
            className="font-display mb-8 leading-none"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 700,
              color: '#e8e2d9',
              letterSpacing: '-0.01em',
            }}
          >
            Where Fire<br />
            <em style={{ color: '#c9933a' }}>Meets Craft.</em>
          </h1>
          <p className="text-base mb-10 max-w-lg" style={{ color: '#b8a99a', lineHeight: 1.8, fontWeight: 300 }}>
            A temple to American beef. We source exclusively USDA Prime and A5 Wagyu, dry-age on-premises, and cook over live hardwood. Nothing more. Nothing less.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#reservations"
              className="px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-200"
              style={{ background: '#c9933a', color: '#0f0e0d', letterSpacing: '0.15em' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#e0a844' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#c9933a' }}
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-200"
              style={{ border: '1px solid #2a2724', color: '#b8a99a', letterSpacing: '0.15em' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9933a'; e.currentTarget.style.color = '#c9933a' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2724'; e.currentTarget.style.color = '#b8a99a' }}
            >
              View the Menu
            </a>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-20 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, transparent, #c9933a)' }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: '#c9933a', writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>Scroll</span>
        </div>
      </section>

      {/* SIGNATURE STRIP */}
      <div className="py-8 overflow-hidden" style={{ borderTop: '1px solid #2a2724', borderBottom: '1px solid #2a2724' }}>
        <div className="flex gap-16 whitespace-nowrap">
          {['USDA Prime Beef', '45-Day Dry Aged', 'Live Hardwood Fire', 'A5 Wagyu', 'Farm-to-Table Sides', 'Award-Winning Wine Program'].concat(
            ['USDA Prime Beef', '45-Day Dry Aged', 'Live Hardwood Fire', 'A5 Wagyu', 'Farm-to-Table Sides', 'Award-Winning Wine Program']
          ).map((item, i) => (
            <span key={i} className="text-xs tracking-widest uppercase" style={{ color: '#7a6f65', letterSpacing: '0.2em' }}>
              {item}
              {i % 6 !== 5 && <span className="ml-16 mr-0" style={{ color: '#c9933a' }}> ✦ </span>}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-28 px-8 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#c9933a', letterSpacing: '0.25em' }}>Our Story</p>
            <h2
              className="font-display mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600, lineHeight: 1.15, color: '#e8e2d9' }}
            >
              Thirty-seven years of<br /><em>uncompromising craft.</em>
            </h2>
            <p className="mb-6" style={{ color: '#b8a99a', lineHeight: 1.9, fontWeight: 300 }}>
              Ember &amp; Oak opened its doors in 1987 on West 44th Street with a single-minded philosophy: procure the finest beef in America, treat it with complete respect, and let the fire do its work.
            </p>
            <p className="mb-10" style={{ color: '#b8a99a', lineHeight: 1.9, fontWeight: 300 }}>
              Our aging room holds between 200 and 400 cuts at any time, hand-selected from heritage ranches in Nebraska, Kansas, and Montana. We age 28 to 65 days depending on the cut — never less.
            </p>
            <div className="grid grid-cols-3 gap-6" style={{ borderTop: '1px solid #2a2724', paddingTop: '2rem' }}>
              {[['37', 'Years Open'], ['200+', 'Wines by Bottle'], ['45', 'Day Dry Age'], ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9933a' }}>{num}</div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: '#7a6f65', letterSpacing: '0.15em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full"
              style={{ border: '1px solid #2a2724', zIndex: 0 }}
            />
            <div className="relative z-10 overflow-hidden" style={{ background: '#1a1815', aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop&auto=format"
                alt="Ember & Oak dining room interior"
                className="w-full h-full object-cover"
                style={{ opacity: 0.75 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-8 md:px-20" style={{ background: '#0d0c0b' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#c9933a', letterSpacing: '0.25em' }}>The Menu</p>
              <h2
                className="font-display"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#e8e2d9', lineHeight: 1.1 }}
              >
                Craft on every plate.
              </h2>
            </div>
            <div className="flex gap-1">
              {MENU_TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-200"
                  style={{
                    letterSpacing: '0.15em',
                    background: activeTab === tab ? '#c9933a' : 'transparent',
                    color: activeTab === tab ? '#0f0e0d' : '#7a6f65',
                    border: activeTab === tab ? '1px solid #c9933a' : '1px solid #2a2724',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'Cuts' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: '#2a2724' }}>
              {CUTS.map(item => (
                <div
                  key={item.name}
                  className="p-8 group transition-all duration-300 cursor-default"
                  style={{ background: '#0d0c0b' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#111009' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#0d0c0b' }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#e8e2d9' }}>{item.name}</h3>
                      <p className="text-xs" style={{ color: '#7a6f65' }}>{item.cut}</p>
                    </div>
                    {item.badge && (
                      <span className="text-xs px-2 py-1 ml-3 shrink-0" style={{ background: 'rgba(201,147,58,0.12)', color: '#c9933a', border: '1px solid rgba(201,147,58,0.3)' }}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-5" style={{ color: '#7a6f65', lineHeight: 1.7 }}>{item.desc}</p>
                  <div className="font-display text-2xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9933a' }}>{item.price}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Starters' && (
            <div className="flex flex-col divide-y" style={{ borderTop: '1px solid #2a2724', borderBottom: '1px solid #2a2724' }}>
              {STARTERS.map(item => (
                <div key={item.name} className="flex justify-between items-start gap-8 py-7">
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#e8e2d9' }}>{item.name}</h3>
                    <p className="text-sm" style={{ color: '#7a6f65', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                  <div className="font-display text-xl font-bold shrink-0" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9933a' }}>{item.price}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Sides' && (
            <div className="flex flex-col divide-y" style={{ borderTop: '1px solid #2a2724', borderBottom: '1px solid #2a2724' }}>
              {SIDES.map(item => (
                <div key={item.name} className="flex justify-between items-start gap-8 py-7">
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#e8e2d9' }}>{item.name}</h3>
                    <p className="text-sm" style={{ color: '#7a6f65', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                  <div className="font-display text-xl font-bold shrink-0" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9933a' }}>{item.price}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Wine' && (
            <div className="flex flex-col divide-y" style={{ borderTop: '1px solid #2a2724', borderBottom: '1px solid #2a2724' }}>
              {WINES.map(item => (
                <div key={item.name} className="flex justify-between items-start gap-8 py-7">
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#e8e2d9' }}>{item.name}</h3>
                    <p className="text-sm" style={{ color: '#7a6f65' }}>{item.region}</p>
                  </div>
                  <div className="font-display text-xl font-bold shrink-0" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9933a' }}>{item.price}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-0 grid grid-cols-3 md:grid-cols-4 gap-px" style={{ background: '#2a2724' }}>
        {[
          { src: 'https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?w=600&h=600&fit=crop&auto=format', alt: 'Gourmet steak dinner with sides' },
          { src: 'https://images.unsplash.com/photo-1783683174031-be02abb7cd19?w=600&h=600&fit=crop&auto=format', alt: 'Sliced seasoned steak' },
          { src: 'https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?w=600&h=600&fit=crop&auto=format', alt: 'Restaurant dining room' },
          { src: 'https://images.unsplash.com/photo-1628497622880-896ed64d6034?w=600&h=600&fit=crop&auto=format', alt: 'Sliced meat on dark surface' },
        ].map((img, i) => (
          <div key={i} className="overflow-hidden" style={{ background: '#1a1410', aspectRatio: '1/1' }}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ opacity: 0.7 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '0.7' }}
            />
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-8 md:px-20" style={{ background: '#0f0e0d' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase mb-14 text-center" style={{ color: '#c9933a', letterSpacing: '0.25em' }}>What They Say</p>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: '#2a2724' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-10" style={{ background: '#0f0e0d' }}>
                <div className="font-display text-3xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9933a', lineHeight: 1 }}>"</div>
                <p className="font-display text-lg italic mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#e8e2d9', lineHeight: 1.6 }}>
                  {t.quote}
                </p>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#e8e2d9' }}>{t.author}</div>
                  <div className="text-xs mt-1" style={{ color: '#7a6f65' }}>{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE DINING */}
      <section id="private-dining" className="relative py-28 px-8 md:px-20 overflow-hidden" style={{ background: '#0d0c0b' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531973968078-9bb02785f13d?w=1600&h=900&fit=crop&auto=format')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#c9933a', letterSpacing: '0.25em' }}>Private Dining</p>
          <h2
            className="font-display mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600, color: '#e8e2d9', lineHeight: 1.15 }}
          >
            Host an evening<br />worth remembering.
          </h2>
          <p className="mb-10 mx-auto" style={{ color: '#b8a99a', lineHeight: 1.9, fontWeight: 300, maxWidth: '38ch' }}>
            Our private dining room seats up to 24 guests and offers custom tasting menus, curated wine pairings, and dedicated service from our senior floor staff.
          </p>
          <a
            href="mailto:private@emberandoak.com"
            className="inline-block px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-200"
            style={{ border: '1px solid #c9933a', color: '#c9933a', letterSpacing: '0.15em' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#c9933a'; e.currentTarget.style.color = '#0f0e0d' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9933a' }}
          >
            Inquire Now
          </a>
        </div>
      </section>

      {/* RESERVATIONS */}
      <section id="reservations" className="py-28 px-8 md:px-20" style={{ background: '#0f0e0d' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#c9933a', letterSpacing: '0.25em' }}>Reservations</p>
            <h2
              className="font-display mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#e8e2d9', lineHeight: 1.15 }}
            >
              Book your table.
            </h2>
            <p className="mb-10" style={{ color: '#b8a99a', lineHeight: 1.9, fontWeight: 300 }}>
              We accept reservations up to 60 days in advance. For parties of 6 or more, please call us directly or inquire via our private dining team.
            </p>
            <div className="space-y-5" style={{ borderTop: '1px solid #2a2724', paddingTop: '2rem' }}>
              {[
                ['Hours', 'Mon–Thu 5pm – 10pm\nFri–Sat 5pm – 11pm\nSun 4pm – 9pm'],
                ['Address', '48 West 44th Street\nNew York, NY 10036'],
                ['Phone', '+1 (212) 555-0182'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-8">
                  <div className="text-xs tracking-widest uppercase w-20 shrink-0 pt-0.5" style={{ color: '#7a6f65', letterSpacing: '0.15em' }}>{label}</div>
                  <div className="text-sm whitespace-pre-line" style={{ color: '#b8a99a', lineHeight: 1.8 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
              {['First Name', 'Last Name'].map(p => (
                <div key={p}>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#7a6f65', letterSpacing: '0.15em' }}>{p}</label>
                  <input
                    type="text"
                    placeholder={p}
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{ background: '#1a1815', border: '1px solid #2a2724', color: '#e8e2d9' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#c9933a')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#2a2724')}
                  />
                </div>
              ))}
            </div>
            {[
              { label: 'Email', type: 'email', placeholder: 'you@example.com' },
              { label: 'Phone', type: 'tel', placeholder: '+1 (212) 000-0000' },
            ].map(f => (
              <div key={f.label}>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#7a6f65', letterSpacing: '0.15em' }}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                  style={{ background: '#1a1815', border: '1px solid #2a2724', color: '#e8e2d9' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#c9933a')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#2a2724')}
                />
              </div>
            ))}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#7a6f65', letterSpacing: '0.15em' }}>Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                  style={{ background: '#1a1815', border: '1px solid #2a2724', color: '#e8e2d9', colorScheme: 'dark' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#c9933a')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#2a2724')}
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#7a6f65', letterSpacing: '0.15em' }}>Guests</label>
                <select
                  className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none"
                  style={{ background: '#1a1815', border: '1px solid #2a2724', color: '#e8e2d9' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#c9933a')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#2a2724')}
                >
                  {[1,2,3,4,5,'6+'].map(n => <option key={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#7a6f65', letterSpacing: '0.15em' }}>Special Requests</label>
              <textarea
                rows={3}
                placeholder="Allergies, celebrations, preferences..."
                className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                style={{ background: '#1a1815', border: '1px solid #2a2724', color: '#e8e2d9' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#c9933a')}
                onBlur={e => (e.currentTarget.style.borderColor = '#2a2724')}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 text-sm tracking-widest uppercase font-medium transition-all duration-200"
              style={{ background: '#c9933a', color: '#0f0e0d', letterSpacing: '0.15em' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#e0a844' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#c9933a' }}
            >
              Request Reservation
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #2a2724', background: '#0a0908' }}>
        <div className="max-w-6xl mx-auto px-8 md:px-20 py-16 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-xl tracking-widest uppercase mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9933a', letterSpacing: '0.2em' }}>
              Ember &amp; Oak
            </div>
            <p className="text-sm mb-6 max-w-xs" style={{ color: '#7a6f65', lineHeight: 1.8 }}>
              A temple to American beef. Est. 1987 on West 44th Street, New York City.
            </p>
            <p className="text-xs" style={{ color: '#4a4540' }}>© 2026 Ember & Oak. All rights reserved.</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#7a6f65', letterSpacing: '0.2em' }}>Navigate</p>
            <div className="space-y-3">
              {NAV_LINKS.map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} className="block text-sm transition-colors duration-200" style={{ color: '#4a4540' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c9933a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#4a4540')}
                >{l}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: '#7a6f65', letterSpacing: '0.2em' }}>Contact</p>
            <div className="space-y-3 text-sm" style={{ color: '#4a4540' }}>
              <p>48 West 44th Street</p>
              <p>New York, NY 10036</p>
              <p>+1 (212) 555-0182</p>
              <a href="mailto:hello@emberandoak.com" className="block transition-colors duration-200"
                style={{ color: '#4a4540' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9933a')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a4540')}
              >hello@emberandoak.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
