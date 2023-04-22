import React, { useContext } from "react";
import { DataContext } from "../../utils/context/DataContext";
import { VideosCarousel } from "../../components/molecules/VideosCarousel/VideosCarousel";
import { motion } from "framer-motion";
import { MoreHomePage } from "../../components/organisms/MoreHomePage/MoreHomePage";
import { Causes } from "../../components/organisms/Causes/Causes";
import { Initiatives } from "../../components/organisms/Initiatives/Initiatives";
import { HowToDonate } from "../../components/organisms/HowToDonate/HowToDonate";
import { WhatIsFilantropia } from "../../components/organisms/WhatIsFilantropia/WhatIsFilantropia";
import "./Home.scss";

export const Home = () => {
  const { HOME_PAGE } = useContext(DataContext);
  const { carrousel, whatIsFilantropia, more, ourCauses, initiatives, howToDonate, donateHere } = HOME_PAGE;
  const { videos, button } = carrousel;

  return (
    <motion.main
      className="homePage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <main>
      <VideosCarousel videos={videos} button={button} />
      <WhatIsFilantropia whatIsFilantropia={whatIsFilantropia} />
      <Causes causes={ourCauses} />
      <Initiatives initiatives={initiatives} />
      <HowToDonate howToDonate={howToDonate} />
      <MoreHomePage {...more} />
    </main>
    </motion.main>
  );
};
