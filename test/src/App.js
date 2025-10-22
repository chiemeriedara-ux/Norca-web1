import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./Components/Navbar";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import RecipeReviewCard from "./Components/Card"
import Price from "./Components/Pricing";
import Product from "./Components/Products";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <Router>
        <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/price" element={<Price />} />
        <Route path="/Card" element={<RecipeReviewCard />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}
