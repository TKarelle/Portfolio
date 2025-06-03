// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Node.js", level: 75 },
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          À propos de moi
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Fraîchement diplômée avec un titre RNCP de Développeuse Web chez
              OpenClassrooms, je suis passionnée par la création d'applications
              web modernes et performantes. Ma formation m'a permis d'acquérir
              une solide base technique et une approche méthodique du
              développement.
            </motion.p>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Je m'efforce de créer des interfaces intuitives et des expériences
              utilisateur mémorables. Toujours à l'affût des nouvelles
              technologies et des meilleures pratiques, je continue d'enrichir
              mes compétences pour devenir une développeuse web accomplie.
            </motion.p>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-rose-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-rose-400 to-pink-500"
                    initial={{ width: 0 }}
                    animate={
                      inView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
        >
          {[
            { number: "10+", text: "Projets réalisés" },
            { number: "1", text: "Titre RNCP" },
            { number: "100%", text: "Motivation" },
          ].map((stat, index) => (
            <motion.div
              key={stat.text}
              className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="text-4xl font-bold text-rose-500 mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8 + index * 0.2,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
