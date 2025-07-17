"use client";
import { colors } from "../../lib/colors";
import { useState, useEffect } from "react";

export default function BackgroundBlobs() {
  // Desktop/tablet blobs
  const desktopBlobs = [
    // Pizza section
    { top: "8vh", left: "5%", opacity: "60%" },
    { top: "45vh", right: "35%", opacity: "80%" },
    { top: "95vh", right: "15%", opacity: "40%" },
    { top: "145vh", left: "25%" },
    // { top: "170vh", right: "25%" },
    { top: "180vh", left: "55%", opacity: "70%" },
    { top: "195vh", right: "55%", opacity: "90%" },
    { top: "260vh", left: "50%"},
    { top: "320vh", left: "10%", opacity: "80%" },
    //burgers
    { top: "360vh", left: "20%", opacity: "60%" },
    { top: "390vh", left: "50%", opacity: "60%" },
    { top: "430vh", left: "20%", opacity: "60%" },
    { top: "460vh", left: "20%", opacity: "60%" },
    //smash
    { top: "490vh", left: "30%", opacity: "40%" },
    { top: "530vh", left: "10%", opacity: "70%" },
    { top: "530vh", left: "55%", opacity: "30%" },
    { top: "590vh", left: "20%", opacity: "60%" },
    //przystawki
    { top: "640vh", left: "10%", opacity: "60%" },
    { top: "660vh", left: "50%", opacity: "40%" },
    { top: "680vh", left: "40%", opacity: "20%" },
    //napoje
    {top: "700vh", left: "40%", opacity: "20%" },
    {top: "750vh", left: "40%", opacity: "80%" },
    {top: "770vh", left: "50%", opacity: "40%" },
    {top: "790vh", left: "10%", opacity: "60%" },
    {top: "820vh", left: "10%", opacity: "30%" },
    {top: "850vh", left: "10%", opacity: "40%" },
    {top: "900vh", left: "50%", opacity: "60%" },
    {top: "920vh", left: "30%", opacity: "100%" },
    {top: "940vh", left: "50%", opacity: "70%" },
    {top: "960vh", left: "20%", opacity: "50%" },
    {top: "1000vh", left: "30%", opacity: "50%" },
    {top: "1050vh", left: "10%", opacity: "100%" },
  ];

  // Mobile blobs - centered distribution
  const mobileBlobs = [
    // Pizza section
    { top: "8vh", left: "20%", opacity: "80%" },
    { top: "55vh", left: "40%", opacity: "100%" },
    { top: "75vh", left: "40%", opacity: "90%" },
    { top: "95vh", left: "20%", opacity: "80%" },
    { top: "115vh", left: "40%", opacity: "100%" },
    { top: "125vh", left: "10%", opacity: "80%" },
    { top: "145vh", left: "50%", opacity: "100%" },
    { top: "165vh", left: "40%", opacity: "60%" },
    { top: "185vh", left: "40%", opacity: "60%" },
    { top: "215vh", left: "20%", opacity: "80%" },
    { top: "235vh", left: "40%", opacity: "100%" },
    { top: "265vh", left: "10%", opacity: "100%" },
    { top: "285vh", left: "30%", opacity: "80%" },
    { top: "305vh", left: "50%", opacity: "100%" },
    { top: "325vh", left: "40%", opacity: "90%" },
    { top: "345vh", left: "20%", opacity: "70%" },
    { top: "365vh", left: "50%", opacity: "100%" },
    { top: "385vh", left: "40%", opacity: "90%" },
    { top: "405vh", left: "10%", opacity: "80%" },
    { top: "425vh", left: "40%", opacity: "100%" },
    { top: "445vh", left: "50%", opacity: "90%" },
    { top: "465vh", left: "20%", opacity: "80%" },
    { top: "485vh", left: "40%", opacity: "100%" },
    { top: "505vh", left: "30%", opacity: "90%" },
    { top: "525vh", left: "50%", opacity: "100%" },
    { top: "545vh", left: "40%", opacity: "80%" },
    { top: "565vh", left: "20%", opacity: "70%" },
    { top: "585vh", left: "30%", opacity: "90%" },
    { top: "605vh", left: "50%", opacity: "100%" },
    { top: "625vh", left: "40%", opacity: "90%" },
    { top: "645vh", left: "10%", opacity: "80%" },
    { top: "685vh", left: "30%", opacity: "90%" },
    { top: "715vh", left: "50%", opacity: "100%" },
    { top: "745vh", left: "40%", opacity: "70%" },
    { top: "770vh", left: "20%", opacity: "80%" },
    { top: "790vh", left: "30%", opacity: "90%" },
    { top: "810vh", left: "50%", opacity: "100%" },
    { top: "830vh", left: "40%", opacity: "80%" },
    { top: "855vh", left: "10%", opacity: "70%" },
    { top: "875vh", left: "50%", opacity: "100%" },
    { top: "895vh", left: "40%", opacity: "90%" },
    { top: "915vh", left: "20%", opacity: "80%" },
    { top: "935vh", left: "30%", opacity: "100%" },
    { top: "955vh", left: "50%", opacity: "90%" },
    { top: "975vh", left: "40%", opacity: "70%" },
    { top: "995vh", left: "10%", opacity: "80%" },
    { top: "1035vh", left: "50%", opacity: "100%" },
    { top: "1065vh", left: "10%", opacity: "80%" },
    { top: "1085vh", left: "30%", opacity: "100%" },
    { top: "1125vh", left: "50%", opacity: "100%" },
    { top: "1155vh", left: "40%", opacity: "90%" },
    { top: "1185vh", left: "30%", opacity: "80%" },
    { top: "1215vh", left: "20%", opacity: "70%" },
    { top: "1245vh", left: "10%", opacity: "80%" },
    { top: "1275vh", left: "50%", opacity: "100%" },
    //przystawki
    { top: "1305vh", left: "40%", opacity: "90%" },
    { top: "1335vh", left: "30%", opacity: "70%" },
    { top: "1365vh", left: "20%", opacity: "80%" },
    { top: "1395vh", left: "10%", opacity: "60%" },
    { top: "1425vh", left: "40%", opacity: "90%" },
    { top: "1455vh", left: "50%", opacity: "100%" },
    { top: "1485vh", left: "30%", opacity: "80%" },
    { top: "1515vh", left: "10%", opacity: "80%" },
    { top: "1535vh", left: "40%", opacity: "60%" },
    //napoje
    { top: "1556vh", left: "40%", opacity: "80%" },
    { top: "1586vh", left: "10%", opacity: "60%" },
    { top: "1616vh", left: "30%", opacity: "80%" },
    { top: "1646vh", left: "50%", opacity: "100%" },
    { top: "1676vh", left: "40%", opacity: "90%" },
    { top: "1706vh", left: "20%", opacity: "70%" },
    { top: "1736vh", left: "10%", opacity: "60%" },
    { top: "1766vh", left: "30%", opacity: "80%" },
    { top: "1796vh", left: "50%", opacity: "100%" },
    { top: "1826vh", left: "40%", opacity: "90%" },
    { top: "1856vh", left: "20%", opacity: "80%" },
    { top: "1886vh", left: "10%", opacity: "70%" },
    { top: "1916vh", left: "30%", opacity: "90%" },
    { top: "1946vh", left: "40%", opacity: "100%" },
    { top: "1976vh", left: "20%", opacity: "80%" },
    { top: "2006vh", left: "10%", opacity: "70%" },
    { top: "2036vh", left: "30%", opacity: "90%" },
    { top: "2066vh", left: "50%", opacity: "100%" },
    { top: "2096vh", left: "40%", opacity: "80%" },
    { top: "2126vh", left: "20%", opacity: "60%" },
    { top: "2156vh", left: "10%", opacity: "70%" },
    { top: "2186vh", left: "30%", opacity: "90%" },
    { top: "2216vh", left: "50%", opacity: "100%" },
    { top: "2246vh", left: "40%", opacity: "90%" },
    { top: "2276vh", left: "20%", opacity: "80%" },
    { top: "2306vh", left: "10%", opacity: "70%" },
    { top: "2336vh", left: "30%", opacity: "80%" },
    { top: "2356vh", left: "20%", opacity: "70%" },
    { top: "2386vh", left: "10%", opacity: "90%" },
    { top: "2406vh", left: "40%", opacity: "70%" },
  ];

  const renderBlobsMobile = (blobs) => {
    return blobs.map((style, i) => {
      const topValue = parseInt(style.top || style.bottom || "0");
      let colorFrom = colors.rozowy;
      let colorTo = colors.rozowyInny;

      if (topValue <= 645) {
        colorFrom = colors.rozowy;
        colorTo = colors.rozowyInny;
      } else if (topValue > 665 && topValue <= 1065) {
        colorFrom = colors.niebieski;
        colorTo = colors.niebieskiInny;
      } else if (topValue > 1065 && topValue <= 1305) {
        colorFrom = colors.rozowy;
        colorTo = colors.fioletowy;
      } else if (topValue > 1305 && topValue <= 1555) {
        colorFrom = colors.zieliony;
        colorTo = colors.zielionyInny;
      } else if (topValue >= 1555 && topValue < 1885) {
        colorFrom = colors.niebieskiInny;
        colorTo = colors.niebieski;
      } else if (topValue >= 1886) {
        colorFrom = colors.rozowy;
        colorTo = colors.niebieski;
      }

      return (
        <div
          key={i}
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full -z-10 opacity-60 blur-[50px] sm:blur-[75px] absolute pointer-events-none"
          style={{
            position: "absolute",
            ...style,
            backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
          }}
        />
      );
    });
  };

  const renderBlobsDesktop = (blobs) => {
    return blobs.map((style, i) => {
      const topValue = parseInt(style.top || style.bottom || "0");
      let colorFrom = colors.rozowy;
      let colorTo = colors.rozowyInny;

      if (topValue <= 320) {
        colorFrom = colors.rozowy;
        colorTo = colors.rozowyInny;
      } else if (topValue > 310 && topValue <= 460) {
        colorFrom = colors.niebieski;
        colorTo = colors.niebieskiInny;
      } else if (topValue > 460 && topValue <= 590) {
        colorFrom = colors.rozowy;
        colorTo = colors.fioletowy;
      } else if (topValue > 600 && topValue <= 680) {
        colorFrom = colors.zieliony;
        colorTo = colors.zielionyInny;
      } else if (topValue >= 680 && topValue < 850) {
        colorFrom = colors.niebieskiInny;
        colorTo = colors.niebieski;
      } else if (topValue >= 850) {
        colorFrom = colors.rozowy;
        colorTo = colors.niebieski;
      }

      return (
        <div
          key={i}
          className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full -z-10 opacity-60 blur-[75px] md:blur-[125px] lg:blur-[175px] absolute pointer-events-none"
          style={{
            position: "absolute",
            ...style,
            backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
          }}
        />
      );
    });
  };

  return (
    <>
      {/* Mobile blobs */}
      <div className="block md:hidden"> {renderBlobsMobile(mobileBlobs)}</div>

      {/* Desktop blobs */}
      <div className="hidden md:block">{renderBlobsDesktop(desktopBlobs)}</div>
    </>
  );
}