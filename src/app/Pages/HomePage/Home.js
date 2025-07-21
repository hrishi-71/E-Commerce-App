import HeaderSlider from "../../Coponents/Slider/HeaderSlider";
import AllCategories from "../../Coponents/Categories/AllCategories";
import LatestProducts from "../../Coponents/Product/LatestProducts";
import Footer from "../../Coponents/Footer/Footer";
function Home() {
  return (
    <div className="Page">
      <HeaderSlider />
      <AllCategories />
      <LatestProducts />
      <Footer />
    </div>
  );
}

export default Home;
