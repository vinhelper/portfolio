import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

import Tag from "./Tag";

function WorkCard({ work, edges = "" }) {
  return (
    <motion.article
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col gap-4 border-divider py-7 pb-9 ${edges}`}
    >
      <div className="aspect-[16/10] w-full overflow-hidden rounded-frame border-2 border-rule">
        {work.shots ? (
          <div className="flex h-full w-full items-center justify-center gap-3 bg-surface p-3">
            {work.shots.map((shot, index) => (
              <img
                key={shot}
                src={shot}
                alt={`${work.title}, screen ${index + 1}`}
                className="h-full w-auto rounded-lg object-contain transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        ) : work.image ? (
          <img
            src={work.image}
            alt={work.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-label text-faint">
            Project shot
          </div>
        )}
      </div>
      <div className="flex justify-between text-xs uppercase tracking-label text-muted">
        <span>
          {work.num} / {work.kind}
        </span>
        <span>{work.year}</span>
      </div>
      <h3 className="text-[26px] font-bold leading-tight tracking-tight text-heading">
        {work.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-body">
        {work.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {work.stack.map((item) => (
          <Tag key={item} variant="neutral">
            {item}
          </Tag>
        ))}
      </div>
      {work.link ? (
        <a
          href={work.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${work.title}`}
          className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-action text-brand hover:text-brand300"
        >
          Check it out
          <FaArrowRight size={12} />
        </a>
      ) : (
        <p className="text-[13px] font-semibold uppercase tracking-action text-muted">
          {work.linkNote ?? "Company project, source private"}
        </p>
      )}
    </motion.article>
  );
}

WorkCard.propTypes = {
  work: PropTypes.object,
  edges: PropTypes.string,
};

export default WorkCard;
