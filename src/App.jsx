import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import CategorySection from "./components/home/CategorySection";
import FeaturedProducts from "./components/home/FeaturedProducts";
import PromoSection from "./components/home/PromoSection";
import AboutSection from "./components/home/AboutSection";
import Footer from "./components/layout/Footer";
import ShopPage from "./pages/shop/ShopPage";
import CollectionsPage from "./pages/collections/CollectionsPage";
import AboutPage from "./pages/about/AboutPage";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";

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
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;