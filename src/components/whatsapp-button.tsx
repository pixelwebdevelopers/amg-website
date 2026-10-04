import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const mainWhatsAppUrl = "https://api.whatsapp.com/qr/M3YDU6GKR4XSC1?autoload=1&app_absent=0";
  const directPhone1 = "https://wa.me/923006043924?text=Hello%20Abid%20Munir%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services.";
  const directPhone2 = "https://wa.me/923028511124?text=Hello%20Abid%20Munir%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Quick Menu Popover when opened or hovered */}
      {isOpen && (
        <div
          className="animate-in fade-in slide-in-from-bottom-3 duration-200 w-72 rounded-xl bg-ink/95 backdrop-blur-md p-4 text-ink-foreground shadow-2xl border border-ink-line ring-1 ring-white/10"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3 border-b border-ink-line pb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
              <MessageCircle className="h-5 w-5 fill-current" />
            </div>
            <div>
              <p className="text-sm font-bold leading-none text-white">Abid Munir Group</p>
              <p className="mt-1 text-xs text-ink-muted">Online Supply & Inquiries</p>
            </div>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-ink-soft">
            Chat directly with our team for quick quotes, order status, or sourcing requests:
          </p>

          <div className="mt-3 grid gap-2">
            <a
              href={mainWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg bg-red-600/90 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-600 shadow-sm"
            >
              <span>Scan QR / Direct Official QR</span>
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
                +92 300 6043924
              </span>
              <span className="text-[10px] uppercase tracking-wider text-red-300 font-bold">Chat</span>
            </a>

            <a
              href={directPhone2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20"
            >
              <span className="flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-red-400" />
                +92 302 8511124
              </span>
              <span className="text-[10px] uppercase tracking-wider text-red-300 font-bold">Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button (Red color as requested) */}
      <div className="group relative flex items-center">
        {/* Tooltip on hover */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl ring-1 ring-white/10 md:group-hover:inline-block">
          WhatsApp Us <span className="text-red-400">• +92 300 6043924</span>
        </span>

        {/* Pulse effect rings */}
        <span className="absolute -inset-1.5 rounded-full bg-red-600/30 blur-sm animate-pulse group-hover:bg-red-600/50" />

        <a
          href={mainWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsOpen(true)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#dc2626] text-white shadow-[0_10px_25px_rgba(220,38,38,0.5)] transition-all duration-300 hover:scale-110 hover:bg-[#b91c1c] active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-400/40"
          aria-label="Chat with Abid Munir Group on WhatsApp"
        >
          {/* WhatsApp icon */}
          <svg
            className="h-7 w-7 fill-white drop-shadow"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.484-8.453z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
