import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — Five Global" },
      { name: "description", content: "Perspectives on HR, ecommerce, digital marketing and smart products from Dubai and the GCC." },
      { property: "og:title", content: "Insights & Blog — Five Global" },
      { property: "og:description", content: "Sharp perspectives on hiring, growth, and technology in the region." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { t: "Hiring across the GCC in 2026", c: "HR", d: "The playbook for building international teams from Dubai." },
  { t: "Shopify vs custom stacks", c: "Ecommerce", d: "Choosing the right ecommerce foundation for global scale." },
  { t: "Performance marketing in MENA", c: "Marketing", d: "What actually moves the needle on paid channels this year." },
  { t: "The rise of tap-first identity", c: "Products", d: "How NFC is quietly redefining business networking." },
  { t: "Executive search: what to ask", c: "HR", d: "Six questions that separate great search firms from the rest." },
  { t: "SEO in an AI-answers world", c: "Marketing", d: "Where organic still wins in 2026, and where it doesn't." },
];

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights from the Five Global team" subtitle="Sharp perspectives on hiring, growth, technology and the future of work." />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.t} className="rounded-3xl overflow-hidden bg-white border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="aspect-[16/9] bg-gradient-royal-soft grid place-items-center text-white text-xs tracking-widest uppercase">{p.c}</div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <a href="#" className="mt-4 inline-flex text-sm font-semibold text-royal">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}