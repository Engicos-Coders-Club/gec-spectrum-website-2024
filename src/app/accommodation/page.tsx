import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import Coming from "../ComingSoon/page";
import PageHead from "../components/PageHead";

const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

export default function Accommodation() {
  return (
    <main>
      <PageHead body="BOOK YOUR" faltutext="(*)" title="ACCOMMODATION" />
      <section className="flex gap-4 items-start flex-wrap md:flex-nowrap mx-5 xl:max-w-screen-xl xl:mx-auto my-5">
        {/* --------------------------  event details box -------------------------- */}
        <div className="px-6 py-4 bg-white/10  my-4 flex flex-col gap-5 w-full md:w-fit">
          <div className="flex flex-col gap-1 justify-start">
            <p className="text-sm">Event Dates</p>{" "}
            <p className="text-lg md:text-xl font-bold text-mango">
              3rd & 4th April, 2024
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-start">
            <p className="text-sm">Location</p>
            <p className="text-lg md:text-xl font-bold text-mango">
              Goa College of Engineering, Goa
            </p>
            <a
              href="https://maps.app.goo.gl/b8cmtHNDmatPAc5P8"
              className="text-blue-500"
            >
              (Map)
            </a>
          </div>
          <div className="flex flex-col gap-1 justify-start">
            <p className="text-sm">Online Registrations close on</p>
            <p className="text-lg md:text-xl font-bold text-mango">
              25th March 2024
            </p>
          </div>
          <a
            title="Register Online"
            className="bg-primary p-2 px-5 rounded-full rounded-tl-none font-semibold hover:bg-violet-500 uppercase text-center"
            href="https://forms.gle/vkMkS8TFW15k5zZz8"
            target="_blank"
            rel="noreferrer"
          >
            register
          </a>
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
              Each room can accommodate up to 3 members (boys). For girls, it's
              1 member per room.
            </li>
            <li>Accommodation will be available for 3 days.</li>
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
            <li>Rooms can be booked as a team or on an individual basis:</li>
            <ul className="list-square ml-6">
              <li>Team Payment - ₹ 1500 / team (3 days)</li>
              <li>Individual Payment - ₹ 500 / person (3 days)</li>
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
              Guests are expected to vacate the rooms by 5th April 2024, 4:00
              PM.
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
            Samarth Gopal{" "}
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
