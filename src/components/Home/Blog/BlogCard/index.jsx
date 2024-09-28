/* eslint-disable react/prop-types */
const BlogCard = ({ img, title, description, date, restaurant }) => {
  return (
    <div className="">
      <div className="h-[250px] lg:h-[390px]  ">
        <img src={img} alt="" className="object-cover  w-full h-full" />
      </div>
      <div className="p-5 lg:py-10  lg:px-9 border border-darkCream">
        <div className="flex flex-row gap-5 items-center">
          <p className="font-medium text-dark text-base font-josefin border-y border-cream">
            {restaurant}
          </p>
          <p className="font-medium text-dark text-base font-josefin border-y border-cream">
            {date}
          </p>
        </div>
        <h1 className="text-dark font-cormorant text-2xl lg:text-[35px] font-bold my-3 lg:my-5">
          {title}
        </h1>
        <p className="font-josefin font-normal text-lg lg:text-xl text-darkCream">
          {description}
        </p>
      </div>
    </div>
  );
};
export default BlogCard;
