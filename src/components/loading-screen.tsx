import { useCallback, useEffect, useRef, useState } from "react";
import desktopVideo from "@/assets/desktop.mp4";
import mobileVideo from "@/assets/mobile.mp4";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const handleFinish = useCallback(() => {
    setIsFadingOut((fading) => {
      if (!fading) {
        setTimeout(() => {
          setIsVisible(false);
        }, 700);
      }
      return true;
    });
  }, []);

  useEffect(() => {
    // Lock background scrolling while loading screen is active
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  useEffect(() => {
    // Attempt play on mount
    const tryPlay = (video: HTMLVideoElement | null) => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {
          // If browser policy blocks autoplay, fallback smoothly
        });
      }
    };

    tryPlay(desktopVideoRef.current);
    tryPlay(mobileVideoRef.current);

    // Fallback maximum safety timer (e.g. 5.5 seconds)
    const safetyTimer = setTimeout(() => {
      handleFinish();
    }, 6500);

    return () => clearTimeout(safetyTimer);
  }, [handleFinish]);

  if (!isVisible) return null;

  return (
    <div
      aria-label="Loading Abid Munir Group"
      className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden transition-opacity duration-700 select-none bg-[#f8f9fa] ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* Desktop Video (Screen md and above) - Fills all width edge-to-edge (object-cover) */}
      <div className="hidden md:flex items-center justify-center w-full h-full overflow-hidden bg-[#f8f9fa]">
        <video
          ref={desktopVideoRef}
          src={desktopVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleFinish}
          onError={handleFinish}
          className="w-full h-full min-w-full min-h-full object-cover bg-[#f8f9fa]"
          style={{ backgroundColor: "#f8f9fa" }}
        />
      </div>

      {/* Mobile Video (Screen below md) - Centered, 100% width, uncropped with grey-white space above/below */}
      <div className="flex md:hidden items-center justify-center w-full h-full p-0 bg-[#f8f9fa] overflow-hidden">
        <video
          ref={mobileVideoRef}
          src={mobileVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleFinish}
          onError={handleFinish}
          className="w-full h-auto max-h-screen object-contain bg-[#f8f9fa]"
          style={{ backgroundColor: "#f8f9fa" }}
        />
      </div>

      {/* Skip Button */}
      <button
        onClick={handleFinish}
        className="absolute top-5 right-5 z-10 text-[11px] font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors px-3 py-1.5 rounded-none border border-neutral-300 bg-white/80 backdrop-blur-sm shadow-sm"
        aria-label="Skip intro video"
      >
        Skip
      </button>
    </div>
  );
}
