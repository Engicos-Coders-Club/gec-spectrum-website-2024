"use client";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import EventsButton from "../components/Events/Button";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import CardItem from "@/components/Competitions-Card/CardItem";
import Coming from "../ComingSoon/page";
import PageHead from "../components/PageHead";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Space = Space_Grotesk({ subsets: ["latin"], weight: ["700", "600"] });

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

export default function Competitions() {
  const [Events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("https://gec-spectrum-backend-2024.2.sg-1.fl0.io/api/v1/events")
      .then(function (response) {
        setEvents(response.data.events);
        console.log(response.data.events)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <PageHead body="EXPLORE" title="COMPETITIONS" faltutext="25" />
      <section className={`mt-8 ${Space.className} container mx-auto mb-20`}>
        <div className="grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {Events.map((event, index) => (
            <CardItem key={index} obj={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
