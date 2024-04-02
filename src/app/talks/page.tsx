import TalkCard from "@/components/TalkCard";
import PageHead from "../components/PageHead";
import cusorTalk1 from "@/assets/talks/genai-llms-dinesh.jpeg";
import cusorTalk2 from "@/assets/talks/obj-detection-shitala.jpeg";
import engicoTalk from "@/assets/talks/engico-connect.jpeg";
import acesTalk1 from "@/assets/talks/entrepreneurship.png";

const Talks = () => {
  return (
    <section>
      <PageHead body="tech" title="Talks" faltutext="T_T" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:xl:grid-cols-3 xl:grid-cols-4 gap-10 justify-center justify-items-stretch my-10 mx-4 md:mx-10">
        <TalkCard
          talkTitle="GenAI and LLMs"
          speaker="Dinesh Rivankar"
          designation="Senior Architect, PSL"
          regLink="https://forms.gle/74SQbR8Lndoe3kPm8"
          imageUrl={cusorTalk1}
        />
        <TalkCard
          talkTitle="Visual Attention in 3D Object Recognition and Localization"
          speaker="Dr. Shitala Prasad"
          designation="Asst. Professor, IIT Goa"
          regLink="https://forms.gle/CiTpPLaKytbGs4Gx5"
          imageUrl={cusorTalk2}
        />
        <TalkCard
          talkTitle="20 Years as an Engico"
          speaker="Maithili Desai"
          designation="Alumni Batch 2004"
          imageUrl={engicoTalk}
        />
        <TalkCard
          talkTitle="Entrepreneurship"
          speaker="Mr. Sanjeev Ojha"
          designation="Founder of Vihasta Hotels"
          imageUrl={acesTalk1}
        />
      </div>
    </section>
  );
};
export default Talks;
