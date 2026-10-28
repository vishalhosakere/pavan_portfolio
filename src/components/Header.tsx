import SectionNav from "@/components/SectionNav";
import { PiLinkedinLogo, PiGithubLogo } from "react-icons/pi";
import headerData from "@/data/header.json";
import socialLinks from "@/data/sociallinks.json";

function Header() {
  return (
    <header className="lg:sticky lg:top-0 flex lg:max-h-screen lg:w-1/2 flex-col lg:justify-between lg:py-24 gap-10">
      <div>
        <h1 className="text-5xl font-bold text-primary-200">
          {headerData.name}
        </h1>
        <h2 className="text-2xl pt-3 text-primary-200">{headerData.role}</h2>
        <p className="pt-3 pr-20">{headerData.description}</p>
      </div>
      <SectionNav />
      <div className="flex justify-start gap-10">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          aria-label="Visit my LinkedIn profile"
        >
          <PiLinkedinLogo className="text-4xl hover:text-accent-200 hover:scale-110 cursor-pointer" />
        </a>

        <a
          href={socialLinks.github}
          target="_blank"
          aria-label="Visit my Github profile"
        >
          <PiGithubLogo className="text-4xl hover:text-accent-200 hover:scale-110 cursor-pointer" />
        </a>
      </div>
    </header>
  );
}

export default Header;
