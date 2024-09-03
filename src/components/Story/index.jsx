import { storyList } from "../../constant/home.constant";
import Card from "./Card";
import storyImage from "../../assets/images/story-iamge.svg";

const Story = () => {
  return (
    <section className="bg-lightCream py-44 relative -z-10">
      <div className="container mx-auto">
        {/* Story Top */}
        <div className="flex flex-row items-center justify-between gap-10">
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
        <div className="flex flex-row items-center gap-10  mt-36">
          <div
            className="w-full border-2
           border-red-500 "
          >
            <img src={storyImage} alt="" className="" />
          </div>
          <div
            className="w-2 bg-[#B29A90]  border-2
           border-red-500 "
          ></div>
          <div
            className="w-full border-2 h-20  border-2
           border-red-500  "
          >
            <div className="">
              <h1 className="text-[40px] font-cormorant font-bold">
                The Story
              </h1>
              <p className="font-josefin text-xl mt-5">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere',
                makinlook like readable English. Many desktop publishing
                packages.
              </p>
            </div>
            <div className="flex flex-row items-start justify-between mt-10 gap-10">
              <div className="">
                <h1 className="text-[40px] font-cormorant font-bold">
                  The Story
                </h1>
                <p className="font-josefin text-xl mt-5">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here, content
                  gfshere', makinlook like readable English. Many desktop
                  publishing packages.
                </p>
              </div>
              <div className="">
                <h1 className="text-[40px] font-cormorant font-bold">
                  The Story
                </h1>
                <p className="font-josefin text-xl mt-5">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters, as opposed to using 'Content here, content
                  gfshere', makinlook like readable English. Many desktop
                  publishing packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Story;
