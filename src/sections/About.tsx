import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Cards";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: "",
  },
  {
    title: "TypeScipt",
    icon: "",
  },
  {
    title: "HTML5",
    icon: "",
  },
  {
    title: "TailwindCSS",
    icon: "",
  },
  {
    title: "CSS3",
    icon: "",
  },
  {
    title: "MongoDB",
    icon: "",
  },
  {
    title: "ReactJs",
    icon: "",
  },
  {
    title: "NodeJS",
    icon: "",
  },
  {
    title: "ExpressJS",
    icon: "",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        title="A Glimpse Into my world"
        eyebrow="About me"
        description="Learn More About Who I Am, what I do and what inspires me "
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives</p>
          </div>
          <Image src={bookImage} alt="Atomic Habits" className="" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft digital
              experiences
            </p>
          </div>
          <Image src={bookImage} alt="Atomic Habits" className="" />
        </Card>
      </div>
    </div>
  );
};
