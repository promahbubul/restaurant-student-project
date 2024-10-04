import Button from "../../components/shared/Button";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import PageTitle from "../../components/shared/PageTitle";

const Password = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"Password Protected "} />
      <section className="bg-lightCream border border-cream p-24 max-w-[904px] mx-auto my-36">
        <div className="text-center">
          <img
            src="https://i.ibb.co.com/ZSbbpjz/Lock.png"
            alt=""
            className="mx-auto"
          />
          <h1 className="text-dark mt-7 text-[40px] font-bold   font-cormorant">
            Protected Page
          </h1>
          <p className="text-darkCream text-[22px] font-medium font-josefin mt-6">
            This page is password protected. If you are the website admin, or
            have access to this page, please type your password below.
          </p>
        </div>
        <form
          action=""
          className="w-full max-w-xl mx-auto flex flex-col gap-7 mt-9"
        >
          <input
            type="password"
            name="password"
            className="text-[22px] font-medium font-josefin py-5 px-7 border border-dark bg-transparent placeholder:text-dark"
            placeholder="Enter Your Password"
          />
          <Button className={"bg-cream"} title={"Submit"} />
        </form>
      </section>
      <Footer />
    </div>
  );
};
export default Password;
