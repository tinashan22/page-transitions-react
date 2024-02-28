import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { opacity, expand } from "./anim";

export default function Steps({
  children,
  backgroundColor,
}: {
  children: ReactNode;
  backgroundColor: string;
}) {
  const anim = (variants: any, custom: number | null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div className="p-10 h-screen" style={{ backgroundColor }}>
      <motion.div
        {...anim(opacity, null)}
        className="fixed w-full h-screen bg-black z-1 pointer-events-none top-0 left-0"
      />
      <div className="fixed w-screen h-screen  flex left-0 top-0 pointer-events-none z-2">
        {[...Array(nbOfColumns)].map((_, index) => {
          return (
            <motion.div
              className="relative h-full w-full bg-black"
              key={index}
              {...anim(expand, nbOfColumns - index)}
            ></motion.div>
          );
        })}
      </div>
      {children}
    </div>
  );
}
