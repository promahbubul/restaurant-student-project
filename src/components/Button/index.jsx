/* eslint-disable react/prop-types */
const Button = ({ title }) => {
  return (
    <button className="w-full md:w-auto text-lg md:text-[22px] font-josefin font-normal md:font-medium text-dark bg-white px-12 py-3 md:py-5">
      {title}
    </button>
  );
};
export default Button;
