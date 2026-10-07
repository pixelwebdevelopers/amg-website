import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Cpu,
  Layers,
  Repeat,
  Truck,
  ShieldCheck,
  Download,
} from "lucide-react";
import { ContactBand, PageIntro, SectionTitle } from "@/components/page-sections";
import { OperationsReelsSection } from "@/components/operations-reels";
import { Button } from "@/components/ui/button";
import { images, businessActivities, pdfDocuments } from "@/lib/amg-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Abid Munir Group | Manufacturing, Supply & Logistics" },
      {
        name: "description",
        content:
          "Explore AMG manufacturing, mineral processing, general order supply, nationwide trading and logistics services across Pakistan.",
      },
      { property: "og:title", content: "Business Services — Abid Munir Group" },
      {
        property: "og:description",
        content: "One group, diverse capabilities, reliable solutions across Pakistan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const serviceIcons = [
  <Factory className="size-8 text-brand" key="mfg" />,
  <Cpu className="size-8 text-brand" key="proc" />,
  <Layers className="size-8 text-brand" key="gos" />,
  <Repeat className="size-8 text-brand" key="trade" />,
  <Truck className="size-8 text-brand" key="log" />,
];

function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="OUR SERVICES"
        title="Connected capabilities. Practical business solutions."
        description="At Abid Munir Group, our diverse business activities enable us to provide comprehensive solutions across manufacturing, processing, general order supply, trading and logistics. We work with a flexible approach to meet the specific requirements of our clients and business partners."
        image={images.processing}
      />

      {/* 1. Five Main Business Services Detailed Breakdown */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="OUR FIVE CONNECTED CAPABILITIES"
              title="Comprehensive Industrial & Supply Services"
              text="We work with a flexible approach to meet the specific requirements of our clients and business partners."
            />
            <div className="flex flex-wrap gap-3">
              <a
                href={pdfDocuments.saltProductProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 font-display text-xs font-bold uppercase text-foreground hover:border-brand hover:text-brand transition shadow-sm"
              >
                <Download className="size-4 text-brand" />
                Product Profile (PDF)
              </a>
              <Button asChild variant="brand" size="lg">
                <Link to="/contact">Request Service Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            {businessActivities.map((service, index) => (
              <article
                key={service.number}
                className="grid gap-8 border border-border bg-card p-8 lg:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 items-center transition hover:border-brand hover:shadow-xl"
              >
                <div className="relative overflow-hidden border border-border bg-ink">
                  <img
                    src={service.image}
                    alt={`${service.title} by AMG`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-ink/90 px-3 py-1 text-xs font-bold uppercase text-brand-soft border border-ink-line">
                    Capability {service.number}
                  </div>
                </div>

                <div className="flex flex-col justify-between h-full space-y-5">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-muted rounded-none border border-border">
                        {serviceIcons[index]}
                      </div>
                      <div>
                        <span className="font-display text-4xl font-extrabold text-brand">
                          {service.number}
                        </span>
                        <h2 className="font-display text-3xl font-extrabold uppercase text-foreground">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {service.text}
                    </p>

                    {index === 2 && (
                      <div className="mt-4 rounded-none bg-muted/70 p-4 border border-border text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-foreground block mb-1">
                          Our Core Portfolio & Scope:
                        </strong>
                        Coal, Salt, Silica Sand, Bauxite, Stone Dust, Gypsum and Copper Ore, plus
                        infrastructure materials (roads, bridges, canals, pipelines), agricultural
                        commodities (rice, poultry, eggs, animal feed), and building products
                        (cement, fly ash, wood).
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <Button asChild variant="brand" size="default">
                      <Link to="/contact">
                        Inquire Service <ArrowUpRight className="ml-1 size-4" />
                      </Link>
                    </Button>
                    <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                      Available Nationwide
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. LIVE FIELD OPERATIONS VIDEO REELS */}
      <OperationsReelsSection
        title="Execution & Field Performance"
        eyebrow="LIVE OPERATIONS ACROSS SITES"
        subtitle="Watch real footage of our manufacturing, processing, and transportation activities across Pakistan."
      />

      {/* 3. ONE GROUP, DIVERSE CAPABILITIES, RELIABLE SOLUTIONS Banner */}
      <section className="relative isolate overflow-hidden bg-ink py-24 text-ink-foreground border-y border-ink-line">
        <img
          src={images.logistics}
          alt="AMG Branded Logistics across Pakistan"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-hero-shade" />

        <div className="shell">
          <div className="max-w-4xl">
            <span className="eyebrow text-brand-soft">OUR COMMITMENT</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-6xl text-white">
              ONE GROUP, DIVERSE CAPABILITIES, RELIABLE SOLUTIONS.
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl font-normal">
              Whether the requirement involves a specific product, bulk material, general order,
              trading opportunity or logistics support, Abid Munir Group works to provide a
              practical and dependable business solution.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="brand" size="xl">
                <Link to="/contact">Discuss Your Requirement</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/products">View Products & Materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
