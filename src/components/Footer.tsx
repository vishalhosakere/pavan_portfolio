import { HiOutlineMail } from "react-icons/hi";

import footerData from "@/data/footer.json";

function Footer() {
  return (
    <footer className="px-4">
      <p className="text-lg text-fg-strong">&ldquo;{footerData.note}&rdquo;</p>
      <p>
        If you think I&apos;d be a good fit for your team,{" "}
        <a href={`mailto:${footerData.email}`} className="group inline-flex items-center gap-1 text-accent">
          <span className="underline decoration-1 underline-offset-4 group-hover:decoration-2">drop me an email</span>
          <HiOutlineMail aria-hidden="true" className="mt-0.5 group-hover:animate-bounce" />
        </a>{" "}
        and let&apos;s connect.
      </p>
    </footer>
  );
}

export default Footer;
