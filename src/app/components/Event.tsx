"use client";
import localFont from "next/font/local";
import { Space_Grotesk } from 'next/font/google'
import { motion } from "framer-motion";
import { PinContainer } from "./3dPin";
const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const space = Space_Grotesk({
  weight: ['700','500'],
  subsets: ['latin'],
  display: 'swap',
})

const eventsData = [
  { title: "COMPUTER", event: "TECHNIX",marginTop: "5px",rotate: "24deg" ,image:"https://s3-alpha-sig.figma.com/img/52d7/c247/011c2659015ffd1b09c19a9e1e679abc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hDxUFEyAbNiLrLNuPOy0P9Op9onx1Mdn4ko7Xb88L2I2afCEWElFPdUGbfqDaYXMIl6g0c1NPyjBHHRyjnq18OIc1MeKFOTmfg3FbXPq3MqNY3VMbxpTcfE9E6-MDz2At1BAg811JnNqAt1~BNJu7h37ZtwAnuOwhaeRcMQt-Lz7wvQRPUOxKP8SG~YiRTRO0ZNeqrz31UYFlQ6vkaYkpZLVJGX7DqowC1cwQbAaQS9foqRSo1S6C1RqXxz1MtoqLXKJyrWFHNW2KqIiqhXu3AWgTXPmfjx-U1aLS1FwDf2I9JtM63zxrNEmFGJ7lPaoDg9mYZI92MEi2dC08Dla7w__" },
  { title: "INFORMATION TECHNOLOGY",rotate:"0deg", event: "TECHFLUENCE",marginTop: "30px", image:"https://s3-alpha-sig.figma.com/img/e5fc/d712/88e669b77db3e7da98738eb1e7552ee7?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AZ4hpIT5p6H6vqSerNMh1T7JN-rnALTrMX~TZyOqhjng4V26qqsqU6-aCaYzufNX9eGo4Rvy8ibfM2s9eE9cIA24rjSmr5McUqaIbvxkfH4v4xy1w91llO9LLKBfRIa0nsD6B~QJUbHy59kdS9Vr~t-DAotxuYe-g60AeU5YaNleD2p2V7gPM-na9CG0zL4RG~uLATj7RrmlNP7hz4m3INuzVz6-JUsVeW1eQsNGhME-ki~BC0pp0momXt-TYxKcfAxUCq3UDQdblvCfo1CNJpqAKgF7EqMQSIsnY6Dezz1XaZcWdL~Zr3tGcmecDLidj7P2eya0cfkmoAS-HMhoUw__" },
  { title: "MECHANICAL", event: "TORQUE",rotate:"0deg",marginTop: "5px",image:"https://s3-alpha-sig.figma.com/img/ee35/bcdc/cabbeb89cef3a80fe0e75bc2a10ad3e8?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iihhk1hTUk6j9NuY5jzy2nxZiXqsufzzxRtjO66y57wLDZQV79SjKAN14r~sPU1Wx6fgivAZ0vEQBG8DkUEmJuRbWNeSSmyFU6-iORBVVozEwt-WGFhYM7oekQkEzRzb5k7d1yBRuNE0ER7RgdDFgLID7twrZwoLmQvQbuiS-MHlWS37weBH5pwYpEKZYhuHZHwybGcoSVw05lqcjs7muEJamRrxTyxxH2njwIKpswnWAPoSClUAd1qKVNY37TTOvqjF2XNL9dvUyvVTrw9-ngNEe5sr8uapES4dE6VA4DU3uLujtsd3~~dMMxrxc1~u2YGRM7UGr0kFjhGizMr0Zg__" },
  { title: "ELECTRONICS & TELECOMM", event: "RESONANCE" ,rotate:"0deg",marginTop: "15px",image:"https://s3-alpha-sig.figma.com/img/b60d/1d51/b3beb191a0690acf653f7b12b5870536?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NqOuZmNz7IHazdpIyUY1MhZC9qhX~xDoBE70JKCKdonD14BNfRzzHZ6DaS3I2NO5VICkToQBioruygWOtnOeSjzDyaB7LJUTluTZ-vsVaqETir5ga1y903GDhaqJmUK0t9URZJaaZJ8QNEj5naHHUWHd2mP8W9R84jDgha481nOZ6i2N~kv1kR8Va6BiiPlgXJtIA4YtmAsBAI67ZPt4CdTM5z12MEgc2GFU-dL16UMPW99oa5r3CqT2~oraB3tZqLWMcowpwIGqVdfNemyPRpW1TiLv6EEIWEQxPxKnyZ5cMLKAA93lmwybHEC9PRBpUpquev1LlBmFDhfpAIYFPw__"},
  { title: "ELECTRICAL & ELECTRONICS", event: "SPARKS",rotate:"0deg",marginTop: "15px",image:"https://s3-alpha-sig.figma.com/img/006f/7609/f36bcdf598652f25aabff6e9a537466a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GY65qpEqTZU~x~4WK6W8G5-gaxl~jopT4tp32pqKE0jeSYhamYH78cvA1t~YnXPRido5PM1ywsIQMh-5eMuVRJrCHxihumVoirJuJPp5nMDOfqBybcGTyLh4p7sHcj~r1lLvbAQkM66OEv~IMXcIHNXIEOt2efCAmRZd91wKPVmFOzR7SSIW85qNPktLpDcNF0csqP7tw64NplX8Bt9W3XsSszpVe5b7AZPCpoHmKZt369RY0tLpjHSxM~UFijS7I6OJ0Ky5RYnfrobp9m8P6z8amVqUDtsJIEkX-Clod8IKQRZmPvaptZLZzThm66FWW1hoFxXE~U7EBei9m7OkbA__" },
  { title: "CIVIL", event: "PRATIKRIYA",rotate:"0deg",marginTop: "5px",image:"https://s3-alpha-sig.figma.com/img/d6d0/0cee/ab09aa0798d93b92d83942b0002516af?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qdy3AkgTYp88ebI8fS6hMnitXcqiIWEnUm8aZwKx1~aIthx2uTpzk~NFg~8RqlqOJGf7xj~fl7mGZ7o8nZ8TvkRLVh683jXoE1aDte5iAdHs1zMZe2zqGG23TB85fFKEcmwoISZRx8iI7KhgwSDT6V19ZaCet8JEkzbOneds435UFGTbUtGvpyauPIo9r-aU1XmdgGef0kk6u8lwTSi3ZoZ6Ppg5BlWrPWdRcX45rZocEyVL-cRbiPSxIAmMHn6weOHpUf4kUt-hUR5hAzniq-RJej-YoGpAyxYyryiFY2V3XGjzvQYBomL5Zqu5OgLjKYS3o3KyqmTBnTuQLJFzHA__" },
];

