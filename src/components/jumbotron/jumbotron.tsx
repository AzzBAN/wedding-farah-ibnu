"use client";
import Image from "next/image";
import { createContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Logo, Fani, And, Ibnu, Papan } from "../icon/jumbotron/Icons";
import { useLayout } from "../LayoutContext";

export default function Jumbotron({ isOpening }: { isOpening?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(32);
  const { isOpen, setIsOpen } = useLayout();

  useLayoutEffect(() => {
    let timeout: NodeJS.Timeout;

    const resizeHandler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const papanWidth = 32;
        const newCount = Math.ceil(containerWidth / papanWidth);

        if (newCount !== count) {
          setCount(newCount);
        }
      }, 100); // Debounce duration (ms)
    };

    resizeHandler(); // Initial run
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [count]);
  return (
    <div className="flex items-center justify-center h-full bg-[#FFE4D1] gap-3">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: "url(/images/jumbotron/jumbo_background.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div ref={containerRef} className="absolute top-0 left-0 right-0 w-full h-1/7">
          <div className="flex h-full w-full justify-center gap-[2px]">
            {Array.from({ length: count }).map((_, idx) => {
              const isEdge = idx === 0 || idx === count - 1;
              const isNearEdge = idx === 1 || idx === count - 2;
              const isMidEdge = idx === 2 || idx === count - 3;

              let viewbox = "0 600 300 1257"; // default (middle parts)
              if (isMidEdge) viewbox = "0 400 300 1257";
              else if (isNearEdge) viewbox = "0 200 300 1257";
              else if (isEdge) viewbox = "0 0 300 1257";

              const maxDistance = Math.floor(count / 2);
              const distanceFromEdge = Math.min(idx, count - 1 - idx);
              const delay = distanceFromEdge * 50;

              return <Papan key={`papan-${idx}`} width={30} height={121} viewbox={viewbox} className="animate-jump" style={{ animationDelay: `${delay}ms` }} />;
            })}
          </div>
        </div>

        {/* placeholder div for testing purposes */}
        {/* top left */}
        {/* <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-amber-200">
          <div className="flex items-center justify-center h-full">top left</div>
        </div> */}
        {/* top right */}
        {/* <div className=" absolute top-0 right-0 w-[300px] h-[300px] bg-amber-200">
          <div className="flex items-center justify-center h-full">top right</div>
        </div> */}
        {/* bottom left */}
        <div className=" absolute bottom-0 left-0 w-1/7 min-w-[100px] ratio-1/1">
          <div className="flex items-center justify-center h-full ps-[1rem] pb-[1rem]">
            <Image src="/images/jumbotron/jumbo-bottom-left.svg" alt="" width={0} height={0} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>
        </div>

        {/* flower */}
        <div
          className=" absolute top-0 bottom-0 h-full animate-breathe"
          style={{
            right: "calc(calc(-23px + 1vw) * 12)", // shift more as screen gets smaller
          }}
        >
          <Image src="/images/jumbotron/jumbo-flower.svg" alt="" width={0} height={0} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
        </div>

        <div
          className=" absolute top-0 bottom-0 h-full animate-breathe"
          style={{
            left: "calc(calc(-23px + 1vw) * 12)", // shift more as screen gets smaller
            animationDelay: "0.5s",
          }}
        >
          <Image src="/images/jumbotron/jumbo-flower.svg" alt="" width={0} height={0} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transform: "scaleX(-1)" }} />
        </div>

        {/* bottom right */}
        <div className=" absolute bottom-0 right-0 w-1/7 min-w-[100px] ratio-1/1">
          <div className="flex items-center justify-center h-full pe-[1rem] pb-[1rem]">
            <Image src="/images/jumbotron/jumbo-bottom-right.svg" alt="" width={0} height={0} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>
        </div>

        {/* content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 max-w-[450px] h-3/5">
          <div className="flex flex-col justify-center h-full">
            <div className="flex justify-center mb-10">
              {/* <Image className="text-amber-500" src="/images/jumbotron/logo.svg" alt="" width={0} height={0} style={{ width: "100px", height: "100%", objectFit: "contain" }} /> */}
              <Logo color="#C43C37" size={170} />
            </div>
            <div className="flex flex-col gap-2 mb-7">
              <div>
                <h1 className="text-center text-3xl font-bold text-[#C43C37]">
                  <span className="text-lg font-cormorant">THE WEDDING OF</span>
                </h1>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <Fani color="#C43C37" size={150} />
                <And color="#C43C37" size={50} />
                <Ibnu color="#C43C37" size={150} />
              </div>
            </div>
            <div className="w-full flex flex-col font-bold text-[#C43C37] gap-2 mb-4">
              <div className="w-full flex justify-center text-center">
                <span className="text-md font-cormorant">
                  Kepada Yth.
                  <br />
                  Bapak/Ibu/Saudara/I
                </span>
              </div>
              <div className="w-full flex justify-center text-center">
                <span className="text-2xl font-bold font-cormorant ">Aladin dan Partner</span>
              </div>
            </div>

            {isOpening && (
              <div className={`w-full flex justify-center ${isOpen ? "animate-slide-up-fade" : ""}`}>
                <button className="bg-[#C43C37] hover:cursor-pointer py-3 px-10 rounded-full text-white font-cormorant" onClick={() => setIsOpen(true)}>
                  Open Invitation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
