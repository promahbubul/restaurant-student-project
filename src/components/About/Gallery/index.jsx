import { galleryData } from "../../../constant/about.constant";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="container mx-auto py-40">
      {/* Heading */}
      <div className="max-w-[700px] text-center   mx-auto ">
        <h3 className="font-josefin uppercase text-base text-dark border-y inline-block py-0.5 lg:py-1 border-cream">
          Galary
        </h3>
        <h2 className="text-dark text-3xl lg:text-[40px] font-cormorant font-bold mt-3 mb-5">
          What We Make
        </h2>
      </div>
      {/* Gallery Container */}
      <div className="grid grid-cols-12 grid-rows-12  mt-8 gap-4">
        {/* Img 1 */}
        <Card
          className={"row-span-6 col-span-3"}
          img={"https://i.ibb.co.com/vPskxwd/gallery-1.jpg"}
        />
        {/* Img 2 */}
        <Card
          className={"row-span-12 col-span-6"}
          img={"https://i.ibb.co.com/7gFkgkJ/gallery-3.jpg"}
        />
        {/* Img 3 */}
        <Card
          className={"row-span-6 col-span-3"}
          img={"https://i.ibb.co.com/th1PZ0J/gallery-4.jpg"}
        />
        {/* Img 4 */}
        <Card
          className={"row-span-6 col-span-3"}
          img={"https://i.ibb.co.com/9ND1t0J/gallery-2.jpg"}
        />
        {/* Img 5 */}
        <Card
          className={"row-span-6 col-span-3"}
          img={"https://i.ibb.co.com/zh9sBth/gallery-5.jpg"}
        />
      </div>
    </div>
  );
};
export default Gallery;
