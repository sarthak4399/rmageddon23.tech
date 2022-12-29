import React from "react";
import { rmageddon } from "../assets";
import styles from "../style";
import Button from "./Button";
const Card = () => {
  return (
    <section id="compittions">
      <div className="grid lg:grid-cols-3 gap-4 text-green-400 py-1 h-full w-full sm: p-0">
        <script src="https://cdn.tailwindcss.com" />

        <div className="flex h-screen items-center">
          <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00df9a]  hover:to-[#DFFA2D]">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-black-gradient p-6">
              <div className="space-y-1">
                <img
                  src={rmageddon}
                  alt=""
                  className="w-[200px] h-[200px] mx-auto"
                />
                <p className="text-lg font-semibold text-gradient">
                  Fast and Furious
                </p>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Optimized with code-splitting, tree-shaking, optimized
                  cold-start, link prefetching, payload extraction, just to name
                  a few. Fast by default so you can focus on building.
                </p>
                <Button styles={`mt-10`} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen items-center">
          <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00df9a]  hover:to-[#DFFA2D]">
            <div className="group-hover:animate-spin-slow invisible absolute -top-20 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-black-gradient p-6">
              <div className="space-y-1">
                <img
                  src={rmageddon}
                  alt=""
                  className="w-[200px] h-[200px] mx-auto"
                />
                <p className="text-lg font-semibold text-slate-800">
                  Fast and Furious
                </p>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Optimized with code-splitting, tree-shaking, optimized
                  cold-start, link prefetching, payload extraction, just to name
                  a few. Fast by default so you can focus on building.
                </p>
                <Button styles={`mt-10`} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen items-center">
          <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00df9a]  hover:to-[#DFFA2D]">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-black-gradient p-6">
              <div className="space-y-1">
                <img
                  src={rmageddon}
                  alt=""
                  className="w-[200px] h-[200px] mx-auto"
                />
                <p className="text-lg font-semibold text-slate-800">
                  Fast and Furious
                </p>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Optimized with code-splitting, tree-shaking, optimized
                  cold-start, link prefetching, payload extraction, just to name
                  a few. Fast by default so you can focus on building.
                </p>
                <Button styles={`mt-10`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;
