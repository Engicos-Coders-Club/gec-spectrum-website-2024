import Hero from "./components/Hero";
import EventCard from "./components/Events";
import Expo from "./components/Expo";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="overflow-hidden">
        <EventCard/>
      </div>
      <Expo/>
    </>
  );
}
