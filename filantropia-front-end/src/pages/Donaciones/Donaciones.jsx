import React, { useContext } from "react";
import { DataContext } from "../../utils/context/DataContext";
import { motion } from "framer-motion";
import { HeaderDonations } from "../../components/organisms/HeaderDonations/HeaderDonations";
import "./Donaciones.scss";

export const Donaciones = () => {
  const {DONATIONS} = useContext(DataContext);
  const { header } = DONATIONS;
  console.log({ header });

  return (
    <motion.main
      className="donations"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeaderDonations {...header} />
    </motion.main>
  );
};
