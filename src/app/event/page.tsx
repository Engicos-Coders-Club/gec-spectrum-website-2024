"use client";
import PageHead from "../components/PageHead";
import Datacard from "../../components/Events/Datacard";
import starPartyImg from "@/assets/events/star party.png";
import pronite from "@/assets/events/djnight-landscape.png";
import cricketImg from "@/assets/events/cricket-landscape.png";
import gamingImg from "@/assets/events/gaming.jpeg";

export default function Events() {
  return (
    <main>
      <PageHead body="BOOK YOUR" faltutext="(*)" title="EVENTS" />
      <section className="flex gap-4 items-start flex-wrap md:flex-nowrap mx-5 xl:max-w-screen-xl xl:mx-auto my-5">
        <section className={`mt-8 container mx-auto mb-20`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Datacard
              route="/event/pronite"
              eventName="Pronite"
              imageUrl={pronite.src}
              clubname="DJ Night"
              desc="Get ready to experience an electronic night with DJ Skeletron! "
            />
            <Datacard
              route="/event"
              eventName="Game Fiesta"
              imageUrl={gamingImg.src}
              clubname="Fun Zone"
              desc="Join us at GEC's Mining Department on both days for a fun-filled gaming experience!"
            />
            <Datacard
              route="/event"
              eventName="Control Cricket"
              imageUrl={cricketImg.src}
              clubname="Cricket Tournment"
              desc="Coming soon..."
            />
            <Datacard
              route="event/starparty"
              eventName="Star Party"
              imageUrl={starPartyImg.src}
              clubname="Astronomy Club"
              desc="Discover the Cosmos: A Night of Stargazing, Stories, and Adventure!"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
