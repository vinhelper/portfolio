import { motion } from "framer-motion";

import AboutCard from "./AboutCard";
import SectionHeader from "./SectionHeader";
import Tag from "./Tag";
import { SECTIONS } from "../data/profile";

const experience = [
  {
    period: "Since 2025",
    title: "Frontend Developer",
    where: "Bizbloqs Management Solutions",
    description:
      "An international company that operates through its Philippine office, providing an Order Management System (OMS) for the global logistics industry.",
  },
  {
    period: "2022-2025",
    title: "Software Engineer",
    where: "Questronix Corporation",
    description:
      "One of the largest IT solutions providers and systems integrators in the Philippines since 1987.",
  },
  {
    period: "2021",
    title: "Intern / Trainee",
    where: "Pamantasan ng Lungsod ng Maynila",
    description:
      "On-the-job training in the PLM ICTO System Development Division.",
  },
];

const education = [
  {
    period: "2018-22",
    title: "BS Computer Science",
    where: "Pamantasan ng Lungsod ng Maynila",
    description:
      "A premier university known for competent, socially responsible graduates.",
  },
  {
    period: "2016-18",
    title: "Senior High School",
    where: "Technological University of the Philippines",
    description:
      "Recognized excellence in engineering and technology education across ASEAN.",
  },
  {
    period: "2012-16",
    title: "Junior High School",
    where: "St. Jerome Emiliani Institute",
    description: "A private, co-educational Catholic institution.",
  },
];

const stackGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS", "Dart"],
  },
  {
    label: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Django",
      "FastAPI",
      "Flutter",
      "React Native",
      "Expo",
    ],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "Firebase Firestore", "Neon", "Prisma"],
  },
  {
    label: "Tooling",
    items: [
      "Git",
      "VS Code",
      "Postman",
      "Docker",
      "AWS ECR / ECS / EC2",
      "Vercel",
    ],
  },
  {
    label: "AI & platforms",
    items: [
      "Ollama",
      "Claude",
      "OpenAI",
      "IBM API Connect",
      "IBM Watson Assistant",
    ],
  },
];

function About() {
  const section = SECTIONS[3];

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
          Experience &amp; education
        </h2>
      </motion.div>

      <div className="mt-8 grid border-t-2 border-rule lg:grid-cols-2">
        <div className="border-divider py-6 pb-8 lg:pr-10">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-kicker text-heading">
            Experience
          </h3>
          {experience.map((item) => (
            <AboutCard key={item.title} about={item} />
          ))}
        </div>
        <div className="border-t border-divider py-6 pb-8 lg:border-t-0 lg:border-l lg:pl-10">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-kicker text-heading">
            Education
          </h3>
          {education.map((item) => (
            <AboutCard key={item.title} about={item} />
          ))}
        </div>
      </div>

      <div className="border-y-2 border-rule">
        {stackGroups.map((group, index) => (
          <div
            key={group.label}
            className={`grid grid-cols-1 items-start gap-[18px] py-[18px] md:grid-cols-[128px_1fr] ${
              index > 0 ? "border-t border-divider" : ""
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-kicker text-heading">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item} size="md">
                  {item}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
