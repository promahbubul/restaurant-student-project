import QuestionSection from "../../components/Faq";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import PageTitle from "../../components/shared/PageTitle";

const Faq = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"FAQ"} />
      <QuestionSection />
      <Footer />
    </div>
  );
};
export default Faq;
