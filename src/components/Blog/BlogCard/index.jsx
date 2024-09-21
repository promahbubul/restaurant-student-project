/* eslint-disable react/prop-types */
const BlogCard = ({ img, title, description, date, restaurant }) => {
  return (
    <div className="">
      <div className=" h-[390px]  ">
        <img src={img} alt="" className="object-cover  w-full h-full" />
      </div>
      <div className="py-10 px-9 border border-darkCream">
        <div className="flex flex-row gap-5 items-center">
          <p className="font-medium text-dark text-base font-josefin border-y border-cream">
            {restaurant}
          </p>
          <p className="font-medium text-dark text-base font-josefin border-y border-cream">
            {date}
          </p>
        </div>
        <h1 className="text-dark font-cormorant text-[35px] font-bold my-5">
          {title}
        </h1>
        <p className="font-josefin font-normal text-xl text-darkCream">
          {description}
        </p>
      </div>
    </div>
  );
};
export default BlogCard;
