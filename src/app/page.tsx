import Hero from "./components/Hero";
import Tagline from "./components/Tagline";
import Sponsors from "./components/Sponsors";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ExploreTile from "@/components/explore-tile/ExploreTile";
import Event from "./components/Event";
import Loading from "./loading";
import { Suspense } from "react";
import Organizers from "./components/Organizers";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
     <Suspense fallback = {<Loading/>}>
      <Hero />
      <Tagline />
      <Event />
      <Sponsors />
      <Organizers/>
      <ExploreTile />
      <Footer />
     </Suspense>
    </main>
  );
}



















//Don't delete plisssss