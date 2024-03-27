"use client"
import PageHead from "../components/PageHead";
import { Space_Grotesk } from "next/font/google";
const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });
import Datacard from "./Datacard";
export default function Events() {
  return (
    <main>
      <PageHead body="BOOK YOUR" faltutext="(*)" title="EVENTS" />
      <section className="flex gap-4 items-start flex-wrap md:flex-nowrap mx-5 xl:max-w-screen-xl xl:mx-auto my-5">
      <section className={`mt-8 ${Space.className} container mx-auto mb-20`}>
          <div className="grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-3 gap-7 ali">
            <Datacard route="event/starparty" eventName="Star Party" imageUrl="https://s3-alpha-sig.figma.com/img/636d/41cb/4df186a956892c740c199327c6be90e2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZoxFqrY11R2ZNLLuKC07V58RzNPuNwQ61I-N6egkpRdPzmh1mqJpgggFzYn4LJt33sFpbghEiiNPJ-spfFMqSfEjgLVFPS0m6N1NyoqvxJDTzFnRZT3w3OPkNraHd6Wfb3S3tYhVVNUgRmjRMXieM8PRYIjwjZh~H7VQCYpZgNqTXjV9RbLoOdOEZ9k39ix-XEZbiJkxaLEFmsdlDOxjmF~9zwyMZpoOPCLahroLdRxnHT6VrgcqAGybojSzuAyY3weqV604rgcDll7VL6ReEw2HWDUXU1XXruW750I1-5DUv2s8SvOAyUNwbfkGzo-hYci2aNV9v0NRh~U~KiBCuw__" clubname="Astronomy Club"></Datacard>
            <Datacard route="expo" eventName="Expo" imageUrl="https://s3-alpha-sig.figma.com/img/ae84/b1cd/ebbba823bd926ade9bac00b7d1cd9740?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWgw-tpXQy~Mj~UuMkYcDw4sQwToCBuCIehQmO7d~Jg7bJheaqEv08xiuWFWR9ycadm2dZvHnRQ5qcaPvdDivUAx8Yi6vNQ4axxiKYzkBH2vuYVm-rY3OkZSZWV-vsSbDmzOpyqbgKoQ1usciVmtJAxG1s1WBpKG3i3Wr0Szx5aBQMYpMch6w95loMRGHFpefCMTMB0nzFg-f1zczH2Zb9oq4oJdQ4KZSgkbPr5B6FzOA0EczCfLFlYmNKEpMtWIcJRrRfhjlOFDXYzmikeEBvRbpe0V0-THFAaXCv1e92wQmLidKlVueEFlI1sAlWOoIPluWuQGikhWdxaso9weTA__" clubname=" "></Datacard>
          </div>
        </section>        
      </section>
    </main>
  );
}
