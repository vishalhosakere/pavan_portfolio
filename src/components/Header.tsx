import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

import SectionNav from "@/components/SectionNav";
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
        <h1 className="text-5xl font-bold text-primary-200">{headerData.name}</h1>
        <p className="pt-3 text-2xl text-primary-200">{headerData.role}</p>
        <p className="max-w-md pt-3">{headerData.description}</p>
      </div>
      <SectionNav />
      <ul aria-label="Social profiles" className="flex items-center gap-10">
        {SOCIAL_PROFILES.map(({ href, label, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className="block transition-transform hover:scale-110 hover:text-accent-200"
            >
              <Icon aria-hidden="true" className="text-4xl" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
