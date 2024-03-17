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
      <PageHead body="BOOK YOUR" faltutext="25" title="ACCOMMODATION" />
      <Coming></Coming>
    </main>
  );
}
