import Datacard from "./Datacard";
import starpartyImg from "@/assets/star party.png";
import proniteImg from "@/assets/djnight-landscape.png";
import cricketImg from "@/assets/cricket-landscape.png";

const EventsSection = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-around items-start gap-10 max-w-screen-xl mx-auto px-10 md:px-16">
      <Datacard
        route="event/starparty"
        eventName="Star Party"
        imageUrl={starpartyImg.src}
        clubname="Astronomy Club"
      />
      <Datacard
        route="/event/pronite"
        eventName="Pronite"
        imageUrl={proniteImg.src}
        clubname="DJ Evening"
      />
      <Datacard
        route="/event"
        eventName="Control Cricket"
        imageUrl={cricketImg.src}
        clubname="Cricket Tournment"
      />
    </div>
  );
};
export default EventsSection;
