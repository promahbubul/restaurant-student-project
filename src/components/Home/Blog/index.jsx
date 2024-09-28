import { blogData } from "../../../constant/home.constant";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="container lg:px-5 p-5 lg:p-0 mx-auto mt-14 lg:mt-36">
      {/* Heading */}
      <div className="max-w-[700px]   mx-auto text-center">
        <h3 className="font-josefin uppercase text-base text-dark border-y inline-block py-0.5 lg:py-1 border-cream">
          Blog
        </h3>
        <h2 className="text-dark text-3xl lg:text-[40px] font-cormorant font-bold mt-3 mb-5">
          Be First Who Read News
        </h2>
        <p className="text-lg lg:text-xl font-josefin font-normal text-darkCream mb-7">
          {`Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.`}
        </p>
      </div>
      {/* Blog container lg:px-5 */}
      <div className="flex flex-col lg:flex-row gap-14">
        {/* card 1 */}
        {blogData.map((post) => (
          <BlogCard
            key={post.id}
            date={post.date}
            description={post.description}
            img={post.img}
            restaurant={post.restaurant}
            title={post.title}
          />
        ))}
      </div>
    </section>
  );
};
export default Blog;
