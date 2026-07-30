import PropTypes from "prop-types";
import { motion } from "framer-motion";

function AboutCard({ about }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-[76px_1fr] items-baseline gap-x-[18px] border-t border-divider py-[18px] md:grid-cols-[96px_1fr]"
    >
      <div className="text-[13px] font-bold tracking-wide text-heading">
        {about.period}
      </div>
      <div>
        <div className="text-[19px] font-bold leading-snug text-heading">
          {about.title}
        </div>
        <div className="mt-[3px] text-sm font-semibold text-brand700">
          {about.where}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-body">
          {about.description}
        </p>
      </div>
    </motion.div>
  );
}

AboutCard.propTypes = {
  about: PropTypes.object,
};

export default AboutCard;
