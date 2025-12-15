import ipAddressProject from "@/assets/images/Ip Address Project.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import weatherAppProject from "@/assets/images/weatherAppProject.png";
import thinkBoard from "@/assets/images/ThinkBoard - Google Chrome.png";
import automatedMarketMaker from "@/assets/images/AMM.png";
import highStackers from "@/assets/images/highstackers.png";
import experienceDiaryScreenshot from "@/assets/images/experience-diary.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Cards";

const portfolioProjects = [
  {
    company: "Stacks AI Guild",
    year: "2025",
    title: "HighStackers - An on-chain PvP Crash Game",
    results: [
      { title: "MVP: Decentralized PvP crash game on Stacks blockchain" },
      { title: "Immersive 3D graphics with Three.js frontend" },
      { title: "Real-time multiplayer synchronization & fair mechanics" },
    ],
    link: "high-stackers-asm5.vercel.app",
    image: highStackers,
  },

  {
    company: "Personal Project",
    year: "2025",
    title: "The Experience Diary - AI Blog Platform",
    results: [
      { title: "AI-powered blog generation with admin dashboard" },
      { title: "Seamless image uploads via ImageKit & Multer" },
      { title: "Custom dark/light mode with smooth transitions" },
    ],
    link: "https://the-experience-diary-app.vercel.app/",
    image: experienceDiaryScreenshot,
  },

  {
    company: "Innovative Co",
    year: "2025",
    title: "Eco- Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://eco-ochre-nu.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Stack Ascents",
    year: "2025",
    title: "Automated Market Maker",
    results: [
      { title: "Trustless token swaps & liquidity provision on Stacks" },
      { title: "Clarity smart contracts with constant product formula" },
      { title: "Slippage protection & real-time pool statistics" },
    ],
    link: "https://automated-market-maker.vercel.app/",
    image: automatedMarketMaker,
  },
  {
    company: "Weather App",
    year: "2025",
    title: " Real-Time Weather App",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://weather-app-nu-three-34.vercel.app/",
    image: weatherAppProject,
  },
  {
    company: "ThinkBoard",
    year: "2025",
    title: "ThinkBoard App",
    results: [
      { title: "Secure user authentication with Firebase" },
      { title: "Create & manage personal notes effortlessly" },
      { title: "Fully responsive design for all devices" },
    ],
    link: "https://my-thinkboard-app.onrender.com/",
    image: thinkBoard,
  },
  {
    company: "IP Address Tracker",
    year: "2025",
    title: "IP Address Location Tracker",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://ip-address-tracker-6byz.vercel.app/",
    image: ipAddressProject,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="Projects">
      <div className="container">
        <SectionHeader
          title="Real-world Results"
          eyebrow="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />

        <div className="flex flex-col items-center mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text 
                text-transparent uppercase font-sans font-semibold text-sm tracking-widest
                 inline-flex items-center gap-2"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <p className="font-calistoga text-2xl md:text-4xl mt-2 md:mt-5 font-medium">
                    {project.title}
                  </p>
                  <hr className="my-4 md:mt-5 border border-t-2 border-white/5" />
                  <ul className="mt-2 md:mt-5 mb-8 font-sans flex flex-col gap-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 items-center text-sm md:text-base text-white/50 "
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 font-bold inline-flex items-center justify-center gap-2 h-12 w-full md:w-auto md:px-6 rounded-xl cursor-pointer">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
