import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import aethronDesktop from "../assets/aethronDesktop.png";
import stackforgeDesktop from "../assets/stackforgeDesktop.png";
import mausamDesktop from "../assets/mausamDesktop.JPG";

import aethronMobile from "../assets/aethronMobile.png";
import stackforgeMobile from "../assets/stackforgeMobile.png";
import mausamMobile from "../assets/mausamMobile.png";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);

    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 600 : -600,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -600 : 600,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function Projects() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Aethron — AI-Powered Learning Assistant",
        description:
          "Full-stack AI-powered learning platform using MERN Stack with JWT auth, role-based access control across 3 user roles, and AI API integration for context-aware Q&A.",
        link: "https://github.com/VikashRaj-cmd/MEARN-Projects/tree/main/Aethron",
        live: "https://aethron.vercel.app/",
        image: isMobile ? aethronMobile : aethronDesktop,
        tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "AI API"],
      },
      {
        title: "StackForge — Full-Stack Issue Tracking Platform",
        description:
          "Jira-inspired issue tracker using the MEAN stack with JWT auth, role-based access control (Admin/Manager/Developer), and RESTful APIs with pagination and filtering.",
        link: "https://github.com/VikashRaj-cmd/stackforge",
        live: null,
        image: isMobile ? stackforgeMobile : stackforgeDesktop,
        tags: ["Angular", "Node.js", "Express.js", "MongoDB", "JWT"],
      },
      {
        title: "Mausam — Weather Forecasting Mobile App",
        description:
          "Cross-platform mobile app (Android & iOS) using Flutter and Dart with real-time weather via OpenWeather API, GPS location services, and clean architecture.",
        link: "https://github.com/VikashRaj-cmd/Flutter-App/tree/main/Mausam",
        live: null,
        image: isMobile ? mausamMobile : mausamDesktop,
        tags: ["Flutter", "Dart", "OpenWeather API", "Mobile"],
      },
    ],
    [isMobile]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 10000);
  }, [projects.length]);

  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goTo = useCallback(
    (idx) => {
      setDirection(idx > activeIndex ? 1 : -1);
      setActiveIndex(idx);
      resetTimer();
    },
    [activeIndex, resetTimer]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    resetTimer();
  }, [projects.length, resetTimer]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetTimer();
  }, [projects.length, resetTimer]);

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      <div className="flex flex-col items-center justify-center min-h-[80vh] relative z-10">
        <motion.p
          className="text-[#1cd8d2] text-sm uppercase tracking-[0.2em]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Work
        </motion.p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
          Projects that define my craft
        </h2>

        <div className="relative w-full flex items-center justify-center mt-8 md:mt-10">
          <button
            onClick={goPrev}
            className="absolute left-2 md:left-8 z-30 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#1cd8d2]"
          >
            <ChevronLeft size={isMobile ? 20 : 28} />
          </button>

          <div
            className="relative overflow-hidden"
            style={{
              width: "85%",
              maxWidth: "1100px",
              height: isMobile ? "55vh" : "65vh",
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full rounded-2xl shadow-2xl bg-white/5 border border-white/10 hover:border-[#1cd8d2]">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full border border-white/20 text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl font-bold mb-2">
                      {activeProject.title}
                    </h3>

                    <p className="text-white/60 max-w-lg">
                      {activeProject.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goNext}
            className="absolute right-2 md:right-8 z-30 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#1cd8d2]"
          >
            <ChevronRight size={isMobile ? 20 : 28} />
          </button>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-[#1cd8d2] text-black hover:scale-105 transition-all"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>
          {activeProject.live && (
            <a
              href={activeProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-[#1cd8d2] text-[#1cd8d2] hover:scale-105 transition-all"
            >
              Live Demo
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <div className="flex gap-3 mt-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-[#1cd8d2] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}