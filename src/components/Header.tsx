import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

import SectionNav from "@/components/SectionNav";
import ThemeToggle from "@/components/ThemeToggle";
import headerData from "@/data/header.json";
import socialLinks from "@/data/sociallinks.json";

const SOCIAL_PROFILES = [
  { href: socialLinks.linkedin, label: "LinkedIn profile", Icon: PiLinkedinLogo },
  { href: socialLinks.github, label: "GitHub profile", Icon: PiGithubLogo },
];

function Header() {
  return (
    <header className="flex flex-col gap-10 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:justify-between lg:py-24">
      <div>
        <h1 className="text-5xl font-bold text-fg-strong">{headerData.name}</h1>
        <p className="pt-3 text-2xl text-fg-strong">{headerData.role}</p>
        <p className="max-w-md pt-3">{headerData.description}</p>
      </div>
      <SectionNav />
      <div className="flex items-center gap-8">
        <ul aria-label="Social profiles" className="flex items-center gap-8">
          {SOCIAL_PROFILES.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="block transition-transform hover:scale-110 hover:text-accent"
              >
                <Icon aria-hidden="true" className="text-4xl" />
              </a>
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="h-8 w-px bg-edge" />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
