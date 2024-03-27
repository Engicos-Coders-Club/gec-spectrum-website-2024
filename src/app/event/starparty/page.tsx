"use client";
import PageHead from "@/app/components/PageHead";
import { RiLink } from "react-icons/ri";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
export default function starparty() {
  return (
    <main>
      <PageHead body="CAMP OUT" faltutext="**" title="STAR PARTY" />
      <div className=" pt-8 pb-8 hidden lg:flex">
        <img
          className=" h-[9rem] ml-[-12rem] w-auto"
          src="/astroticket.png"
          alt=""
        />
        <img className=" h-[9rem] w-auto" src="/astroticket.png" alt="" />

        <img className=" h-[9rem] w-auto  " src="/astroticket.png" alt="" />

        <img className=" h-[9rem] w-auto " src="/astroticket.png" alt="" />
        <img className=" h-[9rem] w-auto" src="/astroticket.png" alt="" />
        <img className=" h-[9rem] w-auto " src="/astroticket.png" alt="" />
        <img
          className=" h-[9rem] mr-[-5rem] w-auto hidden lg:block "
          src="/astroticket.png"
          alt=""
        />
      </div>
      <section className="flex gap-4 items-start flex-wrap md:flex-nowrap mx-5 xl:max-w-screen-xl xl:mx-auto my-5">
        <div>
          <div className="lg:px-6 py-4 px-1  bg-white/10  my-4 flex flex-col gap-5 w-full md:w-fit">
            <div className="flex font-bold flex-col gap-1 justify-start">
              <p className="text-sm">Date</p>{" "}
              <p className="text-lg md:text-xl font-bold text-mango">
                10PM - 3rd April, 2024{" "}
              </p>
            </div>
            <div className="flex font-bold flex-col gap-1 justify-start">
              <p className="text-sm">Venue</p>
              <p className="text-lg md:text-xl font-bold text-mango">
                Goa College of Engineering Campus{" "}
              </p>
            </div>
            <div className="flex font-bold flex-col gap-1 justify-start">
              <p className="text-sm">Brochure</p>
              <a
                className=" bg-violet-900 p-2 px-5 rounded-full rounded-tl-none font-semibold hover:bg-violet-500 uppercase text-center"
                href="/Star_party_brochure.pdf"
                download={true}
                target="_blank"
                rel="noreferrer"
              >
                Brochure
              </a>

              <p className=" pt-3 text-sm">Registor</p>
              <a
                title="Register Online"
                className="bg-primary p-2 px-5 rounded-full rounded-tl-none font-semibold hover:bg-violet-500 uppercase text-center"
                href="https://forms.gle/FhsKovm9tgtjBxdC8"
                target="_blank"
                rel="noreferrer"
              >
                register
              </a>
              <div className="flex pt-4 items-center gap-3">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator
                        .share({
                          title: document.title,
                          text: "Star Party | GEC Spectrum 2024", // Replace with the static event name
                          url: window.location.href,
                        })
                        .then(() => console.log("Successful share"))
                        .catch((error) => console.log("Error sharing:", error));
                    }
                  }}
                  className="border flex items-center gap-2 border-gray-500 text-sm py-1 px-4 rounded-full"
                >
                  <RiLink className="text-blue-500" />
                  <div className=" whitespace-nowrap">SHARE EVENT</div>
                </button>

                <Link
                  href={
                    "https://www.instagram.com/gecastronomyclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  }
                  className="border flex items-center gap-2 border-gray-500 text-sm py-1 px-4 rounded-full"
                >
                  <FaInstagram className="text-pink-500" />
                  <div className=" whitespace-nowrap">ASTRO CLUB</div>
                </Link>
              </div>
            </div>
          </div>
          <Image
            className=" h-[30rem] w-auto hidden lg:block"
            src="https://s3-alpha-sig.figma.com/img/f972/7036/2937d51126333d078052e33941f4ad86?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SCpUBCVyc1vC625up7GA78bzAGKaILn2tsuJ7CYY-lzQZPa3V4~0THkGG5K4rD3rWr55qAtjxFVYfj7iYJzA7p-d1KRX~KNAg3FLPSR73COLKBy~w1J4ebzCnG2TF7caCKArmEqIW39aQZAdZ0JZgMyZC9fKFG7cx4Z~EZWfzNyNPk3BKHPEF1lW1DkK5FDsdNgnZlNTHHorQ4XKk3s6do4mP7eMnbJ8L~uJMIQxPJsB3OAAuDQfQKRAYTZGyuLPvaQCGNy75GBZOTFLYlIQTL~Rp7-tYNbX6Nx8A9sJSEL6auJcUKbW21M3sOGf0VvSBkYg2hSDH9RlO-05F1vmDw__"
            height={200}
            width={200}
            alt="What is love?"
          ></Image>
        </div>

        <div className="container mx-auto px-4 text-gray-200 grow">
          <h2 className="text-lg md:text-2xl font-bold mt-6 mb-2 text-[#FA5622]">
            What we got for you */
          </h2>

          <ul className=" list-none">
            <li>
              <strong className="text-[#FFBA25]">
                Night Sky observation️:
              </strong>{" "}
              spotting up and learning about different constellation celestial
              bodies and satellite and much more.
            </li>
            <br />
            <li>
              <strong className=" text-[#FFBA25]">Campfire:</strong> Gather
              around the crackling fire as we share stories, laughter, and
              warmth under the vast expanse of the night sky. It&apos;s the
              perfect opportunity to connect with fellow enthusiasts and share
              your passion for astronomy.{" "}
            </li>
            <br />
            <li>
              <strong className="text-[#FFBA25]">Staying in Tents:</strong>{" "}
              Experience the thrill of camping out under the stars as you spend
              the night in cozy tents. Feel the magic of the night envelop you
              as you drift off to sleep surrounded by the beauty of nature in
              tents after an adventurous day.
            </li>
            <br />

            <li>
              {" "}
              <strong className=" text-[#FFBA25]">
                Space Mythology Stories:
              </strong>{" "}
              Delve into the rich tapestry of space mythology as we explore
              tales of gods, heroes, and celestial phenomena. Discover the
              fascinating legends behind the constellations that adorn the night
              sky and unlock the mysteries of the cosmos.
            </li>
            <br />
            <li>
              {" "}
              <strong className=" text-[#FFBA25]">
                GEC Campus Trail:
              </strong>{" "}
              Embark on a guided trail around the GEC campus and discover hidden
              gems and scenic spots under the moonlit sky. It&apos;s a chance to
              explore the beauty of our surroundings and soak in the serenity of
              the night.
            </li>
            <br />
            <li>
              {" "}
              <strong className="text-[#FFBA25]">
                {" "}
                Astrophotography:
              </strong>{" "}
              capture up the pictures of mesmerizing starry sky with the help of
              the camera and phone with some expert advice.
            </li>
            <br />
            <li className=" font-bold">
              But that&apos;s not all! Our Star Party will also feature a
              special treat: the Morning Planet Parade. Witness the breathtaking
              sight of the planets as they align in the predawn sky, a rare
              spectacle that you won&apos;t want to miss.
            </li>
          </ul>
          {/* --------------------------  event tnc -------------------------- */}
          <h2 className="font-bold mt-6 mb-2 text-lg md:text-2xl text-tangerine">
            RULEBOOK */
          </h2>
          <h3 className="font-bold mt-6 mb-2 pl-2 text-lg md:text-xl text-[#FFBA25]">
            {" "}
            */ DO’S
          </h3>
          <ul className="list-disc ml-6">
            <li>
              Carry jackets, caps, blankets, sleeping mats and necessary items
              needed considering that it is an open air overnight event.
            </li>
            <li>
              Participants must stay within the demarcated area and must follow
              all instructors of Coordinators at all costs.
            </li>
            <li>SHOES are compulsory.</li>
            <li>
              There will be no arrangement made for charging devices nor does
              the management guarantee it. So participants must make sure that
              their phones are charged/ should carry power banks if required.{" "}
            </li>
            <li>
              CARRY Torchlights for the GEC trail and listen to all orders of
              the coordinators. Participants are responsible for their
              belongings.
            </li>
            <li>Participants should ensure their own transport from venue.</li>
          </ul>

          <h3 className="font-bold mt-6 mb-2 text-lg pl-2 md:text-xl text-[#FFBA25]">
            */ DONT’S{" "}
          </h3>
          <ul className="list-disc ml-6">
            <li>
              Participants shouldn&apos;t be under any kind of influence like
              ALCOHOL/ CIGARETTE.
            </li>
            <li>
              Participants shouldn&apos;t be in possession of any
              alcoholic/tobacco/narcotics substances.
            </li>
          </ul>
          <p className=" pt-10 font-bold uppercase">
            Note: Incase the organizers find anyone breaking the above mentioned
            rules, a strict action will be taken against the person legally and
            will be escorted by the security out of the venue!
          </p>

          {/* --------------------------  event contact -------------------------- */}
          <h2 className="font-bold mt-6 mb-2 text-lg md:text-2xl text-tangerine text-center lg:text-left">
            CONTACTS */{" "}
          </h2>
          <p className="text-center lg:text-left">
            Omkar Gavade (President):
            <a
              href="https://api.whatsapp.com/send?phone=918010969462"
              className="text-blue-500 hover:text-blue-200 mx-2 text-nowrap"
            >
              (+91 80109 69462)
            </a>
          </p>
          <p className="text-center lg:text-left">
            Siya Pockle (Tech advisor):
            <a
              href="https://api.whatsapp.com/send?phone=917057292485"
              className="text-blue-500 hover:text-blue-200 mx-2 text-nowrap"
            >
              (+91 70572 92485)
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
