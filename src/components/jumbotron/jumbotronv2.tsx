"use client";
import Image from "next/image";
import { createContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Logo, Fani, And, Ibnu, Papan } from "../icon/jumbotron/Icons";
import { useLayout } from "../LayoutContext";

export default function JumbotronV2({ isOpening }: { isOpening?: boolean }) {
  const { isOpen, setIsOpen } = useLayout();
  const [musicPlayed, setMusicPlayed] = useState(false);

  const handlePlay = () => {
    (window as any).playWeddingMusic?.();
    setMusicPlayed(true);
  };

  return (
    <div className="flex items-center justify-center h-full bg-[#FFE4D1] gap-3">
      <div
        id="jumbotronv2"
        className="h-full w-full"
        style={{
          backgroundImage: `url(/images/${!isOpen ? "jumbotronv2" : "jumbotron_opened"}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#990000] opacity-10 z-0"></div>
        {isOpening && <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>}
        {!isOpening && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/40 via-[#990000]-800/40 to-transparent z-0"></div>
            <div
              className="absolute top-0 left-0 w-full h-full z-0"
              style={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 50%)",
              }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full z-0"
              style={{
                background: "linear-gradient(to top, rgba(153, 0, 0, 0.6) 0%, transparent 50%)",
              }}
            ></div>
            <div className="absolute bottom-10 w-full">
              <div className="flex gap-3 justify-center items-center mt-3">
                <Fani color="#FFF" size={"100%"} className="w-30 max-sm:w-20" />
                <And color="#FFF" size={"100%"} className="w-10 max-sm:w-5" />
                <Ibnu color="#FFF" size={"100%"} className="w-30 max-sm:w-20" />
              </div>
            </div>
          </>
        )}
        {isOpening && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black opacity-75  w-[500px] h-3/4 rounded-xl max-sm:w-3/4">
            <div className="flex flex-col justify-evenly items-center h-full p-10 text-[#D6A527] ">
              <div className="text-center">
                <span className="text-3xl text-[#C43C37] font-bold font-cormorant max-sm:text-xl">THE WEDDING OF</span>
                <div className="flex gap-3 justify-center items-center mt-3">
                  <Fani color="#C43C37" size={"100%"} className="w-30 max-sm:w-20" />
                  <And color="#C43C37" size={"100%"} className="w-10 max-sm:w-5" />
                  <Ibnu color="#C43C37" size={"100%"} className="w-30 max-sm:w-20" />
                </div>
                <div className="mt-7">
                  <span className="font-quicksand">28 | 06 | 2025</span>
                </div>
              </div>
              <div className="flex flex-col gap-7 justify-center items-center text-center">
                <span className="font-birthstone text-5xl">Dear,</span>
                <span className="font-quicksand text-3xl font-bold text-[#b00303]">Alladin & Partner</span>
                <span className="font-cormorant">You are cordially invited to our wedding celebration</span>
                <div
                  className="w-[70%] bg-[#990000] text-center text-white px-3 py-3 rounded-full shadow-5xl font-quicksand cursor-pointer"
                  onClick={() => {
                    setIsOpen(true);
                    handlePlay();
                  }}
                >
                  Open Invitation
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
