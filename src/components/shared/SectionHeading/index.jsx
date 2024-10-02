/* eslint-disable react/prop-types */
const SectionHeading = ({
  heading,
  title,
  description,
  className,
  titleStyle,
  headingStyle,
  descriptionStyle,
}) => {
  return (
    <div
      className={`max-w-[700px] 
        mx-auto  ${className}`}
    >
      <h3
        className={`text-dark  font-josefin text-base  border-y inline-block py-0.5 lg:py-1 border-cream ${
          headingStyle && headingStyle
        }`}
      >
        {heading}
      </h3>
      <h2
        className={`text-dark ${
          titleStyle && titleStyle
        } text-3xl lg:text-[40px] font-cormorant font-bold mt-3 mb-5`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-darkCream text-lg lg:text-xl font-josefin font-normal ${
            descriptionStyle && descriptionStyle
          } mb-7`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
export default SectionHeading;
