"use client";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Works from "./components/Works";
import Goals from "./components/Goals";
import Revenue from "./components/Revenue";
import Review from "./components/Review";
import Review2 from "./components/Review2";
import Review25 from "./components/Review25";
import Review3 from "./components/Review3";
// import Review4 from "./components/Review4";
// import Review5 from "./components/Review5";
import Bar from "./components/Bar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero  />
      <Features />
      <Works />
      <Goals />
      <Revenue />
      <Bar />
      <Review />
      <Review25 />
      <Review2 />
      <Review3 />
      <Footer />
    </div>
  );
}