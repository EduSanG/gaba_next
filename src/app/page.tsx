import NavBar from "@/components/navBar";
import Intro from "@/components/intro";
import Services from "@/components/services";
import Others from "@/components/others";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Intro />
        <Services />
        <Others />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}