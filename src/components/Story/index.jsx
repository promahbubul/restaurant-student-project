import { storyList } from "../../constant/home.constant";
import Card from "./Card";
import storyImage from "../../assets/images/story-iamge.svg";
import storySignature from "../../assets/images/story-signature.svg";

const Story = () => {
  return (
    <section className="bg-lightCream py-20  md:py-44  -z-10 border-4">
      <div className="container mx-auto p-5 md:p-0">
        {/* Story Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {storyList.map((story) => (
            <Card
              key={story.id}
              title={story.title}
              icon={story.icon}
              description={story.description}
            />
          ))}
        </div>
        {/* Story Bottom */}
        <div className="flex flex-col md:flex-row   gap-10  mt-36">
          <div className="w-full">
            <img src={storyImage} alt="" className="w-full" />
          </div>
          <div
            className="w-[2px] bg-[#B29A90] 
           border-red-500 "
          ></div>
          <div
            className="w-full  md:h-20  
            "
          >
            <div className="">
              <h1 className="text-[40px] font-cormorant font-bold">
                The Story
              </h1>
              <p className="font-josefin text-xl mt-5 text-[555555]">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere',
                makinlook like readable English. Many desktop publishing
                packages.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between mt-10 gap-10">
              <div className="">
                <h1 className="text-[40px] font-cormorant font-bold">1996</h1>
                <p className="font-josefin text-xl mt-5">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
              </div>
              <div className="">
                <h1 className="text-[40px] font-cormorant font-bold">2001</h1>
                <p className="font-josefin text-xl mt-5">
                  Lorem Ipsum is that it has a more-or-less normal Content
                  content
                </p>
              </div>
            </div>
            <div className="mt-9">
              <h5 className="text-xl text-dark">JOSEFINE</h5>
              <img src={storySignature} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Story;
