import Navbar from "./components/Navbar";
// import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import About from "./section/About";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import Home from "./section/Home";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import IntroAnimation from "./components/IntroAnimation";
import React from "react";

export default function App(){
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)}/>}
      {introDone && (
    <div className="relative gradient text-white">
      <CustomCursor/>
      {/* <ParticlesBackground/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>


    </div>
    )}
    </>
  )
}