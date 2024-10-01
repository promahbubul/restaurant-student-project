import Chef from "../../components/About/Chef";
import QualityTradition from "../../components/About/QualityTradition";
import SortInfo from "../../components/About/SortInfo";
import Header from "../../components/shared/Header";
import PageTitle from "../../components/shared/PageTitle";

const About = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"About Us"} />
      <QualityTradition />
      <SortInfo />
      <Chef />
    </div>
  );
};
export default About;
