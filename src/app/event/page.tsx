"use client";
import PageHead from "../components/PageHead";
import Datacard from "../../components/Events/Datacard";
import starPartyImg from "@/assets/star party.png";
import pronite from "@/assets/djnight-landscape.png";
import cricketImg from "@/assets/cricket-landscape.png";

export default function Events() {
  return (
    <main>
      <PageHead body="BOOK YOUR" faltutext="(*)" title="EVENTS" />
      <section className="flex gap-4 items-start flex-wrap md:flex-nowrap mx-5 xl:max-w-screen-xl xl:mx-auto my-5">
        <section className={`mt-8 container mx-auto mb-20`}>
          <div className="flex flex-wrap justify-around items-start gap-10">
            <Datacard
              route="event/starparty"
              eventName="Star Party"
              imageUrl={starPartyImg.src}
              clubname="Astronomy Club"
              desc="Discover the Cosmos: A Night of Stargazing, Stories, and Adventure!"
            />
            <Datacard
              route="/event/pronite"
              eventName="Pronite"
              imageUrl={pronite.src}
              clubname="DJ"
              desc="Get ready to experience an electronic night with DJ Skeletron! "
            />
            <Datacard
              route="/event"
              eventName="Control Cricket"
              imageUrl={cricketImg.src}
              clubname="Cricket Tournment"
              desc="Coming soon..."
            />
          </div>
        </section>
      </section>
    </main>
  );
}
