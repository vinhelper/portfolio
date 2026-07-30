import PropTypes from "prop-types";
import { motion } from "framer-motion";

import Tag from "./Tag";

function ServicesCard({ service, edges = "" }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col gap-3 border-divider py-7 ${edges}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-brand">{service.icon}</span>
      </div>
      <h3 className="mt-1.5 text-[21px] font-bold leading-tight tracking-tight text-heading">
        {service.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-body">
        {service.description}
      </p>
      <div className="mt-1 flex flex-wrap gap-1.5">
        {service.stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </motion.div>
  );
}

ServicesCard.propTypes = {
  service: PropTypes.object,
  edges: PropTypes.string,
};

export default ServicesCard;
