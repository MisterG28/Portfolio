import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import Link from "next/link";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const ContactMe = () => {
    return (
      <Section id="contact" className="flex flex-col gap-5">
        <ul className="flex flex-col gap-4 md:flex-row md:gap-8 items-center justify-evenly">
          <li>
            <Link href="https://www.linkedin.com/in/killyan-piriou-093862271/">
              <Button className="inline-flex items-center gap-2 px-8 py-6 bg-accent text-primary hover:bg-accent/80 transition-colors rounded-lg text-xl">
                <LinkedinIcon size={26} /> Mon Linkedin
              </Button>
            </Link>
          </li>
          <li>
            <Link href="mailto:killyan.piriou.pro@gmail.com">
              <Button className="inline-flex items-center gap-2 px-8 py-6 bg-primary text-accent hover:bg-primary/80 transition-colors rounded-lg text-xl">
                <span className="font-bold">✉</span> Me Contactez
              </Button>
            </Link>
          </li>
        </ul>
      </Section>
    );
  };