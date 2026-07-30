import PropTypes from "prop-types";

function SectionHeader({ num, kicker }) {
  return (
    <div className="flex items-baseline gap-4 text-xs font-semibold uppercase tracking-kicker text-brand700">
      <span>{num}</span>
      <span className="text-muted">{kicker}</span>
    </div>
  );
}

SectionHeader.propTypes = {
  num: PropTypes.string,
  kicker: PropTypes.string,
};

export default SectionHeader;
