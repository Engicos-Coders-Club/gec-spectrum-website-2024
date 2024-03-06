import Hero from "./components/Hero";
import EventCard from "./components/Events";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="overflow-hidden">
        <EventCard/>
      </div>
    </>
  );
}
