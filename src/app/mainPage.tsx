import { Background, Background2, FlowerBottom, FlowerFill, FlowerStroke, Rope } from "@/components/icon/content/svg";
import { Logo } from "@/components/icon/jumbotron/Icons";
import MainLayout from "@/components/mainLayout";
import Image from "next/image";

export default function MainPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        {/* content #1 */}
        <div className="relative w-full h-dvh overflow-hidden bg-[#990000]">
          <div className="absolute w-full h-full z-10">
            <div className="absolute w-full top-0 right-0 z-0">
              <Background2 width={"100%"} />
            </div>
            <div className="absolute w-full top-0 right-0 z-0">
              <Background height={"100%"} width={"100%"} />
            </div>
            <div className="absolute w-full aspect-square z-20">
              <div className="absolute z-10 right-[-5px] bottom-0 w-[40%]">
                <FlowerStroke width={"100%"} height={"auto"} />
              </div>
              <div className="absolute z-20 right-[-5px] bottom-0 w-[25%]">
                <FlowerFill width={"100%"} height={"auto"} />
              </div>
              <div className="absolute w-full min-w-[400px] z-30 md:-bottom-65 lg:-bottom-75 max-md:-bottom-80">
                <Rope width={"100%"} height={"auto"} />
              </div>
            </div>
            <div className="absolute w-[10%] top-10 right-10 z-30 ">
              <Logo size={"auto"} width={"100%"} color="#D6A527" />
            </div>
            <div className="absolute w-[25%] min-w-[150px] -bottom-2 -left-8 z-30">
              <FlowerBottom width={"100%"} height={"auto"} />
            </div>
          </div>
          <div className="absolute w-full z-0 aspect-square overflow-hidden">
            <Image src="/images/content-1.png" alt="placeholder" width={1025} height={1539} className="object-cover absolute -left-15 -top-20 -rotate-12" />
          </div>
        </div>
        {/* content #2 */}
        <div className="relative w-full h-screen overflow-hidden bg-[#990000]">
          <div className="absolute w-full top-0 right-0 z-10 ">
            <Background height={"100%"} width={"100%"} />
          </div>
          <div className="absolute w-full z-0">
            <div className="flex justify-center items-center aspect-square bg-amber-200 w-full">
              <h1>Photo Place holder</h1>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
