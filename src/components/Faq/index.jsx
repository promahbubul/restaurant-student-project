import { useState } from "react";
import { faqData } from "../../constant/faq.constant";
import SectionHeading from "../shared/SectionHeading";
import Question from "./Question";

const QuestionSection = () => {
  const [showMore, setShowMore] = useState(null);

  const handleShowMore = (id) => {
    if (showMore === id) {
      return setShowMore(null);
    }
    setShowMore(id);
  };
  return (
    <div className="container mx-auto mt-40 mb-32 ">
      <SectionHeading
        heading={"questions"}
        title={"Frequently Asked Questions"}
        className={"text-center"}
        headingStyle={"uppercase"}
      />
      {/* Question Container */}

      <div className="max-w-[930px] mx-auto flex flex-col gap-3  mt-8">
        {faqData.map((faq) => (
          <Question
            key={faq.id}
            {...faq}
            handleShowMore={handleShowMore}
            showMore={showMore}
          />
        ))}
      </div>
    </div>
  );
};
export default QuestionSection;
