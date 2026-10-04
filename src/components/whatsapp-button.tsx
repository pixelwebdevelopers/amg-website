import { MessageCircle, Phone, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { companyContact } from "@/lib/amg-data";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const mainWhatsAppUrl = companyContact.socials.whatsapp;
  const directPhone1 = `https://wa.me/${companyContact.whatsapp2}?text=Hello%20Abid%20Munir%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services.`;
  const directPhone2 = `https://wa.me/${companyContact.whatsapp1}?text=Hello%20Abid%20Munir%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services.`;

  return (
    <div
      aria-label="WhatsApp quick contact options"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[999] flex flex-col items-end font-sans pointer-events-auto select-none"
      style={{
        position: "fixed",
        bottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
        right: "calc(20px + env(safe-area-inset-right, 0px))",
        zIndex: 999,
      }}
    >
      {/* Quick Menu Popover */}
      {isOpen && (
        <div
          className="animate-in fade-in slide-in-from-bottom-2 duration-200 w-[calc(100vw-2.5rem)] max-w-72 rounded-xl bg-ink/95 backdrop-blur-md p-4 text-ink-foreground shadow-2xl border border-ink-line ring-1 ring-white/10 mb-3"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex items-center justify-between border-b border-ink-line pb-2.5">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
                <MessageCircle className="h-4 w-4 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold leading-none text-white">Abid Munir Group</p>
                <p className="mt-1 text-[10px] text-ink-muted">Direct WhatsApp Desk</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded p-1 text-ink-muted hover:text-white"
              aria-label="Close WhatsApp options"
            >
              <X className="size-4" />
            </button>
          </div>

          <p className="mt-2.5 text-xs leading-relaxed text-ink-soft">
            Chat directly with our team for quick quotes, order status, or sourcing requests:
          </p>

          <div className="mt-3 grid gap-2">
            <a
              href={mainWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700 shadow-sm"
            >
              <span className="flex items-center gap-1.5">
                <MessageCircle className="h-3.5 w-3.5 fill-current" />
                Official WhatsApp
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={directPhone1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20"
            >
              <span className="flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-red-400" />
                {companyContact.whatsapp2Display}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-red-300 font-bold">
                Chat
              </span>
            </a>

            <a
              href={directPhone2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20"
            >
              <span className="flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-red-400" />
                {companyContact.whatsapp1Display}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-red-300 font-bold">
                Chat
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button with Expanding Live Waves */}
      <div className="group relative flex items-center justify-center">
        {/* Live Concentric Expanding Waves */}
        <span className="pointer-events-none absolute h-14 w-14 rounded-full bg-red-600/35 border border-red-500/40 whatsapp-wave-1" />
        <span className="pointer-events-none absolute h-14 w-14 rounded-full bg-red-600/25 border border-red-500/30 whatsapp-wave-2" />
        <span className="pointer-events-none absolute h-14 w-14 rounded-full bg-red-600/15 border border-red-500/20 whatsapp-wave-3" />

        {/* Tooltip on desktop hover */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl ring-1 ring-white/10 md:group-hover:inline-block">
          WhatsApp Us <span className="text-red-400">• {companyContact.phoneDisplay}</span>
        </span>

        {/* Main Solid Circular Red Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          onMouseEnter={() => setIsOpen(true)}
          className="relative z-10 flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-[#dc2626] text-white shadow-[0_8px_25px_rgba(220,38,38,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#b91c1c] active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-400/50 cursor-pointer"
          aria-label="Open WhatsApp contact options"
          aria-expanded={isOpen}
        >
          <svg
            className="h-7 w-7 fill-white drop-shadow-md"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.484-8.453z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
