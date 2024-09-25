/* eslint-disable react/prop-types */
const Card = ({ icon: ImageIcon, title, description }) => {
  return (
    <div
      className="flex flex-col md:flex-row  gap-5 
    w-full border-2  border-red-500 text-center md:text-left"
    >
      <div className="w-full  md:w-2/12 border-2 border-red-500    text-white text-5xl flex items-center justify-center">
        <div className=" bg-dark rounded-full p-5 md:px-5 inline-block">
          <ImageIcon />
        </div>
      </div>
      <div className="w-full md:w-10/12">
        <h3 className="text-3xl font-bold font-cormorant text-dark">{title}</h3>
        <p className="text-xl font-normal font-josefin mt-4 text-dark">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
