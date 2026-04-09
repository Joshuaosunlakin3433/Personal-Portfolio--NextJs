import ipAddressProject from "@/assets/images/Ip Address Project.png";
import coffeePink from "@/assets/images/Frontend porfolio projects/coffee-pink.png";
import coffeeReal from "@/assets/images/Frontend porfolio projects/coffee-real.png";
import educere from "@/assets/images/Frontend porfolio projects/Educere online education.png";
import gridBiz from "@/assets/images/Frontend porfolio projects/grid-biz.png";
import huddle from "@/assets/images/Frontend porfolio projects/huddle-frontendmentor project.png";
import luffWedding from "@/assets/images/Frontend porfolio projects/Luff e-wedding planning.png";
import luzidRestaurant from "@/assets/images/Frontend porfolio projects/Luzid e-restaurant.png";
import nikeEcommerce from "@/assets/images/Frontend porfolio projects/Nike e-commerce.png";
import nftCardPreview from "@/assets/images/Frontend porfolio projects/Humble beginning Frontend projects/NFT card preview.png";
import orderCardSummary from "@/assets/images/Frontend porfolio projects/Humble beginning Frontend projects/order card summary.png";
import profileCardComponent from "@/assets/images/Frontend porfolio projects/Humble beginning Frontend projects/profile card component.png";
import russianRealEstate from "@/assets/images/Frontend porfolio projects/Humble beginning Frontend projects/russian real estate landing page.png";
import singlePriceCoupon from "@/assets/images/Frontend porfolio projects/Humble beginning Frontend projects/single price coupon.png";
import spaceTravel from "@/assets/images/Frontend porfolio projects/Humble beginning Frontend projects/space travel.png";
import weatherAppFirst from "@/assets/images/Frontend porfolio projects/legacy project/weather app-first ever project.png";
import automatedMarketMaker from "@/assets/images/AMM.png";
import highStackers from "@/assets/images/HighStackers.png";
import experienceDiaryScreenshot from "@/assets/images/experience-diary.png";
import onetrivia from "@/assets/images/onetrivia.png";
import subwiseProtocol from "@/assets/images/subwise protocol.png";
import thinkBoard from "@/assets/images/ThinkBoard - Google Chrome.png";
import wagmiClinic from "@/assets/images/WAGMI Clinic hero page.png";
import weatherAppProject from "@/assets/images/weatherAppProject.png";
import Image, { type StaticImageData } from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Cards";

type Project = {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link: string;
  image: StaticImageData;
};

type Category = {
  id: string;
  title: string;
  description: string;
  projects: Project[];
};

const frontendProjects: Project[] = [
  {
    company: "Luff Wedding",
    year: "2022",
    title: "Luff Wedding Website",
    results: [
      { title: "Hero-led landing page with wedding-themed visual direction" },
      { title: "Clean section flow and mobile responsive layout" },
      { title: "Strong frontend portfolio project" },
    ],
    link: "https://luff-wedding-website.web.app/",
    image: luffWedding,
  },
  {
    company: "Luzid Restaurant",
    year: "2022",
    title: "Luzid e-Restaurant",
    results: [
      { title: "Food product hero section with call-to-action focus" },
      { title: "Desktop layout translated cleanly to responsive views" },
      { title: "Polished UI for a brand concept" },
    ],
    link: "https://luzid-e-restaurant.web.app/",
    image: luzidRestaurant,
  },
  {
    company: "Nike Showcase",
    year: "2022",
    title: "Nike E-commerce App",
    results: [
      { title: "Large product visual composition with strong hierarchy" },
      { title: "Navigation and CTA placement optimized for storefront feel" },
      { title: "Frontend portfolio collection" },
    ],
    link: "https://nike-5a712.web.app/",
    image: nikeEcommerce,
  },
  {
    company: "Educere",
    year: "2022",
    title: "E-learning App",
    results: [
      { title: "Section-based education marketing page" },
      { title: "Typography and contrast optimized for readability" },
      { title: "Responsive and lightweight static frontend build" },
    ],
    link: "https://educere-e-learning-platform.web.app/",
    image: educere,
  },
  {
    company: "Gridbiz",
    year: "2022",
    title: "Gridbiz Landing Page",
    results: [
      { title: "Business presentation layout with clear content blocks" },
      { title: "Balanced spacing and card-based information design" },
      { title: "Core frontend portfolio piece" },
    ],
    link: "https://gridbiz-cj.web.app/",
    image: gridBiz,
  },
  {
    company: "Coffee Real",
    year: "2022",
    title: "Coffee Real Landing",
    results: [
      { title: "Dark coffee brand aesthetic with strong hero image" },
      { title: "Simple and effective multi-section marketing flow" },
      { title: "Visual style flexibility" },
    ],
    link: "https://coffee-real.web.app/",
    image: coffeeReal,
  },
  {
    company: "Coffee Pink",
    year: "2022",
    title: "Coffee Pink 3D Theme",
    results: [
      { title: "Playful visual direction with 3D-inspired hero graphics" },
      { title: "Brand-forward layout and balanced CTA placement" },
      { title: "Color system exploration" },
    ],
    link: "https://coffeepink-435a4.web.app/",
    image: coffeePink,
  },
  {
    company: "Huddle",
    year: "2022",
    title: "Huddle Landing",
    results: [
      { title: "Community-focused hero with split-content composition" },
      { title: "Consistent component spacing and visual rhythm" },
      { title: "Frontend fundamentals and responsiveness" },
    ],
    link: "https://huddle-ba6ac.web.app/",
    image: huddle,
  },
  {
    company: "IP Tracker",
    year: "2025",
    title: "IP Address Tracker",
    results: [
      { title: "API-powered IP lookup with map visual integration" },
      { title: "Information panel design for geo and network data" },
      { title: "Frontend and API integration, production deployed" },
    ],
    link: "https://ip-address-tracker-6byz.vercel.app/",
    image: ipAddressProject,
  },
];

