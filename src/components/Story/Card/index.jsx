/* eslint-disable react/prop-types */
const Card = ({ icon: ImageIcon, title, description }) => {
  return (
    <div
      className="flex flex-row  gap-5 
    w-full "
    >
      <div className="w-2/12 rounded-full  bg-dark text-white text-5xl flex items-center justify-center">
        <ImageIcon />
      </div>
      <div className="w-10/12">
        <h3 className="text-3xl font-bold font-cormorant text-dark">{title}</h3>
        <p className="text-xl font-normal font-josefin mt-4 text-dark">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
