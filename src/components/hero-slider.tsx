import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { images, companyContact } from "@/lib/amg-data";

const slides = [
  {
    image: images.coal,
    eyebrow: "YOUR TRUSTED BUSINESS PARTNER",
    title: "Honouring a legacy. Building a vision.",
    subtitle:
      "Carrying forward the principles of Malik Abid Munir Awan with integrity, dedication and modern industrial capabilities across Pakistan.",
    tag: "Mining & Industrial Energy",
  },
  {
    image: images.saltMining,
    eyebrow: "OWN MINING & PROCESSING",
    title: "Quality Salt & Mineral Operations",
    subtitle:
      "Direct extraction from our owned salt mines and processing plants, delivering industrial and commercial grade consistency.",
    tag: "Salt & Mineral Extraction",
  },
  {
    image: images.stoneCrushing,
    eyebrow: "MANUFACTURING & CRUSHING",
    title: "Heavy Stone Dust & Aggregate Supply",
    subtitle:
      "State-of-the-art stone crushing plant producing precision stone dust for roads, infrastructure, canals and megaprojects.",
    tag: "Infrastructure Aggregate",
  },
  {
    image: images.generalSupply,
    eyebrow: "GENERAL ORDER SUPPLY",
    title: "Sourcing & Logistics Without Limits",
    subtitle:
      "From industrial construction materials to agricultural commodities and mineral trading, dependable end-to-end solutions.",
    tag: "Nationwide Supply Chain",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const change = (next: number) => setActive((next + slides.length) % slides.length);

  return (
    <section
      className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-ink text-ink-foreground lg:min-h-[calc(100svh-6rem)] flex flex-col justify-between"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
            index === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <img
            src={slide.image}
            alt="AMG Industrial Operations in Pakistan"
            className="h-full w-full object-cover scale-105 transition-transform duration-10000 ease-out"
          />
          <div className="absolute inset-0 bg-hero-shade" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
      ))}

      <div className="shell relative z-10 flex flex-1 items-center py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-none border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
            {slides[active].eyebrow}
          </div>

          <h1 className="mt-5 font-display text-5xl font-extrabold uppercase tracking-tight text-white leading-[0.96] md:text-7xl lg:text-8xl drop-shadow-md">
            {slides[active].title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl font-normal drop-shadow">
            {slides[active].subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild variant="brand" size="xl" className="shadow-lg shadow-brand/25">
              <Link to="/contact">
                Request a Quote <ArrowUpRight className="ml-1.5 size-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/products">Explore Products & Minerals</Link>
            </Button>
            <a
              href={`https://wa.me/${companyContact.whatsapp2}?text=Hello%20Abid%20Munir%20Group`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-none border border-red-500/40 bg-red-600/20 px-5 py-3 text-xs font-bold uppercase text-white backdrop-blur-sm transition hover:bg-red-600"
            >
              <MessageCircle className="size-4 text-red-400" />
              Direct WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Slider Indicators and Controls */}
      <div className="relative z-20 border-t border-ink-line bg-ink/60 backdrop-blur-md py-4">
        <div className="shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => change(index)}
                className={`group relative flex flex-col gap-1 text-left transition-all ${
                  index === active ? "opacity-100" : "opacity-50 hover:opacity-80"
                }`}
              >
                <div
                  className={`h-1 transition-all ${
                    index === active ? "w-16 bg-brand" : "w-8 bg-white/40"
                  }`}
                />
                <span className="hidden text-[10px] uppercase font-bold tracking-wider text-white md:inline-block">
                  0{index + 1}. {slide.tag}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Button
              variant="heroIcon"
              size="icon"
              onClick={() => change(active - 1)}
              aria-label="Previous slide"
              className="h-9 w-9"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              variant="heroIcon"
              size="icon"
              onClick={() => change(active + 1)}
              aria-label="Next slide"
              className="h-9 w-9"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
