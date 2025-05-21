"use client";
import { useEffect, useState, useRef } from "react";
import Jumbotron from "./jumbotron/jumbotron";
import { useLayout } from "./LayoutContext";
import JumbotronV2 from "./jumbotron/jumbotronv2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useLayout();
  const [showTop, setShowTop] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimate(true); // trigger animation
      const timeout = setTimeout(() => {
        setShowTop(false); // remove top section after animation ends
      }, 500); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).playWeddingMusic = () => audioRef.current?.play();
      (window as any).pauseWeddingMusic = () => audioRef.current?.pause();
    }
  }, []);
  const toggleMusic = () => {
    if (!isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      <div className={`${showTop ? "hidden" : "block"} w-10 h-10 bg-black rounded-full fixed bottom-3 right-3 z-[1000] text-white flex items-center justify-center transition-all`}>
        <audio ref={audioRef} src="/music/music_romansa_ke_depan.mp3" loop />
        <button
          onClick={toggleMusic}
          className={`w-[70%] h-[70%] rounded-full bg-[#990000] transition-all hover:bg-white hover:text-[#990000] text-white flex items-center justify-center shadow-lg hover:cursor-pointer ${isPlaying ? "animate-spin-slow" : ""}`}
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
      {/* Top Jumbotron Section */}
      {showTop && (
        <div className={`min-h-dvh fixed overflow-hidden top-0 left-0 w-full h-full z-10 ${animate ? "animate-slide-up-fade" : "block"}`}>
          <div className="block w-full h-full overflow-hidden">
            {/* <Jumbotron isOpening={true} /> */}
            <JumbotronV2 isOpening={true} />
          </div>
        </div>
      )}

      {/* Main Content always visible when isOpen */}
      <div className={`${showTop ? "hidden" : "block"} relative z-0 flex min-h-dvh`}>
        {/* Left side (Jumbotron static) - hidden on mobile */}
        <div className="hidden md:block md:w-1/2 lg:w-3/5 fixed h-full overflow-hidden">
          <JumbotronV2 isOpening={false} />
          {/* <Jumbotron isOpening={false} /> */}
        </div>

        {/* Right side (Content) */}
        <div className="w-full md:ml-[50%] lg:ml-[60%] overflow-y-auto bg-white">{children}</div>
      </div>
    </div>
  );
}
