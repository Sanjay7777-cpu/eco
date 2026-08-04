import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Compass, Heart, Rocket, Shield } from "lucide-react";
import dubai from "@/assets/dubai-skyline.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Five Global — Dubai's International Business Partner" },
      { name: "description", content: "Learn about Five Global: our mission, values, and Dubai-rooted global perspective on business transformation." },
      { property: "og:title", content: "About Five Global" },
      { property: "og:description", content: "Dubai-headquartered, globally minded, obsessed with outcomes." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Dubai-born. Globally minded." subtitle="We combine strategy, design and engineering to help ambitious enterprises grow internationally." />
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">Our story</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-ink tracking-tight">Built for the way modern enterprises scale</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Founded in Dubai, Five Global unifies HR consultancy, E-commerce and Digital Marketing under one accountable partner. Our teams work with leaders across the UAE, GCC and international markets — turning ambitious plans into measurable outcomes.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[["500+", "Global clients"], ["40+", "Countries served"], ["12", "Industries"], ["98%", "Client retention"]].map(([n, l]) => (
                <div key={l}><div className="text-3xl font-bold text-royal">{n}</div><p className="text-sm text-muted-foreground">{l}</p></div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-royal opacity-20 blur-3xl rounded-3xl" />
            <img src={dubai} alt="Dubai skyline" loading="lazy" className="relative rounded-3xl shadow-elegant w-full h-[420px] object-cover" />
          </div>
        </div>
      </Section>
      <Section tone="mist" eyebrow="Values" title="What we stand for">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Compass, t: "Clarity", d: "Sharp strategy, no fluff." },
            { icon: Rocket, t: "Momentum", d: "Ship fast, learn faster." },
            { icon: Heart, t: "Craft", d: "Excellence in every detail." },
            { icon: Shield, t: "Integrity", d: "Do the right thing, always." },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-3xl bg-white p-7 shadow-card border border-border">
              <div className="h-12 w-12 rounded-xl bg-gradient-royal grid place-items-center text-white"><I size={22} /></div>
              <h4 className="mt-5 font-semibold text-ink text-lg">{t}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto rounded-4xl bg-gradient-royal p-10 md:p-14 text-white shadow-elegant text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Let's build something remarkable</h2>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-white text-royal-dark px-7 py-3.5 text-sm font-semibold">Contact us</Link>
        </div>
      </section>
    </>
  );
}