import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  PackageCheck,
  Layers,
  FileSpreadsheet,
  Phone,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";
import { ContactBand, PageIntro, SectionTitle } from "@/components/page-sections";
import { OperationsReelsSection } from "@/components/operations-reels";
import { Button } from "@/components/ui/button";
import {
  coreProducts,
  generalOrderCategories,
  images,
  companyContact,
  pdfDocuments,
} from "@/lib/amg-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Minerals — Abid Munir Group Pakistan" },
      {
        name: "description",
        content:
          "Coal, Salt, Silica Sand, Bauxite, Stone Dust, Gypsum, Copper Ore and General Order Supply across Pakistan by Abid Munir Group.",
      },
      {
        property: "og:title",
        content: "Industrial Products & Minerals — Abid Munir Group",
      },
      {
        property: "og:description",
        content:
          "Own coal & salt mines, stone crushing plant, mineral supplies, and general order sourcing across Pakistan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

export function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="OUR PRODUCTS"
        title="Sourced with care. Supplied with confidence."
        description="Abid Munir Group provides reliable sourcing and supply solutions across a diverse range of products and materials. Our core strength lies in industrial and mineral products, while our General Order Supply capability enables us to facilitate a broader range of requirements according to customer and project needs."
        image={images.mineralMining}
      />

      {/* 1. Core Mineral Products Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="OUR CORE PRODUCTS"
              title="Industrial & Mineral Portfolio"
              text="Our core strength includes the extraction, processing, and dependable supply of high-demand industrial minerals."
            />
            <div className="flex flex-wrap gap-3">
              <a
                href={pdfDocuments.saltProductProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 font-display text-xs font-bold uppercase text-foreground hover:border-brand hover:text-brand transition shadow-sm"
              >
                <Download className="size-4 text-brand" />
                Download Salt Profile (PDF)
              </a>
              <Button asChild variant="brand" size="lg">
                <Link to="/contact">Request Product Quotation</Link>
              </Button>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreProducts.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col justify-between border border-border bg-card transition-all duration-300 hover:border-brand hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <img
                      src={product.image}
                      alt={`${product.name} supply by Abid Munir Group`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-ink/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-soft border border-ink-line">
                      {product.badge}
                    </div>
                  </div>

                  <div className="p-7">
                    <span className="eyebrow text-muted-foreground">{product.category}</span>
                    <h2 className="mt-1 font-display text-3xl font-extrabold uppercase text-foreground group-hover:text-brand transition-colors">
                      {product.name}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {product.detail}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-border pt-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Key Capabilities:
                      </p>
                      {product.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="size-3.5 text-brand shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 space-y-2">
                  {product.id === "salt" && (
                    <a
                      href={pdfDocuments.saltProductProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 bg-brand/10 border border-brand/30 hover:bg-brand hover:text-white text-brand px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition mb-2"
                    >
                      <Download className="size-4" /> Download Salt Profile PDF
                    </a>
                  )}
                  <Button asChild variant="outline" size="default" className="w-full">
                    <Link to="/contact">
                      Inquire About {product.name} <ArrowUpRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED SPOTLIGHT: HIMALAYAN PINK SALT SPECIFICATIONS & PDF DOWNLOAD */}
      <section className="bg-muted py-20 lg:py-24 border-y border-border">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-none bg-brand/10 border border-brand/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                <Sparkles className="size-3.5" />
                Featured Mineral Line
              </div>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase md:text-5xl text-foreground">
                Himalayan Pink Salt & Industrial Grades
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Directly excavated from the world-renowned Salt Range formations in Punjab, Pakistan.
                We supply unprocessed raw rock salt boulders, graded pink crystal chunks, food grade
                table salt, de-icing rock salt, and animal lick salt blocks for international and
                domestic buyers.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border p-4">
                  <span className="eyebrow text-brand">PURITY & GRADING</span>
                  <p className="mt-1 font-display text-lg font-bold uppercase text-foreground">
                    98%+ NaCl Content
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Naturally rich in 84+ essential trace minerals and iron oxide.
                  </p>
                </div>

                <div className="bg-card border border-border p-4">
                  <span className="eyebrow text-brand">EXPORT PACKAGING</span>
                  <p className="mt-1 font-display text-lg font-bold uppercase text-foreground">
                    Custom Bulk & Bags
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    25kg / 50kg PP bags, 1-ton jumbo bags, or loose bulk containers.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={pdfDocuments.saltProductProfile}
                  download="AMG-Salt-Product-Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-white hover:bg-brand/90 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition shadow-lg shadow-brand/25"
                >
                  <Download className="size-4" />
                  Download Complete Salt Profile (PDF)
                </a>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Request Export Spec Sheet</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden border border-border bg-ink shadow-2xl">
                <img
                  src={images.himalayanPinkSalt}
                  alt="AMG Himalayan Pink Salt Lumps"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3 bg-ink p-4 border border-ink-line text-white shadow-xl max-w-xs">
                <FileText className="size-8 text-brand shrink-0" />
                <div className="text-xs">
                  <strong className="block text-white uppercase font-display">
                    Official Product Catalog
                  </strong>
                  <span className="text-ink-muted">Includes lab analysis & specifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Real-Time Operations Reels (Coal, Salt, Rock Crushing Videos) */}
      <OperationsReelsSection
        title="Watch Extraction & Processing in Action"
        eyebrow="ON-SITE OPERATIONS VIDEO REELS"
        subtitle="Real footage from our owned coal extraction mines, Himalayan pink salt quarries, and high-capacity stone crushing units in Pakistan."
      />

      {/* 4. GENERAL ORDER SUPPLY — BEYOND OUR CORE PRODUCTS */}
      <section className="bg-ink text-ink-foreground py-20 lg:py-28 border-y border-ink-line">
        <div className="shell">
          <SectionTitle
            inverse
            eyebrow="GENERAL ORDER SUPPLY — BEYOND OUR CORE PRODUCTS"
            title="Comprehensive Sourcing For Projects & Enterprises"
            text="Our General Order Supply capability is not limited to minerals. Based on customer requirements, we can facilitate the sourcing and supply of a wide range of products, materials and commodities."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {generalOrderCategories.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between border border-ink-line bg-ink/90 p-8 transition hover:border-brand"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden mb-6 border border-ink-line">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-85 hover:opacity-100 transition duration-300"
                    />
                  </div>
                  <span className="block h-1 w-12 bg-brand mb-4" />
                  <span className="eyebrow text-brand-soft">{item.tagline}</span>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.text}</p>

                  <div className="mt-6 space-y-2">
                    {item.items.map((subItem) => (
                      <div key={subItem} className="flex items-center gap-2 text-xs text-ink-soft">
                        <CheckCircle2 className="size-3.5 text-brand shrink-0" />
                        <span>{subItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-ink-line">
                  <Button asChild variant="contrast" size="default" className="w-full">
                    <Link to="/contact">Discuss Sourcing</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border border-ink-line bg-ink-line/30 p-6 md:p-8 text-center max-w-3xl mx-auto">
            <p className="text-base text-white font-medium">
              If a product or material is required for a commercial, industrial or project-based
              order, our team can work to explore suitable sourcing and supply solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TELL US WHAT YOU NEED Callout Section */}
      <section className="py-20 lg:py-24 bg-muted border-b border-border">
        <div className="shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="eyebrow text-brand">TELL US WHAT YOU NEED</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase md:text-5xl text-foreground">
              Have a Specific Material or Bulk Supply Requirement?
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Share your requirement with us and our team will work towards a suitable sourcing and
              supply solution. We provide transparent specifications, scheduled shipments, and
              dedicated customer support.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild variant="brand" size="xl">
                <Link to="/contact">Send Requirements Now</Link>
              </Button>
              <a
                href={`https://wa.me/${companyContact.whatsapp2}?text=Hello%20Abid%20Munir%20Group,%20I%20have%20a%20product%20inquiry.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 font-display text-sm font-bold uppercase text-foreground hover:bg-accent transition"
              >
                <Phone className="size-4 text-brand" />
                Quick Call: {companyContact.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="border border-border bg-card p-6 shadow-md">
            <h3 className="font-display text-lg font-bold uppercase text-brand">
              Supply Verification Guarantee
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                <span>Accurate laboratory assays and moisture testing on minerals</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                <span>Certified weight slips at departure and entry points</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                <span>Tailored supply schedules aligned with plant consumption</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
