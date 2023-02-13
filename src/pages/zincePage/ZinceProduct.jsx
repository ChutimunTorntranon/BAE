import Box1 from "./zinceComponent/Box1";
import Footer from "../../footer/Footer";
import GoToTop from "../../component/GoToTop";
function ZinceProduct() {
  return (
    <div className="">
      <div className="w-full h-[200px] bg-indigo-600">
        <div className="container grid mx-auto h-full">
          <div className="mx-auto my-auto Zince">Zinc</div>
        </div>
        <Box1 />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
}

export default ZinceProduct;
