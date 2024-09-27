/* eslint-disable react/prop-types */
const OutlineButton = ({ title }) => {
  return (
    <button className="py-3 lg:py-5 font-josefin text-lg lg:text-[22px] font-normal lg:font-medium text-cream px-12 border border-cream w-full lg:w-auto">
      {title}
    </button>
  );
};
export default OutlineButton;
