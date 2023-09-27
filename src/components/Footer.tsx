import footerData from "@/data/footer.json";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="px-4">
      <p className="text-primary-200 text-lg">&quot;{footerData.note}&quot;</p>
      <p>
        If you think I'd be a good fit for your team{" "}
        <a href={footerData.link} className="text-accent-200">
          <span className="inline-flex gap-1 items-center group">
            drop me an email
            <HiOutlineMail className="inline-block group-hover:animate-bounce mt-0.5" />
          </span>
        </a>
        <span> and lets connect</span>
      </p>
    </footer>
  );
}

export default Footer;
