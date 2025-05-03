"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Jumbotron() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(32);

  useEffect(() => {
    const resizeHandler = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const papanWidth = 32; // Set your image's actual width in px
      setCount(Math.ceil(containerWidth / papanWidth));
    };

    resizeHandler(); // Initial calculation
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
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
              if (idx === 0 || idx === count - 1) {
                return <Image key={idx} src="/images/jumbotron/Papan_100.svg" alt="" width={0} height={0} style={{ width: "30px", height: "auto", objectFit: "contain", objectPosition: "top" }} />;
              } else if (idx === 1 || idx === count - 2) {
                return <Image key={idx} src="/images/jumbotron/Papan_80.svg" alt="" width={0} height={0} style={{ width: "30px", height: "auto", objectFit: "contain", objectPosition: "top" }} />;
              } else if (idx === 2 || idx === count - 3) {
                return <Image key={idx} src="/images/jumbotron/Papan_60.svg" alt="" width={0} height={0} style={{ width: "30px", height: "auto", objectFit: "contain", objectPosition: "top" }} />;
              }

              return <Image key={idx} src="/images/jumbotron/Papan_40.svg" alt="" width={0} height={0} style={{ width: "30px", height: "auto", objectFit: "contain", objectPosition: "top" }} />;
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
          className=" absolute top-0 bottom-0 h-full"
          style={{
            right: "calc(calc(-23px + 1vw) * 12)", // shift more as screen gets smaller
          }}
        >
          <Image src="/images/jumbotron/jumbo-flower.svg" alt="" width={0} height={0} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
        </div>

        <div
          className=" absolute top-0 bottom-0 h-full"
          style={{
            left: "calc(calc(-23px + 1vw) * 12)", // shift more as screen gets smaller
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
          <div className="flex flex-col justify-center h-full gap-5">
            <div className="w-full flex justify-start">
              <Image src="/images/jumbotron/fani.svg" alt="" width={0} height={0} style={{ width: "250px", height: "100%", objectFit: "contain", objectPosition: "top" }} />
            </div>
            <div className="w-full flex justify-center">
              <Image src="/images/jumbotron/and.svg" alt="" width={0} height={0} style={{ width: "50px", height: "100%", objectFit: "contain", objectPosition: "top" }} />
            </div>
            <div className="w-full flex justify-end mb-10">
              <Image src="/images/jumbotron/ibnu.svg" alt="" width={0} height={0} style={{ width: "250px", height: "100%", objectFit: "contain", objectPosition: "top" }} />
            </div>
            <div className="w-full flex flex-col font-bold text-[#C43C37] gap-2">
              <div className="w-full flex justify-center text-center">
                <span className="text-lg font-cormorant">
                  Kepada Yth.
                  <br />
                  Bapak/Ibu/Saudara/I
                </span>
              </div>
              <div className="w-full flex justify-center text-center">
                <span className="text-4xl font-cormorant ">Aladin dan Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
