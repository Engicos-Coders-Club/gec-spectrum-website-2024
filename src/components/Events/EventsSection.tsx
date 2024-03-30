import Datacard from "./Datacard";
import starpartyImg from "@/assets/star party.png";
import proniteImg from "@/assets/djnight-landscape.png";

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
      {/* <Datacard
        route="/expo"
        eventName="Expo"
        imageUrl="https://s3-alpha-sig.figma.com/img/ae84/b1cd/ebbba823bd926ade9bac00b7d1cd9740?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWgw-tpXQy~Mj~UuMkYcDw4sQwToCBuCIehQmO7d~Jg7bJheaqEv08xiuWFWR9ycadm2dZvHnRQ5qcaPvdDivUAx8Yi6vNQ4axxiKYzkBH2vuYVm-rY3OkZSZWV-vsSbDmzOpyqbgKoQ1usciVmtJAxG1s1WBpKG3i3Wr0Szx5aBQMYpMch6w95loMRGHFpefCMTMB0nzFg-f1zczH2Zb9oq4oJdQ4KZSgkbPr5B6FzOA0EczCfLFlYmNKEpMtWIcJRrRfhjlOFDXYzmikeEBvRbpe0V0-THFAaXCv1e92wQmLidKlVueEFlI1sAlWOoIPluWuQGikhWdxaso9weTA__"
        clubname="projects"
      /> */}
    </div>
  );
};
export default EventsSection;
