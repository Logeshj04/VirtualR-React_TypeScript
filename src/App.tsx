import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./index.css";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/price";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
