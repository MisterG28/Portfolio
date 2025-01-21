import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

/* eslint-disable react/no-unescaped-entities */

const projectTable = [
    {
        id: 1,
        title: "Search Game",
        year: "2023",
        description: "Application web de recherche de jeux utilisant l'API RAWG.",
        technologies: ["JavaScript", "PHP","Figma", "RAWG API"],
        sitePicture : "ProjetDpImg",
        preciseDescription: `Site réalisé lors de ma formation en DWWM dans le cadre d'un projet personnel.
        Il permet d'afficher des listes de jeux par catégorie, prix, etc. De plus, si l'utilisateur est connecté, 
        il peut consulter ses favoris qu'il a sélectionnés.`,
    },
    {
        id: 2,
        title: "Portfolio",
        year: "2025",
        description: "Un portfolio interactif mettant en valeur mes compétences et projets.",
        technologies: ["React", "NextJS","TailwindCSS"],
        sitePicture : "PortfolioImg",
        preciseDescription: `Site sur lequel vous êtes actuellement, et qui est toujours en cours d'évolution.
        Il me permet de mettre en valeur mes compétences et projets.`,
    },
    {
        id: 3,
        title: "Ana Sophrologie",
        year: "2023",
        description: "Une application web pour permettre une prise de rendez-vous rapide avec Ana Sophrologie.",
        technologies: ["React", "NextJS", "PHP","TailwindCSS", "Figma"],
        sitePicture : "AnaSophrologieImg",
        preciseDescription: `Site web conçu en collaboration, intégrant un calendrier de rendez-vous interactif et 
        un formulaire de contact convivial. Il offre également des informations détaillées sur la sophrologie et les 
        méthodes utilisées par Ana Sophrologie, permettant aux utilisateurs de mieux comprendre cette pratique et ses bienfaits.`,
    },
];

export const Projects = () => {
    return (
        <Section id="projets" className="flex flex-col items-start gap-5">
            <h2 className="text-4xl text-primary font-caption font-semibold">MES PROJETS</h2>
            <div className="flex flex-col gap-4 w-full">
                {projectTable.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        year={project.year}
                        description={project.description}
                        technologies={project.technologies}
                        sitePicture={project.sitePicture}
                        preciseDescription={project.preciseDescription}
                    />
                ))}
            </div>
            <div className="flex flex-col items-center gap-5 mt-6">
                <p className="text-center">
                    Avant de commencer ma formation de développeur web, j'ai réalisé le jeu ci-dessous en totale 
                    autonomie, exclusivement en pur code JavaScript.
                </p>
                <p className="text-center">⚠️ Attention : le jeu pourrait s'avérer légèrement difficile, alors soyez prêt(e) à relever le défi ! 😉</p>
                <p className="lg:hidden text-center text-lg text-primary font-semibold">Passez sur un ordinateur pour accéder au jeu !</p>
                <iframe
                    src="https://shooter-sand.vercel.app/"
                    title="Mini-jeu"
                    width="800"
                    height="600"
                    className="border-none max-lg:hidden"
                ></iframe>
            </div>
        </Section>
    );
};