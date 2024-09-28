/* eslint-disable react/prop-types */
const Button = ({ title }) => {
  return (
    <button className="w-full lg:w-auto text-lg lg:text-[22px] font-josefin font-normal lg:font-medium text-dark bg-white px-12 py-3 lg:py-5">
      {title}
    </button>
  );
};
export default Button;
