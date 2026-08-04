import { Sparkles } from "lucide-react";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-royal animated-gradient text-white pt-40 pb-24">
      <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden>
        <div className="absolute top-24 left-10 w-24 h-24 rounded-2xl glass animate-float" />
        <div className="absolute top-40 right-24 w-32 h-32 rounded-3xl glass animate-float-delay" />
        <div className="absolute bottom-10 left-1/3 w-16 h-16 rounded-xl glass animate-float" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase">
          <Sparkles size={14} className="text-sky-accent" /> {eyebrow}
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight animate-fade-up">{title}</h1>
        <p className="mt-5 text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, subtitle, children, tone = "light" }: { eyebrow?: string; title?: string; subtitle?: string; children: React.ReactNode; tone?: "light" | "mist" }) {
  return (
    <section className={`py-24 ${tone === "mist" ? "bg-mist" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {(title || eyebrow) && (
          <div className="max-w-3xl mb-14">
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{eyebrow}</p>}
            {title && <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-ink">{title}</h2>}
            {subtitle && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function FeatureGrid({ items }: { items: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; text: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="rounded-3xl border border-border bg-white p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
          <div className="h-12 w-12 rounded-xl bg-gradient-royal grid place-items-center text-white">
            <Icon size={22} />
          </div>
          <h4 className="mt-5 font-semibold text-ink text-lg">{title}</h4>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  );
}