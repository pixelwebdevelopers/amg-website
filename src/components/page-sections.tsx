import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyContact } from "@/lib/amg-data";

export function PageIntro({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative isolate min-h-[30rem] overflow-hidden bg-ink text-ink-foreground flex items-center">
      <img
        src={image}
        alt="AMG Operations in Pakistan"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-hero-shade" />
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <div className="shell flex min-h-[30rem] items-end py-16 lg:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow text-brand-soft inline-block bg-brand/20 px-3 py-1 border border-brand/30">
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[1.02] md:text-6xl lg:text-7xl text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-ink-soft">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  inverse?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${inverse ? "text-brand-soft" : "text-brand"}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl ${
          inverse ? "text-ink-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            inverse ? "text-ink-muted" : "text-muted-foreground"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="bg-brand text-primary-foreground py-14 lg:py-18 relative overflow-hidden">
      <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary-foreground/80">LET'S WORK TOGETHER</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase md:text-4xl lg:text-5xl leading-tight">
            Looking for a reliable supplier, trading partner or business solution?
          </h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/90 font-medium">
            Contact Abid Munir Group to discuss your requirements. Serving all provinces across
            Pakistan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto shrink-0">
          <Button
            asChild
            variant="contrast"
            size="xl"
            className="w-full sm:w-auto shadow-xl justify-center"
          >
            <Link to="/contact">
              Send Your Requirement <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>

          <a
            href={`https://wa.me/${companyContact.whatsapp2}?text=Hello%20Abid%20Munir%20Group`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/80 bg-red-700/80 px-6 py-3 font-display text-sm font-bold uppercase text-white hover:bg-red-800 transition w-full sm:w-auto text-center"
          >
            <MessageCircle className="size-4" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
