"use client"
import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {

  return (
    <main className="w-screen min-h-screen" >
      <Nav />
      <Carousel />
      <About />
      <Footer />
    </main>
  );
}
