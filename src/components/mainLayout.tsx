"use client";
import { useEffect, useState } from "react";
import Jumbotron from "./jumbotron/jumbotron";
import { useLayout } from "./LayoutContext";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useLayout();
  const [showTop, setShowTop] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimate(true); // trigger animation
      const timeout = setTimeout(() => {
        setShowTop(false); // remove top section after animation ends
      }, 500); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Top Jumbotron Section */}
      {showTop && (
        <div className={`min-h-dvh fixed overflow-hidden top-0 left-0 w-full h-full z-10 ${animate ? "animate-slide-up-fade" : "block"}`}>
          <div className="block w-full h-full overflow-hidden">
            <Jumbotron isOpening={true} />
          </div>
        </div>
      )}

      {/* Main Content always visible when isOpen */}
      <div className="relative z-0 flex min-h-dvh">
        {/* Left side (Jumbotron static) - hidden on mobile */}
        <div className="hidden md:block md:w-1/2 lg:w-3/5 fixed h-full overflow-hidden">
          <Jumbotron isOpening={false} />
        </div>

        {/* Right side (Content) */}
        <div className="w-full md:ml-[50%] lg:ml-[60%] overflow-y-auto bg-white">{children}</div>
      </div>
    </div>
  );
}
