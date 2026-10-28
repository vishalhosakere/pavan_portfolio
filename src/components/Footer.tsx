import { HiOutlineMail } from "react-icons/hi";

import footerData from "@/data/footer.json";

function Footer() {
  return (
    <footer className="px-4">
      <p className="text-lg text-primary-200">&ldquo;{footerData.note}&rdquo;</p>
      <p>
        If you think I&apos;d be a good fit for your team,{" "}
        <a href={footerData.link} className="group inline-flex items-center gap-1 text-accent-200">
          <span className="underline decoration-1 underline-offset-4">drop me an email</span>
          <HiOutlineMail aria-hidden="true" className="mt-0.5 group-hover:animate-bounce" />
        </a>{" "}
        and let&apos;s connect.
      </p>
    </footer>
  );
}

export default Footer;
