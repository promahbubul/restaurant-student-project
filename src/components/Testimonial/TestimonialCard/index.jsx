/* eslint-disable react/prop-types */
const TestimonialCard = ({ img, name, country, comment }) => {
  return (
    <div className="text-white h-[380px] bg-[#343942] py-12 px-10 w-full ">
      <div className="flex flex-row items-center gap-6 border-b border-b-[#797E89] pb-7 mb-6">
        <div className="h-20 w-20 bg-red-400 rounded-full">
          <img src={img} alt="" />
        </div>
        <div className="">
          <h3 className="font-bold text-3xl font-cormorant">{name}</h3>
          <p className="text-xl font-josefin font-normal">{country}</p>
        </div>
      </div>
      <p className="text-[25px] italic ">{`"${comment}`}</p>
    </div>
  );
};
export default TestimonialCard;
