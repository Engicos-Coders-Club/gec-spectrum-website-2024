import Hero from "./components/Hero";
import Tagline from "./components/Tagline";
import EventCard from "./components/Events";
import Expo from "./components/Expo";
import Sponsors from "./components/Sponsors";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ExploreTile from "@/components/explore-tile/ExploreTile";
import Event from "./components/Event";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="overflow-hidden">
        <Navbar/>
        <Hero/>
      </section>
      <Tagline/>
      <Event/>
      <section className="overflow-hidden mt-20 p-2">
        <EventCard/>
      </section>
      <section className="overflow-hidden">
        <Expo/>
        <Sponsors />
        <ExploreTile/>
      </section>
      <Footer />
    </main>
  );
}
