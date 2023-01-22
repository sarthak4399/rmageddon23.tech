import React from "react";
import { rmageddon } from "../assets";
import styles from "../style";
import Button from "./Button";
const Card = () => {
  return (
    <section id="compittions" name="compittions">
      <div className="grid lg:grid-cols-3 gap-4 text-green-400 py-1 h-full w-full ">
        <script src="https://cdn.tailwindcss.com" />
        <div className="flex h-screen items-center ">
          <div className="group relative mr-[-20px] w-[350px]  overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00df9a] hover:to-[#DFFA2D]">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-black-gradient p-6">
              <div className="space-y-1">
                <img
                  src={rmageddon}
                  alt=""
                  className="w-[150px] h-[150px] mx-auto"
                />
                <p className="text-lg font-semibold text-gradient text-center">
                  PAC RUNNER
                </p>
                <p
                  className={`${styles.paragraph} max-w-[450px] mt-5  text-center`}
                >
                  The objective of this PAC RUNNER contest is for a robot to
                  follow a black line on a white background, without losing the
                  line, and navigating several 90 degree turns. The robot to
                  complete the course in the shortest period of time while
                  accurately tracking the course line from start to finish wins.
                </p>
                <div className=" justify-center flex ">
                  <Button styles={`mt-10`} className="sm:" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen items-center">
          <div className="group relative mx-auto w-[350px] overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00df9a]  hover:to-[#DFFA2D]">
            <div className="group-hover:animate-spin-slow invisible absolute -top-20 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-black-gradient p-6">
              <div className="space-y-1">
                <img
                  src={rmageddon}
                  alt=""
                  className="w-[150px] h-[150px]  mx-auto"
                />
                <p className="text-lg font-semibold text-gradient  text-center">
                  RETROMANIA
                </p>
                <p
                  className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}
                >
                  Design a wired robot within the specified dimensions that can
                  operated manually and can travel through all turns of the
                  track and pass through all the obstacles. The robot that will
                  complete the race in least time will be the winner of the
                  RETROMANIA.
                </p>
                <div className=" justify-center flex ">
                  <Button styles={`mt-10`} className="sm:" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-screen items-center">
          <div className="group relative mx-auto w-[350px] overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00df9a]  hover:to-[#DFFA2D]">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-black-gradient p-6">
              <div className="space-y-1">
                <img
                  src={rmageddon}
                  alt=""
                  className="w-[150px] h-[150px]  mx-auto"
                />
                <p className="text-lg font-semibold text-gradient text-center">
                  NINJA TURTLE
                </p>
                <p
                  className={`${styles.paragraph} max-w-[470px] mt-5 text-center `}
                >
                  NINJA TURTLE is a sport in which 2 robots have to push each
                  other out of the arena.The operators have to operate robots
                  from outside and try to push opponent's robot out of the arena
                  by different tactics also have to prevent own robot from
                  leaving the arena.
                </p>
                <div className=" justify-center flex ">
                  <Button styles={`mt-10`} className="sm:" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;
