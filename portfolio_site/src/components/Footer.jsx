import { FaArrowUp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mx-6 mt-[72px] mb-10 flex flex-wrap justify-between gap-4 border-t-2 border-rule pt-[18px] text-xs uppercase tracking-action text-muted md:mx-14">
      <span>&copy; 2026 Arvin Jay Nadal</span>
      <span>Built in Cavite, Philippines</span>
      <a
        href="#home"
        className="inline-flex items-center gap-2 text-brand hover:text-brand300"
      >
        Back to top
        <FaArrowUp size={12} />
      </a>
    </footer>
  );
}

export default Footer;
