/* eslint-disable react/prop-types */
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Question = ({ id, question, answer, handleShowMore, showMore }) => {
  return (
    <button
      onClick={() => handleShowMore(id)}
      className="py-7 px-10 text-left border border-[#C4C4C4]"
    >
      <div className="flex flex-row justify-between">
        <h3 className="text-2xl font-medium  text-dark">{question}</h3>
        {showMore === id ? (
          <ChevronUpIcon className="size-5" />
        ) : (
          <ChevronDownIcon className="size-5" />
        )}
      </div>

      <p
        className={`text-xl transition-all ease-in-out duration-300  ${
          showMore === id ? "block" : "hidden"
        } font-josefin text-darkCream mt-3`}
      >
        {answer}
      </p>
    </button>
  );
};
export default Question;
