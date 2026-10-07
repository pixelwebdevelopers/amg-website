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
  Award,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  FileText,
  Download,
} from "lucide-react";
import { HeroSlider } from "@/components/hero-slider";
import { ContactBand, SectionTitle } from "@/components/page-sections";
import { OperationsReelsSection } from "@/components/operations-reels";
import { Button } from "@/components/ui/button";
import {
  images,
  coreProducts,
  businessActivities,
  whyChooseUs,
  generalOrderCategories,
  amgStats,
  companyContact,
  pdfDocuments,
} from "@/lib/amg-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abid Munir Group — Your Trusted Business Partner in Pakistan" },
      {
        name: "description",
        content:
          "Abid Munir Group is a diversified Pakistani business organization engaged in Manufacturing, Processing, General Order Supply, Trading and Logistics.",
      },
      {
        property: "og:title",
        content: "Abid Munir Group — Your Trusted Business Partner",
      },
      {
        property: "og:description",
        content:
          "Manufacturing, Processing, General Order Supply, Coal, Salt, Stone Dust, Minerals & Logistics in Khushab, Pakistan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const activityIcons = [
  <Factory className="size-6 text-brand" key="mfg" />,
  <Cpu className="size-6 text-brand" key="proc" />,
  <Layers className="size-6 text-brand" key="gos" />,
  <Repeat className="size-6 text-brand" key="trade" />,
  <Truck className="size-6 text-brand" key="log" />,
];

