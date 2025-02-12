"use client";

import React, { useState } from "react";
import { FigmaIcon } from "./icons/FigmaIcon";
import { NextjsIcon } from "./icons/NextjsIcon";
import { NodejsIcon } from "./icons/NodejsIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindcssIcon } from "./icons/TailwindcssIcon";
import { WordpressIcon } from "./icons/WordpressIcon";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { PhpIcon } from "./icons/PhpIcon";
import Image from "next/image";
import PortfolioImg from "./../images/Portfolio.jpg";
import ProjetDpImg from "./../images/projet_dp.jpg";
import AnaSophrologieImg from "./../images/Ana_Sophrologie.jpg";
import NapoliPizzaImg from "./../images/napoli_pizza.jpg";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    year: string;
    description: string;
    technologies: string[];
    sitePicture: string;
    siteURL?: URL;
    preciseDescription: string;
}

export const ProjectCard = ({
    title,
    year,
    description,
    technologies,
    sitePicture,
    siteURL,
    preciseDescription,
}: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getIcon = (tech: string) => {
        const size = 14;
        const icons: { [key: string]: JSX.Element } = {
            Figma: <FigmaIcon size={size} />,
            NextJS: <NextjsIcon size={size} />,
            NodeJS: <NodejsIcon size={size} />,
            GitHub: <GithubIcon size={size} />,
            React: <ReactIcon size={size} />,
            TailwindCSS: <TailwindcssIcon size={size} />,
            WordPress: <WordpressIcon size={size} />,
            JavaScript: <JavascriptIcon size={size} />,
            TypeScript : <TypeScriptIcon size={size}/>,
            PHP: <PhpIcon size={size} />,
        };
        return icons[tech] || null;
    };

    const getImage = (imageName: string) => {
        switch (imageName) {
        case "PortfolioImg": return PortfolioImg;
        case "ProjetDpImg": return ProjetDpImg;
        case "AnaSophrologieImg": return AnaSophrologieImg;
        case "NapoliPizzaImg" : return NapoliPizzaImg;
        default:
            return "";
        }
    };
  const siteImage = getImage(sitePicture);

    return (
        <div className="flex flex-col gap-4 w-full max-w-full">
            
            <div className="flex items-center justify-between gap-4 p-4 w-full max-w-full max-md:flex-col bg-muted rounded-md cursor-default">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-3">
                            <p className="text-xl sm:text-2xl font-semibold text-primary font-geist-mono">{title}</p>
                            <span className="py-[1px] px-2 border-foreground border rounded-full text-gray-light text-sm">
                                {year}
                            </span>
                        </div>
                        <p className="text-sm">{description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        {technologies.map((tech, index) => (
                            <div key={index} className="flex items-center gap-1 text-xs">
                                {getIcon(tech)}
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-sm flex items-center gap-1 hover:text-gray-500"
                >
                    En savoir plus
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg shadow-lg flex flex-col gap-4">
                        <h3 className="text-2xl font-bold mb-2 text-gray-700 font-caption">{title}</h3>
                        {siteImage ? (
                            <Image src={siteImage} alt={`Image du site: ${title}`} className="w-full max-w-[370px] mx-auto" />
                            ) : (
                            <p>Aucune image disponible</p>
                        )}
                        {siteURL && (
                            <Link 
                            href={siteURL} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 font-semibold flex gap-1"
                            >
                                Voir le site
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                         d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                         clipRule="evenodd"
                                     ></path>
                                </svg>                                
                            </Link>
                        )}
                        
                        <p className="mb-2 text-gray-600 text-base">{preciseDescription}</p>
                        <p className="text-gray-700 text-sm">Année : {year}</p>
                        <div className="flex gap-2 flex-wrap">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-secondary p-2 rounded text-xs "
                                >
                                    {getIcon(tech)}
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div className="mt-2 flex justify-center">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};