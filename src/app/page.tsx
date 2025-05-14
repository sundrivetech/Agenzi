import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Brands from "./components/Brands";
import Section3 from "./components/Section3";
import CustomerStories from "./components/CustomerStories";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section1 />
      <Brands />
      <Section3 />
      <CustomerStories />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}
