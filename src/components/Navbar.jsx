import OverlayMenu from "./OverlayMenu";
import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";


export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);


  const lastScrollY = useRef(0);
  const timerId = useRef(null);


  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) =>{
        if(entry.isIntersecting){
          setForceVisible(true);
          setVisible(true);
        }
        else {
          setForceVisible(false);
        }

      }, {threshold : 0.1}
    )
    if(homeSection) observer.observe(homeSection);
    return () => {
      if(homeSection) observer.unobserve(homeSection);
    }
  }, [])


  useEffect(() => {
    const handleScroll = () =>{
      if(forceVisible){
        setVisible(true);
        return
      }
      const currentScrollY = window.scrollY;
      if(currentScrollY > lastScrollY.current){
        setVisible(false);
      } 
      else {
        setVisible(true);

        if(timerId.current) clearTimeout (timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000)
      }
      lastScrollY.current = currentScrollY;
    }


    window.addEventListener("scroll", handleScroll, {passive:true})


    return () => {
      window.removeEventListener("scroll", handleScroll)
      if(timerId.current) clearTimeout(timerId.current);
    }

  }, [forceVisible])


  return(
    <>
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 transition-transform duration-300 z-50 bg-transparent ${visible ? "translate-y-0" :  "-translate-y-full"}`}>

      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-white hidden sm:block">
          Portfolio
        </div>

      </div>

       <div className="hidden md:flex space-x-10 text-gray-300 text-lg">
        <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

      <div className="block lg:absolute lg:right-0 lg:transform lg:-translate-x-1/2">
      <button onClick={() => setMenuOpen(true)}
        className="text-white text-3xl focus:outline-none"
        arial-lebel="open Menu"
        >

        <FiMenu />
      </button>
      </div>

      <div className="hidden lg:block mr-12">
        <a href="#contact"
        className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
        >
          Let's Talk
        </a>

      </div>
    </nav>
    <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
    </>
  )
}