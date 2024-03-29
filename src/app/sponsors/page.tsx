"use client";
import PageHead from "../components/PageHead";
import Image from "next/image";
import SponsorSection from "@/components/SponsorSection";
import { motion } from "framer-motion";

const SponsorsPage = () => {
  return (
    <>
      <PageHead title="Sponsors" faltutext="$*" body="esteemed" />
      <SponsorSection />
      <br />
    </>
  );
};
export default SponsorsPage;
