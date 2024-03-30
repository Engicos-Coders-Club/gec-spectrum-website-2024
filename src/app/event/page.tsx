"use client";
import PageHead from "../components/PageHead";
import Datacard from "../../components/Events/Datacard";
import starPartyImg from "@/assets/star party.png";
import pronite from "@/assets/pronite.jpg";

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
              desc="Coming soon..."
            />
            {/* <Datacard
              route="/expo"
              eventName="Expo"
              imageUrl="https://s3-alpha-sig.figma.com/img/ae84/b1cd/ebbba823bd926ade9bac00b7d1cd9740?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWgw-tpXQy~Mj~UuMkYcDw4sQwToCBuCIehQmO7d~Jg7bJheaqEv08xiuWFWR9ycadm2dZvHnRQ5qcaPvdDivUAx8Yi6vNQ4axxiKYzkBH2vuYVm-rY3OkZSZWV-vsSbDmzOpyqbgKoQ1usciVmtJAxG1s1WBpKG3i3Wr0Szx5aBQMYpMch6w95loMRGHFpefCMTMB0nzFg-f1zczH2Zb9oq4oJdQ4KZSgkbPr5B6FzOA0EczCfLFlYmNKEpMtWIcJRrRfhjlOFDXYzmikeEBvRbpe0V0-THFAaXCv1e92wQmLidKlVueEFlI1sAlWOoIPluWuQGikhWdxaso9weTA__"
              clubname="student"
              desc="Coming soon..."
            /> */}
          </div>
        </section>
      </section>
    </main>
  );
}
