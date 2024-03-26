"use client"
import localFont from "next/font/local";
import PageHead from "@/app/components/PageHead";
import { RiLink } from "react-icons/ri";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
export default function starparty() {
  return (
    <main>
      <PageHead body="CAMP OUT" faltutext="(*)" title="STAR PARTY" />
      <section className="flex gap-4 items-start flex-wrap md:flex-nowrap mx-5 xl:max-w-screen-xl xl:mx-auto my-5">
        {/* --------------------------  event details box -------------------------- */}
        <div className="px-6 py-4 bg-white/10  my-4 flex flex-col gap-5 w-full md:w-fit">
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
            <p className="text-sm">Registor</p>
            <a
              title="Register Online"
              className="bg-primary p-2 px-5 rounded-full rounded-tl-none font-semibold hover:bg-violet-500 uppercase text-center"
              href="https://forms.gle/vkMkS8TFW15k5zZz8"
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
                FOLLOW US
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-gray-200 grow">
          {/* --------------------------  event faqs -------------------------- */}
          <h2 className="text-lg md:text-2xl font-bold mt-6 mb-2 text-tangerine">
            FAQs
          </h2>
          <p>
            <strong>Accommodation Details:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>
              For boys, each room can accommodate up to 3 members (boys). For
              girls, it&apos;s 1 or 2 members per room.
            </li>
            <li>
              Accommodation will be available for 3 days (starting 2nd Apr).
            </li>
            <li>Boys and girls accommodation will be separate.</li>
            <li>
              Attached washrooms are not available. Only common washrooms are
              available.
            </li>
          </ul>

          <p className="mt-2">
            <strong>Payment Details:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>Total Accommodation Cost from 2nd to 5th April:</li>
            <ul className="list-square ml-6">
              <li>
                <strong>Male:</strong> ₹500/person (Double/Triple Sharing) OR
                ₹1000 (Individual).
              </li>
              <li>
                <strong>Female:</strong> ₹500/person (Double Sharing) OR ₹1000
                (Individual).
              </li>
            </ul>
            <li>
              <strong className="text-mango">Note:</strong> Payment will be
              collected in person. A minimum caution deposit will be collected
              at the time of payment.
            </li>
          </ul>

          {/* --------------------------  event tnc -------------------------- */}
          <h2 className="font-bold mt-6 mb-2 text-lg md:text-2xl text-tangerine">
            T & C
          </h2>
          <ul className="list-disc ml-6">
            <li>Check in starts on 2nd April 2024, 3:00PM onwards.</li>
            <li>
              Guests should carry a valid Gov ID proof and College ID (if
              applicable) during the time of payment.
            </li>
            <li>
              Proof of registration email should be provided during payment
              (digital/physical).
            </li>
            <li>
              Facilities included in payment: the room, mattress, and pillows.
            </li>
            <li>
              Food is not included in the amount mentioned above. Guests can
              purchase food from hostel mess/food facilities around campus.
            </li>
            <li>Guests are expected not to litter.</li>
            <li>
              Guests are expected to vacate the rooms by 5th April 2024, 10:00
              AM.
            </li>
            <li>No refunds for full 3 days of accommodation.</li>
            <li>
              Refunds are only applicable in case Guest leaves earlier than 3
              days (to be collected while vacating).
            </li>
            <li>
              Caution deposit will be withheld if the rooms or beds are found to
              be tampered on inspection.
            </li>
          </ul>

          {/* --------------------------  event contact -------------------------- */}
          <h2 className="font-bold mt-6 mb-2 text-lg md:text-2xl text-tangerine">
            Got Doubts? Contact
          </h2>
          <p>
            Samarth Narvekar
            <a
              href="https://api.whatsapp.com/send?phone=+919834941891"
              className="text-blue-500 hover:text-blue-200 mx-2"
            >
              (+91 98349 41891)
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
