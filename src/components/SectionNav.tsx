"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experiences", label: "Experiences" },
  { id: "projects", label: "Projects" },
] as const;

const SECTION_IDS = SECTIONS.map((section) => section.id);

function SectionNav() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <nav aria-label="Page sections" className="hidden lg:block">
      <ul className="flex w-fit flex-col">
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={activeId === id ? "location" : undefined}
              className="group flex items-center gap-2 font-bold uppercase hover:text-accent aria-[current=location]:text-accent"
            >
              <span
                aria-hidden="true"
                className="h-0.5 w-10 bg-fg-strong transition-all duration-200 group-hover:bg-accent group-aria-[current=location]:w-20 group-aria-[current=location]:bg-accent"
              />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionNav;
