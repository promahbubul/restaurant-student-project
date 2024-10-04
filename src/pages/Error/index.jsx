import Button from "../../components/shared/Button";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import PageTitle from "../../components/shared/PageTitle";

const Error = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"404"} />
      <section className="my-36">
        <div className="flex flex-row gap-5  justify-center items-center ">
          <h1 className="text-[700px]  font-bold font-cormorant  leading-[0] text-dark">
            4
          </h1>
          <div className=" w-[430px]">
            <img
              src="https://i.ibb.co.com/HYnr5qF/Image.png"
              alt=""
              className=" "
            />
          </div>
          <h1 className="text-[700px]  font-bold font-cormorant  leading-[0] text-dark">
            4
          </h1>
        </div>
        <div className="text-center mt-14">
          <h1 className="text-5xl font-bold text-dark font-cormorant">
            Whoops, Nothing delicious to find here!
          </h1>
          <p className="mt-5 font-josefin text-xl text-darkCream">
            {`The page you are looking for doesn't exist or has been moved.`}
          </p>
          <Button title={"Back to Home"} className={"bg-cream mt-12"} />
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Error;
