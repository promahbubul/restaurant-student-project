import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import PopularDishes from "../../components/PopularDishes";
import SpecialOffer from "../../components/SpecialOffer";
import Story from "../../components/Story";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Story />
      <Menu />
      <Testimonial />
      <SpecialOffer />
      <PopularDishes />
    </div>
  );
};
export default Home;

// project setup [tailwindcss, react router dom]
// color setup
// font family setup
