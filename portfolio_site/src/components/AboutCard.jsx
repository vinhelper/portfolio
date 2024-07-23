import PropTypes from "prop-types";

import { motion } from "framer-motion";

function AboutCard({ about }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <div className="bg-base rounded-2xl p-6 hover:shadow-cardShadow transition-all flex flex-col gap-2">
        <h1 className="font-bold text-xl text-heading">{about.title}</h1>
        <h3 className="text-brand italic">{about.where}</h3>
        <p className="">{about.description}</p>
      </div>
    </motion.div>
  );
}

AboutCard.propTypes = {
  about: PropTypes.object,
};

export default AboutCard;
