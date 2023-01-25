import styles from "../style";
import { footerLinks, socialMedia } from "../Constant";
const Footer = () => (
  <section
    id="connect"
    name="connect"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h1 className="text-gradient text-3xl text-bold">RNXG</h1>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          RNXG (Robotics for Next Generation) presents a premier platform for
          the exploration and resolution of various technological challenges,
          fostering the creation of unparalleled solutions.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
          {/* otherlinks */}
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            OtherLinks
          </h4>
          <ul className="list-none mt-4">
            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
              <a href="">Home </a>
            </li>
          </ul>
          <ul className="list-none mt-4">
            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
              <a href="">Treasure </a>
            </li>
          </ul>
          <ul className="list-none mt-4">

            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
              <a href="">Battle </a>
            </li>
          </ul>
          <ul className="list-none mt-4">
            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
              <a href="">Connect </a>
            </li>
          </ul>
          
        </div>
        {/* club */}
        <div>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Club
          </h4>
          <ul className="list-none mt-4">
            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
              <a href="">  About</a>
            </li>
          </ul>
          <ul className="list-none mt-4">
            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
              <a href="">  Privacy </a>
            </li>
          </ul>
          <ul className="list-none mt-4">
            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
              <a href=""> Terms & Condittion </a>
            </li>
          </ul>
        </div>
        {/* contact us  */}
        <div>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white text-left ">
            Contact us
          </h4>
          <ul className="list-none mt-4">
            <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=rnxg@sggs.ac.in&tf=cm">rnxg@sggs.ac.in </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 RNXG. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6 justify-between">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer rounded-full hover:bg-gradient-to-l from-[#00df9a] to-[#DFFA2D] to  ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
