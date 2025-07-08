"use client";

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
    { top: "260vh", left: "60%"},
    { top: "320vh", left: "10%", opacity: "80%" },
    //burgers
    { top: "360vh", left: "20%", opacity: "60%" },
    { top: "390vh", left: "60%", opacity: "60%" },
    { top: "430vh", left: "20%", opacity: "60%" },
    { top: "460vh", left: "20%", opacity: "60%" },
    //smash
    { top: "490vh", left: "30%", opacity: "40%" },
    { top: "530vh", left: "10%", opacity: "70%" },
    { top: "530vh", left: "65%", opacity: "30%" },
    { top: "590vh", left: "20%", opacity: "60%" },
    //przystawki
    { top: "640vh", left: "10%", opacity: "60%" },
    { top: "660vh", left: "60%", opacity: "40%" },
    { top: "680vh", left: "40%", opacity: "20%" },
    //napoje
    {top: "700vh", left: "40%", opacity: "20%" },
    {top: "750vh", left: "40%", opacity: "80%" },
    {top: "770vh", left: "60%", opacity: "40%" },
    {top: "790vh", left: "10%", opacity: "60%" },
    {top: "820vh", left: "10%", opacity: "30%" },
    {top: "850vh", left: "10%", opacity: "40%" },
    {top: "900vh", left: "60%", opacity: "60%" },
    {top: "920vh", left: "30%", opacity: "100%" },
    {top: "940vh", left: "60%", opacity: "70%" },
    {top: "960vh", left: "20%", opacity: "50%" },
    {top: "1000vh", left: "30%", opacity: "50%" },
    {top: "1050vh", left: "10%", opacity: "100%" },
    // {top: "1150vh", left: "50%", opacity: "80%" },
    // {top: "1200vh", left: "10%", opacity: "80%" },


    
    // Przystawki section
    // { top: "220vh", right: "10%", opacity: "80%" },
    // { top: "235vh", left: "40%", opacity: "80%" },
    // { top: "255vh", right: "40%", opacity: "80%" },
    
    // Napoje section
    // { top: "265vh", left: "20%", opacity: "20%" },
    // { top: "280vh", right: "20%", opacity: "60%" },
    // { top: "300vh", left: "50%", opacity: "40%" },
  ];

  // Mobile blobs - centered distribution
  const mobileBlobs = [
    // Pizza section
    { top: "8vh", left: "20%", opacity: "80%" },
    { top: "25vh", left: "60%", opacity: "100%" },
    { top: "45vh", left: "10%", opacity: "20%" },
    { top: "65vh", left: "50%" },
    { top: "75vh", left: "30%" },
    { top: "95vh", left: "70%", opacity: "40%" },
    
    // Burgery section
    { top: "120vh", left: "15%", opacity: "80%" },
    { top: "130vh", left: "55%" },
    { top: "145vh", left: "25%" },
    
    // Smashburgery section
    { top: "170vh", left: "65%" },
    { top: "180vh", left: "35%", opacity: "70%" },
    { top: "195vh", left: "5%", opacity: "90%" },
    { top: "205vh", left: "45%", opacity: "30%" },
    
    // Przystawki section
    { top: "220vh", left: "75%", opacity: "80%" },
    { top: "235vh", left: "20%", opacity: "80%" },
    { top: "255vh", left: "50%", opacity: "80%" },
    
    // Napoje section
    { top: "265vh", left: "30%", opacity: "20%" },
    { top: "280vh", left: "65%", opacity: "60%" },
    { top: "300vh", left: "15%", opacity: "40%" },
  ];

  const renderBlobs = (blobs) => {
    return blobs.map((style, i) => {
      const topValue = parseInt(style.top || style.bottom || "0");
      let rozowy = "#FF30B3";
      let rozowyInny = "#7A0950";
      let niebieski = "#0061FF";
      let niebieskiInny = "#00D1FF";
      let fioletowy = "#520951";
      let zieliony = "#68FF3A";
      let zielionyInny = "#228604";
      let colorFrom;
      let colorTo;

      if (topValue <= 320) {
        colorFrom = rozowy;
        colorTo = rozowyInny;
      } else if (topValue > 320 && topValue <= 460) {
        colorFrom = niebieski;
        colorTo = niebieskiInny;
      } else if (topValue > 460 && topValue <= 600) {
        colorFrom = rozowy;
        colorTo = fioletowy;
      } else if (topValue > 600 && topValue <= 800) {
        colorFrom = zieliony;
        colorTo = zielionyInny;
      } else if (topValue >= 700 && topValue < 850){
        colorFrom = niebieskiInny;
        colorTo = niebieski
      } else if (topValue >= 850 ) {
        colorFrom = rozowy;
        colorTo = niebieski
      }
      // else if (topValue > 280) {
      //   colorFrom = niebieski;
      //   colorTo = fioletowy;
      // }

      return (
        <div
          key={i}
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full -z-10 opacity-60 blur-[50px] sm:blur-[75px] md:blur-[100px] absolute pointer-events-none"
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
      {/* Mobile blobs - visible only on small screens */}
      <div className="block md:hidden">
        {renderBlobs(mobileBlobs)}
      </div>
      
      {/* Desktop blobs - visible on medium screens and up */}
      <div className="hidden md:block">
        {renderBlobs(desktopBlobs)}
      </div>
    </>
  );
}