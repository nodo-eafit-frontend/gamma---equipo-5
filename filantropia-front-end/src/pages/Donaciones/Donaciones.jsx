import React, { useContext } from "react";
import { DataContext } from "../../utils/context/DataContext";
import { FooterDonaciones } from "../../components/organisms/FooterDonaciones/FooterDonaciones";
import { HeaderDonations } from "../../components/organisms/HeaderDonations/HeaderDonations";
import { Outlet } from "react-router-dom";
import "./Donaciones.scss";

export const Donaciones = () => {
  const {DONATIONS} = useContext(DataContext);
  const { header, footer} = DONATIONS;
  console.log({ header });

  return (
    <main className="donations">
      <HeaderDonations {...header} />
      <Outlet />
    </main>
  );
};
