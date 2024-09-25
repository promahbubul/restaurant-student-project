import { popularDishesData } from "../../constant/home.constant";
import OutlineButton from "../OulineButton";
import DishCard from "./DishCard";

const PopularDishes = () => {
  return (
    <div className="container md:px-5 p-5 md:p-0  mx-auto mt-10 md:mt-20">
      {/* Heading */}
      <div className="max-w-[700px]   mx-auto text-center">
        <h3 className="font-josefin uppercase text-base text-dark border-y inline-block py-0.5  md:py-1 border-cream">
          Menu
        </h3>
        <h2 className="text-dark text-3xl md:text-[40px] font-cormorant font-bold mt-3 mb-5">
          Popular Dishes
        </h2>
        <p className="text-lg md:text-xl font-josefin font-normal text-darkCream mb-7">
          {`Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.`}
        </p>
      </div>
      {/* card container md:px-5 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        {popularDishesData.map((dish) => (
          <DishCard
            key={dish.id}
            description={dish.description}
            img={dish.img}
            price={dish.price}
            title={dish.title}
          />
        ))}
      </div>
      <div className="text-center mt-10 md:mt-20">
        <OutlineButton title={"See all dishes"} />
      </div>
    </div>
  );
};
export default PopularDishes;
