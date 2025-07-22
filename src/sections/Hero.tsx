import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="Home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring animate-pulse"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-teal-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-teal-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-45} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-teal-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={180}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-teal-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-teal-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-teal-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-teal-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={150}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-teal-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-teal-900/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-28 text-teal-300" spin />
        </HeroOrbit>

        {/* Sparkles */}
        {/* <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit> */}

        {/* circles */}
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="inline-flex items-center gap-4 border border-gray-800 py-1.5 px-4 rounded-lg bg-gray-950">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>

            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-calistoga font-bold text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="text-center mt-4 text-white/50 md:text-lg">
            I specialize in transforming designs into functional,
            high-perforning web applications. Let&apos;s discuss your discuss
            your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 capitalize border border-white/15 h-12 px-6 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4 animate-bounce" />
          </button>
          <div className="inline-flex gap-2 items-center border border-white bg-white h-12 px-6 rounded-xl text-gray-900">
            <div className="text-xl animate-pulse">👋 </div>
            <span className=" font-semibold capitalize">
              Let&apos;s connect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
