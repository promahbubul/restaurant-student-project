/* eslint-disable react/prop-types */
const Input = ({ placeholder, className, type }) => {
  return (
    <input
      type={type}
      className={`border border-[#858585] text-white placeholder:text-white text-lg md:text-xl font-normal md:font-medium font-josefin  p-3 md:p-5 bg-transparent ${className} `}
      placeholder={placeholder}
    />
  );
};
export default Input;
