import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"> 
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
      <div className="size-[620px] hero-ring animate-pulse"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <div >
        <StarIcon/>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="inline-flex items-center gap-4 border border-gray-800 py-1.5 px-4 rounded-lg bg-gray-950">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
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
          I specialize in transforming designs into functional, high-perforning
          web applications. Let's discuss your discuss your next project
        </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 capitalize border border-white/15 h-12 px-6 rounded-xl">
            
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className = "size-4 animate-bounce"/>
          </button>
          <div className="inline-flex gap-2 items-center border border-white bg-white h-12 px-6 rounded-xl text-gray-900">
            <div className="text-xl animate-pulse">👋 </div>
            <span className=" font-semibold capitalize">Let's connect</span>
          </div>
        </div>
      </div>
    </div>
  );
};
