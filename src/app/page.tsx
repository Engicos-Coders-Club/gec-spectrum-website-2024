<<<<<<< HEAD
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <Navbar />
=======
import Hero from "./components/Hero";
import EventCard from "./components/Events";
import Expo from "./components/Expo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <section className="overflow-hidden">
    <Hero/>

    </section>
      <section className="overflow-hidden mt-20 p-2">
        <EventCard/>
      </section>
      <section className="overflow-hidden">
      <Expo/>
      </section>
     <Footer />
    </>
>>>>>>> 8dd1bd868406c09b6b25aadc9c30a5b409f25a44
  );
}
