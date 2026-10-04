import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/amg-logo.png";
import { Button } from "@/components/ui/button";
import { companyContact } from "@/lib/amg-data";
import { WhatsAppButton } from "@/components/whatsapp-button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <div className="bg-ink text-ink-muted border-b border-ink-line text-xs py-2 hidden md:block">
        <div className="shell flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5 text-brand" />
              {companyContact.locationDisplay}
            </span>
            <a
              href={`tel:${companyContact.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="size-3.5 text-brand" />
              {companyContact.phoneDisplay}
            </a>
            <a
              href={`mailto:${companyContact.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="size-3.5 text-brand" />
              {companyContact.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={companyContact.socials.whatsappQr}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors flex items-center gap-1 font-medium"
              title="WhatsApp QR"
            >
              <MessageCircle className="size-3.5" />
              <span>WhatsApp QR</span>
            </a>
            <span className="text-ink-line">|</span>
            <a
              href={companyContact.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors flex items-center gap-1"
              title="Facebook"
            >
              <Facebook className="size-3.5" />
              <span>Facebook</span>
            </a>
            <span className="text-ink-line">|</span>
            <a
              href={companyContact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors flex items-center gap-1"
              title="Instagram"
            >
              <Instagram className="size-3.5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="shell flex h-20 items-center justify-between gap-8 lg:h-24">
          <Link to="/" aria-label="Abid Munir Group home" className="shrink-0 flex items-center gap-3">
            <img
              src={logo}
              alt="Abid Munir Group Logo"
              className="h-12 w-auto lg:h-14 object-contain"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                activeProps={{ className: "nav-link-active" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact">
                Request a quote <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-6 lg:hidden animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="border-b border-border/60 py-3.5 font-display text-lg font-semibold text-foreground hover:text-brand"
                  activeProps={{ className: "text-brand font-bold" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-5 pt-4 border-t border-border flex flex-col gap-3 text-sm text-muted-foreground">
                <a href={`tel:${companyContact.phone}`} className="flex items-center gap-2 hover:text-foreground">
                  <Phone className="size-4 text-brand" />
                  {companyContact.phoneDisplay}
                </a>
                <a href={`mailto:${companyContact.email}`} className="flex items-center gap-2 hover:text-foreground">
                  <Mail className="size-4 text-brand" />
                  {companyContact.email}
                </a>
                <div className="flex items-center gap-4 mt-2">
                  <a href={companyContact.socials.whatsappQr} target="_blank" rel="noreferrer" className="text-brand hover:underline flex items-center gap-1 font-semibold text-xs">
                    <MessageCircle className="size-4" /> WhatsApp QR
                  </a>
                  <a href={companyContact.socials.facebook} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Facebook className="size-4" />
                  </a>
                  <a href={companyContact.socials.instagram} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Instagram className="size-4" />
                  </a>
                </div>
              </div>

              <Button asChild variant="brand" size="lg" className="mt-6 w-full">
                <Link to="/contact">
                  Request a quote <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="bg-ink text-ink-foreground border-t border-ink-line">
        <div className="shell grid gap-12 py-16 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:py-20">
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Abid Munir Group"
                className="h-14 w-auto brightness-0 invert object-contain"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-ink-muted">
              Abid Munir Group carries forward the legacy of Malik Abid Munir Awan — delivering excellence in Manufacturing, Processing, General Order Supply, Trading, and Logistics across Pakistan.
            </p>
            <p className="mt-4 font-display text-lg font-bold text-brand-soft italic">
              “Honouring a legacy. Building a vision. Shaping the future.”
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={companyContact.socials.whatsappQr}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-red-600"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href={companyContact.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-brand"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={companyContact.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-brand"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-brand">Quick links</p>
            <div className="mt-5 grid gap-3 text-sm">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="w-fit text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/products" className="w-fit text-ink-muted transition-colors hover:text-ink-foreground">
                Coal & Minerals
              </Link>
              <Link to="/products" className="w-fit text-ink-muted transition-colors hover:text-ink-foreground">
                Salt & Crushed Stone
              </Link>
              <Link to="/services" className="w-fit text-ink-muted transition-colors hover:text-ink-foreground">
                General Order Supply
              </Link>
            </div>
          </div>

          <div>
            <p className="eyebrow text-brand">Contact Information</p>
            <div className="mt-5 grid gap-4 text-sm text-ink-muted">
              <a href={`tel:${companyContact.phone}`} className="flex gap-3 hover:text-ink-foreground transition-colors">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-soft">Phone</span>
                  <span className="font-semibold text-white">{companyContact.phoneDisplay}</span>
                </div>
              </a>

              <div className="flex gap-3 text-ink-muted">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-soft">WhatsApp Inquiries</span>
                  <div className="flex flex-wrap gap-x-2 font-semibold text-white">
                    <a href={`https://wa.me/${companyContact.whatsapp1}`} target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">
                      {companyContact.whatsapp1Display}
                    </a>
                    <span>|</span>
                    <a href={`https://wa.me/${companyContact.whatsapp2}`} target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">
                      {companyContact.whatsapp2Display}
                    </a>
                  </div>
                </div>
              </div>

              <a href={`mailto:${companyContact.email}`} className="flex gap-3 break-all hover:text-ink-foreground transition-colors">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-soft">Email</span>
                  <span className="font-semibold text-white">{companyContact.email}</span>
                </div>
              </a>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-soft">Headquarters Location</span>
                  <span className="text-white leading-relaxed">{companyContact.locationDisplay}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-line">
          <div className="shell flex flex-col gap-2 py-5 text-xs text-ink-muted sm:flex-row sm:justify-between">
            <span>© {new Date().getFullYear()} Abid Munir Group. All rights reserved.</span>
            <span>Honouring a legacy. Building a vision. Shaping the future.</span>
          </div>
        </div>
      </footer>

      {/* Floating Red WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
