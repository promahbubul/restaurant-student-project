/* eslint-disable react/prop-types */
const Button = ({ title, className }) => {
  return (
    <button
      className={`w-full lg:w-auto text-lg lg:text-[22px] font-josefin font-normal lg:font-medium text-dark  px-12 py-3 lg:py-5 ${
        className ? className : "bg-white"
      }`}
    >
      {title}
    </button>
  );
};
export default Button;
