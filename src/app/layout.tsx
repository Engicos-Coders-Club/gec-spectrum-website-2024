import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TanstackProvider from "@/utils/TanstackProvider";
// import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import RegistrationClose from "@/components/RegistrationClose";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GEC Spectrum 2024",
    default: "GEC Spectrum 2024", // a default is required when creating a template
  },
  description:
    "Spectrum is the annual technical festival organized by the Goa College of Engineering. This year we bring to you a blend of technical events, workshops, and exhibitions. Join us for an unforgettable cosmic experience!",
  keywords: [
    "Techfest",
    "Technical",
    "Event",
    "Expo",
    "Exhibition",
    "Robotics",
    "Fest",
    "Goa College of Engineering",
    "Hackathon",
    "24 Hour Hackathon",
    "Robo Sumo",
    "RC Boat",
    "Coding",
    "Drone Race",
  ],
  metadataBase: new URL("https://gecspectrum.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body
        className={`${spaceGrotesk.className} max-w-screen overflow-x-hidden bg-bgDark text-white`}
      >
        <TanstackProvider>
          {/* <Navbar /> */}
          {/* <RegistrationClose /> */}
          <Navbar />
          {children}
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 5000,
            }}
          />
        </TanstackProvider>
      </body>
    </html>
  );
}
