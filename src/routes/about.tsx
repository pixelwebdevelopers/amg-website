import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Target,
  Compass,
  HeartHandshake,
  MapPin,
} from "lucide-react";
import { ContactBand, PageIntro, SectionTitle } from "@/components/page-sections";
import { Button } from "@/components/ui/button";
import { images, companyContact, amgStats } from "@/lib/amg-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Abid Munir Group | Legacy, Vision & Integrity" },
      {
        name: "description",
        content:
          "Discover the legacy of Malik Abid Munir Awan and the forward-looking vision behind Abid Munir Group in Manufacturing, Processing, General Order Supply, Trading and Logistics.",
      },
      { property: "og:title", content: "About Us — Abid Munir Group" },
      {
        property: "og:description",
        content: "Honouring a legacy. Building a vision. Shaping the future across Pakistan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const coreValues = [
  {
    title: "HONESTY & INTEGRITY",
    desc: "Doing business with uncompromised integrity in every quote, contract, weighing, and delivery.",
    icon: <Shield className="size-6 text-brand" />,
  },
  {
    title: "HARD WORK & DEDICATION",
    desc: "A hands-on approach from the quarry face to nationwide transport hubs, ensuring dependable delivery.",
    icon: <Target className="size-6 text-brand" />,
  },
  {
    title: "CUSTOMER COMMITMENT",
    desc: "Building lasting relationships grounded in trust, responsive communication, and mutual growth.",
    icon: <HeartHandshake className="size-6 text-brand" />,
  },
  {
    title: "MODERN VISION",
    desc: "Embracing modern approaches, technological efficiency, and sustainable opportunities for future generations.",
    icon: <Compass className="size-6 text-brand" />,
  },
];

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT ABID MUNIR GROUP"
        title="Honouring a legacy. Building a vision. Shaping the future."
        description="Carrying forward the principles of Malik Abid Munir Awan with unwavering dedication to honesty, quality and customer service across Pakistan."
        image={images.coal}
      />

      {/* 1. Founder Legacy & Foundation Section */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 items-center">
          <div>
            <span className="eyebrow text-brand">OUR FOUNDATION</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl text-foreground">
              A Legacy of Hard Work, Honesty and Integrity.
            </h2>
            <div className="mt-6 h-1 w-20 bg-brand" />

            <div className="mt-8 border-l-4 border-brand bg-muted/60 p-6">
              <p className="font-display text-2xl font-bold uppercase text-foreground leading-snug">
                “Honouring a legacy. Building a vision. Shaping the future.”
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                — In Memory of Malik Abid Munir Awan
              </p>
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p className="font-semibold text-foreground text-xl leading-relaxed">
              Abid Munir Group carries forward the legacy of Malik Abid Munir Awan — a legacy built
              on hard work, dedication, honesty and a commitment to doing business with integrity.
            </p>
            <p>
              His values are more than a part of our history; they are the foundation of our vision
              and the motivation that continues to guide us today.
            </p>
            <p>
              In a rapidly changing world driven by innovation, new trends and evolving business
              needs, we are building a team that is committed to carrying this legacy forward while
              embracing new ideas, modern approaches and sustainable opportunities. Our aim is to
              preserve the principles that define our identity while continuously evolving to meet
              the demands of the future.
            </p>
            <p>
              Through Manufacturing, Processing, General Order Supply, Trading and Logistics, we
              strive to create reliable business solutions and lasting relationships based on trust,
              commitment and service. Every step we take is a reflection of the values we inherited
              and a genuine effort to honour the legacy of Malik Abid Munir Awan — by transforming
              his principles into a continuing vision for the generations ahead.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visual Story & Strategic Approach */}
      <section className="bg-muted py-20 lg:py-28 border-b border-border">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow text-brand">OUR STRATEGIC PURPOSE</span>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
              Preserving Principles While Embracing The Future.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              At Abid Munir Group, our operations bridge natural resource extraction with nationwide
              commercial markets. From owned mines in the mineral-rich regions of Pakistan to our
              modern stone crushing facilities and trading networks, we ensure consistency at every
              step.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="border border-border bg-card p-5">
                <span className="font-display text-2xl font-bold text-brand">01. Source</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Direct extraction from owned salt and coal mines and crushing plants.
                </p>
              </div>

              <div className="border border-border bg-card p-5">
                <span className="font-display text-2xl font-bold text-brand">02. Process</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Precise crushing, washing, grading, and quality standard validation.
                </p>
              </div>

              <div className="border border-border bg-card p-5">
                <span className="font-display text-2xl font-bold text-brand">03. Supply</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Extensive general order sourcing across minerals, construction & commodities.
                </p>
              </div>

              <div className="border border-border bg-card p-5">
                <span className="font-display text-2xl font-bold text-brand">04. Deliver</span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Reliable logistics coordination from source to project sites across Pakistan.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-border shadow-2xl">
              <img
                src={images.mineralMining}
                alt="AMG Pakistani Engineers and Mining Facility"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-4 bg-ink p-4 text-white text-xs flex items-center justify-between">
              <span>Pakistani Mining & Supply Infrastructure</span>
              <span className="text-brand font-semibold">Khushab, Pakistan</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="shell">
          <SectionTitle
            align="center"
            eyebrow="OUR VALUES"
            title="The Principles That Guide Every Decision"
            text="Every commercial quote, mineral extraction and freight dispatch is conducted under strict ethical standards."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="group border border-border bg-card p-8 transition-all duration-300 hover:border-brand hover:shadow-lg"
              >
                <div className="p-3 bg-muted w-fit rounded-none group-hover:bg-brand/10 transition-colors">
                  {v.icon}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold uppercase text-foreground group-hover:text-brand transition-colors">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Commitment To Lasting Relationships */}
      <section className="bg-ink text-ink-foreground py-20 lg:py-28 border-t border-ink-line">
        <div className="shell grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="eyebrow text-brand">BUILDING LASTING PARTNERSHIPS</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl text-white">
              Relationships Made To Last.
            </h2>
            <p className="mt-6 text-base text-ink-muted leading-relaxed">
              Through Manufacturing, Processing, General Order Supply, Trading and Logistics, we
              strive to create reliable business solutions and lasting relationships based on trust,
              commitment and service.
            </p>
            <p className="mt-4 text-base text-ink-muted leading-relaxed">
              Whether you represent an industrial plant, a construction firm, an agricultural
              enterprise, or a commercial distributor, Abid Munir Group stands as your dependable
              partner on the ground.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="brand" size="xl">
                <Link to="/contact">Let's Work Together</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>

          <div className="border border-ink-line bg-ink/70 p-8">
            <h3 className="font-display text-2xl font-bold uppercase text-brand-soft">
              Headquarters & Operational Reach
            </h3>
            <div className="mt-6 space-y-4 text-sm text-ink-soft">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Principal Office:</strong>
                  <span>{companyContact.locationDisplay}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Operational Facilities:</strong>
                  <span>
                    Own Coal Mines, Salt Mining Operations, Stone Crushing Plant & Mineral Yards in
                    Khushab & surrounding industrial zones.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Supply Reach:</strong>
                  <span>
                    Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, and Nationwide Industrial
                    Corridors.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
