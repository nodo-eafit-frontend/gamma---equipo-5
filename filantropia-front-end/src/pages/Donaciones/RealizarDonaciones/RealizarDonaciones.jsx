import React, { useContext } from "react";
import { FormDonations } from "../../../components/organisms/FormDonations/FormDonations";
import { DataContext } from "../../../utils/context/DataContext";
import "./RealizarDonaciones.scss";

export const RealizarDonaciones = () => {
  const { DONATIONS } = useContext(DataContext);
  const { bodyDonations } = DONATIONS;
  return <FormDonations {...bodyDonations} />;
};
