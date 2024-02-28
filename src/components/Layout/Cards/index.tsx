import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { slide, opacity, perspective } from "./anim";
import GlobalNav from "@/components/nav";

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export default function Cards({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black">
      <motion.div
        className="h-screen w-full fixed left-0 top-0 bg-amber-50 z-10"
        {...anim(slide)}
      />

      <motion.div className="bg-amber-50 " {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <GlobalNav />
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
