"use client";
import { BottomCardBox, TopCardBox } from "@/components/icon/content-2/svg";
import { Background, Background2, FlowerBottom, FlowerFill, FlowerStroke, Rope } from "@/components/icon/content/svg";
import { And, Fani, Ibnu, Logo } from "@/components/icon/jumbotron/Icons";
import MainLayout from "@/components/mainLayout";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MainPage() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(25);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const updateHeight = () => setHeight(element.offsetHeight);

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);

    // Initial set
    updateHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* content #1 */}
        <div className="relative w-full h-dvh bg-[#990000]">
          <div className="absolute w-full h-dvh overflow-hidden z-10">
            <div className="absolute w-full z-0 min-[540px]:max-[768px]:max-w-[80%] xl:max-w-[80%]">
              <Background2 height={"100%"} width={"auto"} />
            </div>
            <div className="absolute w-full z-10 min-[540px]:max-[768px]:max-w-[80%] xl:max-w-[80%]">
              <Background height={"100%"} width={"auto"} />
            </div>
            <div className="relative flex flex-col h-dvh">
              <div className="relative w-full aspect-square z-20">
                <div className="absolute z-10 right-[-5px] bottom-0 w-[40%] animate-swing-slow-right origin-bottom-right" style={{ animationDelay: "1.2s" }}>
                  <FlowerStroke width={"100%"} height={"auto"} />
                </div>
                <div className="absolute z-20 right-[-5px] bottom-0 w-[25%] animate-swing-slow-right origin-bottom-right">
                  <FlowerFill width={"100%"} height={"auto"} />
                </div>
                <div className="absolute w-full min-w-[400px] z-30 md:-bottom-65 lg:-bottom-75 max-md:-bottom-80">
                  <Rope width={"100%"} height={"auto"} />
                </div>
              </div>
              <div ref={headerRef} className="relative flex-1 h-full flex flex-col gap-2 justify-center w-full z-100 text-center text-3xl font-bold text-[#D6A527]">
                <div className="absolute w-full h-max max-[540px]:top-0 xl:-top-20 md:top-0" style={{ bottom: height ? `${height * 0.5}px` : undefined }}>
                  <div>
                    <span className="text-2xl font-cormorant">THE WEDDING OF</span>
                    <div className="flex gap-4 justify-center items-center mb-3">
                      <Fani color="#D6A527" size={120} />
                      <And color="#D6A527" size={50} />
                      <Ibnu color="#D6A527" size={120} />
                    </div>
                    <div className="w-full flex flex-col font-bold text-[#D6A527] gap-2 mb-4">
                      <div className="w-full flex justify-center text-center">
                        <span className="text-sm font-cormorant">
                          Kepada Yth.
                          <br />
                          Bapak/Ibu/Saudara/I
                        </span>
                      </div>
                      <div className="w-full flex justify-center text-center">
                        <span className="text-2xl font-bold font-cormorant ">Aladin dan Partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[10%] top-10 right-10 z-30 ">
              <Logo size={"auto"} width={"100%"} color="#D6A527" />
            </div>
          </div>
          <div className="absolute w-[25%] min-w-[150px] -bottom-2 -left-8 z-30 animate-swing-slow-left origin-bottom-left">
            <FlowerBottom width={"100%"} height={"auto"} />
          </div>
          <div className="absolute w-full z-0 aspect-square overflow-hidden min-[540px]:max-[768px]:max-w-[80%] xl:max-w-[80%]">
            <Image src="/images/content-1.png" alt="placeholder" width={1025} height={1539} className="object-cover absolute -left-15 -top-20 -rotate-12" />
          </div>
        </div>
        {/* content #2 */}
        <div className="relative w-full bg-[#990000] pt-10">
          <div className="relative w-full px-10">
            <div>
              <TopCardBox width={"100%"} height={"auto"} />
            </div>
            <div className="-mt-1">
              <BottomCardBox width={"100%"} height={"auto"} />
            </div>
          </div>
          <div className="absolute w-full top-20 px-20 z-10">
            <div className="w-full aspect-[16/10] overflow-hidden rounded-md relative shadow-lg inset-shadow-sm">
              <Image src="/images/content-2.jpg" alt="content-2" fill className="object-cover object-center scale-140" />
            </div>
          </div>
        </div>
        <div className="relative h-[1000px]"></div>
      </div>
    </MainLayout>
  );
}
