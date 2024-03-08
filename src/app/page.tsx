import Hero from "./components/Hero";
import EventCard from "./components/Events";
import Expo from "./components/Expo";
import Sponsors from "./components/Sponsors";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ExploreTile from "@/components/explore-tile/ExploreTile";

export default function Home() {
  return (
    <main className="max-w-screen overflow-hidden">
      <section className="overflow-hidden">
        <Navbar/>
        <Hero/>
      </section>
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
