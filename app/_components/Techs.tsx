import { Section } from "./Section";
import { TechCard } from "./TechCard";
import { ReactIcon } from "./icons/ReactIcon";
import { NextjsIcon } from "./icons/NextjsIcon";
import { TailwindcssIcon } from "./icons/TailwindcssIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { WordpressIcon } from "./icons/WordpressIcon";
import { NodejsIcon } from "./icons/NodejsIcon";

export const Techs = () => {
    return (
        <Section id="stack" className="flex flex-col items-start gap-5">
            <h2 className="text-4xl text-primary font-caption font-semibold">STACK</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 w-full">
                <TechCard icon={ReactIcon} tech="React" level="Intermédiaire 3/5"/>
                <TechCard icon={NextjsIcon} tech="NextJS" level="Intermédiaire 3/5"/>
                <TechCard icon={NodejsIcon} tech="NodeJS" level="Intermédiaire 3/5"/>
                <TechCard icon={TailwindcssIcon} tech="Tailwindcss" level="Confirmé 4/5"/>
                <TechCard icon={WordpressIcon} tech="Wordpress" level="Confirmé 4/5"/>
                <TechCard icon={FigmaIcon} tech="Figma" level="Confirmé 4/5"/>
            </div>
        </Section>
    );
};