import styles from "../style";
import { rmageddon } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      name="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            This Year Some <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Retro Style </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          RMAGEDDON
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam eaque
          eius, consequatur doloribus ut sint voluptates, debitis magnam, fuga
          officiis omnis. Explicabo harum sapiente laudantium? Magnam
          consequatur tenetur animi quae!
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={rmageddon}
          alt="rmageddon"
          className="w-[80%] h-[80%]  relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 g__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 b__gradient" />
      </div>
    </section>
  );
};

export default Hero;
