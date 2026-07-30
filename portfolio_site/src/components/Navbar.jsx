import PropTypes from "prop-types";
import { FaBars, FaXmark } from "react-icons/fa6";

import { CURRENT_YEAR, PROFILE, SECTIONS, SECTION_IDS } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import MyImage from "../assets/images/me.jpg";

function Navbar({ isOpen, setIsOpen }) {
  const active = useActiveSection(SECTION_IDS);

  return (
    <aside className="fixed top-0 left-0 z-20 w-full border-b-2 border-rule bg-surface lg:sticky lg:top-0 lg:h-screen lg:w-auto lg:self-start lg:overflow-y-auto lg:border-b-0 lg:border-r-2 lg:px-6 lg:py-8">
      <div className="flex items-center justify-between px-6 py-3 lg:hidden">
        <a href="#home" className="text-lg font-bold tracking-tight text-heading">
          {PROFILE.name}
        </a>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-control p-2 text-heading hover:bg-white/10"
        >
          {isOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-6 px-6 pb-6 lg:flex lg:h-full lg:px-0 lg:pb-0`}
      >
        <div className="hidden flex-col gap-1 lg:flex">
          <div className="text-[11px] uppercase tracking-kicker text-muted">
            Portfolio / {CURRENT_YEAR}
          </div>
          <div className="text-[26px] font-bold leading-[1.05] tracking-tight text-heading">
            Arvin Jay
            <br />
            Nadal
          </div>
          <div className="text-[13px] text-muted">
            {PROFILE.role}, {PROFILE.location}
          </div>
        </div>

        <div className="hidden h-[200px] shrink-0 overflow-hidden rounded-frame border-2 border-rule lg:block">
          <img
            src={MyImage}
            alt={`${PROFILE.name} portrait`}
            className="h-full w-full object-cover"
          />
        </div>

        {PROFILE.availableForWork && (
          <div className="flex items-center gap-2 border-y-2 border-rule py-[10px] text-xs font-semibold uppercase tracking-action text-heading">
            <span className="block h-2 w-2 bg-brand" />
            <span>Open to new work</span>
          </div>
        )}

        <nav className="flex flex-col">
          {SECTIONS.map((section, index) => {
            const isActive = active === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "true" : undefined}
                className={`grid grid-cols-[34px_1fr] items-baseline gap-1 border-t border-divider py-[9px] text-sm font-semibold uppercase tracking-nav transition-all ${
                  index === SECTIONS.length - 1 ? "border-b" : ""
                } ${
                  isActive
                    ? "rounded-lg bg-brandTint pl-[10px] text-brand"
                    : "text-heading hover:text-brand300"
                }`}
              >
                <span className="text-[11px] text-faint">{section.num}</span>
                <span>{section.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex flex-col gap-[10px] text-xs uppercase tracking-nav lg:mt-auto">
          <div className="flex gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="text-brand hover:text-brand300"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-brand hover:text-brand300"
            >
              LinkedIn
            </a>
          </div>
          <a
            href={`mailto:${PROFILE.email}`}
            className="normal-case tracking-normal text-brand hover:text-brand300"
          >
            {PROFILE.email}
          </a>
          <div className="text-muted">{PROFILE.phone}</div>
        </div>
      </div>
    </aside>
  );
}

Navbar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default Navbar;
