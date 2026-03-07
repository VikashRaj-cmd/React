import { FaJava , FaReact } from 'react-icons/fa';
import { SiNextdotjs , SiTypescript , SiTailwindcss , SiFastapi , SiPython , SiDocker , SiMongodb , SiAngular } from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';
import { motion, useMotionValue } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';


export default function Skills(){

  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiAngular />, name: "Angular" },
  ];
  const repeated = [...skills , ...skills];


  // Skills for card-based layout (details)
  const detailedSkills = [
    { 
      icon: Code,
      title: "Development", 
      description: "Building robust, scalable applications with modern technologies and best practices.",
      tools: ["React", "JavaScript", "Tailwind CSS", "Docker", "Node.js", "Angular", "Python"],
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating visually stunning interfaces that balance aesthetics with usability.",
      tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Developing cross-platform mobile applications with native-like performance.",
      tools: ["Flutter", "Android", "Kotlin"],
    },
    {
      icon: Zap,
      title: "Strategy",
      description: "Helping brands define their digital presence and reach their target audience.",
      tools: ["SEO", "Analytics", "Marketing", "Consulting"],
    },
  ];


  // State and motion for horizontal scroll
  const [dir , setDir] = useState(-1);
  const [active , setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0); 
  

  useEffect(() => {
    const el = sectionRef.current;
    if(!el) return;

    const io = new IntersectionObserver((
      [entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      {threshold: [0.1]}
    )
    io.observe(el);
    return () => io.unobserve(el);
  }, [])

  useEffect(() => {
    if(!active) return;

    const onWheel =(e) => setDir(e.deltaY > 0 ? -1 : 1);
    const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e) => {
      if(touchY.current === null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir (delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };
    window.addEventListener("wheel", onWheel, {passive:true});
    window.addEventListener("touchstart", onTouchStart, {passive:true});
    window.addEventListener("touchmove", onTouchMove, {passive:true});

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    }
  },[active]);
  
  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      let next = x.get() + dir * SPEED * dt;
      const loop = trackRef.current?.scrollWidth/2 || 0;

      if(loop){
        if(next <= -loop) next += loop;
        if(next >= 0) next -= loop;
      }
      x.set(next);
      id = requestAnimationFrame(tick);

    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [dir, x]);


  // Variants for card animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] },
    },
  };


  return (
    <section id="skills" 
    ref={sectionRef}
    className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse"/>
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500"/>

      </div>

      <motion.h2 className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
      initial={{opacity:0, y:-30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5 , delay:0.1}}>

        My Skills
        </motion.h2>

        <motion.p className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
        initial={{opacity:0, y:-10}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5 , delay:0.1}}>

          Modern Applications | Modern Technologies
        </motion.p>

        <div className="relative w-full overflow-hidden">
          <motion.div 
          ref={trackRef}
          className="flex gap-10 text-6xl text-[#1cd8d2]"
          style={{x, whiteSpace: "nowrap", willChange: "transform"}}
          >

            {repeated.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2 min-w-[120px]" 
              aria-label = {s.name}
              title = {s.name}>

                <span className="hover:scale-125 transition-transform duration-300">
                  {s.icon}
                </span>
                <p className="text-sm">
                  {s.name}
                </p>

              </div>
            ))}
          </motion.div>
          

           {/* ===================== 🔹 SKILLS CARD SECTION (MODIFIED) ===================== */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin:"-50px" }}
      >
        {detailedSkills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, transition:{duration: 0.1} }}
            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1cd8d2] transition-all duration-300">

            {/* Icon */}
            <motion.div className="w-14 h-14 rounded-xl bg-[#1cd8d2]/10 flex items-center justify-center mb-5 group-hover:bg-[#1cd8d2]/20 transition-colors"
            whileHover={{rotate: [0, -10, 10, 0], transition: {duration: 0.5}}}>

              <skill.icon className="text-[#1cd8d2]" size={24} />
            </motion.div>

            <h3 className="text-lg font-semibold mb-3">
              {skill.title}
            </h3>

            <p className="font-body text-muted-foreground text-sm text-white/60 mb-5 leading-relaxed">
              {skill.description}
            </p>

            {/* 🔹 TOOLS AS BUTTONS */}
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className=" px-3 py-1 text-xs rounded-full border border-white/20 text-white/70 hover:border-[#1cd8d2] hover:text-[#1cd8d2] transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      
        </div>
      
    </section>
  )
}
