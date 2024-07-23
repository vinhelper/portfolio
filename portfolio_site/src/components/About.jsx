import AboutCard from "./AboutCard";

import { motion } from "framer-motion";

function About() {
  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      where: "Pamantasan ng Lungsod ng Maynila (2018-2022)",
      description:
        "PLM is a premiere university that has consistently garnered a competent and socially responsible graduates who have contributed to nation-building.",
    },
    {
      title: "Senior High School",
      where: "Technological University of the Philippines (2016-2018)",
      description:
        "A premiere state university with recognized excellence in engineering and technology education at par with leading universities in ASEAN region.",
    },
    {
      title: "Junior High School",
      where: "St. Jerome Emiliani Institute (2012-2016)",
      description:
        "A private, co-educational Catholic Institution conducted by the Somascan Missionary Sisters.",
    },
  ];
  const experience = [
    {
      title: "Software Engineer",
      where: "Questronix Corporation (2022-Present)",
      description:
        "One of the largest IT solutions and service providers and systems integrators in the Philippines since 1987.",
    },
    {
      title: "Intern/Trainee",
      where: "Pamantasan ng Lungsod ng Maynila (2021)",
      description:
        "Started work experience through On-The-Job training in PLM's ICTO-System Development Division.",
    },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-20 border-b-2 border-base px-6 md:px-16"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.1 }}
        className="container"
      >
        <div className="grid grid-cols-12 pb-4">
          <div className="col-span-12 lg:col-span-8">
            <h6 className="font-bold text-brand">ABOUT ME</h6>
            <h1 className="font-bold text-heading md:text-5xl text-3xl py-2">
              My Education & Experience
            </h1>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row gap-6">
          <div className="basis-full grow lg:basis-[45%] flex flex-col gap-6">
            <h1 className="font-bold text-heading md:text-3xl text-2xl">
              Education
            </h1>
            {education.map((educ, index) => (
              <AboutCard about={educ} key={index} />
            ))}
          </div>
          <div className="basis-full grow md:basis-[45%] flex flex-col gap-6">
            <h1 className="font-bold text-heading md:text-3xl text-2xl">
              Experience
            </h1>
            {experience.map((exp, index) => (
              <AboutCard about={exp} key={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
