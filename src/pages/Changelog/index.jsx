import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import PageTitle from "../../components/shared/PageTitle";

const Changelog = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"Changelog"} />
      <section className="max-w-[904px] border border-cream bg-[#FFF8F5] flex flex-col justify-center items-center py-24 mx-auto my-36">
        <h1 className="text-dark text-[40px] font-cormorant font-bold inline border-y border-y-cream py-1 ">
          Version 1.0
        </h1>
        <p className="text-darkCream text-[22px] font-medium font-josefin mt-6">
          Initial Restaurantate Webflow Template has been released!
        </p>
      </section>
      <Footer />
    </div>
  );
};
export default Changelog;
