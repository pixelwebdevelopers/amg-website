import { Link } from "@tanstack/react-router";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  FileText,
  Download,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";
import { operationsVideos, pdfDocuments } from "@/lib/amg-data";
import { Button } from "@/components/ui/button";

interface VideoCardProps {
  item: (typeof operationsVideos)[number];
}

function ReelCard({ item }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      className="group relative flex flex-col overflow-hidden border border-ink-line bg-ink shadow-2xl transition-all duration-300 hover:border-brand hover:shadow-brand/20 cursor-pointer"
      onClick={togglePlay}
    >
      {/* 9:16 Portrait Video Container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={item.video}
          poster={item.poster}
          playsInline
          autoPlay
          muted
          loop
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 bg-brand/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white border border-brand">
            <span className="h-2 w-2 rounded-full bg-white animate-ping" />
            <span>{item.badge}</span>
          </div>

          <button
            onClick={toggleMute}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-brand transition-colors"
            title={isMuted ? "Unmute sound" : "Mute sound"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
        </div>

        {/* Center Play/Pause indicator on hover or when paused */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            !isPlaying ? "opacity-100 bg-black/40" : "opacity-0 group-hover:opacity-80"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/90 text-white shadow-xl shadow-brand/40 transform transition group-hover:scale-110">
            {!isPlaying ? (
              <Play className="size-7 translate-x-0.5 fill-current" />
            ) : (
              <Pause className="size-7 fill-current" />
            )}
          </div>
        </div>

        {/* Bottom Details Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 space-y-2 pointer-events-none">
          <div className="flex items-center gap-1.5 text-xs text-brand-soft font-semibold">
            <MapPin className="size-3.5 text-brand shrink-0" />
            <span>{item.location}</span>
          </div>

          <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white leading-tight">
            {item.title}
          </h3>

          <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">{item.subtitle}</p>

          <div className="pt-2 flex items-center justify-between text-[11px] text-white/80 font-medium">
            <span className="flex items-center gap-1 text-brand-soft">
              <Sparkles className="size-3" /> Live Operations Reel
            </span>
            <span className="uppercase tracking-wider text-[10px] text-ink-soft">
              Click to {isPlaying ? "Pause" : "Play"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OperationsReelsSection({
  title = "Real-Time Field Operations & Mines",
  eyebrow = "DIRECT FROM OUR CONCESSIONS & PLANTS",
  subtitle = "Watch real portrait footage captured directly from our owned coal mines, salt extraction sites, and heavy stone crushing plants in Pakistan.",
  showPdfCta = true,
}: {
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  showPdfCta?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 lg:py-28 text-ink-foreground border-y border-ink-line">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand/10 via-ink to-ink" />

      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="eyebrow text-brand-soft inline-block bg-brand/20 px-3 py-1 border border-brand/30">
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl text-white">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">{subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact">
                Inquire Operations <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
            {showPdfCta && (
              <a
                href={pdfDocuments.saltProductProfile}
                download="AMG-Salt-Product-Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-5 py-3 font-display text-sm font-bold uppercase text-white hover:bg-white/20 transition backdrop-blur-sm"
              >
                <Download className="size-4 text-brand" />
                Download Salt Profile (PDF)
              </a>
            )}
          </div>
        </div>

        {/* 3 Portrait Reels Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {operationsVideos.map((item) => (
            <ReelCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Banner: PDF & Salt Profile Callout */}
        {showPdfCta && (
          <div className="mt-16 border border-brand/40 bg-gradient-to-r from-brand/20 via-ink-line/40 to-brand/10 p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-brand text-white shrink-0 hidden sm:flex items-center justify-center">
                <FileText className="size-8" />
              </div>
              <div>
                <span className="eyebrow text-brand-soft">OFFICIAL PRODUCT SPECIFICATIONS</span>
                <h4 className="mt-1 font-display text-2xl lg:text-3xl font-bold uppercase text-white">
                  Download AMG Himalayan Salt Product Profile
                </h4>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed max-w-2xl">
                  Get full technical specifications, mineral analysis, export packaging options,
                  and lump grades in our official product document.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={pdfDocuments.saltProductProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand/90 text-white px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition shadow-lg shadow-brand/30"
              >
                <Download className="size-4" />
                Download PDF Profile
              </a>
              <Button asChild variant="heroOutline" size="lg" className="w-full sm:w-auto">
                <Link to="/contact">Request Export Quotation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
