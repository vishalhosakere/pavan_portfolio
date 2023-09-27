"use client";
import * as Scroll from "react-scroll";
import { PiLinkedinLogo, PiGithubLogo } from "react-icons/pi";
import headerData from "@/data/header.json";
import socialLinks from "@/data/sociallinks.json";

const links = ["about", "experiences", "projects"];

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
      <div className=" flex-col w-fit lg:flex hidden">
        {links.map((link, idx) => {
          return (
            <Scroll.Link
              activeClass="active"
              to={link}
              spy={true}
              offset={-96}
              className="cursor-pointer hover:text-accent-200 flex items-center gap-2 group font-bold"
              key={idx}
              rel="nofollow"
            >
              <span className="bar w-10 h-0.5 bg-primary-200 group-hover:bg-accent-200 transition-all duration-200"></span>
              <span className="uppercase">{link}</span>
            </Scroll.Link>
          );
        })}
      </div>
      <div className="flex justify-start gap-10">
        <a href={socialLinks.linkedin} target="_blank">
          <PiLinkedinLogo
            className="text-4xl hover:text-accent-200 hover:scale-110 cursor-pointer"
            alt="Link to my LinkedIn"
          />
        </a>

        <a href={socialLinks.github} target="_blank">
          <PiGithubLogo
            className="text-4xl hover:text-accent-200 hover:scale-110 cursor-pointer"
            alt="Link to my Github"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
