import React from "react";
import { rmageddon } from "../assets";
import styles from "../style";
import Button from "./Button";
const Card = () => {
  return (
    <section id="./compittions" name="compittions">
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
                  Line-Follower
                </p>
                <p
                  className={`${styles.paragraph} max-w-[450px] mt-5  text-center`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Architecto, minus esse earum nobis cumque est tenetur quam
                  repellendus reiciendis modi hic? Voluptatum culpa nihil
                  pariatur reprehenderit, blanditiis vero non nemo?
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
                  Robo-Sumo
                </p>
                <p
                  className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque corporis excepturi nostrum quasi impedit porro natus
                  veniam! Veniam pariatur earum eum! Voluptate aperiam quia
                  exercitationem quidem ab voluptatibus qui unde?
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
                  Robo-Race
                </p>
                <p
                  className={`${styles.paragraph} max-w-[470px] mt-5 text-center `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores ex sint laborum molestiae velit nihil beatae
                  reprehenderit nam esse non, quaerat accusamus eum! Molestiae,
                  eligendi nam esse dolores cupiditate et.
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
