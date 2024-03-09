import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
