import { storyList } from "../../constant/home.constant";
import Card from "./Card";
import storyImage from "../../assets/images/story-iamge.svg";
import storySignature from "../../assets/images/story-signature.svg";

const Story = () => {
  return (
    <section className="bg-lightCream py-16  md:py-44  -z-10 ">
      <div className="container md:px-5 mx-auto p-5 md:p-0">
        {/* Story Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10">
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
        <div className="flex flex-col md:flex-row  gap-5 md:gap-10 mt-14 md:mt-36">
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
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-[40px] font-cormorant font-bold">
                The Story
              </h1>
              <p className="font-josefin text-lg md:text-xl mt-5 text-[555555]">
                {`Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere',
                makinlook like readable English. Many desktop publishing
                packages.`}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between mt-10 gap-10">
              <div className="">
                <h1 className="text-3xl md:text-[40px] font-cormorant font-bold">
                  1996
                </h1>
                <p className="font-josefin text-xl mt-5">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
              </div>
              <div className="">
                <h1 className="text-3xl md:text-[40px] font-cormorant font-bold">
                  2001
                </h1>
                <p className="font-josefin text-xl mt-5">
                  Lorem Ipsum is that it has a more-or-less normal Content
                  content
                </p>
              </div>
            </div>
            <div className="mt-9 ">
              <h5 className="text-lg md:text-xl text-dark text-right md:text-left">
                JOSEFINE
              </h5>
              <div className="flex justify-end md:justify-start">
                <img src={storySignature} alt="" className="w-28 md:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Story;
