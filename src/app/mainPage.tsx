"use client";
import Gallery from "@/components/gallery/gallery";
import AnimatedSection from "@/components/hooks/useInView";
// import { BottomCardBox, MiddleCardBox, TopCardBox } from "@/components/icon/content-2/svg";
import { Background, Background2, FlowerBottom, FlowerFill, FlowerStroke, Rope, SaveADate, WeddingClipper2, WeddingDateClipper, WeddingDateClipperBorder } from "@/components/icon/content/svg";
import { And, Fani, Ibnu, Logo } from "@/components/icon/jumbotron/Icons";
import MainLayout from "@/components/mainLayout";
import Ucapan from "@/components/ucapan/ucapan";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MainPage() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");
  const partner = searchParams.get("partner");
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

  const targetDate = "2025-06-28T08:00:00";
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Triggered number state for animation
  const [animatedTime, setAnimatedTime] = useState(timeLeft);

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");

      const newTime = { days, hours, minutes, seconds };
      setTimeLeft(newTime);
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const renderAnimatedNumber = (value: any, key: any) => (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 300, // controls the speed (higher = faster)
          damping: 15, // controls the bounciness (lower = more bounce)
        }}
        className="text-[7vw] md:text-[3vw] lg:text-[2.5vw] leading-none absolute"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );

  return (
    <MainLayout>
      <div className="w-full overflow-x-hidden min-h-screen">
        {/* content #1 */}
        <div className="relative w-full h-dvh bg-[#990000]">
          <div className="w-full h-full z-0 aspect-square overflow-hidden">
            <Image src="/images/content-1.png" alt="placeholder" fill className="object-cover absolute" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/40 via-[#990000]-800/40 to-transparent z-0"></div>
            <div
              className="absolute top-0 left-0 w-full h-full z-0"
              style={{
                background: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 30%)",
              }}
            ></div>
            <div
              className="absolute top-0 left-0 w-full h-full z-0"
              style={{
                background: "linear-gradient(to top, rgba(153, 0, 0, 1) 0%, transparent 50%)",
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#990000] opacity-10 z-0"></div>
          </div>
          <div className="absolute w-full h-max bottom-20">
            <div className="w-full flex flex-col items-center z-20">
              <span className="text-2xl font-cormorant text-center text-[#D6A527] animate-slide-up">THE WEDDING OF</span>
              <div className="flex gap-4 justify-center items-center mb-3 animate-slide-up">
                <Fani color="#D6A527" size={120} />
                <And color="#D6A527" size={50} />
                <Ibnu color="#D6A527" size={120} />
              </div>
              <div className="w-full flex flex-col font-bold text-[#D6A527] gap-2 mb-4 animate-slide-up">
                <div className="w-full flex justify-center text-center">
                  <span className="text-sm font-quicksand">
                    Kepada Yth.
                    <br />
                    Bapak/Ibu/Saudara/I
                  </span>
                </div>
                <div className="w-full flex justify-center text-center animate-slide-up">
                  <span className="text-2xl font-bold font-quicksand ">
                    {to ? to : "Guest"}
                    {partner ? ` & ${partner}` : ""}
                  </span>
                </div>
              </div>
            </div>
            s
          </div>
        </div>
        {/* content #2 */}
        <div ref={containerRef} className="relative overflow-hidden bg-[#990000] px-7 py-3">
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
            <div className="min-h-screen flex flex-col gap-10 pb-10 relative">
              <img src="/images/content/content-2/flower_card_box.png" alt="flower" className="w-[40%] absolute -right-5 bottom-0 z-0" />
              {/* <img src="/images/content/content-2/flower_card_box.png" alt="flower" className="w-[40%] absolute left-0 bottom-80 z-0 -scale-x-100" /> */}
              <img src="/images/content/content-2/flower-right.png" alt="flower" className="w-[30%] absolute z-10 -right-15 -top-20 animate-swing-slow-right origin-bottom-right" />
              <img src="/images/content/content-2/flower-left.png" alt="flower" className="w-[25%] absolute z-10 -left-10 top-30 animate-swing-slow-left origin-bottom-left" style={{ animationDelay: "1s" }} />
              <AnimatedSection>
                <div className={`w-full aspect-[16/10] overflow-hidden rounded-md relative shadow-lg inset-shadow-sm`}>
                  <Image src="/images/DSCF7081.jpg" alt="content-2" fill className={`object-cover object-center scale-140`} />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0"></div>
                </div>
              </AnimatedSection>
              <AnimatedSection className="h-full flex-1 flex flex-col justify-between mb-10">
                <div className="z-10">
                  <div className="w-[50%] py-3 mx-auto">
                    <Image src={"/images/content/content-2/bismillah.png"} alt="Basmallah" height={207} width={1020} />
                  </div>
                  <div className="flex flex-col justify-center gap-4 text-[#990000] font-quicksand font-bold text-xs max-sm:text-[11px] z-10">
                    <span className="text-center text-shadow-sm text-shadow-amber-100">
                      Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang.
                      Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                    </span>
                    <span className="text-center text-lg max-sm:text-[13px]">QS. Ar-Rum: 21</span>
                  </div>
                </div>
                <Logo size={"60"} width={"auto"} color="#990000" />
              </AnimatedSection>
            </div>

            {/* sub content #2 */}
            <AnimatedSection className="w-full text-center">
              <span className="text-center text-[#990000] font-quicksand mt-10 text-[2.8vw] md:text-[1.5vw] lg:text-[1.2vw]">
                Dengan memohon rahmat dan ridho Allah SWT kami mengundang Bapak/Ibu Saudara/i untuk menghadiri acara pernikahan putra-putri kami:
              </span>
            </AnimatedSection>
            <div className="flex flex-col gap-4 justify-center items-center font-quicksand z-100 text-shadow-sm text-shadow-amber-100">
              <AnimatedSection id="biodata-cpw" className="relative flex flex-col items-center justify-center gap-5 font-quicksand z-100">
                <div className="relative w-[50vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] aspect-square rounded-xl border-5 border-[#D6A527]/30 overflow-hidden">
                  <Image src="/images/foto_fani.jpg" alt="photo-1" fill className="object-cover object-center scale-110" sizes="100%" />
                </div>
                <div className="absolute top-0 w-[50vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] aspect-square ">
                  <div className="absolute bottom-0 -right-2 -rotate-30">
                    <span className="text-[10vw] md:text-[7vw] lg:text-[5vw] font-birthstone leading-none text-[#d82525] font-black ">Fani</span>
                  </div>
                </div>
                <div id="biodata-description" className="text-center">
                  <span className="font-bold text-[#990000] text-[4vw] md:text-[2vw] lg:text-[1.5vw]">FARAH URFANI NUGRAHA, S.Kom</span>
                  <br />
                  <p className=" text-[#990000] text-[2.5vw] md:text-[1.3vw] lg:text-[1vw] mt-2 font-medium">
                    Putri kedua dari <br /> Bapak Ir. Bambang Nugraha & Ibu Siti Zubaidah
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection id="biodata-cpp" className="relative flex flex-col items-center justify-center gap-5 font-quicksand mt-3 z-100">
                <div className="relative w-[50vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] aspect-square rounded-xl border-5 border-[#D6A527]/30 overflow-hidden">
                  <Image src="/images/foto_ibnu.jpg" alt="photo-1" fill className="object-cover object-center scale-130" sizes="100%" />
                </div>
                <div className="absolute top-0 w-[50vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] aspect-square ">
                  <div className="absolute bottom-0 -left-2 rotate-15">
                    <span className="text-[10vw] md:text-[7vw] lg:text-[5vw] font-birthstone leading-none text-[#d82525] font-black ">Ibnu</span>
                  </div>
                </div>
                <div id="biodata-description" className="text-center">
                  <span className="font-bold text-[#990000] text-[4vw] md:text-[2vw] lg:text-[1.5vw]">IBNU ABBAS AROBY, S.Kom</span>
                  <br />
                  <p className=" text-[#990000] text-[2.5vw] md:text-[1.3vw] lg:text-[1vw] mt-3 font-medium">
                    Putra tunggal dari <br /> Bapak Rusman Aroby & Ibu Siti Nabilah Aroby
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
          <img src="/images/content/content-2/Bot.png" alt="TopCard" className="-mt-2" />
        </div>

        {/* content #3 */}
        <div className="relative bg-[#990000] py-3 z-10">
          {/* save a date */}
          <div
            id="save-a-date"
            className="h-[500px] relative flex flex-col gap-5 justify-center items-center"
            style={{
              backgroundImage: "url('/images/content/content-3/cardbox.png')",
              backgroundSize: "cover",
            }}
          >
            <SaveADate height={"30%"} />
            <div className="flex gap-5 w-full justify-center">
              {[
                { label: "Hari", value: timeLeft.days },
                { label: "Jam", value: timeLeft.hours },
                { label: "Menit", value: timeLeft.minutes },
                { label: "Detik", value: timeLeft.seconds },
              ].map(({ label, value }, idx) => (
                <div key={idx} className="w-[15%] aspect-square bg-[#990000] rounded-lg opacity-60 flex flex-col gap-2 justify-center items-center text-[#D9A693] py-3 relative overflow-hidden">
                  <div className="relative h-[3.5em] flex items-center justify-center">{renderAnimatedNumber(value, label)}</div>
                  <span className="text-[3vw] md:text-[2vw] lg:text-[1.5vw] leading-none">{label}</span>
                </div>
              ))}
            </div>
            <div className="w-[40%] min-w-[300px]  flex items-center justify-center bg-[#990000]/80 rounded-full py-2 px-5 text-[#F1D6AB] text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-quicksand font-bold hover:cursor-pointer hover:bg-[#990000]/50 hover:text-[#990000] transition-all">
              <a href="https://calendar.app.google/hB8WJTCGJooatWWs8" target="_blank">
                Simpan Di Kalender
              </a>
            </div>
          </div>
          <div id="save-a-date-description" className="my-10 mx-5 relative flex items-center  justify-center ">
            <div className="absolute w-[80%] h-[80%] aspect-[7/10] flex flex-col justify-center items-center z-10 px-10 gap-10 font-cormorant font-bold text-[#F1D6AB]">
              <div id="description_1" className="text-center">
                <div id="title" className="text-[7vw] md:text-[3vw] lg:text-[2vw]">
                  <span>AKAD NIKAH</span>
                </div>
                {/* <div id="date" className="text-[4vw] md:text-[2vw] lg:text-[1.5vw] trailin"></div> */}
                <div id="time" className="text-[4vw] md:text-[2vw] lg:text-[1.5vw] leading-7 mb-2">
                  <span>28 June 2025</span>
                  <br />
                  <span>08:00 - 10:00 WIB</span>
                </div>
                <div id="place" className="text-[3vw] md:text-[1.5vw] lg:text-[1vw]">
                  <span>
                    Legacy Hall, Aston Imperial Bekasi,
                    <br /> Jl. KH. Noer Ali No.177, Kayuringin Jaya, Kec. Bekasi sel., Kota Bekasi, Jawa Barat 17144
                  </span>
                </div>
              </div>
              <div id="description_2" className="text-center">
                <div id="title" className="text-[7vw] md:text-[3vw] lg:text-[2vw]">
                  <span>RESEPSI</span>
                </div>
                <div id="time" className="text-[4vw] md:text-[2vw] lg:text-[1.5vw] leading-7 mb-2">
                  <span>28 June 2025</span>
                  <br />
                  <span>11:00 - 13:00 WIB</span>
                </div>
                <div id="place" className="text-[3vw] md:text-[1.5vw] lg:text-[1vw]">
                  <span>
                    Legacy Hall, Aston Imperial Bekasi,
                    <br /> Jl. KH. Noer Ali No.177, Kayuringin Jaya, Kec. Bekasi sel., Kota Bekasi, Jawa Barat 17144
                  </span>
                </div>
              </div>
              <div className="w-[80%] flex items-center justify-center hover:cursor-pointer bg-[#F1D6AB]/80 rounded-full py-2 px-5 text-[#990000] text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-quicksand font-bold hover:bg-[#F1D6AB]/50 hover:text-[#F1D6AB] transition-all">
                <a href="https://maps.app.goo.gl/fohEdam8PJ9dRDgw8" target="_blank">
                  Lihat Lokasi
                </a>
              </div>
            </div>
            <div className="w-full aspect-[7/10]">
              <WeddingClipper2 width={"100%"} height={"auto"} />
            </div>
          </div>
        </div>

        {/* OUR GALLERY */}
        <Gallery />

        {/* Ucapan */}
        <Ucapan />

        {/* Bottom Bar */}
        <div className="flex items-center justify-center h-20 bg-[#990000] text-[#F1D6AB] text-sm font-quicksand font-bold">
          <a href="https://www.linkedin.com/in/azharngrh/" target="_blank">
            © 2025 All rights Reserved - Design by Azhar Nugraha
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
