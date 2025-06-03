// Import des images
import kasa from "../assets/images/projects/kasa.webp";
import argentBank from "../assets/images/projects/argentBank.webp";
import Portfolio from "../assets/images/projects/Portfolio.webp";
import DirtyLatte from "../assets/images/projects/DirtyLatte.webp";

export const projects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description:
      "Un portfolio moderne et responsive développé avec React et Tailwind CSS, mettant en valeur mes compétences et projets.",
    image: Portfolio,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/votre-username/portfolio",
    features: [
      "Design responsive et moderne",
      "Animations fluides avec Framer Motion",
      "Interface utilisateur intuitive",
      "Optimisé pour les performances",
    ],
  },
  {
    id: 2,
    title: "DirtyLatte -Blog Personnel",
    description:
      "Un blog moderne avec système de gestion de contenu et de commentaires.",
    image: DirtyLatte,
    technologies: ["React", "JavaScript", "Firebase"],
    link: "https://dirty-latte.vercel.app",
    features: [
      "Gestion des données et authentification via Firebase.",
      "Authentification Google ",
      "Interface utilisateur intuitive",
    ],
  },
  {
    id: 3,
    title: "Kasa - Plateforme de location",
    description:
      "Une plateforme de location de logements développée avec React, offrant une expérience utilisateur fluide et intuitive.",
    image: kasa,
    technologies: ["React", "JavaScript", "React Router"],
    link: "https://github.com/TKarelle/Kasa",
    features: [
      "Navigation fluide avec React Router",
      "Interface utilisateur dynamique et réactive",
      "Galerie d'images interactive",
      "Design responsive et moderne",
    ],
  },
  {
    id: 4,
    title: "ArgentBank - Transactions Bancaires",
    description:
      "Une application bancaire moderne avec authentification sécurisée et gestion des transactions en temps réel.",
    image: argentBank,
    technologies: ["React", "Redux", "MongoDB", "Swagger"],
    link: "https://github.com/TKarelle/ArgentBank-Frontend",
    features: [
      "Système d'authentification sécurisé",
      "Gestion d'état avec Redux",
      "API RESTful avec Swagger",
      "Stockage des données avec MongoDB",
    ],
  },
];
