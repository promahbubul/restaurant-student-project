/* eslint-disable react/prop-types */
const Card = ({ img, className }) => {
  return (
    <div className={className}>
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
  );
};
export default Card;
