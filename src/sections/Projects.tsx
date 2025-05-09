import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p
            className="tracking-widest font-semibold uppercase text-center
           bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text 
           text-transparent"
          >
            Real-world projects
          </p>
        </div>
        <h2 className="capitalize mt-6 text-3xl md:text-5xl font-calistoga text-center">
          Featured projects
        </h2>
        <p className="font-sans mt-4 text-white/60 md:text-lg lg:text-xl max-w-md text-cente mx-auto text-center">
          See how I transformed concepts into engaging digital experiences
        </p>
        <div className="flex flex-col items-center mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl relative z-0 
              after:z-10 overflow-hidden after:content-[''] 
              after:absolute after:inset-0 after:outline-2 after:outline
              after:-outline-offset-2 after:rounded-3xl after:outline-white/20 
              after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text 
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
                  <a href={project.link}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
