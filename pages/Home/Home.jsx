import React from "react";
import Features from "../../component/Features";
import Hero from "../../component/Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "../../component/Services";
import Slider from "../../component/Slider";
import TeamMembers from "../../component/TeamMembers"


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="mt-5">Home</div>
      <Hero />
      <Features />
      <Services />
      <Slider />
      <p data-aos="fade-up">123456789</p>
      <p>123456789</p>
      <p data-aos="fade-up">123456789</p>
      <p>123456789</p>
      <p data-aos="fade-up">123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
      <p>123456789</p>
    </>
  );
};

export default Home;
