import Hero from "./components/Hero";
import EventCard from "./components/Events";
import Expo from "./components/Expo";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <div className="overflow-hidden">
        <Hero/>
        <EventCard/>
        <Expo/>
        <Sponsors/>
    </div>
  );
}
