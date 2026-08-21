import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import CategorySection from "./components/home/CategorySection";
import FeaturedProducts from "./components/home/FeaturedProducts";
import PromoSection from "./components/home/PromoSection";
import AboutSection from "./components/home/AboutSection";
import Footer from "./components/layout/Footer";
import ShopPage from "./pages/shop/ShopPage";

const Home = () => {
  return (
    <main>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <PromoSection />
      <AboutSection />
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;