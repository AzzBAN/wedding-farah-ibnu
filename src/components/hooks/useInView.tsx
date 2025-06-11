"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedComponentProps {
  children: React.ReactNode;
  threshold?: number;
  triggerOnce?: boolean;
  animation?: string;
  className?: string;
  id?: string;
}
export default function AnimatedSection({ children, className, id, animation = "slide_up" }: AnimatedComponentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px 50px 0px" }); // Adjust margin for early trigger

  const variants: Variants = {
    hidden_slide_up: { y: 20, opacity: 0 },
    hidden_slide_left: { x: 20, opacity: 0 },
    hidden_slide_right: { x: -20, opacity: 0 },
    slide_up: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
    slide_left: { x: 0, opacity: 1, transition: { duration: 1, ease: "linear" } },
    slide_right: { x: 0, opacity: 1, transition: { duration: 1, ease: "linear" } },
  };

  return (
    <motion.div ref={ref} variants={variants} initial={"hidden"} animate={isInView ? animation : `hidden_${animation}`} className={className} id={id}>
      {children}
    </motion.div>
  );
}
