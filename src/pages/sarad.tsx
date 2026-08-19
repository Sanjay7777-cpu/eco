import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { PageHero, Section } from "@/components/PageHero";

export const Route = createFileRoute("/sarad")({
  head: () => ({
    meta: [
      {
        title: "P. Sharad — Digital Profile | Five Global",
      },
      {
        name: "description",
        content:
          "Connect with P. Sharad through LinkedIn and WhatsApp.",
      },
      {
        property: "og:title",
        content: "P. Sharad — Digital Profile | Five Global",
      },
      {
        property: "og:description",
        content:
          "Connect with P. Sharad through LinkedIn and WhatsApp.",
      },
      {
        property: "og:url",
        content: "/sarad",
      },
    ],
    links: [{ rel: "canonical", href: "/sarad" }],
  }),
  component: SaradPage,
});

const LINKEDIN_URL =
  "https://www.linkedin.com/in/p-sharad-324a65326?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

const WHATSAPP_URL = "https://wa.me/971542135084";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.83 14.02c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.61-.13.24.09 1.55.73 1.81.86.27.14.44.2.51.32.07.12.07.68-.17 1.35z" />
    </svg>
  );
}

function SaradPage() {
  return (
    <>
      {/* Same upper hero structure */}
      <PageHero
        eyebrow="Digital Profile"
        title="Connect with P. Sharad"
        subtitle="One tap away from connecting, collaborating and staying in touch."
      />

      {/* Profile section */}
      <Section>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="rounded-3xl bg-white border border-border shadow-card p-8 text-center hover:shadow-elegant transition-all">
              
              {/* Profile Name */}
              <h2 className="text-2xl font-semibold text-ink">
                P. Sharad
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Digital Profile
              </p>

              {/* Social Actions */}
              <div className="mt-7 flex flex-col items-center gap-4">
                
                {/* LinkedIn */}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-3 rounded-full bg-white border border-border px-6 py-3 text-sm font-semibold text-[#0A66C2] shadow-card hover:-translate-y-1 hover:shadow-elegant transition-all"
                  aria-label="Connect with P. Sharad on LinkedIn"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>

                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-3 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold shadow-card hover:-translate-y-1 hover:shadow-elegant transition-all"
                  aria-label="Contact P. Sharad on WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                  +971 54 213 5084
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}