import axios from "axios";
import Header from "../../components/Header";

const Home = () => {
  const handleImage = async (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload/?key=918613f4ce8f567723f80cb3e079b7cc",
        formData
      )
      .then((response) => console.log(response))
      .catch((err) => console.error("Error uploading image:", err));
  };
  return (
    <div>
      <Header />
    </div>
  );
};
export default Home;

// project setup [tailwindcss, react router dom]
// color setup
// font family setup
