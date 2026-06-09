// ARTWORK DATA — edit this section!

const artworks = [
  {
    name: "Street Fighter Characters in Mega Man Style",
    category: "Pixel Art",
    date: "June 12, 2021",
    timeTaken: "less than 1hr",
    notes: "Did this one after i watched a pixel art tutorial, i never tried drawing something in a diffrent art style it was fun :) 8/10 would do again in my free time",
    image: "Images/Pixel Art/Street Fighter NES.webp",
    // placeholder color shown if image missing:
    placeholder: "#3a1e38"
  },
  //
  {
    name: "Ramadan Art (Night)",
    category: "Illustration",
    date: "March 29, 2025",
    timeTaken: "4 hours",
    notes: "this one was made as a challange that i do in ramadan.",
    image: "Images/Illustration/bgn.webp",
    placeholder: "#1a1e2e"
  },
  {
    name: "Eid Mubark Art (Day)",
    category: "Illustration",
    date: "March 29, 2025",
    timeTaken: "1 hours",
    notes: "I did this one after the night version it didn't take much, made it for the eid mubark",
    image: "Images/Illustration/bgd.webp",
    placeholder: "#1a2b2e"
  },
  {
    name: "Ramadan Art (Night)",
    category: "Pixel Art",
    date: "March 26, 2025",
    timeTaken: "3 hours",
    notes: "I made that one with the vector version",
    image: "Images/Pixel Art/RamadanPXN.png",
    placeholder: "#1a1a2e"
  },
  {
    name: "Eid Mubark Art (Day)",
    category: "Pixel Art",
    date: "March 26, 2025",
    timeTaken: "less than 1 hours",
    notes: "Again..",
    image: "Images/Pixel Art/RamadanPXD.png",
    placeholder: "#1a2b2e"
  },
  //
  {
    name: "Toei Sonic (Mania Title)",
    category: "Pixel Art",
    date: "February 20, 2024",
    timeTaken: "3 hours",
    notes: "First try at something this big.",
    image: "Images/Pixel Art/Toei Sonic Pixel Art.png",
    placeholder: "#1a1e2a"
  },
  //
  {
    name: "RPG Town",
    category: "Pixel Art",
    date: "May 22, 2026",
    timeTaken: "2 hours",
    notes: "Tried drawing a top down scene as an art style for something.",
    image: "Images/Pixel Art/RPG Town.png",
    placeholder: "#0e2e11"
  },
  //
  {
    name: "Sonic Colors World Map",
    category: "Pixel Art",
    date: "May 1, 2025",
    timeTaken: "6 hours",
    notes: "Played sonic colors, it's fun. I like space themed games and this one is my favourite.",
    image: "Images/Pixel Art/Sonic Colors World map.png",
    placeholder: "#2e1a1a"
  },
  {
    name: "Sonic Box Art",
    category: "Pixel Art",
    date: "February 28, 2021",
    timeTaken: "1 hour",
    notes: "I saw this cool box art for sonic 1 and i tried to redraw it in pixel, it was fun, probably made me draw more often after.",
    image: "Images/Pixel Art/sonicboxartinspv2-31000.png",
    placeholder: "#18292e"
  },
  {
    name: "Top-Down Slime",
    category: "Pixel Art",
    date: "April 15, 2022",
    timeTaken: "5 hours",
    notes: "I was watching a lot of tutorials ok man, it's not my fault that it was the first good art tutorial I did.",
    image: "Images/Pixel Art/slime V1.gif",
    placeholder: "#1f2e1a"
  },
  {
    name: "Metalica City BG",
    category: "Pixel Art",
    date: "May 8, 2026",
    timeTaken: "8 hours",
    notes: "I drew a full blown city background that works with a parrlax effect, i even tested it out in game engine.",
    image: "Images/Pixel Art/Full-City BG.png",
    placeholder: "#23102a"
  },
  {
    name: "Ramadan Art",
    category: "Illustration",
    date: "April 28, 2026",
    timeTaken: "less than 1 hour",
    notes: "another day and another challange completed minus the other stuff i did, this one was probably my quickest illustration that i've done.",
    image: "Images/Illustration/ramadan2026.webp",
    placeholder: "#150e2e"
  },
  {
    name: "Ice Cream Special (Ad Design)",
    category: "Digital Art",
    date: "July 22, 2024",
    timeTaken: "1 hour",
    notes: "Im Starting to learn how to make Ad Designs, hope it gets good :)",
    image: "Images/Illustration/ADs/IceCreamAd1.webp",
    placeholder: "#1a0e2e"
  },
  {
    name: "Choose you're flavour (Ad Design)",
    category: "Digital Art",
    date: "July 23, 2024",
    timeTaken: "1 hour",
    notes: "Quick ad, I think im already losing the plot.",
    image: "Images/Illustration/ADs/IceCreamAd Choose.webp",
    placeholder: "#2c1d1d"
  },
  {
    name: "What a Chiling Deal (Ad Design)",
    category: "Digital Art",
    date: "July 24, 2024",
    timeTaken: "1 hour",
    notes: "Yeah im still not getting the point.",
    image: "Images/Illustration/ADs/IceCreamAd Christmas deal.webp",
    placeholder: "#19263f"
  },
  {
    name: "Cold & Sweets (Ad Design)",
    category: "Digital Art",
    date: "July 25, 2024",
    timeTaken: "1 hour",
    notes: "What even is this ad for?",
    image: "Images/Illustration/ADs/IceCreamAd Cold & Sweet.webp",
    placeholder: "#332319"
  },
  {
    name: "Crunch Food Banner (Ad Design)",
    category: "Digital Art",
    date: "January 24, 2025",
    timeTaken: "2 hours",
    notes: "Okay now were back on track, I like how this one turned out the brush teaxture was an idea that i struggled with a little manly software issues but i figured out how to go about.",
    image: "Images/Illustration/ADs/Crunch Food Banner.webp",
    placeholder: "#2b0d0d"
  },
  {
    name: "Shoe Shinner (Ad Design)",
    category: "Digital Art",
    date: "Feburary 3, 2025",
    timeTaken: "1 hours",
    notes: "this one was intersting becuse of how fucking stupid it is to find the right pictures for this and shoe that looks dirty or editing to look like one.",
    image: "Images/Illustration/ADs/ShoeShiner Ad.webp",
    placeholder: "#332c17"
  },
  {
    name: "Sole Glow (Ad Design)",
    category: "Digital Art",
    date: "Feburary 15, 2025",
    timeTaken: "2 hours",
    notes: "Let's get classy, why not try something a little old proffesional, looks awesome",
    image: "Images/Illustration/ADs/SoleGlowAD Proj.webp",
    placeholder: "#442f07"
  },
  {
    name: "Velvet Polish (Ad Design)",
    category: "Digital Art",
    date: "Feburary 16, 2025",
    timeTaken: "2 hours",
    notes: "I wanted to do something that represnted both geneders clothing, and i tried to not copy from my previous work by making it for a diffrent brand",
    image: "Images/Illustration/ADs/VelvetPolishAD (Red Obj).webp",
    placeholder: "#3b0606"
  },
];