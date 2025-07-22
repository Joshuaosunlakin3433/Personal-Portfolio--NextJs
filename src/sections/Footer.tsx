import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLinks = [
  {
    title: "Resume",
    href: "/JOSHUA-OSUNLAKIN-RESUME.pdf",
  },
  {
    title: "GitHub",
    href: "https://github.com/Joshuaosunlakin3433",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/joshua-osunlakin-dvm-775088191/",
  },
  {
    title: "Twitter",
    href: "https://x.com/OsunlakinO",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/dr.c.j_olu/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-teal-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 flex flex-col md:flex-row md:justify-between items-center text-sm gap-8 ">
          <div className="text-white/40 text-center">
            &copy; {new Date().getFullYear()} Built by Dr C.J. All rights
            reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
