"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";

const routes: { [key: string]: string } = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({
  children,
  backgroundColor,
}: {
  children: ReactNode;
  backgroundColor: string;
}) {
  const router = useRouter();

  type DimensionType = {
    width: number;
    height: number; // you can specify enum also
  };
  const [dimensions, setDimensions] = useState<DimensionType | null>(null);

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    console.log("resizing window");
    return () => {
      window.removeEventListener("resize", resize);
      console.log("removed resize");
    };
  }, []);

  return (
    <div className="h-screen" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions?.width == null ? 1 : 0 }}
        className="bg-[#22184E] transition-opacity delay-0 ease-linear duration-100 fixed w-screen pointer-events-none left-0 top-0 h-[calc(100vh_+_600px)]"
      />

      <motion.p
        style={{ color: backgroundColor }}
        className={`absolute left-[50%] top-[40%]  text-[46px] z-20 text-center translate-x-[-50%]`}
        {...anim(text)}
      >
        {routes[router.route]}
      </motion.p>
      {dimensions?.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      className="fixed w-screen pointer-events-none left-0 top-0 h-[calc(100vh_+_600px)] z-15"
      {...anim(translate)}
    >
      <motion.path
        className="fill-[#22184E]"
        {...anim(curve({ initialPath, targetPath }))}
      />
    </motion.svg>
  );
};
