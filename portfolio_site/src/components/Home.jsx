import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

import SectionHeader from "./SectionHeader";
import { PROFILE, SECTIONS } from "../data/profile";

const stats = [
  { value: "4+", label: "Years shipping software" },
  { value: "3", label: "Engineering roles held" },
  { value: "BS CS", label: "PLM, class of 2022" },
  { value: "GMT+8", label: "Cavite, remote ready" },
];

function Home() {
  const section = SECTIONS[0];

  return (
    <section id={section.id} className="px-6 pt-24 md:px-14 lg:pt-[88px]">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader num={section.num} kicker={section.kicker} />
        <h1 className="mt-5 max-w-[20ch] text-4xl font-bold tracking-[-0.03em] text-heading md:text-display text-balance">
          Software engineer building web and mobile products.
        </h1>
        <p className="mt-7 max-w-[100ch] text-lg leading-relaxed text-body md:text-[19px] text-pretty">
          I am {PROFILE.name}, a Software Engineer based in {PROFILE.location},
          specializing in web development and building scalable,
          high-performance applications. Passionate about continuous learning, I
          enjoy exploring modern technologies and applying best practices to
          create reliable, efficient, and user-centered solutions.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-control bg-brand px-6 py-[15px] font-bold uppercase tracking-action text-ink transition-colors hover:bg-brand700"
          >
            Explore my work
            <FaArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="rounded-control border-2 border-rule px-6 py-[15px] font-bold uppercase tracking-action text-heading transition-colors hover:bg-white/10"
          >
            Get in touch
          </a>
          <a
            href={PROFILE.phoneHref}
            className="text-sm font-semibold uppercase tracking-nav text-brand hover:text-brand300"
          >
            Call {PROFILE.phone}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 border-y-2 border-rule lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-divider py-[22px] pr-6 ${
                index % 2 === 0
                  ? "lg:border-l lg:pl-6"
                  : "border-l pl-6 lg:border-l lg:pl-6"
              } ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""} ${
                index < 2 ? "border-b lg:border-b-0" : ""
              }`}
            >
              <div className="text-[40px] font-bold leading-none tracking-tight text-heading">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-label text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
