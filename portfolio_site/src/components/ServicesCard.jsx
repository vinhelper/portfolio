import PropTypes from "prop-types";
import { motion } from "framer-motion";

function ServicesCard({ service }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ delay: 0.1 }}
      className="lg:basis-[30%] md:basis-[45%] grow flex"
    >
      <div className="bg-base rounded-2xl p-8 hover:shadow-cardShadow transition-all flex flex-col flex-grow">
        <div className="flex items-center justify-center w-[55px] h-[55px] rounded-xl bg-brand p-2 mb-1">
          {service.icon}
        </div>
        <h1 className="font-bold py-4 text-lg text-heading">{service.title}</h1>
        <p>{service.description}</p>
      </div>
    </motion.div>
  );
}

ServicesCard.propTypes = {
  service: PropTypes.object,
};

export default ServicesCard;
