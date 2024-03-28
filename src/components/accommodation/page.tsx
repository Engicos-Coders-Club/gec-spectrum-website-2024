import PageHead from "../../app/components/PageHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "Travelling from far? Book yourself accomdation on GEC's campus for Spectrum 2024.",
};

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
                <strong>Male:</strong> ₹250/person (Double/Triple Sharing) OR
                ₹500 (Individual).
              </li>
              <li>
                <strong>Female:</strong> ₹250/person (Double Sharing) OR ₹500
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