const Event = () => {
  return (
    <div className={`${space.className} w-screen mt-96 relative sm:h-[150vh] h-[250vh]  sm:mb-80 lg:mb-5`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50"
      >
        <div className="absolute w-full h-full bg-gradient-to-br from-[#6B46C1] via-[#5933A6] to-[#4C1D95] rounded-[6rem] filter blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50"
        ></div>
        <img src="Element.svg" alt="" className="z-0" />
      </div>
      <div className="relative">
        <motion.h1
          className={`${panchang.className} font-bold md:text-7xl ml-10 text-4xl`}
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.2,delay:0.2}}
        >
          EVENTS
        </motion.h1>
        <div className="absolute gradient-five-colors h-[1px] w-screen top-1/2 -z-10"></div>
      </div>
      <div className="mt-10 mx-4 md:mx-20 text-xl">
        <motion.p className="text-[#FFBA25] text-end flex flex-col"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.2,delay:0.2}}
        >
          <span>Explore our events under each department.</span> Click to know
          more.
        </motion.p>
      </div>
      <div className="w-screen grid lg:grid-rows-2 lg:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 grid-cols-1 items-center justify-center z-[100] gap-10 p-10 place-content-center">
        { eventsData.map((events,index)=>{
          return (
            <PinContainer key={index} title={events.event} href="">
              <div>
            <motion.div className="flex justify-center"
            initial={{opacity:0,y:10}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1.2,delay:1}}
            >
         <div style={{backgroundImage:'url("eventBox.svg")'}} className="lg:w-[376px] lg:h-[344px] md:w-[356px] md:h-[326px] sm:w-[336px] sm:h-[307px] w-[300px] h-[277px] bg-cover overflow-hidden">
          <div className="flex items-center justify-center flex-col mt-20">
          <h2 className="ms:text-3xl text-2xl text-wrap text-center">{events.title}</h2>
          <h3 className="text-[#FFBA25]">DEPARTMENT</h3>
          <img
            src={events.image}
            alt=""
            style={{ transform: `rotate(${events.rotate})`, marginTop: events.marginTop }}
            className="-z-10"
          /> 
         </div>
         </div>
        </motion.div>
          </div>
            </PinContainer>
          ) 
          
          
        })
      }    
      </div>
    </div>
  );
};

export default Event;
