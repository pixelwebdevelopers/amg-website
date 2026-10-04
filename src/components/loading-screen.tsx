import { useCallback, useEffect, useRef, useState } from "react";
import desktopVideo from "@/assets/desktop.mp4";
import mobileVideo from "@/assets/mobile.mp4";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleVideoEnded = useCallback(() => {
    if (isMobile) {
      // Mobile: hold the final frame for 1 second more before fading out
      timeoutRef.current = setTimeout(() => {
        handleFinish();
      }, 1000);
    } else {
      // Desktop: finish immediately
      handleFinish();
    }
  }, [isMobile, handleFinish]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isMobile === null) return;

    // Attempt autoplay
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }

    // Fallback maximum safety timer (10s)
    const safetyTimer = setTimeout(() => {
      handleFinish();
    }, 10000);

    return () => {
      clearTimeout(safetyTimer);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMobile, handleFinish]);

  if (!isVisible) return null;

  return (
    <div
      aria-label="Loading Abid Munir Group"
      className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden transition-opacity duration-700 select-none bg-[#f8f9fa] ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {isMobile !== null && (
        <div className="flex items-center justify-center w-full h-full p-0 bg-[#f8f9fa] overflow-hidden">
          <video
            ref={videoRef}
            key={isMobile ? "mobile-video" : "desktop-video"}
            src={isMobile ? mobileVideo : desktopVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            onError={handleFinish}
            className={
              isMobile
                ? "w-full h-auto max-h-screen object-contain bg-[#f8f9fa]"
                : "w-full h-full min-w-full min-h-full object-cover bg-[#f8f9fa]"
            }
            style={{ backgroundColor: "#f8f9fa" }}
          />
        </div>
      )}

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
