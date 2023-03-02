import { useEffect, useRef } from "react";
import "./App.scss";
import Benefits from "./components/benefits/Benefits";
import Card from "./components/card/Card";
import Cooperate from "./components/cooperate/Cooperate";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Payment from "./components/payment/Payment";
import Testimonials from "./components/testimonials/Testimonials";
import Try from "./components/try/Try";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuredRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 2200 });
  }, []);

  return (
    <div className="App">
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        featuredRef={featuredRef}
        solutionRef={solutionRef}
      />
      <Header homeRef={homeRef} />
      <Info />
      <Benefits featuredRef={featuredRef} />
      <Payment />
      <Card solutionRef={solutionRef} />
      <Testimonials aboutRef={aboutRef} />
      <Cooperate />
      <Try />
      <Footer />
    </div>
  );
}

export default App;
