import WorkCard from "./WorkCard";
import ImageWork1 from "../assets/images/work-img.jpg";
import ImageWork2 from "../assets/images/sidebar-img.jpg";

import { motion } from "framer-motion";

function Work() {
  const work1 = {
    title: "Temporary Project",
    description:
      "I create visually appealing and responsive user interfaces that provide an engaging user experience.",
    image: ImageWork1,
  };
  const work2 = {
    title: "Temporary Project",
    description:
      "I create visually appealing and responsive user interfaces that provide an engaging user experience.",
    image: ImageWork2,
  };
  return (
    <section
      id="work"
      className="min-h-screen flex flex-col justify-center py-20 border-b-2 border-base px-6 md:px-16"
    >
      <div className="container">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-12 pb-4"
        >
          <div className="col-span-12 lg:col-span-8">
            <h6 className="font-bold text-brand">WORK</h6>
            <h1 className="font-bold text-heading md:text-5xl text-3xl py-2">
              My Recent Projects
            </h1>
          </div>
        </motion.div>
        <div className="flex flex-row flex-wrap gap-6">
          <WorkCard work={work1} />
          <WorkCard work={work2} />
          <WorkCard work={work1} />
        </div>
      </div>
    </section>
  );
}

export default Work;
