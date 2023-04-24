import React, { useContext } from "react";
import { DataContext } from "../../utils/context/DataContext";
import { HeaderDonations } from "../../components/organisms/HeaderDonations/HeaderDonations";
import { Outlet } from "react-router-dom";
import "./Donaciones.scss";

export const Donaciones = () => {
  const { DONATIONS } = useContext(DataContext);
  const { header } = DONATIONS;

  return (
    <main>
      <HeaderDonations {...header} />
      <Outlet />
    </main>
  );
};
