import Hero from "./components/Hero";
import Tagline from "./components/Tagline";
import EventCard from "./components/Events";
import Expo from "./components/Expo";
import Sponsors from "./components/Sponsors";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ExploreTile from "@/components/explore-tile/ExploreTile";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Tagline />
      <EventCard />
      <Expo />
      <Sponsors />
      <ExploreTile />
      <Footer />
    </main>
  );
}
