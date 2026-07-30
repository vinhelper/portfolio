import { motion } from "framer-motion";

import WorkCard from "./WorkCard";
import SectionHeader from "./SectionHeader";
import { SECTIONS } from "../data/profile";
import BerryBusyShot from "../assets/images/BerryBusy1.png";
import BizbloqsShot from "../assets/images/BizbloqsShot.png";
import FlowFundsShot1 from "../assets/images/flow_funds1.jpg";
import FlowFundsShot2 from "../assets/images/flow_funds2.jpg";

const projects = [
  {
    num: "01",
    kind: "Kanban board app",
    year: "2026",
    title: "BerryBusy",
    description:
      "A task management app with a kanban board interface, allowing users to create, organize, and track items/tasks across different stages of completion.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Neon", "Prisma"],
    image: BerryBusyShot,
    link: "https://berrybusy.vinhelper.cc/",
  },
  {
    num: "02",
    kind: "Order Management System",
    year: "2026",
    title: "Bizbloqs OMS",
    description:
      "A web-based order management system for various logistics companies, enabling efficient tracking and processing of orders, inventory management, and reporting.",
    stack: ["Next.js", "TypeScript", "Express.js"],
    image: BizbloqsShot,
  },
  {
    num: "03",
    kind: "Android app",
    year: "2025",
    title: "Flow Funds",
    description:
      "A mobile app for managing personal finances and tracking expenses.",
    stack: ["Flutter", "Dart", "Firebase"],
    shots: [FlowFundsShot2, FlowFundsShot1],
    link: "https://github.com/vinhelper/flow_funds",
  },
];

const COLUMNS = 2;
const rowCount = Math.ceil(projects.length / COLUMNS);
const hasRaggedRow = projects.length % COLUMNS !== 0;

function Work() {
  const section = SECTIONS[2];

  return (
    <section id={section.id} className="px-6 pt-[88px] md:px-14">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader num={section.num} kicker={section.kicker} />
        <div className="mt-[18px] flex flex-wrap items-end justify-between gap-5">
          <h2 className="text-3xl font-bold tracking-tight text-heading md:text-section">
            Recent projects
          </h2>
        </div>
      </motion.div>

      <div className="mt-7 grid border-y-2 border-rule md:grid-cols-2">
        {projects.map((project, index) => {
          const isLastCard = index === projects.length - 1;
          const isLastRow = Math.floor(index / COLUMNS) === rowCount - 1;
          const inFirstColumn = index % COLUMNS === 0;

          return (
            <WorkCard
              key={project.num}
              work={project}
              edges={[
                isLastCard ? "" : "border-b",
                isLastRow ? "md:border-b-0" : "md:border-b",
                inFirstColumn ? "md:pr-7" : "md:border-l md:pl-7",
              ].join(" ")}
            />
          );
        })}
        {hasRaggedRow && (
          <div
            aria-hidden="true"
            className="hidden md:block md:border-l md:border-divider"
          />
        )}
      </div>
    </section>
  );
}

export default Work;
