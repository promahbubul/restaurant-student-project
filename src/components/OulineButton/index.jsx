/* eslint-disable react/prop-types */
const OutlineButton = ({ title }) => {
  return (
    <button className="py-3 md:py-5 font-josefin text-lg md:text-[22px] font-normal md:font-medium text-cream px-12 border border-cream w-full md:w-auto">
      {title}
    </button>
  );
};
export default OutlineButton;
