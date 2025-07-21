'use client'
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Cards";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSS3 from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: SiTypescript,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "TailwindCSS",
    iconType: RiTailwindCssFill,
  },
  {
    title: "CSS3",
    iconType: CSS3,
  },
  {
    title: "Framer Motion",
    iconType: TbBrandFramerMotion,
  },
  {
    title: "MongoDB",
    iconType: SiMongodb,
  },
  {
    title: "ReactJS",
    iconType: ReactIcon,
  },
  {
    title: "NextJS",
    iconType: RiNextjsFill,
  },
  {
    title: "NodeJS",
    iconType: RiNodejsLine,
  },
  {
    title: "ExpressJS",
    iconType: SiExpress,
  },
  {
    title: "Git/GitHub",
    iconType: FaGithub,
  },
  {
    title: "Postman",
    iconType: SiPostman,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },

  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Walking",
    emoji: "🚶‍♀️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏽",
    left: "5%",
    top: "65%",
  },

  {
    title: "Reading",
    emoji: "🕮",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="About">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into my world"
          eyebrow="About me"
          description="Learn More About Who I Am, what I do and what inspires me "
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <Image
                src={bookImage}
                alt="Atomic Habits"
                className="w-40 mx-auto mt-8"
              />
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft digital
                experiences"
                className="p-6"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-4"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-4"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 items-center absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag dragConstraints = {constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling emoji"
                  className="size-20"
                />
              </div>{" "}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