const fullstackProjects: Project[] = [
  {
    company: "Experience",
    year: "2025",
    title: "The Experience Diary",
    results: [
      { title: "AI-assisted blog creation and search workflow" },
      { title: "Dashboard interactions with dynamic content state" },
      { title: "Fullstack project with frontend + backend integration" },
    ],
    link: "https://the-experience-diary-app.vercel.app/",
    image: experienceDiaryScreenshot,
  },
  {
    company: "ThinkBoard",
    year: "2025",
    title: "ThinkBoard Notes App",
    results: [
      { title: "Authenticated note creation and management experience" },
      { title: "CRUD features with live app interactions" },
      { title: "Product depth beyond static landing pages" },
    ],
    link: "https://my-thinkboard-app.onrender.com/",
    image: thinkBoard,
  },
  {
    company: "Weather App",
    year: "2025",
    title: "Real-Time Weather Dashboard",
    results: [
      { title: "Live weather data integration and location lookup" },
      { title: "Forecast cards and daily weather summaries" },
      { title: "API integration with practical UI" },
    ],
    link: "https://weather-app-nu-three-34.vercel.app/",
    image: weatherAppProject,
  },
];

const blockchainProjects: Project[] = [
  {
    company: "OneChain Hackathon",
    year: "2026",
    title: "Onetrivia",
    results: [
      { title: "Built on OneChain (Sui fork) hackathon context" },
      { title: "Gameplay-focused Web3 product interface" },
      { title: "Recent blockchain build added to portfolio" },
    ],
    link: "https://onetrivia.vercel.app/",
    image: onetrivia,
  },
  {
    company: "BNB Hackathon",
    year: "2026",
    title: "Wagmi Clinic",
    results: [
      { title: "AI wallet diagnostics with on-chain recovery direction" },
      { title: "Soulbound token concept for record persistence" },
      { title: "Brutalist design with practical wallet UX" },
    ],
    link: "https://wagmi-clinic.vercel.app/",
    image: wagmiClinic,
  },
  {
    company: "Cronos x402",
    year: "2026",
    title: "SubWise Protocol",
    results: [
      { title: "Subscription automation with risk-protection logic" },
      { title: "Wallet-connected dashboard and receipts" },
      { title: "Blockchain utility product" },
    ],
    link: "https://subwise-protocol.vercel.app",
    image: subwiseProtocol,
  },
  {
    company: "Stacks",
    year: "2025",
    title: "HighStackers",
    results: [
      { title: "On-chain PvP crash game concept" },
      { title: "Live lobby interactions and game dashboard" },
      { title: "Frontend and smart contract integration" },
    ],
    link: "https://high-stackers-asm5.vercel.app",
    image: highStackers,
  },
  {
    company: "Stacks",
    year: "2025",
    title: "Automated Market Maker",
    results: [
      { title: "Token swap interface for AMM interactions" },
      { title: "Liquidity flow and output estimation UI" },
      { title: "Clarity-focused DeFi project implementation" },
    ],
    link: "https://automated-market-maker.vercel.app/",
    image: automatedMarketMaker,
  },
];

