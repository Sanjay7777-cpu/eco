import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Play, Users, ShoppingBag, Megaphone, Sparkles, Shield, Globe2,
  Rocket, CheckCircle2, Star, Briefcase, TrendingUp, Award, Building2, Zap,
  ChevronRight, Quote,
} from "lucide-react";
import heroCubes from "@/assets/hero-cubes.jpg";
import productWristband from "@/assets/product-wristband.jpg";
import productCard from "@/assets/product-card.jpg";
import dubaiSkyline from "@/assets/dubai-skyline.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Five Global — Dubai International Business Solutions" },
      { name: "description", content: "Premium HR consultancy, ecommerce development, digital marketing, and smart NFC products. Dubai's international enterprise partner." },
      { property: "og:title", content: "Five Global — Dubai International Business Solutions" },
      { property: "og:description", content: "Premium HR consultancy, ecommerce, digital marketing and smart products from Dubai to the world." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustedBar />
      <CoreServices />
      <WhyChooseUs />
      <Stats />
      <Industries />
      <ServiceSpotlight
        eyebrow="HR Consultancy"
        title="Executive talent, delivered globally"
        text="From C-suite executive search to overseas recruitment and workforce planning, we build teams that scale across the UAE, GCC, and international markets."
        bullets={["Executive & Overseas Hiring", "Talent Acquisition", "Employer Branding", "Visa & HR Advisory"]}
        to="/hr-consultancy"
        image={dubaiSkyline}
        reverse={false}
      />
      <ServiceSpotlight
        eyebrow="Ecommerce Solutions"
        title="Storefronts engineered to convert"
        text="Shopify, WooCommerce, and custom marketplaces built for speed, scale, and revenue. From product listings to order automation, we own the stack."
        bullets={["Shopify & WooCommerce", "Marketplace Development", "Payment & Inventory", "Store Optimization"]}
        to="/ecommerce"
        image={productCard}
        reverse
      />
      <ServiceSpotlight
        eyebrow="Digital Marketing"
        title="Performance marketing that pays back"
        text="SEO, Google & Meta Ads, content, and lead generation engineered around ROI. Every dirham tracked, every campaign optimized."
        bullets={["SEO & Content", "Google & Meta Ads", "Performance Marketing", "Lead Generation"]}
        to="/marketing"
        image={heroCubes}
        reverse={false}
      />
      <FeaturedProduct />
      <ProductsGrid />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blogs />
      <ContactCTA />
    </>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-royal animated-gradient text-white">
      <img
        src={heroCubes}
        alt=""
        aria-hidden
        width={1600}
        height={1200}
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-royal-dark/60 via-royal-deep/40 to-royal-dark/80" aria-hidden />

      {/* Floating glass cubes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-24 left-10 w-24 h-24 rounded-2xl glass animate-float" />
        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-3xl glass animate-float-delay" />
        <div className="absolute bottom-24 left-1/4 w-20 h-20 rounded-2xl glass animate-float" />
        <div className="absolute bottom-32 right-10 w-16 h-16 rounded-xl glass animate-float-delay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase">
            <Sparkles size={14} className="text-sky-accent" />
            Dubai · Global Business Solutions
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up">
            Where enterprises <span className="text-sky-accent">scale globally</span>, from Dubai.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed animate-fade-up" style={{animationDelay:"120ms"}}>
            HR consultancy, ecommerce, and digital marketing engineered for international growth — trusted by ambitious brands across the UAE, GCC and beyond.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{animationDelay:"220ms"}}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-royal-dark px-7 py-3.5 text-sm font-semibold shadow-elegant hover:scale-[1.03] transition"
            >
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:bg-white/15 transition">
              <Play size={16} /> Watch Video
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              ["500+", "Global Clients"],
              ["12", "Industries"],
              ["40+", "Countries"],
              ["98%", "Retention"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl md:text-4xl font-bold text-white">{n}</div>
                <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBar() {
  const logos = ["EMIRATES GROUP", "ARAMEX", "MAJID AL FUTTAIM", "DAMAC", "CHALHOUB", "ADNOC", "DP WORLD"];
  return (
    <section className="border-y border-border bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">Trusted by industry leaders across the region</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="text-sm font-semibold tracking-widest text-ink/50 hover:text-ink transition">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Core services ----------------------------- */
function CoreServices() {
  const items = [
    { icon: Users, title: "HR Consultancy", desc: "Executive search, overseas recruitment, and workforce strategy that builds world-class teams.", to: "/hr-consultancy" },
    { icon: ShoppingBag, title: "Ecommerce Solutions", desc: "Shopify, WooCommerce, and marketplaces engineered for revenue and scale.", to: "/ecommerce" },
    { icon: Megaphone, title: "Digital Marketing", desc: "SEO, paid media, and performance marketing tuned to measurable ROI.", to: "/marketing" },
  ];
  return (
    <Section eyebrow="What we do" title="Five  divisions. One growth engine." subtitle="From talent to technology to demand generation — a single accountable partner for international expansion.">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc, to }) => (
          <Link key={title} to={to} className="group relative rounded-3xl bg-white border border-border p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all overflow-hidden">
            <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-royal opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-14 w-14 rounded-2xl bg-gradient-royal grid place-items-center text-white shadow-glow">
              <Icon size={26} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal">
              Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function WhyChooseUs() {
  const items = [
    { icon: Globe2, title: "International Standard", text: "Enterprise workflows aligned with Dubai, GCC and global compliance." },
    { icon: Shield, title: "Enterprise Grade", text: "Security, SLAs and process rigor of a top-tier consulting firm." },
    { icon: Rocket, title: "Speed to Value", text: "Sprints that ship — from strategy to launch in weeks, not quarters." },
    { icon: Award, title: "Award-Winning Craft", text: "Design and engineering benchmarked against the world's best." },
  ];
  return (
    <Section eyebrow="Why Five Global" title="A partner built for ambitious enterprises" subtitle="We combine strategy, design and engineering under one roof — with a bias for measurable outcomes.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl border border-border bg-white p-7 shadow-card hover:shadow-elegant transition-all">
            <div className="h-12 w-12 rounded-xl bg-mist grid place-items-center text-royal">
              <Icon size={22} />
            </div>
            <h4 className="mt-5 font-semibold text-ink">{title}</h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  const stats = [
    ["500+", "Clients Worldwide"],
    ["1,200+", "Executive Placements"],
    ["350+", "Stores Launched"],
    ["$120M+", "Revenue Driven"],
  ];
  return (
    <section className="relative py-24 bg-gradient-royal text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="text-4xl md:text-5xl font-bold tracking-tight">{n}</div>
            <div className="mt-2 text-sm text-white/75 uppercase tracking-wider">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  const list = ["Retail & Ecommerce", "Real Estate", "Hospitality", "Finance & Banking", "Healthcare", "Technology", "Government", "Manufacturing", "Education", "Logistics", "Energy", "F&B"];
  return (
    <Section eyebrow="Industries" title="Serving the industries shaping tomorrow" subtitle="Deep vertical expertise across the sectors driving Dubai and the global economy.">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {list.map((i) => (
          <div key={i} className="rounded-2xl border border-border bg-white p-5 text-sm font-medium text-ink hover:border-royal hover:text-royal transition-all shadow-card">
            {i}
          </div>
        ))}
      </div>
    </Section>
  );
}

function ServiceSpotlight({ eyebrow, title, text, bullets, to, image, reverse }: {
  eyebrow: string; title: string; text: string; bullets: string[]; to: string; image: string; reverse?: boolean;
}) {
  return (
    <section className="py-24 bg-white">
      <div className={`max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{eyebrow}</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-ink tracking-tight">{title}</h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{text}</p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-ink">
                <CheckCircle2 size={18} className="text-royal shrink-0" /> {b}
              </li>
            ))}
          </ul>
          <Link to={to} className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-royal text-white px-6 py-3 text-sm font-semibold shadow-elegant hover:shadow-glow hover:scale-[1.03] transition-all">
            Learn more <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-royal opacity-20 blur-3xl rounded-3xl" aria-hidden />
          <img src={image} alt={title} loading="lazy" className="relative rounded-3xl shadow-elegant w-full h-[420px] object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Featured product ------------------------ */
function FeaturedProduct() {
  return (
    <section className="py-28 bg-mist relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-royal/10 rounded-full blur-3xl" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-royal">
            <Zap size={12} /> Flagship Product
          </span>
          <h2 className="mt-5 text-5xl md:text-6xl font-bold tracking-tight text-ink">
            iTap<span className="text-gradient-royal">Band</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed">
            The smart NFC identity for modern professionals. One tap shares your profile, portfolio, links and payments — engineered in Dubai.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3 text-sm font-semibold hover:bg-royal transition">
              Shop iTapBand <ArrowRight size={16} />
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-ink px-6 py-3 text-sm font-semibold hover:border-royal hover:text-royal transition">
              View Collection
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src={productWristband} alt="iTapBand smart NFC wristband" width={1024} height={1024} loading="lazy" className="rounded-3xl shadow-elegant w-full h-[520px] object-cover" />
        </div>
      </div>
    </section>
  );
}

function ProductsGrid() {
  const products = [
    { name: "NFC Business Cards", desc: "Premium tap-to-share cards.", img: productCard },
    { name: "Smart Hand Bands", desc: "Wearable digital identity.", img: productWristband },
    { name: "Digital Business Cards", desc: "Instantly shareable profile.", img: productCard },
    { name: "Smart Identity Cards", desc: "Corporate NFC IDs.", img: productCard },
    { name: "NFC Wrist Bands", desc: "Event and access bands.", img: productWristband },
    { name: "Corporate Smart Solutions", desc: "Enterprise NFC ecosystems.", img: productCard },
  ];
  return (
    <Section eyebrow="Our Products" title="Smart products for the tap-first economy" subtitle="Premium hardware and digital experiences designed to make every interaction faster and more human.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article key={p.name} className="group rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                Explore <ChevronRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "Understand goals, market, and constraints." },
    { n: "02", t: "Strategize", d: "Blueprint the plan with clear KPIs." },
    { n: "03", t: "Build", d: "Design, engineer, and integrate at pace." },
    { n: "04", t: "Scale", d: "Optimize, iterate, and grow globally." },
  ];
  return (
    <Section eyebrow="How we work" title="A process engineered for outcomes">
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="rounded-3xl border border-border bg-white p-7 shadow-card hover:shadow-elegant transition">
            <div className="text-sm font-mono text-royal">{s.n}</div>
            <h4 className="mt-3 text-lg font-semibold text-ink">{s.t}</h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const items = [
    { q: "Five Global rebuilt our entire talent pipeline. We hired 14 executives in 6 months.", a: "Head of People, Regional Retail Group" },
    { q: "Our ecommerce revenue grew 3.4x in the first year after their store optimization.", a: "CEO, GCC D2C Brand" },
    { q: "The best performance marketing team we've worked with in the region.", a: "CMO, SaaS Company" },
  ];
  return (
    <Section eyebrow="Testimonials" title="Trusted by leaders across the region">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <blockquote key={t.a} className="rounded-3xl bg-white border border-border p-8 shadow-card">
            <Quote className="text-royal" size={28} />
            <p className="mt-4 text-ink leading-relaxed">"{t.q}"</p>
            <div className="mt-6 flex items-center gap-1 text-royal">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <footer className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">— {t.a}</footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  const tiers = [
    { name: "Starter", price: "AED 4,900", period: "/ month", features: ["1 Service Line", "Dedicated Manager", "Monthly Reporting", "Email Support"], featured: false },
    { name: "Growth", price: "AED 12,900", period: "/ month", features: ["Up to 3 Services", "Weekly Strategy", "Bi-weekly Reporting", "Priority Support"], featured: true },
    { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited Services", "Executive Sponsor", "Custom SLAs", "24/7 Support"], featured: false },
  ];
  return (
    <Section eyebrow="Engagement" title="Flexible ways to work together" subtitle="Simple, transparent pricing. Scale up or down as your business grows.">
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`relative rounded-3xl p-8 border transition ${t.featured ? "bg-gradient-royal text-white border-transparent shadow-elegant scale-[1.02]" : "bg-white border-border shadow-card"}`}>
            {t.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-accent text-ink px-3 py-1 text-xs font-semibold">Most Popular</span>}
            <h3 className={`text-lg font-semibold ${t.featured ? "text-white" : "text-ink"}`}>{t.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold">{t.price}</span>
              <span className={t.featured ? "text-white/80" : "text-muted-foreground"}>{t.period}</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className={t.featured ? "text-sky-accent" : "text-royal"} /> {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className={`mt-8 inline-flex justify-center w-full rounded-full px-5 py-3 text-sm font-semibold transition ${t.featured ? "bg-white text-royal-dark hover:scale-[1.02]" : "bg-ink text-white hover:bg-royal"}`}>
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const items = [
    { q: "Where is Five Global based?", a: "We are headquartered in Business Bay, Dubai, and serve clients across the UAE, GCC and internationally." },
    { q: "Which services can I combine?", a: "All divisions integrate — HR, Ecommerce and Marketing — so you can start with one and expand as you scale." },
    { q: "How fast can we start?", a: "Most engagements kick off within 5–10 business days after discovery." },
    { q: "Do you work with startups?", a: "Yes — from early-stage startups to global enterprises. Our Starter tier is built for growing teams." },
  ];
  return (
    <Section eyebrow="FAQ" title="Frequently asked questions">
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-white shadow-card">
        {items.map((f) => (
          <details key={f.q} className="group p-6">
            <summary className="flex items-center justify-between cursor-pointer text-ink font-semibold list-none">
              {f.q}
              <ChevronRight className="transition-transform group-open:rotate-90 text-royal" size={18} />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function Blogs() {
  const posts = [
    { t: "Hiring across the GCC in 2026", c: "HR", d: "The playbook for building international teams from Dubai." },
    { t: "Shopify vs custom stacks", c: "Ecommerce", d: "Choosing the right ecommerce foundation for global scale." },
    { t: "Performance marketing in MENA", c: "Marketing", d: "What actually moves the needle on paid channels this year." },
  ];
  return (
    <Section eyebrow="Insights" title="Latest from our team" subtitle="Sharp perspectives on hiring, growth, and technology in the region.">
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.t} className="rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
            <div className="aspect-[16/9] bg-gradient-royal-soft grid place-items-center text-white text-xs tracking-widest uppercase">{p.c}</div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-ink">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal">Read more <ChevronRight size={14} /></Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ContactCTA() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto rounded-4xl bg-gradient-royal p-10 md:p-16 text-white shadow-elegant relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-accent/30 rounded-full blur-3xl" aria-hidden />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to scale globally?</h2>
            <p className="mt-4 text-white/85 text-lg max-w-lg">Book a free consultation with our Dubai team. We'll map the fastest path from where you are, to where you're going.</p>
          </div>
          <div className="flex md:justify-end gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-royal-dark px-7 py-3.5 text-sm font-semibold hover:scale-[1.03] transition">
              Get Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Shared Section --------------------------- */
export function Section({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{eyebrow}</p>}
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-ink">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
