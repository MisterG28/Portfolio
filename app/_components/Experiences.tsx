import { Section } from "./Section";
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: "Développeur Full Stack",
    company: "Freelance",
    duration: "Janvier 2025 - Présent",
    description: `Conception et développement d'applications web réactives en utilisant React, 
    Next.js et Node.js. Optimisation des performances et design adaptatif.`
  },
  {
    title: "Stagiaire Développeur Web",
    company: "Ana Sophrologie",
    duration: "Janvier 2023 - Novembre 2023",
    description: `Création d’un site web en collaboration, en utilisant
    React/Next.js et PHP, intégrant un calendrier de rendez-vous ainsi
    qu’un formulaire de contact.`
  },
  {
    title: "Formation Développement Web et Web Mobile",
    company: "AFPA",
    duration: "Janvier 2023 - Novembre 2023",
    description: `Acquisition des compétences en HTML5, CSS3, JavaScript, PHP,
    bases de données SQL, gestion de projets Agile, et utilisation d'outils
    collaboratifs tel que Git. Réalisation de projets concrets incluant
    sites vitrines, applications dynamiques et responsive design.`
  },
  {
    title: "Formation des métiers du numérique et de l'informatique",
    company: "le Dôme de Dreux",
    duration: "Septembre 2022 - Décembre 2022",
    description: `Apprentissage général des métiers du numérique et de
    l'informatique, réalisation d'un jeu de type shoot'em up entièrement
    en JavaScript pur code et 100% en autonomie.`
  }
];

export const Experiences = () => {
  return (
    <Section id="experiences" className="flex flex-col gap-5">
      <h2 className="text-4xl text-primary font-caption font-semibold">MES EXPÉRIENCES ET FORMATIONS</h2>
      <p className="text-center text-3xl font-primary">Aujourd'hui</p>
      <div className="relative pt-10">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-primary z-0 transform -translate-x-1/2 rounded-full"></div>

        <div className="flex flex-col items-center gap-10 z-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              duration={experience.duration}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
