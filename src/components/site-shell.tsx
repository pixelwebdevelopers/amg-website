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
  Home,
  Info,
  Package,
  Layers,
  PhoneCall,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/amg-logo.png";
import { Button } from "@/components/ui/button";
import { companyContact } from "@/lib/amg-data";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home", icon: Home, subtitle: "Overview & Business Activities" },
  { to: "/about", label: "About Us", icon: Info, subtitle: "Legacy of Malik Abid Munir Awan" },
  {
    to: "/products",
    label: "Products",
    icon: Package,
    subtitle: "Minerals & General Order Supply",
  },
  {
    to: "/services",
    label: "Services",
    icon: Layers,
    subtitle: "Manufacturing, Trading & Logistics",
  },
  { to: "/contact", label: "Contact", icon: PhoneCall, subtitle: "Inquiries & Office in Khushab" },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Notification / Contact Bar (Desktop) */}
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
              href={companyContact.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors flex items-center gap-1 font-medium"
              title="WhatsApp"
            >
              <MessageCircle className="size-3.5 text-red-500" />
              <span>WhatsApp</span>
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
          <Link
            to="/"
            aria-label="Abid Munir Group home"
            className="shrink-0 flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Abid Munir Group Logo"
              className="h-12 w-auto lg:h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Sidebar Menu Trigger using Radix Sheet */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-border bg-card hover:bg-accent h-11 w-11"
                aria-label="Open navigation menu"
              >
                <Menu className="size-6 text-foreground" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              hideCloseButton
              className="w-full max-w-sm sm:max-w-md p-0 flex flex-col justify-between bg-ink text-ink-foreground border-l border-ink-line shadow-2xl overflow-y-auto"
            >
              {/* Drawer Top / Header */}
              <div className="p-6 border-b border-ink-line flex items-center justify-between bg-ink/90">
                <SheetTitle asChild>
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={logo}
                      alt="Abid Munir Group"
                      className="h-11 w-auto brightness-0 invert object-contain"
                    />
                  </Link>
                </SheetTitle>
                <SheetClose className="rounded-none border border-ink-line bg-white/10 p-2 text-ink-muted hover:text-white hover:bg-white/20 transition-colors">
                  <X className="size-5" />
                  <span className="sr-only">Close menu</span>
                </SheetClose>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 p-6 space-y-2">
                <p className="eyebrow text-brand-soft mb-4">NAVIGATION</p>
                <nav className="grid gap-2">
                  {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.to;
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center justify-between rounded-lg p-3.5 transition-all ${
                          isActive
                            ? "bg-brand text-white font-bold"
                            : "bg-white/5 hover:bg-white/10 text-ink-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`p-2 rounded-md ${
                              isActive ? "bg-white/20 text-white" : "bg-white/5 text-brand"
                            }`}
                          >
                            <Icon className="size-4.5" />
                          </div>
                          <div>
                            <span className="block font-display text-lg font-bold uppercase leading-none">
                              {link.label}
                            </span>
                            <span
                              className={`block text-[11px] mt-1 ${
                                isActive ? "text-white/80" : "text-ink-muted"
                              }`}
                            >
                              {link.subtitle}
                            </span>
                          </div>
                        </div>
                        <ChevronRight
                          className={`size-4 transition-transform group-hover:translate-x-1 ${
                            isActive ? "text-white" : "text-ink-muted"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>

                {/* Quick Action CTAs */}
                <div className="pt-6 mt-4 border-t border-ink-line space-y-2.5">
                  <p className="eyebrow text-brand-soft mb-2">FAST ACTIONS</p>

                  <Button asChild variant="brand" size="lg" className="w-full justify-center">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Request a Quote <ArrowUpRight className="ml-1 size-4" />
                    </Link>
                  </Button>

                  <a
                    href={companyContact.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-none bg-red-600 hover:bg-red-700 text-white py-3 px-4 font-display font-bold uppercase text-sm transition shadow-md"
                  >
                    <MessageCircle className="size-4" />
                    Chat on WhatsApp
                  </a>

                  <a
                    href={`tel:${companyContact.phone}`}
                    className="flex items-center justify-center gap-2 rounded-none border border-ink-line bg-white/5 hover:bg-white/10 text-white py-3 px-4 font-display font-bold uppercase text-xs transition"
                  >
                    <Phone className="size-3.5 text-brand" />
                    Call: {companyContact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Drawer Bottom Info */}
              <div className="p-6 bg-black/40 border-t border-ink-line space-y-4 text-xs text-ink-muted">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <Mail className="size-4 text-brand shrink-0" />
                    <a
                      href={`mailto:${companyContact.email}`}
                      className="text-white hover:underline"
                    >
                      {companyContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-ink-line">
                  <span className="text-[11px] font-medium text-ink-soft">Follow AMG:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={companyContact.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-full bg-white/10 text-white hover:bg-brand transition"
                      aria-label="Facebook"
                    >
                      <Facebook className="size-3.5" />
                    </a>
                    <a
                      href={companyContact.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-full bg-white/10 text-white hover:bg-brand transition"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-3.5" />
                    </a>
                    <a
                      href={companyContact.socials.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
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
              Abid Munir Group carries forward the legacy of Malik Abid Munir Awan — delivering
              excellence in Manufacturing, Processing, General Order Supply, Trading, and Logistics
              across Pakistan.
            </p>
            <p className="mt-4 font-display text-lg font-bold text-brand-soft italic">
              “Honouring a legacy. Building a vision. Shaping the future.”
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={companyContact.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white transition hover:bg-red-700"
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
              <Link
                to="/products"
                className="w-fit text-ink-muted transition-colors hover:text-ink-foreground"
              >
                Coal & Minerals
              </Link>
              <Link
                to="/products"
                className="w-fit text-ink-muted transition-colors hover:text-ink-foreground"
              >
                Salt & Crushed Stone
              </Link>
              <Link
                to="/services"
                className="w-fit text-ink-muted transition-colors hover:text-ink-foreground"
              >
                General Order Supply
              </Link>
            </div>
          </div>

          <div>
            <p className="eyebrow text-brand">Contact Information</p>
            <div className="mt-5 grid gap-4 text-sm text-ink-muted">
              <a
                href={`tel:${companyContact.phone}`}
                className="flex gap-3 hover:text-ink-foreground transition-colors"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-soft">
                    Phone
                  </span>
                  <span className="font-semibold text-white">{companyContact.phoneDisplay}</span>
                </div>
              </a>

              <div className="flex gap-3 text-ink-muted">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-red-500" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-soft">
                    WhatsApp Inquiries
                  </span>
                  <div className="flex flex-wrap gap-x-2 font-semibold text-white">
                    <a
                      href={`https://wa.me/${companyContact.whatsapp1}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-red-400 transition-colors"
                    >
                      {companyContact.whatsapp1Display}
                    </a>
                    <span>|</span>
                    <a
                      href={`https://wa.me/${companyContact.whatsapp2}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-red-400 transition-colors"
                    >
                      {companyContact.whatsapp2Display}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${companyContact.email}`}
                className="flex gap-3 break-all hover:text-ink-foreground transition-colors"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-soft">
                    Email
                  </span>
                  <span className="font-semibold text-white">{companyContact.email}</span>
                </div>
              </a>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-ink-soft">
                    Headquarters Location
                  </span>
                  <span className="text-white leading-relaxed">
                    {companyContact.locationDisplay}
                  </span>
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
