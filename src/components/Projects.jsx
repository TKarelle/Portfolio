// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/projects";

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-12 md:py-20">
      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
          Mes Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={`Capture d'écran du projet ${project.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-rose-100 text-rose-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow"
                  aria-label={`Voir le projet ${project.title}`}
                >
                  Voir le projet
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/votre-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-rose-600 px-4 py-2 rounded-lg hover:shadow-lg transition-shadow"
            aria-label="Voir plus de projets sur GitHub"
          >
            <span className="text-sm">Voir plus de projets sur GitHub</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
