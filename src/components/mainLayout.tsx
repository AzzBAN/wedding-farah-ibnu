"use client";
import { useEffect, useState, useRef } from "react";
import Jumbotron from "./jumbotron/jumbotron";
import { useLayout } from "./LayoutContext";
import JumbotronV2 from "./jumbotron/jumbotronv2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faX, faCopy } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useLayout();
  const { isModalOpen, setIsModalOpen } = useLayout();
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
      {isModalOpen && (
        <>
          <div className={`fixed z-100 h-screen w-screen bg-black/50`}>
            <div
              className={`fixed flex flex-col justify-center items-center gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 bg-[#F1D6AB] w-[500px] h-3/4 rounded-xl max-sm:w-3/4 ${isModalOpen ? "animate-popin-modal" : "block"}`}
            >
              <button className="absolute top-2 right-2 hover:cursor-pointer" onClick={() => setIsModalOpen(!isModalOpen)}>
                <div className=" flex items-center justify-center bg-[#990000] hover:bg-[#F1D6AB] border-1 border-[#990000] rounded-md p-2 text-[#F1D6AB] hover:text-[#990000] text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-quicksand font-bold transition-colors duration-100">
                  <FontAwesomeIcon icon={faX} />
                </div>
              </button>
              <div id="modal-content" className="px-7 flex flex-col gap-3 justify-center items-center w-full">
                <div className="w-full flex flex-col justify-center items-center font-quicksand bg-[#990000] rounded-lg text-[#F1D6AB] text-xl text-center gap-2 p-5">
                  <span className="font-black">Bank BCA</span>
                  <span className="font-medium">7391538551</span>
                  <span>a.n Farah Urfani Nugraha</span>
                  <button
                    className="bg-[#F1D6AB] text-[#990000] hover:bg-[#F1D6AB]/50 hover:text-[#F1D6AB] transition-colors duration-100 hover:cursor-pointer rounded-md px-3 py-1"
                    onClick={() => navigator.clipboard.writeText("7391538551 - a.n Farah Urfani Nugraha")}
                  >
                    <FontAwesomeIcon icon={faCopy} /> Salin
                  </button>
                </div>
              </div>
              <div id="modal-content" className="px-7 flex flex-col gap-3 justify-center items-center w-full">
                <div className="w-full flex flex-col justify-center items-center font-quicksand bg-[#990000] rounded-lg text-[#F1D6AB] text-xl text-center gap-2 p-5">
                  <span className="font-black">Bank DBS</span>
                  <span className="font-medium">1705796713</span>
                  <span>a.n Ibnu Abbas</span>
                  <button
                    className="bg-[#F1D6AB] text-[#990000] hover:bg-[#F1D6AB]/50 hover:text-[#F1D6AB] transition-colors duration-100 hover:cursor-pointer rounded-md px-3 py-1"
                    onClick={() => navigator.clipboard.writeText("1705796713 - a.n Ibnu Abbas")}
                  >
                    <FontAwesomeIcon icon={faCopy} /> Salin
                  </button>
                </div>
              </div>
              <div id="modal-content" className="px-7 flex flex-col gap-3 justify-center items-center w-full font-quicksand text-[#990000] text-lg text-center">
                <span className="font-black">Kirim Kado</span>
                <span>Jl. Bambu Kuning IX Aqilla Residence 2 no.1 Sepanjang Jaya, Rawalumbu Kota Bekasi 17114</span>
                <button
                  className="bg-[#990000] text-[#F1D6AB] hover:bg-[#990000]/50 hover:text-[#990000] transition-colors duration-100 hover:cursor-pointer rounded-md px-3 py-1"
                  onClick={() => navigator.clipboard.writeText("Jl. Bambu Kuning IX Aqilla Residence 2 no.1 Sepanjang Jaya, Rawalumbu Kota Bekasi 17114")}
                >
                  <FontAwesomeIcon icon={faCopy} /> Salin Alamat
                </button>
              </div>
            </div>
          </div>
        </>
      )}
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
