import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Cards";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSS3 from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";

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
    title: "MongoDB",
    iconType: SiMongodb,
  },
  {
    title: "ReactJs",
    iconType: ReactIcon,
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
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Fitness",
    emoji: "🏋🏽",
  },
  {
    title: "Walking",
    emoji: "🚶‍♀️",
  },
  {
    title: "Reading",
    emoji: "🕮",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into my world"
          eyebrow="About me"
          description="Learn More About Who I Am, what I do and what inspires me "
        />
        <div className="mt-20">
          <Card className="h-[320px]">
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
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft digital
                experiences"
            />
            <ToolBoxItems items={toolboxItems}/> 
            
          </Card>
          <Card>
            <div>
              <StarIcon className="text-emerald-500 size-10" />
              <h3>Beyond the Code</h3>
              <p>Explore my interests and hobbies beyond the digital realm</p>
            </div>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smiling emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
