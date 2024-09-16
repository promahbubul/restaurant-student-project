import { popularDishesData } from "../../constant/home.constant";
import DishCard from "./DishCard";

const PopularDishes = () => {
  console.log(popularDishesData);
  return (
    <div className="container  mx-auto mt-20">
      {/* Heading */}
      <div className="max-w-[700px]   mx-auto text-center">
        <h3 className="font-josefin uppercase text-base text-dark border-y inline-block py-1 border-cream">
          Menu
        </h3>
        <h2 className="text-dark text-[40px] font-cormorant font-bold mt-3 mb-5">
          Popular Dishes
        </h2>
        <p className="text-xl font-josefin font-normal text-darkCream mb-7">
          {`Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.`}
        </p>
      </div>
      {/* card container */}
      <div className="">
        <DishCard />
      </div>
    </div>
  );
};
export default PopularDishes;
