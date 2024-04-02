import Image, { StaticImageData } from "next/image";
import { GrNew } from "react-icons/gr";
import { RiExternalLinkLine } from "react-icons/ri";

interface TalkCardProps {
  talkTitle: string;
  imageUrl: StaticImageData;
  speaker: string;
  designation: string;
  regLink?: string;
  desc?: string;
}

const TalkCard = ({
  imageUrl,
  talkTitle,
  regLink,
  speaker,
  designation,
}: TalkCardProps) => {
  return (
    <div className="border border-white/[0.5] p-4  transition-transform delay-75 relative group h-full flex flex-col justify-between">
      <GrNew className="absolute h-6 w-6 -top-3 -left-3  text-white group-hover:text-mango group-hover:rotate-45 transition" />
      <GrNew className="absolute h-6 w-6 -bottom-3 -left-3  text-white group-hover:text-mango group-hover:rotate-45 transition" />
      <GrNew className="absolute h-6 w-6 -top-3 -right-3  text-white group-hover:text-mango group-hover:rotate-45 transition" />
      <GrNew className="absolute h-6 w-6 -bottom-3 -right-3  text-white group-hover:text-mango group-hover:rotate-45 transition" />
      <div className="text-gray-100">
        <div className="w-[250px] 2xl:w-[300px] h-[400px] 2xl:h-[450px] relative mx-auto">
          <Image
            src={imageUrl}
            alt={`${talkTitle} Poster `}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-xl font-semibold capitalize">{talkTitle}</p>
          <p className="text-sm capitalize text-violet-400 font-medium mt-2">
            {speaker}
          </p>
          <p className="text-xs capitalize text-violet-300">({designation})</p>
        </div>
      </div>

      {regLink && (
        <a
          href={regLink}
          className="px-5 py-1 rounded-full rounded-tl-none flex items-center justify-end w-fit ml-auto gap-2 capitalize bg-gray-800 hover:text-mango"
        >
          register <RiExternalLinkLine />
        </a>
      )}
    </div>
  );
};
export default TalkCard;
