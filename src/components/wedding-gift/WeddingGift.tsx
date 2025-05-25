import { div } from "framer-motion/client";
import { useState } from "react";
import { useLayout } from "../LayoutContext";

export default function WeddingGift() {
  const { isModalOpen, setIsModalOpen } = useLayout();
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div id="wedding-gift" className="flex flex-col gap-3 justify-center items-center px-7">
        <div className="flex justify-center items-center font-imperial-script font-black text-shadow-[2px_2px_2px_rgba(227,68,68,0.5)] text-[10vw] md:text-[5vw] xl:text-[3vw] text-[#990000]">Wedding Gift</div>
        <span className="leading-none font-birthstone text-xl text-center">Untuk rekan, sahabat, dan keluarga yang berkenan memberikan tanda kasih, kami dengan senang hati akan menerimanya. Silakan klik tombol di bawah ini.</span>
        <button className="hover:cursor-pointer" onClick={handleClick}>
          <div className="w-[40%] min-w-[300px] flex items-center justify-center bg-[#990000]/80 rounded-full py-2 px-5 text-[#F1D6AB] text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-quicksand font-bold">Kirim Kado Online</div>
        </button>
      </div>
    </>
  );
}
