/* eslint-disable react/prop-types */
const Card = ({ icon: ImageIcon, title, description }) => {
  return (
    <div
      className="flex flex-col lg:flex-row  gap-5 
    w-full text-center lg:text-left"
    >
      <div className="w-full  lg:w-2/12     text-white text-5xl flex items-center justify-center">
        <div className=" bg-dark rounded-full p-3 lg:px-5 lg:py-5 inline-block">
          <ImageIcon />
        </div>
      </div>
      <div className="w-full lg:w-10/12">
        <h3 className="text-2xl lg:text-3xl font-bold font-cormorant text-dark">
          {title}
        </h3>
        <p className="text-lg lg:text-xl font-normal font-josefin mt-2 lg:mt-4 text-dark">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
