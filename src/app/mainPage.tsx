"use client";
// import { BottomCardBox, MiddleCardBox, TopCardBox } from "@/components/icon/content-2/svg";
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [aspectRatio, setAspectRatio] = useState<number | string>(25);
  const [cardboxHeight, setCardboxHeight] = useState<number>(25);
  const [cardboxWidth, setCardboxWidth] = useState<number>(25);

  const updateAspectRatio = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      const ratio = width / height;
      console.log(ratio.toFixed(2));
      setCardboxHeight(height);
      setCardboxWidth(width);
      setAspectRatio(ratio.toFixed(2));
    }
  };

  useEffect(() => {
    updateAspectRatio();
    window.addEventListener("resize", updateAspectRatio);
    return () => window.removeEventListener("resize", updateAspectRatio);
  }, []);

  return (
    <MainLayout>
      <div className="w-full overflow-x-hidden min-h-screen">
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
        <div ref={containerRef} className="relative bg-[#990000] px-7 py-3">
          {/* sub content #1 */}
          <img src="/images/content/content-2/Top.png" alt="TopCard" className="-mb-2" />
          <div
            className="w-full relative px-10 max-sm:px-6 pt-7 flex flex-col justify-center items-center gap-8 pb-7"
            style={{
              backgroundImage: 'url("/images/content/content-2/MiddleCardBox.png")',
              backgroundSize: "contain",
              backgroundRepeat: "repeat-y",
            }}
          >
            <img src="/images/content/content-2/flower_card_box.png" alt="flower" className="w-[40%] absolute right-0 top-80 z-0" />
            <img src="/images/content/content-2/flower-right.png" alt="flower" className="w-[30%] absolute z-10 -right-15 -top-20 animate-swing-slow-right origin-bottom-right" />
            <img src="/images/content/content-2/flower-left.png" alt="flower" className="w-[25%] absolute z-10 -left-10 top-30 animate-swing-slow-left origin-bottom-left" style={{ animationDelay: "1s" }} />
            <div className="w-full aspect-[16/10] overflow-hidden rounded-md relative shadow-lg inset-shadow-sm">
              <Image src="/images/content-2.jpg" alt="content-2" fill className="object-cover object-center scale-140" />
            </div>
            <div className="w-[50%] py-3 mx-auto z-10">
              <Image src={"/images/content/content-2/bismillah.png"} alt="Basmallah" height={207} width={1020} />
            </div>
            <div className="flex flex-col justify-center gap-4 text-[#990000] font-serif text-xs max-sm:text-[11px] z-10">
              <span className="text-center text-shadow-sm text-shadow-amber-100">
                Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang.
                Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
              </span>
              <span className="text-center text-lg max-sm:text-[13px]">QS. Ar-Rum: 21</span>
            </div>
            <Logo size={"auto"} width={40} color="#990000" />

            {/* sub content #2 */}
            <span className="text-center text-[#990000] font-serif mt-10">Dengan memohon rahmat dan ridho Aliah SWT kami mengundang Bapak/Ibu Saudara/i untuk menghadiri acara pernikahan putra-putri kami:</span>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div id="biodata-cpw" className="flex flex-col items-center justify-center">
                <div className="relative px-10">
                  <div className="w-[50%] absolute aspect-1/1 overflow-hidden rounded-full left-1/2 top-1/2 -translate-x-[48%] -translate-y-[55%]">
                    <Image src={"/images/content-2.jpg"} alt="photo-1" fill className="object-cover object-center scale-140" />
                  </div>
                  <div className="relative w-full">
                    <Image src={"/images/content/content-2/photo_border.png"} height={605} width={666} alt="border" />
                  </div>
                </div>
                <div id="biodata-description" className="text-center">
                  <span className="font-bold text-[#990000] text-xl ">FARAH URFANI NUGRAHA, S.Kom</span>
                  <br />
                  <p className=" text-[#990000] text-sm mt-3">
                    Putri kedua dari <br /> Bapak Ir. Bambang Nugraha & Ibu Siti Zubaidah
                  </p>
                </div>
              </div>
              <div id="biodata-cpp" className="flex flex-col items-center justify-center">
                <div className="relative px-10">
                  <div className="w-[50%] absolute aspect-1/1 overflow-hidden rounded-full left-1/2 top-1/2 -translate-x-[48%] -translate-y-[55%]">
                    <Image src={"/images/content-2.jpg"} alt="photo-1" fill className="object-cover object-center scale-140" />
                  </div>
                  <div className="relative w-full">
                    <Image src={"/images/content/content-2/photo_border.png"} height={605} width={666} alt="border" />
                  </div>
                </div>
                <div id="biodata-description" className="text-center">
                  <span className="font-bold text-[#990000] text-xl ">IBNU ABBAS AROBY, S.Kom</span>
                  <br />
                  <p className=" text-[#990000] text-sm mt-3">
                    Putri tunggal dari <br /> Bapak Rusman & Ibu Siti Nabilah Aroby
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="/images/content/content-2/Bot.png" alt="TopCard" className="-mt-2" />
        </div>
      </div>
    </MainLayout>
  );
}
