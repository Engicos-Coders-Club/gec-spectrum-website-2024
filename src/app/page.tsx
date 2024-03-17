import Hero from "./components/Hero";
import Tagline from "./components/Tagline";
import Expo from "./components/Expo";
import Sponsors from "./components/Sponsors";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ExploreTile from "@/components/explore-tile/ExploreTile";
import Event from "./components/Event";
import Loading from "./loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
     <Suspense fallback = {<Loading/>}>
      <Hero />
      <Tagline />
      <Event />
      <Expo />
      {/* <Sponsors /> */}
      <ExploreTile />
      <Footer />
     </Suspense>
    </main>
  );
}
