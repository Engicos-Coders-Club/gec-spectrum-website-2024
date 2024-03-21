import PageHead from "../components/PageHead";
import TeamsData from "../components/TeamsData";
import Coming from "../ComingSoon/page";

const page = () => {
  return (
    <div>
      <PageHead body="MEET THE" title="TEAM" faltutext="/*" />
      <TeamsData />
      {/* <Coming></Coming> */}
    </div>
  );
};

export default page;
