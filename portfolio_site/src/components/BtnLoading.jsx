import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";

function BtnLoading({ loading }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-control bg-brand px-7 py-[15px] font-bold uppercase tracking-action text-ink transition-colors hover:bg-brand700 disabled:cursor-not-allowed disabled:opacity-45"
    >
      {loading ? (
        <>
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Sending
        </>
      ) : (
        <>
          Send message
          <FaArrowRight size={14} />
        </>
      )}
    </button>
  );
}

BtnLoading.propTypes = {
  loading: PropTypes.bool,
};

export default BtnLoading;
