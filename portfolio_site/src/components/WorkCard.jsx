import PropTypes from "prop-types";

import { motion } from "framer-motion";

function WorkCard({ work }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ delay: 0.1 }}
      className="basis-full lg:basis-[45%] grow flex box-border"
    >
      <a
        href="#"
        className="overflow-hidden bg-base rounded-2xl flex flex-col flex-grow hover:shadow-cardShadow2 transition-all"
      >
        <div className="overflow-hidden transition-all">
          <img
            src={work.image}
            className="transition-all hover:scale-110 w-full rounded-t-2xl max-h-[450px]"
            alt="project_1"
          />
        </div>
        <div className="p-8 my-auto">
          <h1 className="font-bold text-lg text-heading pb-2">{work.title}</h1>
          <p>{work.description}</p>
        </div>
      </a>
    </motion.div>
  );
}

WorkCard.propTypes = {
  work: PropTypes.object,
};

export default WorkCard;
