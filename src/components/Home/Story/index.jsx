import { storyList } from "../../../constant/home.constant";
import Card from "./Card";

const Story = () => {
  return (
    <section className="bg-lightCream py-16  lg:py-44  -z-10 ">
      <div className="container lg:px-5 mx-auto p-5 lg:p-0">
        {/* Story Top */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10">
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
        <div className="flex flex-col lg:flex-row  gap-5 lg:gap-10 mt-14 lg:mt-36">
          <div className="w-full">
            <img
              src={"https://i.ibb.co.com/Vm2jCk8/story-iamge.png"}
              alt=""
              className="w-full"
            />
          </div>
          <div
            className="w-[2px] bg-[#B29A90] 
           border-red-500 "
          ></div>
          <div
            className="w-full  lg:h-20  
            "
          >
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-[40px] font-cormorant font-bold">
                The Story
              </h1>
              <p className="font-josefin text-lg lg:text-xl mt-5 text-[555555]">
                {`Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere',
                makinlook like readable English. Many desktop publishing
                packages.`}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between mt-10 gap-10">
              <div className="">
                <h1 className="text-3xl lg:text-[40px] font-cormorant font-bold">
                  1996
                </h1>
                <p className="font-josefin text-xl mt-5">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
              </div>
              <div className="">
                <h1 className="text-3xl lg:text-[40px] font-cormorant font-bold">
                  2001
                </h1>
                <p className="font-josefin text-xl mt-5">
                  Lorem Ipsum is that it has a more-or-less normal Content
                  content
                </p>
              </div>
            </div>
            <div className="mt-9 ">
              <h5 className="text-lg lg:text-xl text-dark text-right lg:text-left">
                JOSEFINE
              </h5>
              <div className="flex justify-end lg:justify-start">
                <img
                  src={"https://i.ibb.co.com/fnyPxXg/story-signature.png"}
                  alt=""
                  className="w-28 lg:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Story;
