import { Image } from "antd";
import AnimatedSection from "../hooks/useInView";

export default function Gallery() {
  const gallery_prefix = "/images/gallery/gallery";
  return (
    <>
      <div className="relative flex flex-col gap-7 justify-center items-center bg-[#E8D3B5] py-3 z-10 w-full">
        <div className="flex justify-center items-center font-cormorant font-black text-2xl text-[#990000]">OUR GALLERY</div>
        <div className="grid grid-cols-2 px-7 gap-7">
          {Array.from({ length: 6 }).map((_, i) => (
            <AnimatedSection animation={i % 2 === 0 ? "slide_right" : "slide_left"} key={i}>
              <div className="border-2 border-[#990000] rounded-xl w-full aspect-square overflow-hidden flex items-center justify-center">
                <Image src={`${gallery_prefix}_${i + 1}.jpg`} alt={`gallery-${i + 1}`} width="100%" height="100%" style={{ objectFit: "cover" }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}
