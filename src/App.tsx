import Navbar from "./components/Navbar";
import DussehraGreeting from "./components/DussehraGreeting";
import Hero from "./components/Hero";
import ProductSlider from "./components/ProductSlider";
import About from "./components/About";
import Details from "./components/Details";
import Location from "./components/Location";
import Footer from "./components/Footer";
import { useReveal } from "./hooks";

export default function App() {
  useReveal();
  return (
    <>
      <DussehraGreeting />
      <Navbar />
      <main>
        <Hero />
        <ProductSlider />
        <About />
        <Details />
        <Location />
      </main>
      <Footer />
    </>
  );
}
