import { blogData } from "../../constant/home.constant";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="container p-5 md:p-0 mx-auto">
      {/* Heading */}
      <div className="max-w-[700px]   mx-auto text-center">
        <h3 className="font-josefin uppercase text-base text-dark border-y inline-block py-0.5 md:py-1 border-cream">
          Blog
        </h3>
        <h2 className="text-dark text-3xl md:text-[40px] font-cormorant font-bold mt-3 mb-5">
          Be First Who Read News
        </h2>
        <p className="text-lg md:text-xl font-josefin font-normal text-darkCream mb-7">
          {`Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.`}
        </p>
      </div>
      {/* Blog Container */}
      <div className="flex flex-col md:flex-row gap-14">
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
