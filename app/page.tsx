import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Techs } from "./_components/Techs";
import { Experiences } from "./_components/Experiences";
import { Projects } from "./_components/Projects";
import { ContactMe } from "./_components/ContactMe";
import { Footer } from "./_components/Footer";

export default function Home() {
  return <main>
    <Header/>
    <Spacing size={"md"}/>
    <Hero/>
    <Spacing size={"sm"} />
    <Techs/>
    <Spacing size={"md"} />
    <Projects/>
    <Spacing size={"md"} />
    <Experiences/>
    <Spacing size={"md"} />
    <ContactMe/>
    <Spacing size={"sm"} />
    <Footer/>
  </main>;
}