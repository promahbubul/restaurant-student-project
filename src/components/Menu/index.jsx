import OutlineButton from "../OulineButton";
import menuBanner from "../../assets/images/menu-banner.svg";
import MenuList from "./MenuList";
import { menuItemData } from "../../constant/menu.constant";
import { useEffect, useState } from "react";

const Menu = () => {
  const [starters, setStarters] = useState([]);
  const [mainDish, setMainDish] = useState([]);
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    const st = menuItemData.filter((item) => item.category === "Starters");
    const md = menuItemData.filter((item) => item.category === "Main Dish");
    const de = menuItemData.filter((item) => item.category === "Dessert");
    setStarters(st);
    setMainDish(md);
    setDessert(de);
  }, []);

  return (
    <div className="flex flex-col px-5 md:px-0 md:flex-row container md:px-5 mx-auto py-16 md:py-36 gap-14 md:gap-32">
      <div className="w-full md:w-4/12 text-center md:text-left">
        <h3 className="font-josefin text-base text-dark border-y  inline-block py-1 border-cream">
          Menu
        </h3>
        <h2 className="text-dark text-3xl md:text-[40px] font-cormorant font-bold mt-3 mb-5">
          Try Our Special Offers
        </h2>
        <p className="text-lg md:text-xl font-josefin font-normal text-darkCream mb-14">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making it look
          like readable English.{" "}
        </p>
        <div className="mb-14">
          <img src={menuBanner} alt="" className="" />
        </div>
        <OutlineButton title={"See all dishes"} />
      </div>
      <div className="w-full md:w-8/12 flex flex-col gap-10  ">
        {/* Starters */}
        <MenuList heading={"Starters"} items={starters} />
        <MenuList heading={"Main Dish"} items={mainDish} />
        <MenuList heading={"Dessert"} items={dessert} />
      </div>
    </div>
  );
};
export default Menu;
