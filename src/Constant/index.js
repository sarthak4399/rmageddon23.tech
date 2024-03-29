import { facebook, instagram, linkedin, youtube } from "../assets";
import { GiClick } from "react-icons/gi";
import { AiOutlineForm } from "react-icons/ai";
import { MdCelebration } from "react-icons/md";
export const footerLinks = [
  {
    title: "Club",
    links: [
      {
        name: "About",
        link: "https://www.rnxg.co.in/profiles",
      },
      {
        name: "Privacy",
        link: "https://www.rnxg.co.in/Privicy",
      },
      {
        name: "Terms & Condittion",
        link: "https://www.rnxg.co.in/Terms",
        URL: "https://www.rnxg.co.in/Terms",
      },
    ],
  },
  {
    title: "Other-link",
    links: [
      {
        name: "Home",
        link: "https://www.rnxg.co.in/profiles",
      },
      { id: "compittions", name: "Compittions" },
      { id: "register", name: "Register" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        name: "rnxg@sggs.ac.in",
        link: "https://mail.google.com/mail/u/0/?fs=1&to=rnxg@sggs.ac.in&tf=cm",
      },
    ],
  },
];
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "compittions",
    title: "Compittions",
  },
  {
    id: "reward",
    title: "Reward",
  },
  {
    id: "register",
    title: "Register",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "form",
    title: "Form",
  },
];
export const features = [
  {
    id: "reward-1",

    title: "Cash Prices",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: "reward-2",
    title: "Certificate",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];
export const attraction = [
  {
    id: "compittions",
    title: "compittions",
    value: "3",
  },
  {
    id: "theme",
    title: "New Themes",
    value: "3",
  },
  {
    id: "Cash ",
    title: "Cash Price",
    value: "20K",
  },
];
export const socialMedia = [
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/sggs_rnxg/",
  },
  {
    id: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/rnxgsggs",
  },

  {
    id: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A31238246&keywords=rnxg&origin=RICH_QUERY_SUGGESTION&position=0&searchId=d79dd991-69ab-4670-9543-5643e13efd28&sid=gg7",
  },
  {
    id: "youtube",
    icon: youtube,
    link: "https://www.youtube.com/channel/UC9fFrYx9UEpxDjS9YO6t2FA",
  },
];
export const steps = [
  {
    id: "step-1",
    icon: { GiClick },
    title: "Click on the Regester Now button",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: "step-2",
    icon: { AiOutlineForm },
    title: "Fill Up Your Details",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: "step-3",
    icon: { MdCelebration },
    title: "Here You Go registration Sucessfull",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];