const legacyProjects: Project[] = [
  {
    company: "Google Africa Scholarship",
    year: "2020",
    title: "Legacy Weather App (First Project)",
    results: [
      { title: "First real web development class project" },
      { title: "Still live and functional years later" },
      { title: "Foundation frontend project" },
    ],
    link: "https://weather-app-nu-three-34.vercel.app/",
    image: weatherAppFirst,
  },
  {
    company: "Frontend Mentor",
    year: "2022",
    title: "NFT Card Preview",
    results: [
      { title: "Card layout precision and visual hierarchy" },
      { title: "Clean spacing and compact component design" },
      { title: "Early UI challenge completion" },
    ],
    link: "https://nft-card-preview.web.app/",
    image: nftCardPreview,
  },
  {
    company: "Frontend Mentor",
    year: "2022",
    title: "Order Summary Card",
    results: [
      { title: "Component composition and CTA emphasis" },
      { title: "Shows clean UX structure in small interfaces" },
      { title: "Early challenge portfolio piece" },
    ],
    link: "https://order-card-summary.web.app/",
    image: orderCardSummary,
  },
  {
    company: "Frontend Mentor",
    year: "2022",
    title: "Profile Card Component",
    results: [
      { title: "Basic profile card challenge implementation" },
      { title: "Sharp typography and panel balance" },
      { title: "Early proof of frontend polish" },
    ],
    link: "https://profile-card-component-4754d.web.app/",
    image: profileCardComponent,
  },
  {
    company: "Frontend Mentor",
    year: "2022",
    title: "Single Price Grid Component",
    results: [
      { title: "Pricing panel structure with balanced columns" },
      { title: "Readable information hierarchy" },
      { title: "Beginner-to-intermediate frontend exercise" },
    ],
    link: "https://single-price-grid-compon-3a9d5.web.app/",
    image: singlePriceCoupon,
  },
  {
    company: "Frontend Mentor",
    year: "2022",
    title: "Space Travel Landing Page",
    results: [
      { title: "Space-themed hero and campaign-style layout" },
      { title: "Early visual ambition" },
      { title: "Notable challenge project" },
    ],
    link: "https://spacetravel-db80e.web.app/",
    image: spaceTravel,
  },
  {
    company: "Frontend Mentor",
    year: "2022",
    title: "Russian Real Estate Landing",
    results: [
      { title: "Property-focused landing page composition" },
      { title: "Large image storytelling and text overlays" },
      { title: "Practical UI continuity" },
    ],
    link: "https://russian-real-estate.web.app/",
    image: russianRealEstate,
  },
];

const projectCategories: Category[] = [
  {
    id: "frontend-projects",
    title: "Frontend Projects",
    description: "Core frontend portfolio projects and polished UI builds.",
    projects: frontendProjects,
  },
  {
    id: "fullstack-projects",
    title: "Fullstack Projects",
    description:
      "Applications with product logic, state, and backend integration.",
    projects: fullstackProjects,
  },
  {
    id: "blockchain-projects",
    title: "Blockchain Projects",
    description:
      "Web3 products, hackathon builds, and smart-contract-driven work.",
    projects: blockchainProjects,
  },
  {
    id: "legacy-projects",
    title: "Legacy Projects",
    description: "From first web builds to challenge milestones.",
    projects: legacyProjects,
  },
];

const CategoryStack = ({
  category,
  categoryIndex,
}: {
  category: Category;
  categoryIndex: number;
}) => {
  const categoryLabel = `${String.fromCharCode(65 + categoryIndex)}.`;

  return (
    <div id={category.id} className="mt-12 md:mt-20">
      <div className="mb-8 md:mb-10">
        <p className="tracking-widest font-semibold uppercase text-center bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
          {categoryLabel} {category.title}
        </p>
        <p className="font-sans mt-3 text-white/60 text-center max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>

      <div className="flex flex-col items-center gap-20">
        {category.projects.map((project, projectIndex) => (
          <Card
            key={`${category.id}-${project.title}`}
            className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`,
            }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent uppercase font-sans font-semibold text-sm tracking-widest inline-flex items-center gap-2">
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
                      className="flex gap-2 items-center text-sm md:text-base text-white/50"
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
  );
};

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="Projects">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-calistoga text-3xl md:text-5xl tracking-wide">
            Projects
          </h2>
          <p className="font-sans mt-4 text-white/60 md:text-lg">
            Frontend, fullstack, blockchain, and legacy works.
          </p>
        </div>

        {projectCategories.map((category, index) => (
          <CategoryStack
            key={category.id}
            category={category}
            categoryIndex={index}
          />
        ))}
      </div>
    </section>
  );
};
