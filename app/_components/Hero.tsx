import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {

    return <span className={cn("bg-accent/30 hover:bg-accent/50 font-mono border border-accent px-4 py-2 rounded-sm text-primary transition-colors", className)} {...props}>
    </span>
}
export const Hero = () => {
    return (
        <Section id="hero" className="flex max-md:flex-col-reverse items-start gap-10">
            <div className="flex-[3] flex flex-col gap-2">
                <h2  className="font-caption font-bold text-5xl text-primary">Killyan Piriou</h2>
                <h3 className="text-3xl font-caption">Développeur Web Full Stack</h3>
                <p className="text-base text-justify">
                    Je m'appelle Killyan, admis à l'ENI en Conception et Développement d'applications.
                    Je suis actuellement à la recherche d'une alternance. Lors de ma formation de préparation 
                    aux métiers du numérique et de l'informatique, j'ai découvert le développement web, ce qui 
                    m'a permis d'en apprendre les bases. Par la suite, j'ai suivi une formation en développement 
                    web et web mobile, grâce à laquelle j'ai pu renforcer mes compétences aussi bien en Back-end qu'en Front-end.
                    J'accorde également une grande importance au web design, car je considère que l'expérience 
                    utilisateur (UX) et l'interface utilisateur (UI) sont des éléments essentiels à la réussite d'un site web.
                </p>
            </div>
            <div className="flex-1 flex flex-col gap-4 items-center">
                <div className="max-w-[200px]">
                    <img 
                     src="https://avatars.githubusercontent.com/u/100587061?v=4" 
                     className="w-full h-auto md:max-w-sm max-w-[200px] rounded-full border border-foreground"
                     alt="Photo de Killyan"
                    />
                </div>
                <Link href="mailto:killyan.piriou.pro@gmail.com">
                    <Code className="inline-flex items-center gap-1">
                        killyan.piriou.pro@gmail.com
                    </Code>
                </Link>
                <p className="text-sm">25 ans - Dreux, 28100</p>
            </div>
        </Section>
    );
  };