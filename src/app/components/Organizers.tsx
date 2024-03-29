"use client";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Image from "next/image";
const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});
const organizers = () => {
  return (
    <div className="my-24 sm:px-10 md:px-20">
      <div className="flex flex-row justify-center md:justify-start items-center space-y-0 space-x-9">
        <div className="relative">
          <h1
            className={`text-lg md:text-2xl lg:text-5xl text-white font-semibold uppercase ${panchang.className}`}
          >
            Organizers
          </h1>
        </div>
        <div className="absolute -left-10 h-[1px] w-screen gradient-border -z-10"></div>
      </div>
      <motion.div
        className="flex justify-around py-20 px-4 md:px-20 flex-wrap gap-10 md:gap-5"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      >
        {/* Main Council */}
        <div className=" bg-white p-4 rounded-[50%] h-24 w-24 md:h-28 md:w-28 object-contain overflow-hidden relative">
          <Image
            className="rounded-full h-full w-full p-2"
            src="https://s3-alpha-sig.figma.com/img/928b/a162/c80d9ca7de4645dd97637aa03c0ae9b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cr5KoJDHC9aOsUP14Wnsal5wGeLe4ZH122XnEdLZ~ac~E93IuGIh~4OFM1MDoWXu80Y83rrPH4WlZbCYGf1WA59lI-cEVL9p~tUJ0BzB1hMsiUSy9KaOZPM0YURg5~C3SwyKyOeG7y53KvNVOL1GykfLPGs8IstTb1geW9vTLHbXbXVh6-cwI~3RPWEYT5k4dxOeDd6PuW6WruKJEsGRwc4HhiS9q3HOcxsdFVdsumqXnwXKeF9KZ7VBZ8IyAgQgbVne1kc3dX2lherJ2fONMwMxP7fFHIV0uBXo2EhXVwnFcRXCUq5n3RfI0v7UCifiubuu6h-JEPtuWqjnj1v-tw__"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
            alt="Student Council, GEC"
            title="Student Council, GEC"
          />
        </div>

        {/* Computer department */}
        <div className=" bg-white p-4 h-24 w-24 md:h-28 md:w-28 rounded-full object-contain overflow-hidden relative">
          <Image
            className="p-5"
            src="https://s3-alpha-sig.figma.com/img/459f/b858/fa5b841ca545e6a203b866af868b0638?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOVGxgDfii06i67OyloF3r3-I7fRH55BLlRmDXjh25w2dJEL~Bcf2rdFYH-w9vpRNTgmGSGSyDbXn-YI7c8jspx0-kgM~jvdqL-FQCo0s7GY1rE0cFe4CsW0i84iKk7AL7ftFv3790Gd0gXonAz~LBA4QSFwD29LXziMBKy4FQCxLP0I3OJff8VzpWZXjQwHjo48uyGhlcqHcAv-wD3dgrVFPEIYw473DCnrZLOCUjsfitm4N3OYwKKGZmZJ08iSzv-zouLz5ii0PDNXzzUtctc6TvhAKygPGzH-E~qQCCVkJ9oMKnxxnhUBMQR-AVXhDF-JXwSBsNNZ1iTg7g2Mrw__"
            fill
            alt="Computer Department Association"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
            title="Computer Department"
          ></Image>
        </div>
        {/* ENE department */}
        <div className="bg-black p-4 h-24 w-24 md:h-28 md:w-28 rounded-full object-contain overflow-hidden relative">
          <Image
            className=""
            src="https://s3-alpha-sig.figma.com/img/e8f7/c7c3/cdf7719c37faca8328b5ee97355c84b2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HS-CQkScj2w81LOLNVyUaaOqfVP59Av4uQeAVfSCCKicJPU0OjRlDhk66AlidmyBaLbRO7sdga8uCDU~gu0EtD~JQb-cY270MXmbR0GcV3Kbnd3jnV~1eJ5cXveQQ0aANv3aIqtv650dT2NLvZl3fOBNUblfW5Mlqhvg6WPq2qMdb7mKtpe-B4QbwLTPGpT4x9vriziQPoqfGRVNnKgC8sDYG6KhwIrpV9ZsRMtAAfarmzElk8WnoFasRQGvRLuPXeyGt2lPS7JNIvIlWxXkWcC9HWiG~ym7UUr3hzsQFjTWNajgkdi9om3V5SDC5Uidpfn~wmNOb9S3fwnDIgT~Ww__"
            fill
            alt="ENE Department Association"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
            title="ENE Department"
          ></Image>
        </div>
        {/* IT department */}
        <div className="bg-white p-4 h-24 w-24 md:h-28 md:w-28 rounded-full object-contain overflow-hidden relative">
          <Image
            className=""
            src="https://s3-alpha-sig.figma.com/img/7d7f/8e40/e187d827e6f1b69f9dcaf34113ec70bb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ClrC9GQPJlY17qwoSNQMmcbedwlWKU8zyCmiXE9aY7vO05YCHcWecIVRg9j0NB~fvQWV99OyOZ8~rC4B01aELssptRy45PmuBRpR8w~3g8ff8WCBdijY3ZBUvOYaypBNI61zQaewcfo-8cGZYJF1vecDAYnH4-BMoJlaWW6pbDpc7hwPK5499ckjfZ9nefLv6W6FGyYpVsct~RrymO7nGogh7k3NbFDK0JVbItbMPybwFCVDFpX4FfA42fVodCu4UH9M-Orpv5~H70Gam93xDdCACoJgr0rPntE5iekKWhHSTr0sIME74yhSzCCtihbNQljEyxaKUSxTsXAlvgLyhA__"
            fill
            alt="IT Department Association"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
            title="IT Department"
          ></Image>
        </div>
        {/* Civil department */}
        <div className="bg-white p-4 h-24 w-24 md:h-28 md:w-28 rounded-full object-contain overflow-hidden relative">
          <Image
            className="p-3"
            src="https://s3-alpha-sig.figma.com/img/c2e2/db7c/54434f622eaaf7725308918c3ce77a7a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQMXQ~zWUs7Qd6lwmfViUSflIDbXBwiXuRWOZGTWT62snWRGraHA~EgTbeVhfnzU~G4H4FlrTIfL75Goh~1qWa1r2fvuCbolBGiU72Ro3ch6KfGGH7EMzq6~yatcgqe9TN2UVrYzQv~FxDwz9OcgDTnXoHMn23fjpHGHVTgeslRnrQfl~CwT6k~H~XuFUicGh5Levwzb9E2S5u1~w9TiZPOMa2303u~JEp5BET93JtoNfUERyNcRAWlQ1CSPt6JHCosVQMdWGjDu0KnI~pbxvCkvadDwsVrPP7RIGaODC9RD8bk1aGcCd5pQohYaQckynJFSd0E5-CP0psqZTnhRGw__"
            fill
            alt="Civil Department Association"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
            title="Civil Department"
          ></Image>
        </div>

        <div className="bg-white p-4 h-24 w-24 md:h-28 md:w-28 rounded-full object-contain overflow-hidden relative">
          <Image
            className="p-2"
            src="https://s3-alpha-sig.figma.com/img/1a84/492d/e53b6c75a5c019df7825c9b95140ccde?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hUKIO~BwOza5hyAeEbhQLILpjk78htzybC3X7VQr9YW5Zs4AdSBOmRZpv1U6FrQf7HRX3rY-e~Yk4VfrzCEvpeNbIRxgj7eJE6yoNgKdK12lQnf-O1sFVW~qL2jgR9cz2DAfQlnPIVY0SGou42NvhfJJi8rCK0~U621u1wcY9CT9u~AKvCZIzwqrh7CJDWppKhqKsN7ifQXI~Cd0RTTZGMjY9xKwZRHlS2oHBBWak~qAX-q0TL5i56ICyFSnTXnVRZoNpfibV09WAKBATVUo7KqUvlzn6eGAxCT3iuLhpj7GSjQ9VsyyxjwkIVQ4h6L8Jw42MCidyAz0jNpBi~-rXw__"
            fill
            alt="Mechanical Department Association"
            title="Mechanical Department"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
          ></Image>
        </div>

        {/* ETC Department */}
        <div className="bg-white p-4 h-24 w-24 md:h-28 md:w-28 rounded-full object-contain overflow-hidden relative">
          <Image
            className="p-3"
            src="https://s3-alpha-sig.figma.com/img/17cd/b99b/af99fad626276586f8b1c694567f7a4a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0z6NWYBV8HomJQqgAE1NqYfA2wuVV0yHkZfHYpnW99C6fIvhW7H-lLXr~IwgOdXQAW05QxVppWzsVEbpE~5-gmbmRzR8SGWKucXurLSPIJIx8zlFBsj6l05wMsU6xgadShMqkW-kFfoL2lrw12bdxHmBtH3MXNpkH1fh9J3efgdDYfFrdhkunWtgQa7qH~PrNGc6RjPaLSUeG1hYBermZ5h6vTkoEZJ1QDLkAFZUQrJRpVLEqy7ui06Y5c10Io8V4I6H0A5bDqP2rvBi8xNov6w--b-UuW2tAK8QXoSy3O9v95x8qiVjhNEJd7ce29eFUsM~BlMNM1Uja82PZhFDg__"
            fill
            alt="ETC Department Association"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
            title="ETC Department"
          ></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default organizers;
