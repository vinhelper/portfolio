import PropTypes from "prop-types";

function Tag({ children, variant = "outline", size = "sm" }) {
  const variants = {
    outline: "border border-brand text-brand",
    neutral: "bg-white/10 text-heading",
  };
  const sizes = {
    sm: "px-[11px] py-1 text-[11px]",
    md: "px-[13px] py-[5px] text-xs",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full uppercase tracking-nav ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}

Tag.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["outline", "neutral"]),
  size: PropTypes.oneOf(["sm", "md"]),
};

export default Tag;
