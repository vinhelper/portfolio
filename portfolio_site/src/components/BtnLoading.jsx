import PropTypes from "prop-types";

function BtnLoading({ loading }) {
  return (
    <div className="w-full">
      {loading ? (
        <button
          disabled={true}
          className="w-full flex flex-row items-center justify-center bg-gray-500 p-3 rounded-md"
        >
          <svg
            className="animate-spin mr-2 h-5 w-5 text-white"
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
          Sending...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full bg-brand text-base2 font-bold p-3 rounded-md hover:bg-brand2 transition duration-200"
        >
          Submit
        </button>
      )}
    </div>
  );
}

BtnLoading.propTypes = {
  loading: PropTypes.bool,
};

export default BtnLoading;