function HomePage() {
  return (
    <>
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Who We Are / Trusted Business Partner Introduction */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 items-center">
          <div>
            <p className="eyebrow text-brand">YOUR TRUSTED BUSINESS PARTNER</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl">
              Honouring a legacy. Building a vision. Shaping the future.
            </h2>
            <div className="mt-6 h-1 w-20 bg-brand" />
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p className="font-semibold text-foreground text-xl">
              Abid Munir Group is a diversified business organization engaged in Manufacturing,
              Processing, General Order Supply, Trading and Logistics.
            </p>
            <p>
              Abid Munir Group carries forward the legacy of Malik Abid Munir Awan — a legacy built
              on hard work, dedication, honesty and a commitment to doing business with integrity.
              His values are more than a part of our history; they are the foundation of our vision
              and the motivation that continues to guide us today.
            </p>
            <p>
              We provide reliable products and supply solutions to meet the diverse requirements of
              businesses and industries across Pakistan.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild variant="brand" size="lg">
                <Link to="/about">
                  Our Story & Legacy <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
              <a
                href={pdfDocuments.saltProductProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card px-5 py-2.5 font-display text-xs font-bold uppercase text-foreground hover:border-brand hover:text-brand transition shadow-sm"
              >
                <Download className="size-4 text-brand" />
                Salt Profile (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational Highlights & Metrics */}
      <section className="bg-ink text-ink-foreground py-12 border-b border-ink-line">
        <div className="shell grid grid-cols-2 gap-8 lg:grid-cols-4">
          {amgStats.map((stat, i) => (
            <div key={i} className="border-l-2 border-brand pl-6">
              <span className="font-display text-4xl lg:text-5xl font-extrabold text-brand">
                {stat.value}
              </span>
              <p className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-ink-muted leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR BUSINESS ACTIVITIES */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="OUR BUSINESS ACTIVITIES"
              title="We operate across multiple business sectors."
              text="Providing products, services and supply solutions according to the exact requirements of our clients."
            />
            <Button asChild variant="brand" size="lg">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessActivities.map((act, index) => (
              <div
                key={act.number}
                className="group relative flex flex-col justify-between border border-border bg-card p-8 transition-all duration-300 hover:border-brand hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-extrabold text-brand/80 group-hover:text-brand">
                      {act.number}
                    </span>
                    <div className="p-3 bg-muted rounded-none group-hover:bg-brand/10 transition-colors">
                      {activityIcons[index]}
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden my-5 border border-border bg-ink">
                    <img
                      src={act.image}
                      alt={`${act.title} - Abid Munir Group`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground group-hover:text-brand transition-colors">
                    {act.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {act.shortText}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/50">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand hover:text-foreground"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-1 size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Feature Card: General Order Strength */}
            <div className="relative overflow-hidden bg-ink p-8 text-ink-foreground flex flex-col justify-between border border-ink-line">
              <div className="absolute -right-6 -bottom-6 opacity-10">
                <Award className="size-48 text-brand" />
              </div>
              <div>
                <span className="eyebrow text-brand">CORE STRENGTH</span>
                <h3 className="mt-4 font-display text-3xl font-extrabold uppercase text-white leading-tight">
                  Tailored Supply For Mega projects
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  From industrial minerals to infrastructure general order materials, we arrange,
                  grade and transport according to your project milestones.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="contrast" size="lg" className="w-full">
                  <Link to="/contact">Send Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEW: REAL-TIME FIELD OPERATIONS & PORTRAIT VIDEO REELS */}
      <OperationsReelsSection />

      {/* 6. OUR CORE SUPPLY STRENGTH (Industrial & Mineral Products) */}
      <section className="bg-muted py-20 lg:py-28 border-y border-border">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-brand">OUR CORE SUPPLY STRENGTH</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
                Industrial & Mineral Products
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
                While Abid Munir Group has the capability to fulfill diverse General Order Supply
                requirements, our core strength includes the supply and processing of industrial and
                mineral products.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={pdfDocuments.saltProductProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 font-display text-xs font-bold uppercase text-foreground hover:border-brand hover:text-brand transition shadow-sm"
              >
                <FileText className="size-4 text-brand" />
                Download Salt Profile (PDF)
              </a>
              <Button asChild variant="brand" size="lg">
                <Link to="/products">
                  View All Products <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coreProducts.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden border border-border bg-card shadow-sm transition duration-300 hover:shadow-xl hover:border-brand"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-ink">
                  <img
                    src={p.image}
                    alt={`${p.name} - AMG Pakistan`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-ink/80 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-soft border border-ink-line">
                    {p.badge}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="eyebrow text-muted-foreground text-[10px]">{p.category}</span>
                    <h3 className="mt-1 font-display text-2xl font-bold uppercase text-foreground group-hover:text-brand transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{p.detail}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand hover:underline"
                    >
                      Inquire Bulk Supply <ArrowUpRight className="ml-1 size-3.5" />
                    </Link>
                    {p.id === "salt" && (
                      <a
                        href={pdfDocuments.saltProductProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-muted-foreground hover:text-brand"
                        title="Download Salt Profile PDF"
                      >
                        PDF Profile
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* General Order Expansion Note */}
          <div className="mt-12 rounded-none border border-brand/30 bg-card p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="eyebrow text-brand">BEYOND OUR CORE MINERALS</span>
              <h4 className="mt-2 font-display text-2xl font-bold text-foreground">
                Need Construction, Agricultural, or Food Supplies?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                In addition to our core products, we facilitate the supply of various other
                materials and products based on customer requirements, including construction
                materials, agricultural products, food-related supplies and other general order
                requirements.
              </p>
            </div>
            <Button asChild variant="brand" size="lg" className="shrink-0">
              <Link to="/products">
                Explore General Order Supply <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. GENERAL ORDER SUPPLY (Beyond Minerals Scope Showcase) */}
      <section className="py-20 lg:py-28 bg-ink text-ink-foreground">
        <div className="shell">
          <SectionTitle
            inverse
            eyebrow="GENERAL ORDER SUPPLY"
            title="Sourcing & Logistics Beyond Mineral Boundaries"
            text="If a product or material is required for a commercial, industrial or project-based order, our team works to explore suitable sourcing and supply solutions."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {generalOrderCategories.map((cat) => (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between border border-ink-line bg-ink/80 p-8 transition-all hover:border-brand hover:bg-ink"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden mb-6 border border-ink-line">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <span className="block h-1 w-10 bg-brand mb-4" />
                  <span className="eyebrow text-brand-soft">{cat.tagline}</span>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{cat.text}</p>

                  <div className="mt-6 space-y-2">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-ink-soft">
                        <CheckCircle2 className="size-3.5 text-brand shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-ink-line">
                  <Button asChild variant="heroOutline" size="default" className="w-full">
                    <Link to="/contact">Request Order Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US (5 Pillars From Client Text) */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden border border-border shadow-xl">
              <img
                src={images.trading}
                alt="AMG Pakistani Mineral & Trading Operations"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-8 -right-4 hidden sm:block bg-ink p-6 text-ink-foreground border border-ink-line shadow-2xl max-w-xs">
              <p className="eyebrow text-brand">INTEGRITY & TRUST</p>
              <p className="mt-2 font-display text-xl font-bold uppercase">
                Direct From Khushab Across Pakistan
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                Reliable supply chain solutions backed by owned assets.
              </p>
            </div>
          </div>

          <div className="lg:pl-6">
            <p className="eyebrow text-brand">WHY CHOOSE US</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
              Built on trust. Driven by capability.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We focus on building dependable sourcing and supplier networks to ensure consistent
              product availability for every business partner.
            </p>

            <div className="mt-8 space-y-5">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 border-b border-border pb-5 last:border-b-0"
                >
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-none bg-brand text-primary-foreground font-display font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Operational Footprint & Nationwide Logistics Section */}
      <section className="bg-muted py-20 lg:py-24 border-t border-border">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <p className="eyebrow text-brand">NATIONWIDE LOGISTICS</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold uppercase md:text-4xl">
                Serving Industries Across Pakistan
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Headquartered in Khushab, Punjab — the mineral and industrial corridor of Pakistan —
                Abid Munir Group manages active transport routes to major industrial zones, ports,
                and construction mega projects.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-3 bg-card p-4 border border-border">
                  <MapPin className="size-5 text-brand shrink-0" />
                  <div>
                    <span className="font-display font-bold text-sm uppercase">
                      Khushab Hub & Mines
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Salt Range, Coal Mines, Stone Crushing & Mineral Stockpiles
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-card p-4 border border-border">
                  <Truck className="size-5 text-brand shrink-0" />
                  <div>
                    <span className="font-display font-bold text-sm uppercase">
                      Nationwide Freight & Logistics
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Dedicated fleet supplying Punjab, Sindh, KPK, Balochistan & Port Qasim
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-card p-4 border border-border">
                  <ShieldCheck className="size-5 text-brand shrink-0" />
                  <div>
                    <span className="font-display font-bold text-sm uppercase">
                      Guaranteed Quality Assays
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Pre-dispatch inspection, lab certifications, and on-schedule delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border border-border bg-ink">
              <img
                src={images.logistics}
                alt="AMG Nationwide Logistics in Pakistan"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6 bg-ink text-white">
                <p className="font-display text-xl font-bold uppercase text-brand-soft">
                  Dependable Supply Chain Coordination
                </p>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  Our logistics team ensures fast turnaround times, secure transport documentation,
                  and reliable weighing and verification at source and destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact / Tell Us What You Need Band */}
      <ContactBand />
    </>
  );
}
