"use client";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Works from "./components/Works";
import Goals from "./components/Goals";
import Revenue from "./components/Revenue";
import Review from "./components/Review";
import Review2 from "./components/Review2";
import Review3 from "./components/Review3";
// import Review4 from "./components/Review4";
// import Review5 from "./components/Review5";
import Bar from "./components/Bar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero  />
      <Features />
      <Works />
      <Goals />
      <Revenue />
      <Bar />
      <Review />
      <Review2 />
      <Review3 />
      {/* <Review4 /> */}
      {/* <Review5 /> */}
      <Footer />
    </div>
  );
}