/* eslint-disable react/prop-types */
const Question = ({ id, question, answer, handleShowMore, showMore }) => {
  return (
    <button
      onClick={() => handleShowMore(id)}
      className="py-7 px-10 text-left border border-[#C4C4C4]"
    >
      <h3 className="text-2xl font-medium  text-dark">{question}</h3>

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
