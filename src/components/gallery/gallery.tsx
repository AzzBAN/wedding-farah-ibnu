import { Image } from "antd";
import AnimatedSection from "../hooks/useInView";

export default function Gallery() {
  const gallery_prefix = "/images/gallery/gallery";
  return (
    <>
      <div className="relative flex flex-col gap-7 justify-center items-center bg-[#990000] pt-10 pb-10 z-10 w-full ">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/content/content-3/cardbox.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: "rotate(180deg)",
            zIndex: -1,
          }}
        ></div>
        <div className="flex justify-center items-center font-imperial-script font-black text-shadow-[2px_2px_2px_rgba(227,68,68,0.5)] text-[10vw] md:text-[5vw] xl:text-[3vw] text-[#990000]">Our Gallery</div>
        <div className="grid grid-cols-2 px-7 gap-7">
          {Array.from({ length: 6 }).map((_, i) => (
            <AnimatedSection animation={i % 2 === 0 ? "slide_right" : "slide_left"} key={i}>
              <div className="border-2 border-[#990000] rounded-xl w-full aspect-square overflow-hidden flex items-center justify-center shadow-2xl transition-all hover:scale-105">
                <Image src={`${gallery_prefix}_${i + 1}.jpg`} alt={`gallery-${i + 1}`} width="100%" height="100%" style={{ objectFit: "cover" }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}
