import { chefsData } from "../../../constant/about.constant";
import Card from "./Card";

const Chef = () => {
  return (
    <div className=" bg-lightCream py-36">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="max-w-[700px] text-center   mx-auto ">
          <h3 className="font-josefin uppercase text-base text-dark border-y inline-block py-0.5 lg:py-1 border-cream">
            Team
          </h3>
          <h2 className="text-dark text-3xl lg:text-[40px] font-cormorant font-bold mt-3 mb-5">
            Meet Our Professional Chefs
          </h2>
        </div>
        <div className="flex flex-row  gap-5 justify-between mt-10">
          {chefsData.map((chef) => (
            <Card key={chef.id} {...chef} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Chef;
