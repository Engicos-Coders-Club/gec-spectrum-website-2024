import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TanstackProvider from "@/utils/TanstackProvider";
// import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
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
  // openGraph: {
  //   title: "Technical Fest 2024",
  //   description: "Join us for the most exciting technical fest of the year!",
  //   images: [
  //     {
  //       url: "https://example.com/images/og-image.jpg",
  //       width: 800,
  //       height: 600,
  //       alt: "GEC Spectrum 2024",
  //     },
  //   ],
  //   siteName: "GEC Spectrum - Technical Fest",
  // },
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
