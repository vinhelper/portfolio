import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileScreen } from "react-icons/fa6";

import ServicesCard from "./ServicesCard";
import SectionHeader from "./SectionHeader";
import { SECTIONS } from "../data/profile";

const services = [
  {
    num: "01",
    title: "Frontend development",
    description:
      "Responsive, accessible, type-safe interfaces with scalable component systems, efficient state management, and API integration.",
    stack: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
    icon: <FaCode size={26} />,
  },
  {
    num: "02",
    title: "Backend development",
    description:
      "Server-side services, APIs and data models, covering integration work, query performance and reliable delivery under real load.",
    stack: ["Node.js", "Express", "Django", "FastAPI", "PostgreSQL"],
    icon: <FaServer size={26} />,
  },
  {
    num: "03",
    title: "Mobile development",
    description:
      "Cross-platform mobile apps from one codebase: offline tolerant, built around the flows people actually repeat every day.",
    stack: ["Flutter", "React Native", "Expo"],
    icon: <FaMobileScreen size={26} />,
  },
];

function Services() {
  const section = SECTIONS[1];

  return (
    <section id={section.id} className="px-6 pt-[88px] md:px-14">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader num={section.num} kicker={section.kicker} />
        <h2 className="mt-[18px] text-3xl font-bold tracking-tight text-heading md:text-section">
          What I do
        </h2>
      </motion.div>

      <div className="mt-8 grid border-t-2 border-rule md:grid-cols-3">
        {services.map((service, index) => (
          <ServicesCard
            key={service.num}
            service={service}
            edges={
              index === 0
                ? "md:pr-7"
                : "border-t border-divider md:border-t-0 md:border-l md:px-7 md:last:pr-0"
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
