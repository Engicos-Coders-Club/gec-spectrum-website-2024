import ComingSoon from "@/app/components/ComingSoon";
import PageHead from "@/app/components/PageHead";
import Image from "next/image";
import djImage from "@/assets/events/djnight.jpeg";

const Pronite = () => {
  return (
    <>
      <PageHead title="Pronite" body="DJ Evening" faltutext=":P" />
      <div className="my-2 flex flex-wrap lg:flex-nowrap gap-2">
        <div className="mx-auto relative h-72 w-72 sm:w-96 sm:h-96">
          <Image
            src={djImage}
            width={djImage.width}
            height={djImage.height}
            className="object-contain"
            alt="Poster showcasing the DJ Skelectron for Spectrum 2024"
          />
        </div>
        <iframe
          src="https://konfhub.com/widget/spectrum-2024-pronite?desc=false&amp;ticketId=15518"
          id="konfhub-widget"
          title="Register for Spectrum 2024 Pronite"
          width="100%"
          height="500"
        ></iframe>
      </div>
    </>
  );
};
export default Pronite;
