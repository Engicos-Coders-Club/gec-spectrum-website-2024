import Image from "next/image";
import Coming from "../components/ComingSoon";
import PageHead from "../components/PageHead";
import day1 from "@/assets/Day 1.png";
import day2 from "@/assets/Day 2.png";

const SchedulePage = () => {
  return (
    <section>
      <PageHead body="Here's our" title="schedule" faltutext="!=" />
      <br />
      <Coming />
      {/* <div className="max-screen-w-lg mx-auto h-auto w-3/4 lg:w-1/2 relative">
        <Image
          src={day1}
          height={day1.height}
          width={day1.width}
          alt="Day 1 Spectrum Schedule"
          className="object-contain"
        />
      </div>
      <div className="max-screen-w-lg mx-auto h-auto w-3/4 lg:w-1/2 relative">
        <hr />
        <Image
          src={day2}
          height={day2.height}
          width={day2.width}
          alt="Day 2 Spectrum Schedule"
          className="object-contain"
        />
      </div> */}
    </section>
  );
};
export default SchedulePage;
