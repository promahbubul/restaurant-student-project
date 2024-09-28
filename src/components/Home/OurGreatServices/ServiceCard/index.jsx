/* eslint-disable react/prop-types */
const ServiceCard = ({ img, title }) => {
  return (
    <div className=" w-full  bg-[#323841] p-5 lg:p-6">
      <div className="bg-dark py-20 lg:py-16 flex flex-col gap-4 justify-center items-center">
        <img src={img} alt="" className="" />
        <p className="font-cormorant font-bold text-white text-xl lg:text-2xl">
          {title}
        </p>
      </div>
    </div>
  );
};
export default ServiceCard;
