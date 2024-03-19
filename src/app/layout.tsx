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
  title: "Spectrum 2024",
  description:
    "Spectrum is the technical festival organized by the Goa College of Engineering.",
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
    "Robo Sumo",
    "RC Boat",
    "Coding",
  ],
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
