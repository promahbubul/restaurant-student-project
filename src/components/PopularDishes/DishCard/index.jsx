/* eslint-disable react/prop-types */

const DishCard = ({ img, title, description, price }) => {
  return (
    <div className="col-span-1">
      <div className="h-[310px] ">
        <img src={img} alt="" className="object-cover h-full w-full " />
      </div>
      <div className="flex flex-row justify-between items-center py-4 border-b border-b-[#DCDCDC] mb-4">
        <h3 className="text-dark font-cormorant  text-[22px] lg:text-3xl font-bold">
          {title}
        </h3>
        <h3 className="text-dark font-cormorant  text-[22px] lg:text-3xl font-bold ">
          ${price}
        </h3>
      </div>
      <p className="text-lg lg:text-xl font-normal  font-josefin text-[#555555]">
        {description}
      </p>
    </div>
  );
};
export default DishCard;
